import { U as jsxRuntimeExports, r as reactExports } from "./server-DINppIop.js";
import { R as Route, b as businesses, c as categories, L as Link } from "./router-C10jCAzj.js";
import { c as createLucideIcon, S as SiteHeader, M as MapPin, a as SiteFooter } from "./SiteFooter-LdkTGg_0.js";
import { S as Search } from "./search-Bv1WzEvn.js";
import { B as BadgeCheck, S as Star } from "./star-BKqssPeZ.js";
import { C as ChevronLeft } from "./chevron-left-B8yf3CdB.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
function BusinessCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] w-full animate-pulse bg-muted" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-20 animate-pulse rounded bg-muted" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-3/4 animate-pulse rounded bg-muted" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-1/2 animate-pulse rounded bg-muted" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-full animate-pulse rounded bg-muted" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-full animate-pulse rounded-xl bg-muted" })
    ] })
  ] });
}
function BusinessesPage() {
  const params = Route.useSearch();
  const [q, setQ] = reactExports.useState(params.q ?? "");
  const [category, setCategory] = reactExports.useState(params.category ?? "All");
  const [minRating, setMinRating] = reactExports.useState(0);
  const [verifiedOnly, setVerifiedOnly] = reactExports.useState(false);
  const [page, setPage] = reactExports.useState(1);
  const [loading, setLoading] = reactExports.useState(true);
  const PAGE_SIZE = 6;
  reactExports.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(t);
  }, []);
  reactExports.useEffect(() => {
    setPage(1);
  }, [q, category, minRating, verifiedOnly]);
  const filtered = reactExports.useMemo(() => {
    return businesses.filter((b) => {
      const term = q.trim().toLowerCase();
      const matchesQ = !term || b.name.toLowerCase().includes(term) || b.category.toLowerCase().includes(term) || b.area.toLowerCase().includes(term);
      const matchesCat = category === "All" || b.category === category;
      const matchesRating = b.rating >= minRating;
      const matchesVerified = !verifiedOnly || b.verified;
      return matchesQ && matchesCat && matchesRating && matchesVerified;
    });
  }, [q, category, minRating, verifiedOnly]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-[image:var(--gradient-warm)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 py-12 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight sm:text-4xl", children: "Discover Kovai businesses" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-muted-foreground", children: [
        filtered.length,
        " results across Coimbatore"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col gap-3 rounded-2xl border border-border bg-card p-3 shadow-[var(--shadow-card)] sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center gap-2 rounded-xl bg-background px-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-5 w-5 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search by name, category or area", className: "w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: category, onChange: (e) => setCategory(e.target.value), className: "rounded-xl border border-border bg-background px-3 py-3 text-sm outline-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "All" }),
          categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: c.title }, c.slug)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Chartered Accountants" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: verifiedOnly, onChange: (e) => setVerifiedOnly(e.target.checked) }),
          "Verified only"
        ] }),
        [0, 4, 4.5, 4.8].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMinRating(r), className: `rounded-full border px-3 py-1.5 ${minRating === r ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`, children: r === 0 ? "Any rating" : `${r}+ ★` }, r))
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 py-12 sm:px-6", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: Array.from({
      length: 6
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(BusinessCardSkeleton, {}, i)) }) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-dashed border-border p-16 text-center text-muted-foreground", children: "No businesses match your filters yet. Try widening your search." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid animate-[fade-in_0.4s_ease-out] gap-6 md:grid-cols-2 lg:grid-cols-3", children: paginated.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-warm)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: b.image, alt: b.name, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }),
          b.verified && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-warm)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-3.5 w-3.5" }),
            " Verified"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-primary", children: b.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-lg font-bold", children: b.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
              " ",
              b.area
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-accent text-accent" }),
              " ",
              b.rating
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 line-clamp-2 text-sm text-foreground/80", children: b.tagline }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/businesses/$id", params: {
            id: b.id
          }, className: "mt-5 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5", children: "View Details" })
        ] })
      ] }, b.id)) }),
      totalPages > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Pagination", className: "mt-10 flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPage((p) => Math.max(1, p - 1)), disabled: currentPage === 1, "aria-label": "Previous page", className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card disabled:opacity-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }) }),
        Array.from({
          length: totalPages
        }).map((_, i) => {
          const n = i + 1;
          const active = n === currentPage;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPage(n), "aria-current": active ? "page" : void 0, "aria-label": `Go to page ${n}`, className: `h-9 min-w-9 rounded-full px-3 text-sm font-semibold transition ${active ? "bg-primary text-primary-foreground shadow-[var(--shadow-warm)]" : "border border-border bg-card hover:border-primary/40"}`, children: n }, n);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPage((p) => Math.min(totalPages, p + 1)), disabled: currentPage === totalPages, "aria-label": "Next page", className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card disabled:opacity-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  BusinessesPage as component
};
