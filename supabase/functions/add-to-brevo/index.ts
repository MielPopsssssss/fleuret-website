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

    console.log("Adding contact to Brevo list #2:", email);

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": brevoApiKey,
      },
      body: JSON.stringify({
        email,
        updateEnabled: true,
        listIds: [2], // ✅ ajout à la liste Brevo #2
        attributes: {
          EARLY_ADOPTER: true,
          SIGNUP_DATE: new Date().toISOString(),
        },
      }),
    });

    console.log("Brevo response status:", response.status);

    // Success cases
    if (response.status === 201 || response.status === 204) {
      return new Response(
        JSON.stringify({
          success: true,
          message: "Contact added to list #2 successfully",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        },
      );
    }

    const responseText = await response.text();
    console.log("Brevo response body:", responseText);

    let errorData: any = {};
    try {
      errorData = responseText ? JSON.parse(responseText) : {};
    } catch {
      errorData = { message: responseText || "Unknown error" };
    }

    // Duplicate contact = OK
    if (errorData.code === "duplicate_parameter") {
      return new Response(
        JSON.stringify({
          success: true,
          message: "Contact already exists and is in list #2",
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        },
      );
    }

    throw new Error(errorData.message || "Failed to add contact to Brevo");
  } catch (error: any) {
    console.error("Error in add-to-brevo function:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
