/**
 * POST /api/submit-quote
 *
 * Receives the quote form data (multipart/form-data) from BrushQuoteMap.
 * Sends an internal notification email to hello@keystoneterrain.com
 * and a confirmation email to the customer (if email provided).
 *
 * REQUIRES: RESEND_API_KEY environment variable (set in Vercel dashboard).
 * Falls back to console-only logging when the key is missing (local dev).
 */
export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    // ── Extract text fields ──────────────────────────────────────────
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const address = formData.get("address") as string;
    const acres = formData.get("acres") as string;
    const slope = formData.get("slope") as string;
    const polygon = formData.get("polygon") as string;
    const preferredMonth = formData.get("preferred_month") as string;
    const notes = formData.get("notes") as string;
    const centerLat = formData.get("center_lat") as string;
    const centerLng = formData.get("center_lng") as string;

    // Lead capture / landing page fields
    const timing = formData.get("timing") as string;
    const budget = formData.get("budget") as string;
    const source = formData.get("source") as string;

    // Extract photos (names only — files can't be attached on Resend free tier)
    const photos = formData.getAll("photos") as File[];
    const photoInfo = photos
      .filter((f) => f.size > 0)
      .map((f) => ({
        name: f.name,
        size: `${(f.size / 1024).toFixed(0)}KB`,
        type: f.type,
      }));

    // ── Console log (always — serves as backup) ──────────────────────
    console.log("\n══════════════════════════════════════════════");
    console.log("  NEW QUOTE REQUEST RECEIVED");
    console.log("══════════════════════════════════════════════");
    console.log(`  Source:    ${source || "direct"}`);
    console.log(`  Name:      ${name}`);
    console.log(`  Phone:     ${phone}`);
    console.log(`  Email:     ${email || "(not provided)"}`);
    console.log(`  Address:   ${address}`);
    console.log(`  Timing:    ${timing || "(not specified)"}`);
    console.log(`  Budget:    ${budget || "(not specified)"}`);
    console.log(`  Acres:     ${acres || "(not mapped)"}`);
    console.log(`  Slope:     ${slope || "(not estimated)"}`);
    console.log(`  Month:     ${preferredMonth || "(no preference)"}`);
    console.log(`  Notes:     ${notes || "(none)"}`);
    console.log(`  Photos:    ${photoInfo.length} file(s)`);
    photoInfo.forEach((p) => console.log(`             - ${p.name} (${p.size})`));
    if (centerLat && centerLng) {
      console.log(`  Coords:    ${centerLat}, ${centerLng}`);
    }
    if (polygon) {
      try {
        const coords = JSON.parse(polygon);
        console.log(`  Polygon:   ${coords.length} vertices`);
      } catch {
        console.log(`  Polygon:   (raw data present)`);
      }
    }
    console.log("══════════════════════════════════════════════\n");

    // ── Send emails via Resend ───────────────────────────────────────
    const apiKey = import.meta.env.RESEND_API_KEY;

    if (apiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      // Google Maps link for quick property lookup
      const mapsLink =
        centerLat && centerLng
          ? `https://www.google.com/maps?q=${centerLat},${centerLng}`
          : null;

      // ── 1) Internal notification → hello@keystoneterrain.com ──
      const internalHtml = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a5632; border-bottom: 2px solid #1a5632; padding-bottom: 8px;">
            New Quote Request
          </h2>

          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr><td style="padding: 6px 12px; font-weight: 600; color: #555; width: 130px;">Name</td><td style="padding: 6px 12px;">${name || "—"}</td></tr>
            <tr style="background: #f8f8f8;"><td style="padding: 6px 12px; font-weight: 600; color: #555;">Phone</td><td style="padding: 6px 12px;"><a href="tel:${phone}">${phone || "—"}</a></td></tr>
            <tr><td style="padding: 6px 12px; font-weight: 600; color: #555;">Email</td><td style="padding: 6px 12px;">${email ? `<a href="mailto:${email}">${email}</a>` : "—"}</td></tr>
            <tr style="background: #f8f8f8;"><td style="padding: 6px 12px; font-weight: 600; color: #555;">Address</td><td style="padding: 6px 12px;">${address || "—"}</td></tr>
            <tr><td style="padding: 6px 12px; font-weight: 600; color: #555;">Source</td><td style="padding: 6px 12px;">${source || "direct"}</td></tr>
          </table>

          <h3 style="color: #1a5632; margin-top: 20px;">Lead Details</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr><td style="padding: 6px 12px; font-weight: 600; color: #555; width: 130px;">Timing</td><td style="padding: 6px 12px;">${timing || "Not specified"}</td></tr>
            <tr style="background: #f8f8f8;"><td style="padding: 6px 12px; font-weight: 600; color: #555;">Budget</td><td style="padding: 6px 12px;">${budget || "Not specified"}</td></tr>
          </table>

          <h3 style="color: #1a5632; margin-top: 20px;">Property & Map Data</h3>
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr><td style="padding: 6px 12px; font-weight: 600; color: #555; width: 130px;">Acres</td><td style="padding: 6px 12px;">${acres || "Not mapped"}</td></tr>
            <tr style="background: #f8f8f8;"><td style="padding: 6px 12px; font-weight: 600; color: #555;">Slope</td><td style="padding: 6px 12px;">${slope || "Not estimated"}</td></tr>
            <tr><td style="padding: 6px 12px; font-weight: 600; color: #555;">Preferred Month</td><td style="padding: 6px 12px;">${preferredMonth || "No preference"}</td></tr>
            ${mapsLink ? `<tr style="background: #f8f8f8;"><td style="padding: 6px 12px; font-weight: 600; color: #555;">Location</td><td style="padding: 6px 12px;"><a href="${mapsLink}">View on Google Maps</a></td></tr>` : ""}
          </table>

          ${notes ? `<h3 style="color: #1a5632; margin-top: 20px;">Notes</h3><p style="background: #f8f8f8; padding: 12px; border-radius: 6px; font-size: 15px;">${notes}</p>` : ""}

          ${photoInfo.length > 0 ? `
            <h3 style="color: #1a5632; margin-top: 20px;">Photos (${photoInfo.length})</h3>
            <ul style="font-size: 14px; color: #555;">
              ${photoInfo.map((p) => `<li>${p.name} (${p.size})</li>`).join("")}
            </ul>
            <p style="font-size: 13px; color: #888;">Photo files were uploaded with the form. Check server logs for details.</p>
          ` : ""}

          ${polygon ? `
            <details style="margin-top: 16px; font-size: 13px; color: #888;">
              <summary>Polygon data (${(() => { try { return JSON.parse(polygon).length; } catch { return "?"; } })()} vertices)</summary>
              <pre style="background: #f4f4f4; padding: 8px; border-radius: 4px; overflow-x: auto; font-size: 12px;">${polygon}</pre>
            </details>
          ` : ""}
        </div>
      `;

      const subjectParts = [acres ? `${acres} acres` : null, name, address].filter(Boolean);
      const internalSubject = `New Quote: ${subjectParts.join(" — ") || "Map Submission"}`;

      await resend.emails.send({
        from: "Keystone Terrain <onboarding@resend.dev>",
        to: ["hello@keystoneterrain.com"],
        subject: internalSubject,
        html: internalHtml,
      });

      // ── 2) Customer confirmation → customer's email ──
      if (email) {
        const customerName = name?.split(" ")[0] || "there";
        const customerHtml = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; color: #333;">
            <h2 style="color: #1a5632;">Thanks for your quote request, ${customerName}!</h2>
            <p>We've received your information and will follow up within <strong>1–2 hours</strong> during business hours.</p>
            ${acres ? `<p>You mapped approximately <strong>${acres} acres</strong>${address ? ` near <strong>${address}</strong>` : ""}. We'll review your property details and put together a clear estimate.</p>` : ""}
            <p>If you have any questions in the meantime, feel free to call or text us:</p>
            <p style="font-size: 18px; font-weight: 600; color: #1a5632;">
              <a href="tel:+17249729286" style="color: #1a5632; text-decoration: none;">📞 (724) 972-9286</a>
            </p>
            <p style="margin-top: 24px; font-size: 14px; color: #888;">
              – Keystone Terrain Co.
            </p>
          </div>
        `;

        await resend.emails.send({
          from: "Keystone Terrain <onboarding@resend.dev>",
          to: [email],
          subject: "We received your quote request — Keystone Terrain",
          html: customerHtml,
        });
      }

      console.log("✅ Resend emails sent successfully");
    } else {
      console.log("⚠️  RESEND_API_KEY not set — emails skipped (console log only)");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Quote request received. We'll follow up within 1–2 hours.",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Quote submission error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
