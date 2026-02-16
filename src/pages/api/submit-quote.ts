/**
 * POST /api/submit-quote
 *
 * Receives the quote form data (multipart/form-data) from BrushQuoteMap.
 * Currently: logs to server console + returns success.
 *
 * PRODUCTION OPTIONS:
 *   1. Replace this with Formspree — just change the fetch URL in BrushQuoteMap.astro
 *   2. Add email sending via Resend, SendGrid, or Nodemailer
 *   3. Save to a database (Supabase, Turso, etc.)
 *   4. Forward to a Google Sheet via Apps Script webhook
 */
export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    // Extract text fields
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

    // Extract photos
    const photos = formData.getAll("photos") as File[];
    const photoInfo = photos
      .filter((f) => f.size > 0)
      .map((f) => ({
        name: f.name,
        size: `${(f.size / 1024).toFixed(0)}KB`,
        type: f.type,
      }));

    // ── Log to console (replace with email/DB in production) ──
    console.log("\n══════════════════════════════════════════════");
    console.log("  NEW QUOTE REQUEST RECEIVED");
    console.log("══════════════════════════════════════════════");
    console.log(`  Name:      ${name}`);
    console.log(`  Phone:     ${phone}`);
    console.log(`  Email:     ${email || "(not provided)"}`);
    console.log(`  Address:   ${address}`);
    console.log(`  Acres:     ${acres}`);
    console.log(`  Slope:     ${slope || "(not estimated)"}`);
    console.log(`  Month:     ${preferredMonth || "(no preference)"}`);
    console.log(`  Notes:     ${notes || "(none)"}`);
    console.log(`  Photos:    ${photoInfo.length} file(s)`);
    photoInfo.forEach((p) => console.log(`             - ${p.name} (${p.size})`));
    console.log(`  Coords:    ${centerLat}, ${centerLng}`);
    if (polygon) {
      try {
        const coords = JSON.parse(polygon);
        console.log(`  Polygon:   ${coords.length} vertices`);
      } catch {
        console.log(`  Polygon:   (raw data present)`);
      }
    }
    console.log("══════════════════════════════════════════════\n");

    // ── TODO: Add your email sending logic here ──
    // Example with Resend:
    //   import { Resend } from 'resend';
    //   const resend = new Resend(import.meta.env.RESEND_API_KEY);
    //   await resend.emails.send({
    //     from: 'quotes@keystoneterrain.com',
    //     to: 'hello@keystoneterrain.com',
    //     subject: `New Quote: ${acres} acres — ${name} — ${address}`,
    //     html: `...build your email HTML...`,
    //   });

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
