import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.CcBsrl1Z.js","_app/immutable/chunks/disclose-version.yjY8Bsl_.js","_app/immutable/chunks/runtime.XeqWOett.js","_app/immutable/chunks/theme.BO7MokfJ.js","_app/immutable/chunks/props.CFVCN39j.js","_app/immutable/chunks/stores.CX_myj27.js","_app/immutable/chunks/entry.CHNtCQNg.js"];
export const stylesheets = ["_app/immutable/assets/0.BJskP0Ed.css","_app/immutable/assets/theme.lu8Pa3zS.css"];
export const fonts = [];
