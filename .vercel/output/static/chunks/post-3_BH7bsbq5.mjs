import { b as createComponent, d as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BHOel7Fx.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Simplify Procurement and Stay Within Budget with ScrewFast","description":"Affordable, durable tools for efficient construction projects","author":"Olga Zabegina","role":"Strategic Marketing Manager","authorImage":"@/images/blog/anna.avif","authorImageAlt":"Avatar Description","pubDate":"2024-02-18T00:00:00.000Z","cardImage":"@/images/blog/post-3.avif","cardImageAlt":"Side view worker wearing gloves","readTime":3,"tags":["procurement","affordable","efficiency"],"contents":["Managing a construction project can be overwhelming, especially when it comes to procurement. That's why ScrewFast is committed to simplifying the process and keeping your projects within budget.","With our line of affordable tools and equipment, you can find everything you need without breaking the bank. Our user-centric design ensures that our products are easy to use, saving you time and frustration on the job site.","But affordability doesn't mean sacrificing quality. ScrewFast products are built to last, providing reliable performance and durability when you need it most. And with our comprehensive documentation and tutorials, you can integrate our products seamlessly into your workflow, maximizing efficiency and productivity.","Whether you're a DIY enthusiast or a seasoned contractor, ScrewFast has the solutions you need to succeed. Experience the difference for yourself and see why ScrewFast is the trusted choice for hardware and construction needs."]};
				const file = "/Users/jobs/Developer/5-WORKING-CACHE/5.A-NOTEBOOKS/5.B.2-JMBFLOORS/web1/ScrewFast-astro/src/content/blog/post-3.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
