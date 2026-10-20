import { NextResponse } from "next/server";
import { Resend } from "resend";

const escapeHtml = (value: unknown) =>
  String(value ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { botField, ndaRequired } = body;
    const name = escapeHtml(body.name);
    const email = escapeHtml(body.email);
    const company = escapeHtml(body.company);
    const serviceNeeded = escapeHtml(body.serviceNeeded);
    const budget = escapeHtml(body.budget);
    const message = escapeHtml(body.message);

    // Honeypot anti-spam check
    if (botField) {
      return NextResponse.json({ success: true, message: "Inquiry received." }, { status: 200 });
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please add your name, email and a short message." },
        { status: 400 }
      );
    }

    const leadId = body.leadId || ("ARC-" + Math.random().toString(36).substring(2, 8).toUpperCase());
    const timestamp = new Date().toUTCString();

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "contact@airacode.online";
      const teamAlertEmail = process.env.TEAM_ALERT_EMAIL || "nagarajendra432@gmail.com";
      const teamRecipients = [recipient];
      if (teamAlertEmail && !teamRecipients.includes(teamAlertEmail)) {
        teamRecipients.push(teamAlertEmail);
      }
      const fromEmail = process.env.CONTACT_FROM_EMAIL || "AIRACODE <contact@airacode.online>";
      const fallbackFrom = process.env.CONTACT_FALLBACK_FROM_EMAIL || "AIRACODE <onboarding@resend.dev>";

      const notificationHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #faf8f5; border-radius: 16px; border: 1px solid #ede9e0;">
          <div style="border-bottom: 2px solid #eb4a2d; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #1e2530; margin: 0; font-size: 22px;">New enquiry</h2>
            <p style="color: #6b7280; margin: 4px 0 0 0; font-size: 13px; font-family: monospace;">ID: ${leadId} | ${timestamp}</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 140px; font-weight: bold;">Name:</td>
              <td style="padding: 8px 0; color: #1e2530; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #eb4a2d; text-decoration: none; font-weight: 600;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Company:</td>
              <td style="padding: 8px 0; color: #1e2530;">${company || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Service Needed:</td>
              <td style="padding: 8px 0; color: #1e2530; font-weight: 600;">${serviceNeeded || "General Scoping"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Budget Range:</td>
              <td style="padding: 8px 0; color: #059669; font-weight: 600;">${budget || "Undisclosed"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">NDA requested:</td>
              <td style="padding: 8px 0; color: #1e2530;">${ndaRequired ? "Yes" : "No"}</td>
            </tr>
          </table>

          <div style="background: #ffffff; padding: 16px; border-radius: 12px; border: 1px solid #ede9e0; margin-bottom: 20px;">
            <h4 style="margin: 0 0 8px 0; color: #1e2530; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message:</h4>
            <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="font-size: 12px; color: #9ca3af; text-align: center; border-top: 1px solid #ede9e0; padding-top: 16px;">
            Sent from the airacode.online contact form
          </div>
        </div>
      `;

      const userConfirmationHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 28px; background: #faf8f5; border-radius: 16px; border: 1px solid #ede9e0; color: #1e2530;">
          <h2 style="margin: 0 0 4px 0; font-size: 22px; font-weight: 800;">AIRA<span style="color: #eb4a2d;">CODE</span></h2>
          <p style="margin: 0 0 24px 0; font-size: 13px; color: #6b7280;">AI products, websites &amp; automation</p>

          <p style="font-size: 15px; line-height: 1.6; margin: 0 0 12px 0;">Hi ${name.split(" ")[0] || "there"},</p>
          <p style="font-size: 15px; line-height: 1.6; margin: 0 0 20px 0; color: #374151;">
            Thanks for getting in touch. We've received your message about <strong>${serviceNeeded || "your project"}</strong>.
          </p>

          <div style="background: #ffffff; border: 1px solid #ede9e0; border-radius: 12px; padding: 16px 18px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0; font-size: 14px; font-weight: 700;">What happens next</p>
            <ol style="margin: 0; padding-left: 18px; font-size: 14px; line-height: 1.7; color: #374151;">
              <li>A developer reads your message within one business day.</li>
              <li>We reply with a few questions, or suggest a time for a free 30-minute call.</li>
              <li>You get a clear plan and a fixed price. No obligation.</li>
            </ol>
          </div>

          <div style="font-size: 13px; color: #6b7280; margin-bottom: 20px;">
            <p style="margin: 0 0 6px 0; font-weight: 600; color: #1e2530;">Your message</p>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.5;">${message}</p>
          </div>

          <p style="font-size: 14px; line-height: 1.6; margin: 0 0 20px 0; color: #374151;">
            Want to add files, links or screenshots? Just reply to this email.
          </p>
          <p style="font-size: 14px; margin: 0; color: #374151;">Talk soon,<br/>The AIRACODE team</p>

          <p style="margin: 24px 0 0 0; padding-top: 16px; border-top: 1px solid #ede9e0; font-size: 12px; color: #9ca3af; text-align: center;">
            <a href="mailto:contact@airacode.online" style="color: #eb4a2d; text-decoration: none;">contact@airacode.online</a> · <a href="https://airacode.online" style="color: #6b7280; text-decoration: none;">airacode.online</a>
          </p>
        </div>
      `;

      // 1. Dispatch team lead notification
      try {
        const teamRes = await resend.emails.send({
          from: fromEmail,
          to: teamRecipients,
          replyTo: email,
          subject: `New enquiry: ${body.serviceNeeded || "General"} (${body.name}${body.company ? `, ${body.company}` : ""})`,
          html: notificationHtml,
        });

        if (teamRes.error) {
          console.warn("Primary team sender error, attempting fallback:", teamRes.error);
          await resend.emails.send({
            from: fallbackFrom,
            to: teamRecipients,
            replyTo: email,
            subject: `New enquiry: ${body.serviceNeeded || "General"} (${body.name}${body.company ? `, ${body.company}` : ""})`,
            html: notificationHtml,
          });
        }
      } catch (sendErr) {
        console.error("Team notification delivery exception:", sendErr);
      }

      // 2. Dispatch automated confirmation receipt to the user's email
      try {
        const userRes = await resend.emails.send({
          from: fromEmail,
          to: email,
          replyTo: "contact@airacode.online",
          subject: "Thanks for contacting AIRACODE",
          html: userConfirmationHtml,
        });

        if (userRes.error) {
          console.warn("Primary user confirmation error, attempting fallback:", userRes.error);
          await resend.emails.send({
            from: fallbackFrom,
            to: email,
            replyTo: "contact@airacode.online",
            subject: "Thanks for contacting AIRACODE",
            html: userConfirmationHtml,
          });
        }
      } catch (userSendErr) {
        console.error("User confirmation delivery exception:", userSendErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thanks! We'll reply within one business day.",
        leadId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
