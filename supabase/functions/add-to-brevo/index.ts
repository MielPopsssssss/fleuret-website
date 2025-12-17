import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

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
    const brevoApiKey = Deno.env.get("BREVO_API_KEY");

    if (!brevoApiKey) {
      console.error("BREVO_API_KEY not configured");
      throw new Error("Brevo API key not configured");
    }

    if (!email) {
      throw new Error("Email is required");
    }

    console.log("Adding contact to Brevo:", email);

    // Add contact to Brevo
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "api-key": brevoApiKey,
      },
      body: JSON.stringify({
        email: email,
        updateEnabled: true,
        attributes: {
          EARLY_ADOPTER: true,
          SIGNUP_DATE: new Date().toISOString(),
        },
      }),
    });

    const responseData = await response.json();
    console.log("Brevo response:", responseData);

    if (!response.ok && response.status !== 204) {
      // 204 means contact already exists but was updated
      if (responseData.code === "duplicate_parameter") {
        console.log("Contact already exists, that's fine");
      } else {
        throw new Error(responseData.message || "Failed to add contact to Brevo");
      }
    }

    return new Response(
      JSON.stringify({ success: true, message: "Contact added successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in add-to-brevo function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
