import { _ as __astro_tag_component__, F as Fragment, c as createVNode } from './astro/server_BHOel7Fx.mjs';
import { $ as $$Image } from './_astro_assets_BqnOpEwY.mjs';
import { a as $$Card } from './Code_DkoT4e4W.mjs';
import './Icon_dQ4ugHI0.mjs';
import 'clsx';

const frontmatter = {
  "title": "Custom Solutions for Complex Projects",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Custom Solutions",
    "order": 4
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Challenging projects demand innovative solutions. ScrewFast excels in delivering custom solutions engineered to address the most intricate and demanding construction requirements."
    }), "\n", createVNode($$Card, {
      title: "Our custom services provide:",
      icon: "puzzle",
      children: createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Expert analysis of unconventional project demands"
        }), "\n", createVNode(_components.li, {
          children: "Tailored construction methods for unique structures"
        }), "\n", createVNode(_components.li, {
          children: "Specialized materials and equipment sourcing"
        }), "\n", createVNode(_components.li, {
          children: "Collaboration with specialized subcontractors and consultants"
        }), "\n"]
      })
    }), "\n", createVNode(_components.p, {
      children: "No matter the complexity, our bespoke services ensure that your specialized project is not just completed, but mastered."
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
const url = "src/content/docs/construction/custom-solutions.mdx";
const file = "/Users/jobs/Developer/5-WORKING-CACHE/5.A-NOTEBOOKS/5.B.2-JMBFLOORS/web1/ScrewFast-astro/src/content/docs/construction/custom-solutions.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jobs/Developer/5-WORKING-CACHE/5.A-NOTEBOOKS/5.B.2-JMBFLOORS/web1/ScrewFast-astro/src/content/docs/construction/custom-solutions.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
