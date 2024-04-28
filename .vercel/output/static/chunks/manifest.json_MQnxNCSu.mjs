import { g as getImage } from './_astro_assets_BqnOpEwY.mjs';
import { i as icon } from './icon_iUmNWwCc.mjs';

const maskableIcon = new Proxy({"src":"/_astro/icon-maskable.C1A7b-dw.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jobs/Developer/5-WORKING-CACHE/5.A-NOTEBOOKS/5.B.2-JMBFLOORS/web1/ScrewFast-astro/src/images/icon-maskable.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/jobs/Developer/5-WORKING-CACHE/5.A-NOTEBOOKS/5.B.2-JMBFLOORS/web1/ScrewFast-astro/src/images/icon-maskable.png");
							return target[name];
						}
					});

const sizes = [192, 512];
const favicons = [
  {
    purpose: "any",
    src: icon,
    sizes
  },
  {
    purpose: "maskable",
    src: maskableIcon,
    sizes
  }
];
const GET = async () => {
  const icons = await Promise.all(
    favicons.flatMap(
      (favicon) => favicon.sizes.map(async (size) => {
        const image = await getImage({
          src: favicon.src,
          width: size,
          height: size,
          format: "png"
        });
        return {
          src: image.src,
          sizes: `${image.options.width}x${image.options.height}`,
          type: `image/${image.options.format}`,
          purpose: favicon.purpose
        };
      })
    )
  );
  const manifest = {
    short_name: "ScrewFast",
    name: "ScrewFast",
    icons,
    display: "minimal-ui",
    id: "/",
    start_url: "/",
    theme_color: "#FFEDD5",
    background_color: "#262626"
  };
  return new Response(JSON.stringify(manifest));
};

export { GET };
