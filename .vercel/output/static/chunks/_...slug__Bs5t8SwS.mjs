/* empty css                         */
import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, g as addAttribute, e as renderComponent, f as renderScript } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import { S as SITE, $ as $$MainLayout } from './MainLayout_WpToHBoP.mjs';
import 'clsx';
import { $ as $$PrimaryCTA } from './PrimaryCTA_C8l6oaNF.mjs';
import { $ as $$Image } from './_astro_assets_BqnOpEwY.mjs';
import { g as getCollection } from './_astro_content_Ctn2mKrf.mjs';

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$ProductTabBtn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductTabBtn;
  const { id, dataTab, title, first } = Astro2.props;
  const BUTTON_CLASS = "flex w-full justify-center rounded-xl border border-transparent p-3 outline-none ring-zinc-500 transition duration-300 hover:bg-neutral-100 focus-visible:ring dark:ring-zinc-200 dark:hover:bg-neutral-700 dark:focus:outline-none md:p-5";
  const HEADING_CLASS = "block text-center font-bold";
  const INACTIVE_HEADING_CLASS = "text-neutral-800 dark:text-neutral-200";
  return renderTemplate`<!-- Tab button element -->${maybeRenderHead()}<button type="button"${addAttribute(`${BUTTON_CLASS} ${first ? "active bg-neutral-100 hover:border-transparent dark:bg-white/[.05]" : ""}`, "class")}${addAttribute(id, "id")}${addAttribute(dataTab, "data-target")} role="tab"> <!-- Tab text --> <span${addAttribute(`${HEADING_CLASS} ${first ? "text-orange-400 dark:text-orange-300" : INACTIVE_HEADING_CLASS}`, "class")}> ${title} </span> </button>`;
}, "/Users/jobs/Developer/5-WORKING-CACHE/5.A-NOTEBOOKS/5.B.2-JMBFLOORS/web1/ScrewFast-astro/src/components/ui/buttons/ProductTabBtn.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://screwfast.uk");
async function getStaticPaths() {
  const productEntries = await getCollection("products");
  return productEntries.map((product) => ({
    params: { slug: product.slug },
    props: { product }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { product } = Astro2.props;
  const pageTitle = `${product.data.title} | ${SITE.title}`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": pageTitle }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div id="overlay" class="fixed inset-0 bg-neutral-200 dark:bg-neutral-800"></div> <section class="mx-auto flex max-w-[85rem] flex-col px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div> <p id="fadeText" class="mb-8 max-w-prose text-pretty font-light text-neutral-700 dark:text-neutral-300 sm:text-xl"> ', ' </p> </div> <div class="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0"> <div id="fadeInUp"> <h1 class="block text-4xl font-bold tracking-tighter text-neutral-800 dark:text-neutral-200 sm:text-5xl md:text-6xl lg:text-7xl"> ', ' </h1> <p class="text-lg text-neutral-600 dark:text-neutral-400"> ', " </p> </div> <div> ", ' </div> </div> </section> <div class="mx-auto max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14"> <nav class="mx-auto grid max-w-6xl gap-y-px sm:flex sm:gap-x-4 sm:gap-y-0" aria-label="Tabs" role="tablist"> ', ' </nav> <div class="mt-12 md:mt-16"> <div id="tabs-with-card-1" role="tabpanel"> <div class="mx-auto max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14"> <div class="grid gap-12 md:grid-cols-2"> <div class="lg:w-3/4"> <h2 class="text-balance text-3xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:leading-tight lg:text-4xl"> ', ' </h2> <p class="mt-3 text-pretty text-neutral-600 dark:text-neutral-400"> ', ' </p> <p class="mt-5"> ', ' </p> </div> <div class="space-y-6 lg:space-y-10"> ', ' </div> </div> </div> </div> <div id="tabs-with-card-2" class="hidden" role="tabpanel"> <div class="mx-auto max-w-[85rem] px-4 pb-10 sm:px-6 lg:px-8 lg:pb-14"> <div class="grid w-full grid-cols-1 gap-x-16 md:grid-cols-2"> <div class="max-w-md space-y-6"> ', ' </div> <div class="mt-6 max-w-md space-y-6 md:ml-auto md:mt-0"> ', ' </div> </div> </div> </div> </div> </div> <div id="tabs-with-card-3" class="hidden" role="tabpanel"> <div class="mx-auto mb-20 flex w-full md:mb-28 2xl:w-4/5"> <div class="relative left-12 top-12 z-10 overflow-hidden rounded-xl shadow-lg md:left-12 md:top-16 md:-ml-12 lg:ml-0"> ', ' </div> <div class="relative right-12 overflow-hidden rounded-xl shadow-xl"> ', ' </div> </div> </div> <script src="/scripts/vendor/gsap/gsap.min.js"><\/script> ', " ", " "])), maybeRenderHead(), product.data.main.content, product.data.title, product.data.description, renderComponent($$result2, "Image", $$Image, { "id": "fadeInMoveRight", "src": product.data.main.imgMain, "class": "w-[600px]", "alt": product.data.main.imgAlt, "format": "avif", "loading": "eager" }), product.data.tabs.map((tab, index) => renderTemplate`${renderComponent($$result2, "ProductTabBtn", $$ProductTabBtn, { "title": tab.title, "id": tab.id, "dataTab": tab.dataTab, "first": index === 0 })}`), product.data.longDescription.title, product.data.longDescription.subTitle, renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": product.data.longDescription.btnTitle, "url": product.data.longDescription.btnURL }), product.data.descriptionList.map((list) => renderTemplate`<div class="flex"> <div> <h3 class="text-base font-bold text-neutral-800 dark:text-neutral-200 sm:text-lg"> ${list.title} </h3> <p class="mt-1 text-neutral-600 dark:text-neutral-400"> ${list.subTitle} </p> </div> </div>`), product.data.specificationsLeft.map((spec) => renderTemplate`<div> <h3 class="block font-bold text-neutral-800 dark:text-neutral-200"> ${spec.title} </h3> <p class="text-neutral-600 dark:text-neutral-400"> ${spec.subTitle} </p> </div>`), product.data.specificationsRight?.map((spec) => renderTemplate`<div> <h3 class="block font-bold text-neutral-800 dark:text-neutral-200"> ${spec.title} </h3> <p class="text-neutral-600 dark:text-neutral-400"> ${spec.subTitle} </p> </div>`), product.data.blueprints.first && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": product.data.blueprints.first, "class": "h-full w-full object-cover object-center", "alt": "Blueprint Illustration", "format": "avif" })}`, product.data.blueprints.second && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": product.data.blueprints.second, "class": "h-full w-full object-cover object-center", "alt": "Blueprint Illustration", "format": "avif" })}`, renderScript($$result2, "/Users/jobs/Developer/5-WORKING-CACHE/5.A-NOTEBOOKS/5.B.2-JMBFLOORS/web1/ScrewFast-astro/src/pages/products/[...slug].astro?astro&type=script&index=0&lang.ts"), renderScript($$result2, "/Users/jobs/Developer/5-WORKING-CACHE/5.A-NOTEBOOKS/5.B.2-JMBFLOORS/web1/ScrewFast-astro/src/pages/products/[...slug].astro?astro&type=script&index=1&lang.ts")) })}`;
}, "/Users/jobs/Developer/5-WORKING-CACHE/5.A-NOTEBOOKS/5.B.2-JMBFLOORS/web1/ScrewFast-astro/src/pages/products/[...slug].astro", void 0);

const $$file = "/Users/jobs/Developer/5-WORKING-CACHE/5.A-NOTEBOOKS/5.B.2-JMBFLOORS/web1/ScrewFast-astro/src/pages/products/[...slug].astro";
const $$url = "/products/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
