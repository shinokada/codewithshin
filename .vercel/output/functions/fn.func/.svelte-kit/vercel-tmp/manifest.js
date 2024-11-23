export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","images/.DS_Store","images/codewithshin-dark.png","images/codewithshin-dark.svg","images/codewithshin.png","images/codewithshin.svg","images/components/accordion-dark.svg","images/components/accordion.svg","images/components/alert-dark.svg","images/components/alert.svg","images/components/avatar-dark.svg","images/components/avatar.svg","images/components/badge-dark.svg","images/components/badge.svg","images/components/banner-dark.svg","images/components/banner.svg","images/components/bottom-navigation-dark.svg","images/components/bottom-navigation.svg","images/components/breadcrumb-dark.svg","images/components/breadcrumb.svg","images/components/button-group-dark.svg","images/components/button-group.svg","images/components/buttons-dark.svg","images/components/buttons.svg","images/components/card-dark.svg","images/components/card.svg","images/components/carousel-dark.svg","images/components/carousel.svg","images/components/charts-dark.svg","images/components/charts.svg","images/components/darkmode-dark.svg","images/components/darkmode.svg","images/components/device-mockups-dark.svg","images/components/device-mockups.svg","images/components/drawer-dark.svg","images/components/drawer.svg","images/components/dropdown-dark.svg","images/components/dropdown.svg","images/components/footer-dark.svg","images/components/footer.svg","images/components/forms-dark.svg","images/components/forms.svg","images/components/gallery-dark.svg","images/components/gallery.svg","images/components/indicators-dark.svg","images/components/indicators.svg","images/components/jumbotron-dark.svg","images/components/jumbotron.svg","images/components/kbd-dark.svg","images/components/kbd.svg","images/components/list-group-dark.svg","images/components/list-group.svg","images/components/mega-menu-dark.svg","images/components/mega-menu.svg","images/components/modal-dark.svg","images/components/modal.svg","images/components/navbar-dark.svg","images/components/navbar.svg","images/components/pagination-dark.svg","images/components/pagination.svg","images/components/popover-dark.svg","images/components/popover.svg","images/components/progress-dark.svg","images/components/progress.svg","images/components/rating-dark.svg","images/components/rating.svg","images/components/sidebar-dark.svg","images/components/sidebar.svg","images/components/skeleton-dark.svg","images/components/skeleton.svg","images/components/speed-dial-dark.svg","images/components/speed-dial.svg","images/components/spinner-dark.svg","images/components/spinner.svg","images/components/stepper-dark.svg","images/components/stepper.svg","images/components/tab-dark.svg","images/components/tab.svg","images/components/table-dark.svg","images/components/table.svg","images/components/timeline-dark.svg","images/components/timeline.svg","images/components/toast-dark.svg","images/components/toast.svg","images/components/tooltip-dark.svg","images/components/tooltip.svg","images/components/typography-dark.svg","images/components/typography.svg","images/components/video-dark.svg","images/components/video.svg","images/forms/checkbox-dark.svg","images/forms/checkbox.svg","images/forms/file-input-dark.svg","images/forms/file-input.svg","images/forms/floating-label-dark.svg","images/forms/floating-label.svg","images/forms/input-field-dark.svg","images/forms/input-field.svg","images/forms/radio-dark.svg","images/forms/radio.svg","images/forms/range-dark.svg","images/forms/range.svg","images/forms/search-input/ch-flag.svg","images/forms/search-input/de-flag.svg","images/forms/search-input/it-flag.svg","images/forms/search-input/usa-flag.svg","images/forms/search-input-dark.svg","images/forms/search-input.svg","images/forms/select-dark.svg","images/forms/select.svg","images/forms/textarea-dark.svg","images/forms/textarea.svg","images/forms/toggle-dark.svg","images/forms/toggle.svg","images/hero.png","images/hero.svg","images/icons/awesomeall.svg","images/icons/flowbite-svelte-icons-dark.png","images/icons/flowbite-svelte-icons.png","images/icons/svelte-heros-v2.svg","images/typography/blockquote-dark.svg","images/typography/blockquote.svg","images/typography/heading-dark.svg","images/typography/heading.svg","images/typography/hr-dark.svg","images/typography/hr.svg","images/typography/image-dark.svg","images/typography/image.svg","images/typography/link-dark.svg","images/typography/link.svg","images/typography/list-dark.svg","images/typography/list.svg","images/typography/paragraph-dark.svg","images/typography/paragraph.svg","images/typography/text-dark.svg","images/typography/text.svg","site.webmanifest","sitemap.xml","styles/awesomeall.css"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".xml":"text/xml",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.zkSqp0Mk.js","app":"_app/immutable/entry/app.vhV5G2AD.js","imports":["_app/immutable/entry/start.zkSqp0Mk.js","_app/immutable/chunks/entry.CHNtCQNg.js","_app/immutable/chunks/runtime.XeqWOett.js","_app/immutable/entry/app.vhV5G2AD.js","_app/immutable/chunks/runtime.XeqWOett.js","_app/immutable/chunks/disclose-version.yjY8Bsl_.js","_app/immutable/chunks/props.CFVCN39j.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/homebrew",
				pattern: /^\/homebrew\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/python-and-jupyter",
				pattern: /^\/python-and-jupyter\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/svelte-svg-icon-sets",
				pattern: /^\/svelte-svg-icon-sets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/svelte",
				pattern: /^\/svelte\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/terminal-tools",
				pattern: /^\/terminal-tools\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/web-apps",
				pattern: /^\/web-apps\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
