import { e as createComponent, m as maybeRenderHead, g as addAttribute, r as renderTemplate, l as renderScript, k as renderComponent, n as renderSlot, o as renderHead, u as unescapeHTML, h as createAstro } from './astro/server_D8noONNE.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';

const site = {
  name: "Keystone Terrain Co.",
  phone: "(724) 972-9286",
  email: "hello@keystoneterrain.com",
  location: "North Huntingdon, PA",
  serviceArea: "Serving the Greater Pittsburgh Area"
};
const services = [
  {
    title: "Forestry Mulching",
    image: "/services/forestry-mulching.jpg",
    description: "Transform overgrown timber and brush into clean, cleared land in a single pass — no burning, no hauling, no mess."
  },
  {
    title: "Hillside Mulching",
    image: "/services/hillside-mulching.jpg",
    description: "Remote-controlled equipment built for steep slopes other companies turn down. We clear grades up to 60°+."
  },
  {
    title: "Brush Hogging",
    image: "/services/brush-hogging.jpg",
    description: "Tall grass, thick weeds, and dense undergrowth leveled to a clean, uniform finish — fast and affordable."
  },
  {
    title: "Fence Line Clearing",
    image: "/services/fence-line.jpg",
    description: "Restore full visibility and access along overgrown fence rows without damaging existing posts or wire."
  },
  {
    title: "Trail Cutting",
    image: "/services/trail-cutting.jpg",
    description: "Custom ATV trails, walking paths, and access roads cut through dense woodland with clean, finished edges."
  },
  {
    title: "Invasive Species Removal",
    image: "/services/invasive-removal.jpg",
    description: "Mechanical removal of multiflora rose, autumn olive, knotweed, and other aggressive invaders choking your property."
  }
];
const testimonials = [
  {
    quote: "They cleared three acres in under six hours. No burn pile, no stump grinding — just clean, usable land. Couldn't believe the turnaround.",
    name: "Mike R., Murrysville"
  },
  {
    quote: "Our hillside was a tangled mess for years. They brought in the remote-controlled machine and handled every inch. Looks incredible now.",
    name: "Sarah L., Canonsburg"
  },
  {
    quote: "Professional from start to finish. Showed up on time, worked efficiently, and left the property looking better than we imagined. Highly recommend.",
    name: "Dave P., Butler"
  },
  {
    quote: "I called four companies about our fence line. Three said no. Keystone cleared both sides in an afternoon without touching a single post.",
    name: "Tom W., Greensburg"
  }
];
const socialLinks = {
  youtube: "https://youtube.com/@keystoneterrain",
  facebook: "https://facebook.com/keystoneterrain",
  x: "https://x.com/keystoneterrain"
};

const $$SiteHeader = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { label: "Services", href: "/#services" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header id="site-header" class="sticky top-0 z-50 w-full bg-bg/95 backdrop-blur-md border-b border-border transition-shadow duration-300"> <div class="container-main flex items-center justify-between h-16 lg:h-[72px]"> <!-- Logo --> <a href="/" class="flex-shrink-0"> <img src="/keystone-logo.png"${addAttribute(site.name, "alt")} class="h-10 lg:h-12 w-auto"> </a> <!-- Desktop Nav --> <nav class="hidden lg:flex items-center gap-8"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-muted text-sm font-heading font-semibold uppercase tracking-[0.06em] hover:text-accent transition-colors duration-200"> ${link.label} </a>`)} </nav> <!-- Desktop Right --> <div class="hidden lg:flex items-center gap-5"> <a${addAttribute(`tel:${site.phone.replace(/\D/g, "")}`, "href")} class="text-muted text-sm font-medium hover:text-accent transition-colors duration-200"> ${site.phone} </a> <a href="/quote" class="btn btn-primary !py-2.5 !px-5 !text-sm">
Get Quote
</a> </div> <!-- Mobile: phone + hamburger --> <div class="flex lg:hidden items-center gap-3"> <a${addAttribute(`tel:${site.phone.replace(/\D/g, "")}`, "href")} class="text-accent text-sm font-semibold" aria-label="Call us"> ${site.phone} </a> <button id="mobile-menu-toggle" type="button" class="relative w-10 h-10 flex items-center justify-center text-text" aria-label="Open menu" aria-expanded="false"> <!-- Hamburger icon --> <svg id="icon-open" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> </svg> <!-- Close icon (hidden by default) --> <svg id="icon-close" class="w-6 h-6 hidden" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> <!-- Mobile Menu Panel --> <div id="mobile-menu" class="lg:hidden hidden border-t border-border bg-surface"> <nav class="container-main py-5 flex flex-col gap-1"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="mobile-nav-link block py-3 px-3 text-muted text-base font-heading font-semibold uppercase tracking-[0.04em] rounded hover:bg-surface2 hover:text-accent transition-colors duration-200"> ${link.label} </a>`)} <div class="mt-3 pt-3 border-t border-border"> <a href="/quote" class="btn btn-primary w-full !text-sm">
Map Your Property &amp; Get Quote
</a> </div> </nav> </div> </header> ${renderScript($$result, "/Users/matthewhill/Desktop/Keystone-Terrain/src/components/SiteHeader.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/matthewhill/Desktop/Keystone-Terrain/src/components/SiteHeader.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-surface2 border-t border-border"> <div class="container-main py-12 lg:py-14 text-center"> <!-- Company Name --> <p class="font-heading font-bold text-xl text-text uppercase tracking-wide"> ${site.name} </p> <!-- Contact Row --> <div class="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm"> <a${addAttribute(`tel:${site.phone.replace(/\D/g, "")}`, "href")} class="text-accent font-semibold hover:text-accent2 transition-colors duration-200"> ${site.phone} </a> <span class="hidden sm:inline text-border">|</span> <a${addAttribute(`mailto:${site.email}`, "href")} class="text-muted hover:text-accent transition-colors duration-200"> ${site.email} </a> </div> <!-- Service Area --> <p class="mt-3 text-muted/60 text-sm"> ${site.serviceArea} </p> <!-- Social Icons --> <div class="mt-6 flex items-center justify-center gap-5"> <!-- YouTube --> <a${addAttribute(socialLinks.youtube, "href")} target="_blank" rel="noopener noreferrer" aria-label="YouTube" class="text-muted/50 hover:text-accent transition-colors duration-200"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path> </svg> </a> <!-- Facebook --> <a${addAttribute(socialLinks.facebook, "href")} target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="text-muted/50 hover:text-accent transition-colors duration-200"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path> </svg> </a> <!-- X (Twitter) --> <a${addAttribute(socialLinks.x, "href")} target="_blank" rel="noopener noreferrer" aria-label="X" class="text-muted/50 hover:text-accent transition-colors duration-200"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM17.61 20.644h2.039L6.486 3.24H4.298l13.312 17.404z"></path> </svg> </a> </div> <!-- Copyright --> <p class="mt-8 text-muted/40 text-xs">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${site.name} All rights reserved.
</p> </div> </footer>`;
}, "/Users/matthewhill/Desktop/Keystone-Terrain/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Keystone Terrain Co. | Professional Forestry Mulching | Greater Pittsburgh",
    description = "Professional forestry mulching and land clearing in the Greater Pittsburgh area. One machine, one pass, total transformation. Free estimates \u2014 call (724) 972-9286."
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><meta name="generator"', '><!-- Fonts: Oswald (headings) + Inter (body) --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet"><!-- Local Business Schema --><script type="application/ld+json">', "<\/script><title>", "</title>", '</head> <body class="min-h-screen bg-bg"> ', " ", " ", " </body></html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Keystone Terrain Co.",
    "description": description,
    "telephone": "(724) 972-9286",
    "email": "hello@keystoneterrain.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "North Huntingdon",
      "addressRegion": "PA"
    },
    "areaServed": "Greater Pittsburgh Area",
    "serviceType": ["Forestry Mulching", "Land Clearing", "Brush Hogging"]
  })), title, renderHead(), renderComponent($$result, "SiteHeader", $$SiteHeader, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/matthewhill/Desktop/Keystone-Terrain/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, services as a, site as s, testimonials as t };
