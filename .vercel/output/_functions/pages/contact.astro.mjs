import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_D8noONNE.mjs';
import 'piccolore';
import { $ as $$BaseLayout, s as site } from '../chunks/BaseLayout_B7jmqWQ4.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact Us | Keystone Terrain Co.", "description": "Get in touch with Keystone Terrain Co. for forestry mulching and land clearing in the Greater Pittsburgh area. Call, email, or request a quote online." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative w-full noise-overlay overflow-hidden"> <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,#1a2e1f_0%,#0B1411_60%)]"></div> <div class="relative z-10 container-main pt-16 pb-14 lg:pt-24 lg:pb-20 text-center"> <p class="text-olive2 text-xs font-heading font-semibold uppercase tracking-[0.18em] mb-3">
Contact
</p> <h1 class="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text leading-[1.08]">
GET IN TOUCH
</h1> <p class="mt-4 text-muted text-base max-w-xl mx-auto leading-relaxed">
Ready to clear your land? Reach out for a free estimate or use our interactive map tool.
</p> </div> <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div> </section>  <section class="w-full bg-surface py-16 lg:py-24"> <div class="container-main max-w-[900px]"> <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- Phone --> <div class="bg-surface2 border border-border rounded-lg p-6 text-center"> <div class="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4"> <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <h3 class="font-heading font-bold text-sm text-text uppercase tracking-wide">Call Us</h3> <a${addAttribute(`tel:${site.phone.replace(/\D/g, "")}`, "href")} class="mt-2 block text-accent font-semibold hover:text-accent2 transition-colors"> ${site.phone} </a> </div> <!-- Email --> <div class="bg-surface2 border border-border rounded-lg p-6 text-center"> <div class="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4"> <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <h3 class="font-heading font-bold text-sm text-text uppercase tracking-wide">Email</h3> <a${addAttribute(`mailto:${site.email}`, "href")} class="mt-2 block text-accent font-semibold hover:text-accent2 transition-colors text-sm"> ${site.email} </a> </div> <!-- Location --> <div class="bg-surface2 border border-border rounded-lg p-6 text-center sm:col-span-2 lg:col-span-1"> <div class="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4"> <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <h3 class="font-heading font-bold text-sm text-text uppercase tracking-wide">Location</h3> <p class="mt-2 text-muted text-sm"> ${site.location}<br> <span class="text-muted/60">${site.serviceArea}</span> </p> </div> </div> <!-- Quote CTA --> <div class="mt-14 pt-10 border-t border-border text-center"> <h2 class="text-2xl font-heading font-bold text-text">
WANT A FAST, ACCURATE QUOTE?
</h2> <p class="mt-3 text-muted text-sm max-w-lg mx-auto">
Use our satellite map tool to draw the area you need cleared and we'll get back to you with a detailed estimate — usually within 1–2 hours.
</p> <div class="mt-6"> <a href="/quote" class="btn btn-primary">
Map Your Property &amp; Get Quote
</a> </div> </div> </div> </section> ` })}`;
}, "/Users/matthewhill/Desktop/Keystone-Terrain/src/pages/contact.astro", void 0);

const $$file = "/Users/matthewhill/Desktop/Keystone-Terrain/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
