import { _ as __astro_tag_component__, F as Fragment, c as createVNode } from './astro/server_BHOel7Fx.mjs';
import { $ as $$Image } from './_astro_assets_BqnOpEwY.mjs';
import { a as $$Card } from './Code_DkoT4e4W.mjs';
import './Icon_dQ4ugHI0.mjs';
import 'clsx';

const frontmatter = {
  "title": "Project Planning and Management",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Project Planning",
    "order": 2
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
      children: "Achieve seamless project execution with ScrewFast\u2019s meticulous planning and management approach. We prioritize clear communication and strategic planning to ensure your project milestones are achieved without compromise."
    }), "\n", createVNode($$Card, {
      title: "Our planning and management services include:",
      icon: "seti:notebook",
      children: createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: "Detailed project timelines"
        }), "\n", createVNode(_components.li, {
          children: "Resource allocation and optimization"
        }), "\n", createVNode(_components.li, {
          children: "Regular progress updates and reports"
        }), "\n", createVNode(_components.li, {
          children: "Risk assessment and management"
        }), "\n"]
      })
    }), "\n", createVNode(_components.p, {
      children: "We believe in proactive management to foresee potential challenges and devise solutions before they impact the project."
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
const url = "src/content/docs/construction/project-planning.mdx";
const file = "/Users/jobs/Developer/5-WORKING-CACHE/5.A-NOTEBOOKS/5.B.2-JMBFLOORS/web1/ScrewFast-astro/src/content/docs/construction/project-planning.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jobs/Developer/5-WORKING-CACHE/5.A-NOTEBOOKS/5.B.2-JMBFLOORS/web1/ScrewFast-astro/src/content/docs/construction/project-planning.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
