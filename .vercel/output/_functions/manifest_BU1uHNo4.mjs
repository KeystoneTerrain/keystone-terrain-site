import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_D8noONNE.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_D9sj4Cz4.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/matthewhill/Desktop/Keystone-Terrain/","cacheDir":"file:///Users/matthewhill/Desktop/Keystone-Terrain/node_modules/.astro/","outDir":"file:///Users/matthewhill/Desktop/Keystone-Terrain/dist/","srcDir":"file:///Users/matthewhill/Desktop/Keystone-Terrain/src/","publicDir":"file:///Users/matthewhill/Desktop/Keystone-Terrain/public/","buildClientDir":"file:///Users/matthewhill/Desktop/Keystone-Terrain/dist/client/","buildServerDir":"file:///Users/matthewhill/Desktop/Keystone-Terrain/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C-XRwBpl.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/quote","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/quote\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"quote","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/quote.ts","pathname":"/api/quote","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/submit-quote","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/submit-quote\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"submit-quote","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/submit-quote.ts","pathname":"/api/submit-quote","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C-XRwBpl.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C-XRwBpl.css"}],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C-XRwBpl.css"},{"type":"inline","content":".leaflet-default-icon-path[data-astro-cid-xj2bntn6]{background-image:url(https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png)}.leaflet-draw-toolbar[data-astro-cid-xj2bntn6] a[data-astro-cid-xj2bntn6]{background-color:#162821!important;border-color:#f2f2ee1a!important;color:#f2f2ee!important}.leaflet-draw-toolbar[data-astro-cid-xj2bntn6] a[data-astro-cid-xj2bntn6]:hover{background-color:#1e3a2f!important;border-color:#c8a36980!important}.leaflet-draw-actions[data-astro-cid-xj2bntn6] a[data-astro-cid-xj2bntn6]{background-color:#162821!important;color:#f2f2ee!important;border-color:#f2f2ee1a!important}.leaflet-draw-actions[data-astro-cid-xj2bntn6] a[data-astro-cid-xj2bntn6]:hover{background-color:#c8a369!important;color:#0b1411!important}.drop-zone[data-astro-cid-xj2bntn6]{border:2px dashed rgba(242,242,238,.15);transition:all .2s ease}.drop-zone[data-astro-cid-xj2bntn6]:hover,.drop-zone[data-astro-cid-xj2bntn6].dragover{border-color:#c8a36999;background-color:#c8a3690d}@keyframes spin{to{transform:rotate(360deg)}}.spinner[data-astro-cid-xj2bntn6]{animation:spin .8s linear infinite;border:3px solid rgba(242,242,238,.15);border-top-color:#c8a369;border-radius:50%;width:24px;height:24px}\n"}],"routeData":{"route":"/quote","isIndex":false,"type":"page","pattern":"^\\/quote\\/?$","segments":[[{"content":"quote","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/quote.astro","pathname":"/quote","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C-XRwBpl.css"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.C-XRwBpl.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/matthewhill/Desktop/Keystone-Terrain/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/matthewhill/Desktop/Keystone-Terrain/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/matthewhill/Desktop/Keystone-Terrain/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["/Users/matthewhill/Desktop/Keystone-Terrain/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/matthewhill/Desktop/Keystone-Terrain/src/pages/quote.astro",{"propagation":"none","containsHead":true}],["/Users/matthewhill/Desktop/Keystone-Terrain/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/quote@_@ts":"pages/api/quote.astro.mjs","\u0000@astro-page:src/pages/api/submit-quote@_@ts":"pages/api/submit-quote.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/quote@_@astro":"pages/quote.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BU1uHNo4.mjs","/Users/matthewhill/Desktop/Keystone-Terrain/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Col6H_-N.mjs","/Users/matthewhill/Desktop/Keystone-Terrain/src/components/QuoteForm.astro?astro&type=script&index=0&lang.ts":"_astro/QuoteForm.astro_astro_type_script_index_0_lang.HareVeyG.js","/Users/matthewhill/Desktop/Keystone-Terrain/src/components/BrushQuoteMap.astro?astro&type=script&index=0&lang.ts":"_astro/BrushQuoteMap.astro_astro_type_script_index_0_lang.BFMi-7ex.js","/Users/matthewhill/Desktop/Keystone-Terrain/src/components/SiteHeader.astro?astro&type=script&index=0&lang.ts":"_astro/SiteHeader.astro_astro_type_script_index_0_lang.Bd1EUvvY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/matthewhill/Desktop/Keystone-Terrain/src/components/QuoteForm.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"quote-form\"),a=document.getElementById(\"form-success\");e?.addEventListener(\"submit\",r=>{r.preventDefault();let s=!0;e.querySelectorAll(\".form-error\").forEach(m=>m.classList.add(\"hidden\"));const t=e.querySelector(\"#q-name\");t.value.trim()||(t.nextElementSibling?.classList.remove(\"hidden\"),s=!1);const l=e.querySelector(\"#q-phone\");/^[\\d\\s\\-\\(\\)\\+]{7,}$/.test(l.value.trim())||(l.nextElementSibling?.classList.remove(\"hidden\"),s=!1);const i=e.querySelector(\"#q-email\");/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(i.value.trim())||(i.nextElementSibling?.classList.remove(\"hidden\"),s=!1);const n=e.querySelector(\"#q-message\");n.value.trim()||(n.nextElementSibling?.classList.remove(\"hidden\"),s=!1),s&&(e.classList.add(\"hidden\"),a?.classList.remove(\"hidden\"))});"],["/Users/matthewhill/Desktop/Keystone-Terrain/src/components/SiteHeader.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"mobile-menu-toggle\"),e=document.getElementById(\"mobile-menu\"),n=document.getElementById(\"icon-open\"),d=document.getElementById(\"icon-close\");t&&e&&n&&d&&(t.addEventListener(\"click\",()=>{const s=!e.classList.contains(\"hidden\");e.classList.toggle(\"hidden\"),n.classList.toggle(\"hidden\"),d.classList.toggle(\"hidden\"),t.setAttribute(\"aria-expanded\",String(!s))}),e.querySelectorAll(\".mobile-nav-link\").forEach(s=>{s.addEventListener(\"click\",()=>{e.classList.add(\"hidden\"),n.classList.remove(\"hidden\"),d.classList.add(\"hidden\"),t.setAttribute(\"aria-expanded\",\"false\")})}));const i=document.getElementById(\"site-header\");i&&window.addEventListener(\"scroll\",()=>{window.scrollY>10?i.classList.add(\"shadow-[0_2px_20px_rgba(0,0,0,0.4)]\"):i.classList.remove(\"shadow-[0_2px_20px_rgba(0,0,0,0.4)]\")},{passive:!0});"]],"assets":["/_astro/about.C-XRwBpl.css","/before-after-1.jpg","/before-after-2.jpg","/favicon.ico","/favicon.svg","/hero-1.jpg","/keystone-logo.png","/proof-1.jpg","/proof-2.jpg","/proof-3.jpg","/service-fence.jpg","/service-hillside.jpg","/service-mulching.jpg","/video-preview.jpg","/_astro/BrushQuoteMap.astro_astro_type_script_index_0_lang.BFMi-7ex.js","/services/brush-hogging.jpg","/services/fence-line.jpg","/services/forestry-mulching.jpg","/services/hillside-mulching.jpg","/services/invasive-removal.jpg","/services/trail-cutting.jpg"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"aKQkxeG/RM2oJ22l8Kg1j2eE2Gr+K7ujCop0Dzte7ro="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
