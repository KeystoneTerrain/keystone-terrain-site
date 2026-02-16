import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    // TODO: replace these with your real calculated values
    const customerEmail = body.email;
    const customerName = body.name ?? "there";
    const price = body.price ?? 5000;

    // 1) Email YOU (internal notification)
    await resend.emails.send({
      from: "Keystone Terrain <onboarding@resend.dev>", // testing sender
      to: ["hello@keystoneterrain.com"],
      subject: "New Quote Request (Map Submission)",
      text: `New submission:\n\n${JSON.stringify(body, null, 2)}`,
    });

    // 2) Email CUSTOMER (customer-facing quote)
    if (customerEmail) {
      await resend.emails.send({
        from: "Keystone Terrain <onboarding@resend.dev>", // testing sender
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
    return new Response(JSON.stringify({ ok: false, error: err?.message ?? "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
