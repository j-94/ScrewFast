import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_Dwqtw0BB.mjs';
import { b as createComponent, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, d as renderTemplate, e as renderComponent, u as unescapeHTML } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://screwfast.uk", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/post-1.md": () => import('./post-1_B0lLJ24g.mjs'),"/src/content/blog/post-2.md": () => import('./post-2_DjFmfGHe.mjs'),"/src/content/blog/post-3.md": () => import('./post-3_ZeH-3-mq.mjs'),"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_BM4H8NpN.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_4CW2u7_A.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_BeL6Zxqq.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_Bi_HU2kM.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_ycSyfLfk.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BQZMikyf.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_BE0iX6Gu.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_D1JiQNVl.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_D7wOYefg.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_nvIIjqBD.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_CE7KXC8b.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_DKBGa20f.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_DquhZuzc.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_jEHzw3mK.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_DraFeFUW.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_CQn1eKJ9.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_B-nzpa2Q.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_C3txEA3e.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_BTqWjdL5.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_-jUsCE1T.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_QtotizJA.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_dpbiSLOM.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_DaTwOB2I.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_CZ7Zp2nD.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_D8sImRee.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_NPqVR_eG.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_CcW34HUP.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_cKYlHUv2.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_rhG1qrXf.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_D5rm8-1r.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_CI7g1ZUG.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BBpeOYLL.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_DCC-S1kx.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_BRfI6caC.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_DSrZ6lCF.mjs'),"/src/content/insights/insight-1.md": () => import('./insight-1_C4bH-gKf.mjs'),"/src/content/insights/insight-2.md": () => import('./insight-2_C4KRAif3.mjs'),"/src/content/insights/insight-3.md": () => import('./insight-3_COhzoYY_.mjs'),"/src/content/products/a765.md": () => import('./a765_axVBFjPT.mjs'),"/src/content/products/b203.md": () => import('./b203_Dl0-YWFv.mjs'),"/src/content/products/f303.md": () => import('./f303_B9fNiMy4.mjs'),"/src/content/products/t845.md": () => import('./t845_-VmSt0TO.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog":{"type":"content","entries":{"post-1":"/src/content/blog/post-1.md","post-3":"/src/content/blog/post-3.md","post-2":"/src/content/blog/post-2.md"}},"docs":{"type":"content","entries":{"welcome-to-docs":"/src/content/docs/welcome-to-docs.mdx","advanced/technical-specifications":"/src/content/docs/advanced/technical-specifications.mdx","es/welcome-to-docs":"/src/content/docs/es/welcome-to-docs.mdx","de/welcome-to-docs":"/src/content/docs/de/welcome-to-docs.mdx","construction/custom-solutions":"/src/content/docs/construction/custom-solutions.mdx","construction/project-planning":"/src/content/docs/construction/project-planning.mdx","construction/safety":"/src/content/docs/construction/safety.mdx","construction/service-overview":"/src/content/docs/construction/service-overview.mdx","fa/welcome-to-docs":"/src/content/docs/fa/welcome-to-docs.mdx","fr/welcome-to-docs":"/src/content/docs/fr/welcome-to-docs.mdx","guides/getting-started":"/src/content/docs/guides/getting-started.mdx","guides/first-project-checklist":"/src/content/docs/guides/first-project-checklist.mdx","guides/intro":"/src/content/docs/guides/intro.mdx","ja/welcome-to-docs":"/src/content/docs/ja/welcome-to-docs.mdx","zh-cn/welcome-to-docs":"/src/content/docs/zh-cn/welcome-to-docs.mdx","tools/equipment-care":"/src/content/docs/tools/equipment-care.mdx","de/guides/first-project-checklist":"/src/content/docs/de/guides/first-project-checklist.mdx","de/guides/getting-started":"/src/content/docs/de/guides/getting-started.mdx","de/guides/intro":"/src/content/docs/de/guides/intro.mdx","tools/tool-guides":"/src/content/docs/tools/tool-guides.mdx","es/guides/first-project-checklist":"/src/content/docs/es/guides/first-project-checklist.mdx","es/guides/getting-started":"/src/content/docs/es/guides/getting-started.mdx","es/guides/intro":"/src/content/docs/es/guides/intro.mdx","fa/guides/first-project-checklist":"/src/content/docs/fa/guides/first-project-checklist.mdx","fa/guides/getting-started":"/src/content/docs/fa/guides/getting-started.mdx","fa/guides/intro":"/src/content/docs/fa/guides/intro.mdx","fr/guides/getting-started":"/src/content/docs/fr/guides/getting-started.mdx","fr/guides/intro":"/src/content/docs/fr/guides/intro.mdx","fr/guides/first-project-checklist":"/src/content/docs/fr/guides/first-project-checklist.mdx","ja/guides/first-project-checklist":"/src/content/docs/ja/guides/first-project-checklist.mdx","ja/guides/getting-started":"/src/content/docs/ja/guides/getting-started.mdx","ja/guides/intro":"/src/content/docs/ja/guides/intro.mdx","zh-cn/guides/first-project-checklist":"/src/content/docs/zh-cn/guides/first-project-checklist.mdx","zh-cn/guides/getting-started":"/src/content/docs/zh-cn/guides/getting-started.mdx","zh-cn/guides/intro":"/src/content/docs/zh-cn/guides/intro.mdx"}},"products":{"type":"content","entries":{"a765":"/src/content/products/a765.md","b203":"/src/content/products/b203.md","f303":"/src/content/products/f303.md","t845":"/src/content/products/t845.md"}},"insights":{"type":"content","entries":{"insight-1":"/src/content/insights/insight-1.md","insight-2":"/src/content/insights/insight-2.md","insight-3":"/src/content/insights/insight-3.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/post-1.md": () => import('./post-1_BcSfhacO.mjs'),"/src/content/blog/post-2.md": () => import('./post-2_U4In9hJb.mjs'),"/src/content/blog/post-3.md": () => import('./post-3_NhLUXXmP.mjs'),"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_DCQ_SjbD.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_io7yX4hj.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_CXlxlpe3.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_W427GriQ.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_VU--jYYa.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_BwdsW3at.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_B5UJF5Gw.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_PEVVTL8X.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_SJgDEmOM.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DkO4gslB.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_CcDwkuDE.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_Bkq_RtGh.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_Dch-JfA-.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CdHDSM4s.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_CZlJuhuK.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_utqySpEy.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_C5PCYZ16.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_0xOEkwdL.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_DmvdDlT7.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_BtP6SJOp.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_BTgsY3kg.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CVrktmN-.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_CPDhEQSd.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_Ds0448pQ.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CHj8M9tK.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_64YKpS0s.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_7I8ZqisT.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_C9tctEJh.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_Da2QYRSe.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_BzsGpW0Z.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_DTFZ4lel.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist__YGR6RGU.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_BNeD4N5G.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_K6BARK17.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs__07tO62h.mjs'),"/src/content/insights/insight-1.md": () => import('./insight-1_4KpGOfFe.mjs'),"/src/content/insights/insight-2.md": () => import('./insight-2_D_heUeZx.mjs'),"/src/content/insights/insight-3.md": () => import('./insight-3_Dyd8ku_b.mjs'),"/src/content/products/a765.md": () => import('./a765_DyHqo-13.mjs'),"/src/content/products/b203.md": () => import('./b203_Ca2eZV18.mjs'),"/src/content/products/f303.md": () => import('./f303_Nin5Z_ni.mjs'),"/src/content/products/t845.md": () => import('./t845_DiCT4Xi_.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

export { getCollection as g };
