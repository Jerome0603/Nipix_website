import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const {
      name,
      email,
      phone,
      college,
      message,
      internshipTitle,
    } = await req.json();

    if (!name || !email || !phone || !internshipTitle) {
      throw new Error("Missing required fields");
    }

    const resend = new Resend(Deno.env.get("RESEND_API_KEY")!);

    // 🔹 Admin Email
    await resend.emails.send({
      from: "Nipix Technology <admin@nipixtechnology.com>",
      to: ["nipixtechnology@gmail.com"],
      subject: `New Internship Application - ${internshipTitle}`,
      html: `
        <div style="font-family: Arial; max-width:600px; margin:auto; border:1px solid #eee; border-radius:12px; overflow:hidden;">
          
          <div style="background:#007DFF; padding:20px; text-align:center;">
            <h2 style="color:white; margin:0;">New Internship Application</h2>
          </div>

          <div style="padding:24px;">
            <h3>${internshipTitle}</h3>
            <hr/>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>College:</strong> ${college || "-"}</p>
            <p><strong>Message:</strong><br/>${message || "-"}</p>
          </div>
        </div>
      `,
    });

    // 🔹 User Confirmation
    await resend.emails.send({
      from: "Nipix Technology <admin@nipixtechnology.com>",
      to: [email],
      subject: `Application Received - ${internshipTitle}`,
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
                <p style="font-weight:bold;font-size:16px;">${internshipTitle}</p>
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

  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
