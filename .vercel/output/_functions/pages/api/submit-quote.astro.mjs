export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const address = formData.get("address");
    const acres = formData.get("acres");
    const slope = formData.get("slope");
    const polygon = formData.get("polygon");
    const preferredMonth = formData.get("preferred_month");
    const notes = formData.get("notes");
    const centerLat = formData.get("center_lat");
    const centerLng = formData.get("center_lng");
    const photos = formData.getAll("photos");
    const photoInfo = photos.filter((f) => f.size > 0).map((f) => ({
      name: f.name,
      size: `${(f.size / 1024).toFixed(0)}KB`,
      type: f.type
    }));
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
    return new Response(
      JSON.stringify({
        success: true,
        message: "Quote request received. We'll follow up within 1–2 hours."
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Quote submission error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
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
