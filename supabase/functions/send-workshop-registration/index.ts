import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, phone, organization, session, workshopTitle } =
      await req.json();

    if (!name || !email || !phone || !session || !workshopTitle) {
      throw new Error("Missing required fields");
    }

    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    // 🔵 ADMIN EMAIL
    await resend.emails.send({
      from: "Nipix Technology <admin@nipixtechnology.com>",
      to: ["nipixtechnology@gmail.com"],
      subject: `New Workshop Registration - ${workshopTitle}`,
      html: `
        <div style="font-family:Arial;background:#f4f6f9;padding:40px 0;">
          <table width="600" align="center" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background:#0A66C2;padding:20px 30px;color:#ffffff;">
                    <h2 style="margin:0;font-size:20px;">Nipix Technology</h2>
                    <p style="margin:5px 0 0 0;font-size:14px;opacity:0.9;">
                      New Workshop Registration
                    </p>
                  </td>
            </tr>
            <tr>
              <td style="padding:30px;">
                <h3>Registration Details</h3>
                <p><strong>Workshop:</strong> ${workshopTitle}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Organization:</strong> ${organization || "N/A"}</p>
                <p><strong>Session:</strong> ${session}</p>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    // 🟢 USER CONFIRMATION
    await resend.emails.send({
      from: "Nipix Technology <admin@nipixtechnology.com>",
      to: [email],
      subject: `You're Registered for ${workshopTitle} Workshop!`,
      html: `
        <div style="font-family:Arial;background:#f4f6f9;padding:40px 0;">
          <table width="600" align="center" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background:#0A66C2;padding:20px 30px;color:#ffffff;">
                      <h2 style="margin:0;">Thank You, ${name}!</h2>
                    </td>
            </tr>
            <tr>
              <td style="padding:30px;font-size:14px;">
                <p>You have successfully registered for:</p>
                <p style="font-weight:bold;font-size:16px;">${workshopTitle} Workshop </p>
                <p><strong>Selected Session:</strong> ${session}</p>
                <p>We will contact you shortly with further details.</p>
                <br/>
                <p>Regards,<br/><strong>Nipix Technology Team</strong></p>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
