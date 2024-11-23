import * as universal from '../entries/pages/homebrew/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/homebrew/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/homebrew/+page.ts";
export const imports = ["_app/immutable/nodes/3.BDveKLDD.js","_app/immutable/chunks/disclose-version.yjY8Bsl_.js","_app/immutable/chunks/runtime.XeqWOett.js","_app/immutable/chunks/Components.WbO55xFI.js","_app/immutable/chunks/theme.BO7MokfJ.js","_app/immutable/chunks/props.CFVCN39j.js"];
export const stylesheets = ["_app/immutable/assets/theme.lu8Pa3zS.css"];
export const fonts = [];
