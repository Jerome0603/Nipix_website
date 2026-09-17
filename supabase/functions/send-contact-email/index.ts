import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "resend";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      throw new Error("Missing required fields");
    }

    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) throw new Error("Missing RESEND_API_KEY");

    const resend = new Resend(apiKey);

    // Send admin email
    await resend.emails.send({
      from: "Nipix Technology <admin@nipixtechnology.com>",
      to: ["nipixtechnology@gmail.com"],
      subject: `New Contact Form Submission - ${subject}`,
      html: `
      <!DOCTYPE html>
      <html>
      <head>
      <meta charset="UTF-8" />
      </head>
      <body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.08);overflow:hidden;">
                
                <!-- Header -->
                <tr>
                  <td style="background:#0A66C2;padding:20px 30px;color:#ffffff;">
                    <h2 style="margin:0;font-size:20px;">Nipix Technology</h2>
                    <p style="margin:5px 0 0 0;font-size:14px;opacity:0.9;">
                      New Contact Form Submission
                    </p>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding:30px;">
                    
                    <h3 style="margin-top:0;color:#333;">Contact Details</h3>

                    <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
                      <tr>
                        <td style="background:#f7f9fc;font-weight:bold;width:30%;">Name</td>
                        <td>${name}</td>
                      </tr>
                      <tr>
                        <td style="background:#f7f9fc;font-weight:bold;">Email</td>
                        <td>${email}</td>
                      </tr>
                      <tr>
                        <td style="background:#f7f9fc;font-weight:bold;">Phone</td>
                        <td>${phone || "Not provided"}</td>
                      </tr>
                      <tr>
                        <td style="background:#f7f9fc;font-weight:bold;">Subject</td>
                        <td>${subject}</td>
                      </tr>
                    </table>

                    <div style="margin-top:20px;">
                      <h4 style="margin-bottom:10px;color:#333;">Message</h4>
                      <div style="background:#f7f9fc;padding:15px;border-radius:8px;font-size:14px;line-height:1.6;color:#444;">
                        ${message}
                      </div>
                    </div>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background:#f4f6f9;padding:20px;text-align:center;font-size:12px;color:#777;">
                    © ${new Date().getFullYear()} Nipix Technology • Chennai, India
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
      `,
    });

    // Send confirmation email
    await resend.emails.send({
      from: "Nipix Technology <admin@nipixtechnology.com>",
      to: [email],
      subject: "We received your message - Nipix Technology",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
        <meta charset="UTF-8" />
        </head>
        <body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.08);overflow:hidden;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background:#0A66C2;padding:20px 30px;color:#ffffff;">
                      <h2 style="margin:0;">Thank You, ${name}!</h2>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:30px;font-size:14px;color:#444;line-height:1.6;">
                      <p>We have successfully received your message regarding:</p>
                      
                      <div style="background:#f7f9fc;padding:12px;border-radius:8px;margin:15px 0;">
                        <strong>${subject}</strong>
                      </div>

                      <p>
                        Our team will review your inquiry and respond within
                        <strong>24 hours</strong>.
                      </p>

                      <p>
                        If your request is urgent, feel free to contact us directly at:
                      </p>

                      <p style="margin:0;">
                        📧 support@nipixtechnology.com<br/>
                        📞 +91 9025608199
                      </p>

                      <p style="margin-top:25px;">
                        Best Regards,<br/>
                        <strong>Nipix Technology Team</strong>
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:#f4f6f9;padding:20px;text-align:center;font-size:12px;color:#777;">
                      © ${new Date().getFullYear()} Nipix Technology • Chennai, India
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
        `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
