import * as universal from '../entries/pages/svelte/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/svelte/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/svelte/+page.ts";
export const imports = ["_app/immutable/nodes/5.DhHbO6NW.js","_app/immutable/chunks/disclose-version.yjY8Bsl_.js","_app/immutable/chunks/runtime.XeqWOett.js","_app/immutable/chunks/Components.WbO55xFI.js","_app/immutable/chunks/theme.BO7MokfJ.js","_app/immutable/chunks/props.CFVCN39j.js"];
export const stylesheets = ["_app/immutable/assets/theme.lu8Pa3zS.css"];
export const fonts = [];
