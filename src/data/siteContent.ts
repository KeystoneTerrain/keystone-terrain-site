/* ═══════════════════════════════════════════
   KEYSTONE TERRAIN — SITE CONTENT
   Single source of truth for all page copy
   ═══════════════════════════════════════════ */

export const site = {
  name: "Keystone Terrain Co.",
  phone: "(724) 972-9286",
  email: "hello@keystoneterrain.com",
  location: "North Huntingdon, PA",
  serviceArea: "Serving the Greater Pittsburgh Area",
};

export interface ServiceItem {
  title: string;
  slug: string;
  image: string;
  description: string;
}

export const services: ServiceItem[] = [
  {
    title: "Land & Brush Clearing",
    slug: "service-land-brush",
    image: "/services/forestry-mulching.jpg",
    description:
      "Turn overgrown acreage into usable land fast using forestry mulching—ideal for lots, fields, edges, and reclaim projects.",
  },
  {
    title: "Construction Lot Prep",
    slug: "service-construction",
    image: "/services/hillside-mulching.jpg",
    description:
      "Clear and prep build sites with forestry mulching for homes, pole barns, cabins, and access corridors—clean, build-ready space.",
  },
  {
    title: "Trails & Access Corridors",
    slug: "service-trails",
    image: "/services/trail-cutting.jpg",
    description:
      "Cut new or restore existing trails and access lanes using forestry mulching for ATVs, walking paths, and property navigation.",
  },
  {
    title: "Fence Line & Boundary Clearing",
    slug: "service-fenceline",
    image: "/services/fence-line.jpg",
    description:
      "Restore visibility and access along fence lines and property boundaries using precision forestry mulching without damaging posts or wire.",
  },
  {
    title: "Invasive Vegetation Removal",
    slug: "service-invasive",
    image: "/services/invasive-removal.jpg",
    description:
      "Target aggressive species like multiflora rose, autumn olive, honeysuckle, and thorn thickets using forestry mulching.",
  },
  {
    title: "Storm & Property Reclamation",
    slug: "service-reclamation",
    image: "/services/brush-hogging.jpg",
    description:
      "Cleanup and restoration after storms or long-term neglect using forestry mulching—remove hazards, downed brush, and overgrowth.",
  },
];

/** Dropdown-ready links derived from services */
export const serviceNavLinks = services.map((s) => ({
  label: s.title,
  href: `/#${s.slug}`,
}));

export interface TestimonialItem {
  quote: string;
  name: string;
}

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "They cleared three acres in under six hours. No burn pile, no stump grinding — just clean, usable land. Couldn't believe the turnaround.",
    name: "Mike R., Murrysville",
  },
  {
    quote:
      "Our hillside was a tangled mess for years. They brought in the remote-controlled machine and handled every inch. Looks incredible now.",
    name: "Sarah L., Canonsburg",
  },
  {
    quote:
      "Professional from start to finish. Showed up on time, worked efficiently, and left the property looking better than we imagined. Highly recommend.",
    name: "Dave P., Butler",
  },
  {
    quote:
      "I called four companies about our fence line. Three said no. Keystone cleared both sides in an afternoon without touching a single post.",
    name: "Tom W., Greensburg",
  },
];

export const socialLinks = {
  youtube: "https://youtube.com/@keystoneterrain",
  facebook: "https://facebook.com/keystoneterrain",
  x: "https://x.com/keystoneterrain",
};
