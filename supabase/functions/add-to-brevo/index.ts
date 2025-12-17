import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface BrevoRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: BrevoRequest = await req.json();

    // Validate email presence
    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Get environment variables
    const brevoApiKey = Deno.env.get("BREVO_API_KEY");
    // Force list ID to 6 (early_adopt2 list)
    const brevoListId = 6;

    if (!brevoApiKey) {
      console.error("BREVO_API_KEY is not configured");
      return new Response(JSON.stringify({ error: "Service configuration error" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    console.log(`Adding contact to Brevo list #${brevoListId} (early adopter):`, email);

    // First, try to create/update the contact
    const createResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": brevoApiKey,
      },
      body: JSON.stringify({
        email: email,
        listIds: [brevoListId],
        updateEnabled: true, // Update if contact already exists
        attributes: {
          EARLY_ADOPTER: true,
          SIGNUP_DATE: new Date().toISOString(),
        },
      }),
    });

    // If contact already exists, add them to the list explicitly
    if (!createResponse.ok) {
      const errorData = await createResponse.json();
      console.error("Brevo API error:", errorData);

      // Handle duplicate contact - add to list #2 explicitly
      if (createResponse.status === 400 && errorData.code === "duplicate_parameter") {
        console.log(`Contact ${email} already exists, adding to list #${brevoListId}`);

        // Add existing contact to the early adopter list
        const addToListResponse = await fetch(`https://api.brevo.com/v3/contacts/lists/${brevoListId}/contacts/add`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "api-key": brevoApiKey,
          },
          body: JSON.stringify({
            emails: [email],
          }),
        });

        // Also update the contact attributes
        const updateResponse = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "api-key": brevoApiKey,
          },
          body: JSON.stringify({
            listIds: [brevoListId],
            attributes: {
              EARLY_ADOPTER: true,
              SIGNUP_DATE: new Date().toISOString(),
            },
          }),
        });

        if (addToListResponse.ok || updateResponse.ok) {
          return new Response(
            JSON.stringify({
              message: "You are already subscribed to our newsletter!",
            }),
            {
              status: 200,
              headers: { "Content-Type": "application/json", ...corsHeaders },
            },
          );
        }
      }

      return new Response(JSON.stringify({ error: "Failed to subscribe. Please try again." }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    return new Response(
      JSON.stringify({
        message: "Successfully subscribed to our waiting list!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      },
    );
  } catch (error: any) {
    console.error("Subscribe function error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
