import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface WaitlistRequest {
  name: string;
  email: string;
  company?: string;
  position?: string;
  message?: string;
  captchaToken: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, position, message, captchaToken }: WaitlistRequest = await req.json();

    console.log("Processing waitlist submission for:", email);

    // Validate captcha token
    if (!captchaToken) {
      return new Response(
        JSON.stringify({ error: "Captcha token is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Build email content
    let emailContent = `
      <h2>Nouvelle inscription à la waitlist Fleuret</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
    `;

    if (company) {
      emailContent += `<p><strong>Entreprise :</strong> ${company}</p>`;
    }

    if (position) {
      emailContent += `<p><strong>Poste :</strong> ${position}</p>`;
    }

    if (message) {
      emailContent += `<p><strong>Message :</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`;
    }

    emailContent += `<hr><p style="color: #666; font-size: 12px;">Date: ${new Date().toLocaleString('fr-FR')}</p>`;

    // Send email using Resend API directly
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get("RESEND_API_KEY")}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: "Fleuret Waitlist <onboarding@resend.dev>",
        to: ["contact@fleuret-ai.com"],
        subject: `Nouvelle inscription waitlist - ${name}`,
        html: emailContent,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API error:", resendData);
      throw new Error(`Failed to send email: ${JSON.stringify(resendData)}`);
    }

    console.log("Email sent successfully:", resendData);

    return new Response(JSON.stringify({ success: true, id: resendData.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-waitlist-email function:", error);
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
