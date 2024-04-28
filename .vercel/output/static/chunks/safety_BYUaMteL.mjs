import { _ as __astro_tag_component__, F as Fragment, c as createVNode } from './astro/server_BHOel7Fx.mjs';
import { $ as $$Image } from './_astro_assets_BqnOpEwY.mjs';
import { a as $$Card, c as $$LinkCard, $ as $$CardGrid } from './Code_DkoT4e4W.mjs';
import './Icon_dQ4ugHI0.mjs';
import 'clsx';

const frontmatter = {
  "title": "Safety Protocols and Procedures",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Safety Protocols",
    "order": 3
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Safety is at the core of everything we do at ScrewFast. Our comprehensive safety protocols and procedures are designed to protect our team, clients, and the integrity of your project."
    }), "\n", createVNode($$Card, {
      title: "Key features of our safety commitment include:"
    }), "\n", createVNode($$LinkCard, {
      title: "Rigorous safety training for all personnel",
      href: "/guides/getting-started"
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "Regular safety audits and compliance checks",
        href: "/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Emergency response plans and drills",
        href: "/guides/getting-started"
      })]
    }), "\n", createVNode(_components.p, {
      children: "By integrating safety into our daily operations, we create a secure working environment without compromising on quality and productivity."
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/docs/construction/safety.mdx";
const file = "/Users/jobs/Developer/5-WORKING-CACHE/5.A-NOTEBOOKS/5.B.2-JMBFLOORS/web1/ScrewFast-astro/src/content/docs/construction/safety.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jobs/Developer/5-WORKING-CACHE/5.A-NOTEBOOKS/5.B.2-JMBFLOORS/web1/ScrewFast-astro/src/content/docs/construction/safety.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
