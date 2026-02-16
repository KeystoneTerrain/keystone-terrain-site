import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend(undefined                              );
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const customerEmail = body.email;
    const customerName = body.name ?? "there";
    const price = body.price ?? 5e3;
    await resend.emails.send({
      from: "Keystone Terrain <onboarding@resend.dev>",
      // testing sender
      to: ["hello@keystoneterrain.com"],
      subject: "New Quote Request (Map Submission)",
      text: `New submission:

${JSON.stringify(body, null, 2)}`
    });
    if (customerEmail) {
      await resend.emails.send({
        from: "Keystone Terrain <onboarding@resend.dev>",
        // testing sender
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
    return new Response(JSON.stringify({ ok: false, error: err?.message ?? "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
