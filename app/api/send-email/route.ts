import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

// Target inbox for all SBHC care queries
const SBHC_CARE_EMAIL = "care@swasthbharathealthcare.com";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { error: "Mail gateway is not configured." },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);
    const body = await req.json();
    const { source, name, phone, email, message, city, service } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    // Build email subject and HTML based on source
    let subject = "";
    let htmlContent = "";

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // OLD: const headerColor = "#0F243E";
    const headerColor = "#3f5a90";
    const accentColor = "#E77727";

    switch (source) {
      case "contact-form":
        subject = `🩺 New Contact Request from ${name}`;
        htmlContent = `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0;">
            <div style="background: ${headerColor}; padding: 28px 32px;">
              <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">📋 Contact Form Submission</h1>
              <p style="color: #94a3b8; margin: 6px 0 0; font-size: 13px;">Received via SBHC Website — Get Assistance Form</p>
            </div>
            <div style="padding: 28px 32px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; width: 140px;">Full Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px; font-weight: 500;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600;">Phone</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px; font-weight: 500;">
                    <a href="tel:${phone}" style="color: ${accentColor}; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                ${email ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600;">Email</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px; font-weight: 500;">
                    <a href="mailto:${email}" style="color: ${accentColor}; text-decoration: none;">${email}</a>
                  </td>
                </tr>` : ""}
                ${message ? `
                <tr>
                  <td style="padding: 12px 0; color: #64748b; font-size: 13px; font-weight: 600; vertical-align: top;">Message</td>
                  <td style="padding: 12px 0; color: #1e293b; font-size: 14px; line-height: 1.6;">${message}</td>
                </tr>` : ""}
              </table>
            </div>
            <div style="background: #f1f5f9; padding: 16px 32px; text-align: center;">
              <p style="margin: 0; font-size: 11px; color: #94a3b8;">Sent at ${timestamp} IST • SBHC Mail Gateway</p>
            </div>
          </div>
        `;
        break;

      case "assistance-modal":
        subject = `🚨 Urgent Callback Request — ${name} (${city})`;
        htmlContent = `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0;">
            <div style="background: ${headerColor}; padding: 28px 32px;">
              <div style="display: inline-block; background: #dc2626; color: white; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 6px; margin-bottom: 10px; letter-spacing: 0.5px;">⚡ URGENT CALLBACK</div>
              <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">SBHC Care Desk — Assistance Request</h1>
              <p style="color: #94a3b8; margin: 6px 0 0; font-size: 13px;">24x7 Care Desk Modal Submission</p>
            </div>
            <div style="padding: 28px 32px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; width: 160px;">Patient / Relative</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600;">Callback Number</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px; font-weight: 500;">
                    <a href="tel:${phone}" style="color: ${accentColor}; text-decoration: none; font-weight: 700;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600;">City / Location</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px; font-weight: 500;">${city || "Not specified"}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #64748b; font-size: 13px; font-weight: 600;">Service Needed</td>
                  <td style="padding: 12px 0; font-size: 14px;">
                    <span style="display: inline-block; background: #fff7ed; color: #c2410c; padding: 4px 12px; border-radius: 8px; font-size: 13px; font-weight: 600; border: 1px solid #fed7aa;">${service || "General Assistance"}</span>
                  </td>
                </tr>
              </table>
              <div style="margin-top: 20px; background: #fef3c7; border: 1px solid #fde68a; border-radius: 10px; padding: 14px 18px;">
                <p style="margin: 0; font-size: 13px; color: #92400e; font-weight: 600;">⏱ Response SLA: Callback within 5 minutes</p>
              </div>
            </div>
            <div style="background: #f1f5f9; padding: 16px 32px; text-align: center;">
              <p style="margin: 0; font-size: 11px; color: #94a3b8;">Sent at ${timestamp} IST • SBHC Mail Gateway</p>
            </div>
          </div>
        `;
        break;

      default:
        subject = `📩 New Query from ${name} — SBHC Website`;
        htmlContent = `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0;">
            <div style="background: ${headerColor}; padding: 28px 32px;">
              <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">📩 New Website Query</h1>
              <p style="color: #94a3b8; margin: 6px 0 0; font-size: 13px;">Source: ${source || "Unknown"}</p>
            </div>
            <div style="padding: 28px 32px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; width: 140px;">Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px; font-weight: 500;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600;">Phone</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">
                    <a href="tel:${phone}" style="color: ${accentColor}; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                ${email ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600;">Email</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">${email}</td>
                </tr>` : ""}
                ${city ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600;">City</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">${city}</td>
                </tr>` : ""}
                ${service ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600;">Service</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 14px;">${service}</td>
                </tr>` : ""}
                ${message ? `
                <tr>
                  <td style="padding: 12px 0; color: #64748b; font-size: 13px; font-weight: 600; vertical-align: top;">Message</td>
                  <td style="padding: 12px 0; color: #1e293b; font-size: 14px; line-height: 1.6;">${message}</td>
                </tr>` : ""}
              </table>
            </div>
            <div style="background: #f1f5f9; padding: 16px 32px; text-align: center;">
              <p style="margin: 0; font-size: 11px; color: #94a3b8;">Sent at ${timestamp} IST • SBHC Mail Gateway</p>
            </div>
          </div>
        `;
        break;
    }

    const { data, error } = await resend.emails.send({
      from: "SBHC Care Desk <onboarding@resend.dev>",
      to: [SBHC_CARE_EMAIL],
      subject,
      html: htmlContent,
      replyTo: email || undefined,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (err) {
    console.error("Mail gateway error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
