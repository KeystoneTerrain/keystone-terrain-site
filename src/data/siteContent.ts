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
  image: string;
  description: string;
}

export const services: ServiceItem[] = [
  {
    title: "Forestry Mulching",
    image: "/services/forestry-mulching.jpg",
    description:
      "Transform overgrown timber and brush into clean, cleared land in a single pass — no burning, no hauling, no mess.",
  },
  {
    title: "Hillside Mulching",
    image: "/services/hillside-mulching.jpg",
    description:
      "Remote-controlled equipment built for steep slopes other companies turn down. We clear grades up to 60°+.",
  },
  {
    title: "Brush Hogging",
    image: "/services/brush-hogging.jpg",
    description:
      "Tall grass, thick weeds, and dense undergrowth leveled to a clean, uniform finish — fast and affordable.",
  },
  {
    title: "Fence Line Clearing",
    image: "/services/fence-line.jpg",
    description:
      "Restore full visibility and access along overgrown fence rows without damaging existing posts or wire.",
  },
  {
    title: "Trail Cutting",
    image: "/services/trail-cutting.jpg",
    description:
      "Custom ATV trails, walking paths, and access roads cut through dense woodland with clean, finished edges.",
  },
  {
    title: "Invasive Species Removal",
    image: "/services/invasive-removal.jpg",
    description:
      "Mechanical removal of multiflora rose, autumn olive, knotweed, and other aggressive invaders choking your property.",
  },
];

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
