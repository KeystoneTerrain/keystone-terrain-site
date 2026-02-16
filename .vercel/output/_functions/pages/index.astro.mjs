import { e as createComponent, m as maybeRenderHead, r as renderTemplate, g as addAttribute, n as renderSlot, h as createAstro, k as renderComponent, l as renderScript } from '../chunks/astro/server_aRS6HrLF.mjs';
import 'piccolore';
import { s as site, a as services, t as testimonials, $ as $$BaseLayout } from '../chunks/BaseLayout_DkXTp_hn.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full noise-overlay overflow-hidden"> <!-- Radial gradient background --> <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#1a2e1f_0%,#0B1411_70%)]"></div> <!-- Subtle secondary glow --> <div class="absolute inset-0 bg-[radial-gradient(circle_600px_at_80%_80%,rgba(92,107,58,0.08)_0%,transparent_70%)]"></div> <div class="relative z-10 container-main pt-20 pb-24 lg:pt-32 lg:pb-36 text-center"> <!-- Headline --> <h1 class="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-text leading-[1.06] tracking-tight max-w-4xl mx-auto">
RECLAIM YOUR LAND WITH PROFESSIONAL FORESTRY MULCHING
</h1> <!-- Subheadline --> <p class="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
We turn overgrown lots, tangled hillsides, and dense brush into cleared, usable property — often in a single day.
      Serving the Greater Pittsburgh Area with professional-grade forestry mulching and land clearing.
</p> <!-- Credentials Row --> <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"> ${[
    { icon: "\u2605", label: "5-Star Rated" },
    { icon: "\u2713", label: "Licensed & Fully Insured" },
    { icon: "\u2302", label: "Locally Owned in North Huntingdon, PA" }
  ].map((item) => renderTemplate`<div class="flex items-center gap-2"> <span class="w-7 h-7 rounded-full bg-olive/20 text-olive2 flex items-center justify-center text-xs font-bold"> ${item.icon} </span> <span class="text-muted text-sm font-medium">${item.label}</span> </div>`)} </div> <!-- CTA Row --> <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"> <a href="/quote" class="btn btn-primary">
Map Your Property &amp; Get Quote&ensp;→
</a> <a${addAttribute(`tel:${site.phone.replace(/\D/g, "")}`, "href")} class="text-accent text-sm font-semibold hover:text-accent2 transition-colors duration-200"> ${site.phone} </a> </div> </div> <!-- Bottom fade line --> <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div> </section>`;
}, "/Users/matthewhill/Desktop/Keystone-Terrain/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const {
    id,
    bg = "",
    class: className = "",
    narrow = false,
    noise = false,
    padding = "py-20 lg:py-28"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute([
    "relative w-full",
    bg,
    padding,
    noise && "noise-overlay",
    className
  ], "class:list")}> <div${addAttribute(["container-main", narrow && "max-w-[900px]"], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/matthewhill/Desktop/Keystone-Terrain/src/components/Section.astro", void 0);

const $$ServicesGrid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "services", "bg": "bg-surface", "noise": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="text-center mb-14"> <p class="text-olive2 text-xs font-heading font-semibold uppercase tracking-[0.18em] mb-3">
Our Services
</p> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text">
WHAT WE DO
</h2> <p class="mt-4 text-muted text-base max-w-xl mx-auto leading-relaxed">
Professional land clearing solutions for every terrain and every challenge in Western Pennsylvania.
</p> </div>  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"> ${services.map((service) => renderTemplate`<a href="/quote" class="group block rounded-lg overflow-hidden bg-surface2 border border-border transition-all duration-[250ms] ease-out hover:-translate-y-1.5 hover:border-border-hover hover:shadow-[0_12px_40px_rgba(0,0,0,0.35),0_0_0_1px_rgba(200,163,105,0.15)]"> <!-- Image --> <div class="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-surface2 via-[#1a3028] to-surface"> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")} class="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500" loading="lazy" onerror="this.style.display='none'"> </div> <!-- Content --> <div class="p-5 lg:p-6"> <h3 class="font-heading font-bold text-base lg:text-lg text-text uppercase tracking-wide group-hover:text-accent transition-colors duration-200"> ${service.title} </h3> <p class="mt-2 text-muted text-sm leading-relaxed"> ${service.description} </p> </div> </a>`)} </div> ` })}`;
}, "/Users/matthewhill/Desktop/Keystone-Terrain/src/components/ServicesGrid.astro", void 0);

const $$VideoPrompt = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "bg": "bg-bg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center max-w-3xl mx-auto"> <!-- Heading --> <p class="text-olive2 text-xs font-heading font-semibold uppercase tracking-[0.18em] mb-3">
See It In Action
</p> <h2 class="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-bold text-text leading-[1.08]">
REAL TRANSFORMATIONS.<br class="hidden sm:block"> REAL PROPERTIES.
</h2> <p class="mt-5 text-muted text-base leading-relaxed">
Watch real forestry mulching projects from start to finish.
      See how we turn overgrown land into cleared, walkable property in a single day.
</p> </div>  <div class="mt-12 max-w-4xl mx-auto"> <a href="https://youtube.com/@keystoneterrain" target="_blank" rel="noopener noreferrer" class="group block relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-surface2 via-[#14291f] to-surface border border-border hover:border-border-hover transition-all duration-300"> <!-- Preview image with fallback --> <img src="/video-preview.jpg" alt="Forestry mulching project footage" class="w-full h-full object-cover opacity-80 group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-500" loading="lazy" onerror="this.style.display='none'"> <!-- Play button overlay --> <div class="absolute inset-0 flex items-center justify-center"> <div class="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300 shadow-[0_4px_30px_rgba(200,163,105,0.3)]"> <svg class="w-8 h-8 text-bg ml-1" fill="currentColor" viewBox="0 0 24 24"> <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z"></path> </svg> </div> </div> <!-- Bottom caption --> <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg/80 to-transparent p-5"> <p class="text-text text-sm font-medium">Watch Our Latest Project Walkthrough</p> <p class="text-muted text-xs mt-0.5">Opens on YouTube →</p> </div> </a> </div> ` })}`;
}, "/Users/matthewhill/Desktop/Keystone-Terrain/src/components/VideoPrompt.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "bg": "bg-surface", "narrow": true, "noise": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center mb-12"> <p class="text-olive2 text-xs font-heading font-semibold uppercase tracking-[0.18em] mb-3">
What Our Clients Say
</p> <h2 class="text-3xl sm:text-4xl font-heading font-bold text-text">
DON'T TAKE OUR WORD FOR IT
</h2> </div> <div class="space-y-8"> ${testimonials.map((t) => renderTemplate`<div class="bg-surface2 border border-border rounded-lg p-6 lg:p-8"> <!-- Stars --> <div class="flex gap-1 mb-4"> ${Array.from({ length: 5 }).map(() => renderTemplate`<svg class="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg>`)} </div> <!-- Quote --> <blockquote class="text-text text-base lg:text-[17px] leading-relaxed">
&ldquo;${t.quote}&rdquo;
</blockquote> <!-- Name --> <p class="mt-4 text-muted text-sm font-medium">
— ${t.name} </p> </div>`)} </div> ` })}`;
}, "/Users/matthewhill/Desktop/Keystone-Terrain/src/components/Testimonials.astro", void 0);

const $$SecondaryCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full bg-gradient-to-b from-bg via-surface to-bg py-20 lg:py-24"> <!-- Accent line top --> <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div> <div class="container-main text-center"> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text leading-[1.08]">
READY TO TAKE BACK YOUR LAND?
</h2> <p class="mt-5 text-muted text-base max-w-xl mx-auto leading-relaxed">
Free on-site estimates. Most residential projects completed in a single day.
      Let us show you what your property can look like.
</p> <div class="mt-8"> <a href="/quote" class="btn btn-primary text-base">
Map Your Property &amp; Get Quote
</a> </div> </div> <!-- Accent line bottom --> <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div> </section>`;
}, "/Users/matthewhill/Desktop/Keystone-Terrain/src/components/SecondaryCTA.astro", void 0);

const $$QuoteForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "quote", "bg": "bg-surface", "noise": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"> <!-- Left: Intro Copy --> <div> <p class="text-olive2 text-xs font-heading font-semibold uppercase tracking-[0.18em] mb-3">
Free Estimate
</p> <h2 class="text-3xl sm:text-4xl font-heading font-bold text-text leading-[1.08]">
GET YOUR FREE QUOTE
</h2> <p class="mt-5 text-muted text-base leading-relaxed">
Tell us about your property and we'll provide a fast, accurate estimate.
        Most quotes delivered within 24–48 hours.
</p> <ul class="mt-8 space-y-4"> ${[
    "Fast, accurate quotes based on your property details",
    "We assess brush density, slope, and access",
    "Serving Greater Pittsburgh & surrounding areas",
    "Most projects scheduled within 1\u20132 weeks"
  ].map((item) => renderTemplate`<li class="flex items-start gap-3"> <svg class="w-5 h-5 text-olive2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path d="M5 13l4 4L19 7"></path> </svg> <span class="text-muted text-sm leading-relaxed">${item}</span> </li>`)} </ul> <!-- Contact info --> <div class="mt-10 pt-8 border-t border-border space-y-3"> <a${addAttribute(`tel:${site.phone.replace(/\D/g, "")}`, "href")} class="flex items-center gap-2 text-accent text-sm font-semibold hover:text-accent2 transition-colors duration-200"> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> ${site.phone} </a> <a${addAttribute(`mailto:${site.email}`, "href")} class="flex items-center gap-2 text-muted text-sm hover:text-accent transition-colors duration-200"> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> ${site.email} </a> </div> </div> <!-- Right: Form --> <div> <form id="quote-form" class="space-y-5" novalidate> <div> <label for="q-name" class="block text-sm font-medium text-text mb-1.5">
Name
</label> <input type="text" id="q-name" name="name" required placeholder="Your name" class="w-full bg-bg border border-border rounded px-4 py-3 text-text text-sm placeholder-muted/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors duration-200"> <p class="form-error hidden mt-1 text-red-400 text-xs">Please enter your name.</p> </div> <div> <label for="q-phone" class="block text-sm font-medium text-text mb-1.5">
Phone
</label> <input type="tel" id="q-phone" name="phone" required placeholder="(XXX) XXX-XXXX" class="w-full bg-bg border border-border rounded px-4 py-3 text-text text-sm placeholder-muted/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors duration-200"> <p class="form-error hidden mt-1 text-red-400 text-xs">Please enter a valid phone number.</p> </div> <div> <label for="q-email" class="block text-sm font-medium text-text mb-1.5">
Email
</label> <input type="email" id="q-email" name="email" required placeholder="you@email.com" class="w-full bg-bg border border-border rounded px-4 py-3 text-text text-sm placeholder-muted/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors duration-200"> <p class="form-error hidden mt-1 text-red-400 text-xs">Please enter a valid email address.</p> </div> <div> <label for="q-message" class="block text-sm font-medium text-text mb-1.5">
Property Details / Message
</label> <textarea id="q-message" name="message" rows="5" required placeholder="Tell us about your property — location, acreage, type of vegetation, terrain, and what you'd like to accomplish." class="w-full bg-bg border border-border rounded px-4 py-3 text-text text-sm placeholder-muted/40 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors duration-200 resize-y"></textarea> <p class="form-error hidden mt-1 text-red-400 text-xs">Please describe your project.</p> </div> <button type="submit" class="btn btn-primary w-full sm:w-auto">
Get Free Quote
</button> </form> <!-- Success Message (hidden by default) --> <div id="form-success" class="hidden mt-6 bg-olive/15 border border-olive/30 rounded-lg p-5 text-center"> <p class="text-olive2 font-semibold text-base">Thanks — we'll reach out shortly.</p> <p class="text-muted text-sm mt-1">Expect a call or email within 24–48 hours.</p> </div> </div> </div> ` })} ${renderScript($$result, "/Users/matthewhill/Desktop/Keystone-Terrain/src/components/QuoteForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/matthewhill/Desktop/Keystone-Terrain/src/components/QuoteForm.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "ServicesGrid", $$ServicesGrid, {})} ${renderComponent($$result2, "VideoPrompt", $$VideoPrompt, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "SecondaryCTA", $$SecondaryCTA, {})} ${renderComponent($$result2, "QuoteForm", $$QuoteForm, {})} ` })}`;
}, "/Users/matthewhill/Desktop/Keystone-Terrain/src/pages/index.astro", void 0);

const $$file = "/Users/matthewhill/Desktop/Keystone-Terrain/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
