import { U as jsxRuntimeExports } from "./server-DINppIop.js";
import { L as Link } from "./router-C10jCAzj.js";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-LdkTGg_0.js";
import { C as ChevronLeft } from "./chevron-left-B8yf3CdB.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 py-24 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold", children: "Business not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "We couldn't locate this business in our directory." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/businesses", className: "mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }),
      " Back to discover"
    ] })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
] });
export {
  SplitNotFoundComponent as notFoundComponent
};
