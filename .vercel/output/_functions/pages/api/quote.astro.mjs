export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const apiKey = undefined                              ;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set. Skipping email delivery.");
      return new Response(
        JSON.stringify({ ok: false, error: "Email service not configured. Please set RESEND_API_KEY." }),
        { status: 503, headers: { "Content-Type": "application/json" } }
      );
    }
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);
    const body = await request.json();
    const customerEmail = body.email;
    const customerName = body.name ?? "there";
    const price = body.price ?? 5e3;
    await resend.emails.send({
      from: "Keystone Terrain <onboarding@resend.dev>",
      to: ["hello@keystoneterrain.com"],
      subject: "New Quote Request (Map Submission)",
      text: `New submission:

${JSON.stringify(body, null, 2)}`
    });
    if (customerEmail) {
      await resend.emails.send({
        from: "Keystone Terrain <onboarding@resend.dev>",
        to: [customerEmail],
        subject: "Your Keystone Terrain Quote",
        text: `Hey ${customerName},

Thanks for sending your map request.
Estimated quote: $${price}

Reply to this email if you have photos or notes to add.

– Keystone Terrain Co.`
      });
    }
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error("Quote API error:", err);
    return new Response(
      JSON.stringify({ ok: false, error: err?.message ?? "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
