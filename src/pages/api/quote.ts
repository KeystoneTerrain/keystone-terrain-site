/**
 * POST /api/quote
 *
 * Alternative quote endpoint using Resend for email delivery.
 * REQUIRES: RESEND_API_KEY environment variable set in Vercel dashboard.
 *
 * NOTE: The main quote form (BrushQuoteMap) submits to /api/submit-quote instead.
 * This endpoint is available for future use (e.g., JSON-based quote submissions).
 */
export const prerender = false;

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    // Lazy-load Resend only when the endpoint is actually called
    const apiKey = import.meta.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set. Skipping email delivery.");
      return new Response(
        JSON.stringify({ ok: false, error: "Email service not configured. Please set RESEND_API_KEY." }),
        { status: 503, headers: { "Content-Type": "application/json" } }
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const body = await request.json();

    const customerEmail = body.email;
    const customerName = body.name ?? "there";
    const price = body.price ?? 5000;

    // 1) Email YOU (internal notification)
    await resend.emails.send({
      from: "Keystone Terrain <onboarding@resend.dev>",
      to: ["hello@keystoneterrain.com"],
      subject: "New Quote Request (Map Submission)",
      text: `New submission:\n\n${JSON.stringify(body, null, 2)}`,
    });

    // 2) Email CUSTOMER (customer-facing quote)
    if (customerEmail) {
      await resend.emails.send({
        from: "Keystone Terrain <onboarding@resend.dev>",
        to: [customerEmail],
        subject: "Your Keystone Terrain Quote",
        text: `Hey ${customerName},\n\nThanks for sending your map request.\nEstimated quote: $${price}\n\nReply to this email if you have photos or notes to add.\n\n– Keystone Terrain Co.`,
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("Quote API error:", err);
    return new Response(
      JSON.stringify({ ok: false, error: err?.message ?? "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
