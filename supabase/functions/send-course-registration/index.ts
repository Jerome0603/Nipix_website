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
    const { name, email, phone, batch, courseTitle } =
      await req.json();

    if (!name || !email || !phone || !batch || !courseTitle) {
      throw new Error("Missing required fields");
    }

    const resend = new Resend(Deno.env.get("RESEND_API_KEY")!);

    // 🔵 Admin Email
    await resend.emails.send({
      from: "Nipix Technology <admin@nipixtechnology.com>",
      to: ["nipixtechnology@gmail.com"],
      subject: `New Course Registration - ${courseTitle}`,
      html: `
        <div style="font-family: Arial; max-width:600px; margin:auto; border:1px solid #eee; border-radius:12px; overflow:hidden;">
          
          <div style="background:#007DFF; padding:20px; text-align:center;">
            <h2 style="color:white; margin:0;">New Course Registration</h2>
          </div>

          <div style="padding:24px;">
            <h3>${courseTitle}</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Level:</strong> ${batch}</p>
          </div>
        </div>
      `,
    });

    // 🟢 User Confirmation
    await resend.emails.send({
      from: "Nipix Technology <admin@nipixtechnology.com>",
      to: [email],
      subject: `Registration Received - ${courseTitle}`,
      html: `
        <div style="font-family: Arial; max-width:600px; margin:auto; border:1px solid #eee; border-radius:12px; overflow:hidden;">
          
          <div style="background:#007DFF; padding:20px; text-align:center;">
            <h2 style="color:white; margin:0;">Registration Confirmed</h2>
          </div>

          <div style="padding:24px;">
            <p>Hi ${name},</p>
            <p>Thank you for registering for:</p>
            <h3>${courseTitle}</h3>

            <p><strong>Selected Level:</strong> ${batch}</p>

            <p>Our team will contact you shortly with further details.</p>

            <br/>
            <p>Regards,<br/>Nipix Technology Team</p>
          </div>
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
