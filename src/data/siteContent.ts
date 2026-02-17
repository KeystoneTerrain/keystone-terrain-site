/* ═══════════════════════════════════════════
   KEYSTONE TERRAIN — SITE CONTENT
   Single source of truth for all page copy
   ═══════════════════════════════════════════ */

export const site = {
  name: "Keystone Terrain Co.",
  phone: "(724) 972-9286",
  email: "hello@keystoneterrain.com",
  location: "North Huntingdon, PA",
  serviceArea: "Serving Pittsburgh and surrounding regions — expanding into new markets",
};

export interface ServiceItem {
  title: string;
  slug: string;
  /** Anchor ID used for homepage scroll targets (e.g. "service-land-brush") */
  anchorId: string;
  image: string;
  description: string;
  /** Full page write-up content — array of paragraphs */
  longDescription: string[];
  /** Bullet points for the "What's Included" section */
  includes: string[];
  /** SEO meta description for the individual page */
  metaDescription: string;
}

export const services: ServiceItem[] = [
  {
    title: "Land & Brush Clearing",
    slug: "land-brush-clearing",
    anchorId: "service-land-brush",
    image: "/services/forestry-mulching.jpg",
    description:
      "Transform overgrown acreage into clean, usable property—fast.",
    metaDescription:
      "Professional land and brush clearing using forestry mulching in Western PA. Fast, low-impact clearing for lots, fields, and reclaim projects. Free estimates.",
    longDescription: [
      "Whether you've got a neglected five-acre parcel or a small residential lot that's been swallowed by brush, our forestry mulching equipment transforms overgrown land into clean, usable property—often in a single day. No burning, no hauling, no heavy excavation damage to your soil.",
      "Our forestry mulching heads grind standing trees, saplings, brush, and undergrowth into a fine layer of natural mulch that stays on-site. This mulch layer suppresses future weed growth, prevents erosion, and decomposes over time to enrich the soil beneath. It's the most efficient and environmentally responsible way to clear land in Western Pennsylvania.",
      "We handle everything from light brush (tall grass, weeds, thin saplings) to heavy timber clearing (trees up to 8–10 inches in diameter). For properties with larger hardwoods, we coordinate with timber removal crews so nothing goes to waste. The result is clean, level ground ready for whatever comes next—building, farming, fencing, or simply enjoying your land again.",
      "Every project starts with a site assessment where we evaluate brush density, tree diameter, terrain slope, and access points. This lets us give you a precise, transparent quote based on real conditions—not guesswork. Most residential clearing projects are completed in one to two days.",
    ],
    includes: [
      "Complete removal of brush, saplings, and small trees up to 8–10\" diameter",
      "Natural mulch layer left on-site (erosion control + weed suppression)",
      "Coordination with timber crews for larger trees if needed",
      "Site assessment with accurate acreage-based quoting",
      "Photo documentation of before and after conditions",
    ],
  },
  {
    title: "Construction Lot Prep",
    slug: "construction-lot-prep",
    anchorId: "service-lot-prep",
    image: "/services/hillside-mulching.jpg",
    description:
      "Clear and prep build sites for homes, barns, and access roads.",
    metaDescription:
      "Construction site clearing and lot prep using forestry mulching in Greater Pittsburgh. Clean, build-ready space for homes, pole barns, and cabins. Free quotes.",
    longDescription: [
      "When you're breaking ground on a new home, pole barn, cabin, or garage, the first step is getting the lot cleared—and forestry mulching is the fastest, cleanest way to do it. We take your build site from overgrown woodland to a flat, debris-free surface ready for survey stakes, footers, and equipment access.",
      "Unlike traditional clearing methods that leave behind stumps, burn piles, and rutted soil from heavy dozers, forestry mulching processes everything in place. The mulched material creates a natural erosion barrier while your site is exposed during construction—a major advantage on sloped lots or properties near waterways where sediment control is a concern.",
      "We work directly with general contractors, builders, and property owners throughout the Greater Pittsburgh area. Need a driveway corridor cut through 200 feet of woods? A two-acre pad cleared for a pole barn? A septic field area prepped? We handle it all with one machine, one pass, and minimal ground disturbance.",
      "For builders managing multiple lots in a development, we offer volume-based pricing and flexible scheduling to keep your project timeline on track. We understand that delays in site prep cascade through your entire build schedule, which is why we show up on time and finish on time—every job.",
    ],
    includes: [
      "Complete vegetation removal for build pads, driveways, and access corridors",
      "Stump grinding included for trees within the build footprint",
      "Low ground disturbance—preserves soil integrity for foundations",
      "Erosion-resistant mulch layer during construction phase",
      "Coordination with contractors on timeline and site access",
    ],
  },
  {
    title: "Trails & Access Corridors",
    slug: "trails-access-corridors",
    anchorId: "service-trails",
    image: "/services/trail-cutting.jpg",
    description:
      "Cut new trails or restore overgrown access routes through dense terrain.",
    metaDescription:
      "Trail cutting and access corridor clearing using forestry mulching in Western PA. ATV trails, walking paths, and property roads. Free estimates.",
    longDescription: [
      "There's nothing like having clean, navigable trails through your own property—whether you're building ATV routes, walking paths, hunting access lanes, or simply connecting different areas of your land. Our forestry mulching equipment cuts precise, clean-edged trails through dense woodland without the mess and expense of traditional clearing.",
      "The beauty of forestry mulching for trail work is the finished product. Instead of mud, ruts, and debris piles along the edges, you get a smooth, mulch-covered trail surface with clean sight lines and natural-looking borders. The mulch layer acts as a natural surface treatment—it compacts over time, drains well, and prevents the trail from turning into a mud channel during rain.",
      "We cut trails from 6 feet wide (single-track walking paths) up to 16+ feet wide (two-track vehicle access roads). For properties with elevation changes, our equipment handles slopes that would be impossible with conventional clearing methods. We can also widen or restore existing trails that have grown over, bringing them back to full usability without starting from scratch.",
      "Trail projects are priced by linear footage and width, with adjustments for brush density and terrain. We'll walk the planned route with you during the site visit to map out the best path, identify any obstacles, and give you an accurate quote before work begins.",
    ],
    includes: [
      "Custom trail widths from 6' single-track to 16'+ two-track",
      "Clean-edged cuts with natural-looking borders",
      "Mulch surface layer for drainage and compaction",
      "Slope-capable equipment for hilly terrain",
      "Route planning and pre-cut site walk included",
    ],
  },
  {
    title: "Fence Line & Boundary Clearing",
    slug: "fence-line-clearing",
    anchorId: "service-fence-line",
    image: "/services/fence-line.jpg",
    description:
      "Restore visibility and access along overgrown fence rows and boundaries.",
    metaDescription:
      "Fence line and property boundary clearing using forestry mulching in Greater Pittsburgh. Precision clearing without damaging posts or wire. Free quotes.",
    longDescription: [
      "Overgrown fence lines are one of the most common problems we solve. When brush, vines, and saplings take over a fence row, you lose visibility, access, and eventually the fence itself—wire gets pulled, posts get pushed over, and what was once a clean property boundary becomes an impenetrable wall of vegetation.",
      "Our forestry mulching approach restores fence lines with surgical precision. We clear vegetation from both sides of the fence row, working as close to the posts and wire as the equipment allows, then hand-finish any tight spots to give you a clean, accessible boundary. The key advantage is speed—we can clear a quarter-mile fence line in a few hours, a job that would take a crew with chainsaws and brush cutters an entire week.",
      "This service is especially popular with farmers, ranchers, and rural property owners who need to maintain livestock fencing, inspect boundary markers, or establish clear sight lines along property edges. We also clear for new fence installation, giving your fence contractor a clean, level corridor to work in.",
      "For properties with multiple fence runs or extensive boundary lines, we offer per-linear-foot pricing that makes large projects affordable. We've cleared fence lines that hadn't been touched in 20+ years—multiflora rose, autumn olive, wild grape, and thorn thickets that no one wanted to fight through by hand.",
    ],
    includes: [
      "Precision clearing on both sides of existing fence rows",
      "Hand-finishing around posts, gates, and wire",
      "Full brush and sapling removal along boundary lines",
      "Clearing for new fence installation corridors",
      "Per-linear-foot pricing for large properties",
    ],
  },
  {
    title: "Invasive Vegetation Removal",
    slug: "invasive-vegetation-removal",
    anchorId: "service-invasive",
    image: "/services/invasive-removal.jpg",
    description:
      "Eliminate invasive species and reclaim choked-out land.",
    metaDescription:
      "Invasive vegetation removal using forestry mulching in Western PA. Multiflora rose, autumn olive, honeysuckle, and thorn thickets eliminated. Free estimates.",
    longDescription: [
      "Western Pennsylvania has a serious invasive species problem, and it's getting worse every year. Multiflora rose, autumn olive, bush honeysuckle, Japanese knotweed, and thorn-bearing shrubs are choking out native plants, destroying forest understory, and making entire sections of property completely unusable. If you've tried to fight these invasives by hand, you know how futile it feels.",
      "Forestry mulching is the most effective mechanical method for large-scale invasive removal. Our equipment doesn't just cut the vegetation—it grinds it into mulch, root crown and all. This is critical because many invasive species (especially multiflora rose and autumn olive) will resprout aggressively from cut stems. By mulching the entire plant below the soil line, we dramatically reduce regrowth compared to mowing or chainsaw cutting.",
      "We work with property owners, land trusts, conservation districts, and municipalities throughout the Greater Pittsburgh area on invasive management projects ranging from half-acre residential lots to 50+ acre woodland restoration efforts. For properties with severe infestations, we can develop a phased clearing plan that prioritizes the most critical areas first.",
      "After the initial mulching pass, we recommend monitoring for regrowth over the following growing season. Some species may send up new shoots from surviving root fragments, but these are far easier to manage than the original infestation. Many of our clients schedule a follow-up maintenance pass 12–18 months after the initial clearing to catch any regrowth before it re-establishes.",
    ],
    includes: [
      "Complete mechanical removal of invasive shrubs, vines, and thickets",
      "Below-grade mulching to minimize regrowth from root crowns",
      "Targeted clearing that preserves desirable native trees",
      "Phased clearing plans for large or severely infested properties",
      "Follow-up maintenance pass recommendations",
    ],
  },
  {
    title: "Storm & Property Reclamation",
    slug: "storm-property-reclamation",
    anchorId: "service-storm-reclaim",
    image: "/services/brush-hogging.jpg",
    description:
      "Clean up storm damage and reclaim neglected properties fast.",
    metaDescription:
      "Storm cleanup and property reclamation using forestry mulching in Greater Pittsburgh. Remove downed trees, brush, and overgrowth. Fast response. Free quotes.",
    longDescription: [
      "After a major storm or years of neglect, a property can look completely unrecoverable—downed trees tangled with standing brush, limbs piled on top of undergrowth, and debris scattered across acres of land. Traditional cleanup methods are painfully slow and expensive: chainsaw crews cutting, chipping, and hauling load after load to the dump. Forestry mulching gets it done in a fraction of the time.",
      "Our equipment processes downed trees (up to 8–10 inches diameter), tangled brush piles, standing deadwood, and accumulated storm debris in a single pass. Everything gets ground into mulch on-site, which means no hauling costs, no dumpster fees, and no burn permits. The mulch layer that remains actually protects your exposed soil from erosion while the property recovers.",
      "We respond quickly to storm damage calls because we understand the urgency—blocked access roads, leaning hazard trees, and debris fields don't wait for a convenient scheduling window. For properties with large hazard trees that exceed our mulching capacity, we coordinate with certified arborists and tree removal crews to handle the big timber while we process everything else.",
      "Property reclamation projects—where a property has been neglected for years or even decades—are some of our most satisfying work. We've taken 10-acre parcels that were completely consumed by brush and transformed them into open, usable land in two to three days. If you've inherited property, purchased a neglected lot, or simply let things get away from you, we can bring it back to life.",
    ],
    includes: [
      "Rapid-response scheduling for storm damage emergencies",
      "Processing of downed trees, brush piles, and standing deadwood",
      "On-site mulching eliminates hauling and dump fees",
      "Coordination with arborists for large hazard tree removal",
      "Full property reclamation for long-neglected parcels",
    ],
  },
];

/** Dropdown-ready links derived from services — pointing to homepage anchor IDs */
export const serviceNavLinks = services.map((s) => ({
  label: s.title,
  href: `/#${s.anchorId}`,
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
