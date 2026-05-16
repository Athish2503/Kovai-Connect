import { U as jsxRuntimeExports } from "./server-DINppIop.js";
import { S as SiteHeader, a as SiteFooter } from "./SiteFooter-LdkTGg_0.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-C10jCAzj.js";
const SplitErrorComponent = ({
  error,
  reset
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 py-24 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "Couldn't load this business" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: error.message }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => reset(), className: "mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground", children: "Try again" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
] });
export {
  SplitErrorComponent as errorComponent
};
