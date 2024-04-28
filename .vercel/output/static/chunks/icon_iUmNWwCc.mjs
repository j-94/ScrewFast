const icon = new Proxy({"src":"/_astro/icon.BJD5tiNw.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jobs/Developer/5-WORKING-CACHE/5.A-NOTEBOOKS/5.B.2-JMBFLOORS/web1/ScrewFast-astro/src/images/icon.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/jobs/Developer/5-WORKING-CACHE/5.A-NOTEBOOKS/5.B.2-JMBFLOORS/web1/ScrewFast-astro/src/images/icon.png");
							return target[name];
						}
					});

export { icon as i };
