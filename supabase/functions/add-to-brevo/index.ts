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
        return new Response(
          JSON.stringify({ error: "Email is required" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          },
        );
      }

      // Validate email format
      if (!EMAIL_REGEX.test(email)) {
        return new Response(
          JSON.stringify({ error: "Invalid email format" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          },
        );
      }

      // Get environment variables
      const brevoApiKey = Deno.env.get("BREVO_API_KEY");
      const brevoListId = Deno.env.get("BREVO_LIST_ID") || "2"; // Default to list #2

      if (!brevoApiKey) {
        console.error("BREVO_API_KEY is not configured");
        return new Response(
          JSON.stringify({ error: "Service configuration error" }),
          {
            status: 500,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          },
        );
      }

      console.log(⁠ Adding contact to Brevo list #${brevoListId}: ⁠, email);

      // Add contact to Brevo
      const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "api-key": brevoApiKey,
        },
        body: JSON.stringify({
          email: email,
          listIds: [parseInt(brevoListId)],
          updateEnabled: true, // Update if contact already exists
          attributes: {
            EARLY_ADOPTER: true,
            SIGNUP_DATE: new Date().toISOString(),
          },
        }),
      });

      if (!brevoResponse.ok) {
        const errorData = await brevoResponse.json();
        console.error("Brevo API error:", errorData);

        // Handle duplicate contact - this is actually a success case
        if (
          brevoResponse.status === 400 &&
          errorData.code === "duplicate_parameter"
        ) {
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

        return new Response(
          JSON.stringify({ error: "Failed to subscribe. Please try again." }),
          {
            status: 500,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          },
        );
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
      return new Response(
        JSON.stringify({ error: "Internal server error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        },
      );
    }
  };