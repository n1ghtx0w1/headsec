import 'kleur/colors';
import { l as decodeKey } from './chunks/astro/server_Cng6Qe4_.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Ugc7Xtrw.mjs';
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

const manifest = deserializeManifest({"hrefRoot":"file:///home/robert/github/headsec/","cacheDir":"file:///home/robert/github/headsec/node_modules/.astro/","outDir":"file:///home/robert/github/headsec/dist/","srcDir":"file:///home/robert/github/headsec/src/","publicDir":"file:///home/robert/github/headsec/public/","buildClientDir":"file:///home/robert/github/headsec/dist/client/","buildServerDir":"file:///home/robert/github/headsec/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"news/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/news","isIndex":false,"type":"page","pattern":"^\\/news\\/?$","segments":[[{"content":"news","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/news.astro","pathname":"/news","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"pagefind/pagefind.js","links":[],"scripts":[],"styles":[],"routeData":{"route":"/pagefind/pagefind.js","isIndex":false,"type":"endpoint","pattern":"^\\/pagefind\\/pagefind\\.js\\/?$","segments":[[{"content":"pagefind","dynamic":false,"spread":false}],[{"content":"pagefind.js","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pagefind/pagefind.js.ts","pathname":"/pagefind/pagefind.js","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/styles/giscus","isIndex":false,"type":"endpoint","pattern":"^\\/styles\\/giscus\\/?$","segments":[[{"content":"styles","dynamic":false,"spread":false}],[{"content":"giscus","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/styles/giscus.ts","pathname":"/styles/giscus","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://n1ghtx0w1.github.io/headsec/","base":"/headsec","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/robert/github/headsec/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/robert/github/headsec/src/pages/blog/[post].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[post]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/robert/github/headsec/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/robert/github/headsec/src/pages/news.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/news@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/robert/github/headsec/src/pages/news/[news].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/news/[news]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/robert/github/headsec/src/pages/404.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog/[post]@_@astro":"pages/blog/_post_.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/news/[news]@_@astro":"pages/news/_news_.astro.mjs","\u0000@astro-page:src/pages/news@_@astro":"pages/news.astro.mjs","\u0000@astro-page:src/pages/pagefind/pagefind.js@_@ts":"pages/pagefind/pagefind.js.astro.mjs","\u0000@astro-page:src/pages/styles/giscus@_@ts":"pages/styles/giscus.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CVV6eD8r.mjs","/home/robert/github/headsec/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/home/robert/github/headsec/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_RqA0LZOo.mjs","/home/robert/github/headsec/.astro/content-assets.mjs":"chunks/content-assets_6cmWUfA-.mjs","/home/robert/github/headsec/.astro/content-modules.mjs":"chunks/content-modules_DxkiZ44J.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_mqNPQkBj.mjs","/home/robert/github/headsec/src/content/posts/pursuing-cyber.mdx?astroPropagatedAssets":"chunks/pursuing-cyber_BtenqOd0.mjs","/home/robert/github/headsec/src/content/other/about.mdx?astroPropagatedAssets":"chunks/about_CpSGz0lM.mjs","/home/robert/github/headsec/src/content/posts/pursuing-cyber.mdx":"chunks/pursuing-cyber_Cb-Tg1YC.mjs","/home/robert/github/headsec/src/content/other/about.mdx":"chunks/about_C22peAev.mjs","/home/robert/github/headsec/src/pages/blog/[post].astro?astro&type=script&index=0&lang.ts":"_astro/_post_.astro_astro_type_script_index_0_lang.BPdbWwJH.js","/home/robert/github/headsec/src/pages/blog.astro?astro&type=script&index=0&lang.ts":"_astro/blog.astro_astro_type_script_index_0_lang.DxCLUhVc.js","/home/robert/github/headsec/src/components/Background.astro?astro&type=script&index=0&lang.ts":"_astro/Background.astro_astro_type_script_index_0_lang.Cl_PlrnR.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/robert/github/headsec/src/pages/blog/[post].astro?astro&type=script&index=0&lang.ts","const s=document.querySelectorAll(\".toc-li a\"),c=document.querySelectorAll(\"#_top, article h1, article h2, article h3, article h4\"),n=new Map;for(const t of s){const e=t.href.split(\"#\")[1],o=document.getElementById(e);o&&n.set(o,t)}function l(t){const e=t.getBoundingClientRect(),o=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(e.bottom<0||e.top-o>=0)}const r=new IntersectionObserver(()=>{let t=null;for(const e of c){const o=l(e),i=n.get(e);if(o){i&&i.classList.add(\"active\"),t||(t=e);break}}if(t){for(const e of n.keys())if(e!==t){const o=n.get(e);o&&o.classList.remove(\"active\")}}},{threshold:0,root:null,rootMargin:\"0px\"});for(const t of c)r.observe(t);"],["/home/robert/github/headsec/src/pages/blog.astro?astro&type=script&index=0&lang.ts","const l=document.querySelectorAll(\".blog-tag\"),o=new URL(window.location.href),e=o.searchParams.get(\"tags\")?.split(\",\").filter(t=>t.length>0),n=document.querySelectorAll(\".post-container\");l.forEach(t=>{let s=!1;e?.includes(t.dataset.tag)&&(t.classList.add(\"active\"),s=!0),s?t.href=`/blog?tags=${e?.filter(a=>a!==t.dataset.tag).join(\",\")}`:t.href=`/blog?tags=${e?[...e,t.dataset.tag].join(\",\"):t.dataset.tag}`});n.forEach(t=>{const s=t.dataset.tags.split(\",\");e&&e.length>0&&!e.every(a=>s.includes(a))&&(t.style.display=\"none\")});"]],"assets":["/headsec/_astro/ec.3v45i.css","/headsec/_astro/ec.8zarh.js","/headsec/_astro/pfp.7rP8G-rw.png","/headsec/_astro/knight-defense-cyber-world.DgLAQkry.jpeg","/headsec/_astro/blog.CI1v474C.css","/headsec/favicon.svg","/headsec/_astro/Background.astro_astro_type_script_index_0_lang.Cl_PlrnR.js","/headsec/fonts/Geist.woff2","/headsec/fonts/GeistMono.woff2","/headsec/img/lighthouse.png","/headsec/img/og.png","/headsec/404.html","/headsec/blog/index.html","/headsec/news/index.html","/headsec/pagefind/pagefind.js","/headsec/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"BmQhjR2zNAD0Nibrx2fOpMHuOCuNsqwV/9jgc8spBEM=","sessionConfig":{"driver":"fs-lite","options":{"base":"/home/robert/github/headsec/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
