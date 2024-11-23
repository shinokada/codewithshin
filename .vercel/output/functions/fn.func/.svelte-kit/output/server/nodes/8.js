import * as universal from '../entries/pages/web-apps/_page.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/web-apps/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/web-apps/+page.ts";
export const imports = ["_app/immutable/nodes/8.C65eyqcX.js","_app/immutable/chunks/disclose-version.yjY8Bsl_.js","_app/immutable/chunks/runtime.XeqWOett.js","_app/immutable/chunks/Components.WbO55xFI.js","_app/immutable/chunks/theme.BO7MokfJ.js","_app/immutable/chunks/props.CFVCN39j.js"];
export const stylesheets = ["_app/immutable/assets/theme.lu8Pa3zS.css"];
export const fonts = [];
