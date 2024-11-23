import { T as head, S as pop, Q as push, V as escape_html, W as attr, X as stringify, Y as spread_attributes, R as setContext, Z as getContext, _ as store_get, $ as unsubscribe_stores, a0 as spread_props } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { d as darkmode, f as footer, a as footerBrand, b as footerLi, c as footerUl, n as navbar, e as navbrand, g as navLi, h as navUl } from "../../chunks/theme.js";
import { w as writable } from "../../chunks/index2.js";
function RunesMetaTags($$payload, $$props) {
  push();
  let {
    title,
    robots,
    description,
    keywords,
    twitter,
    og
  } = $$props;
  head($$payload, ($$payload2) => {
    if (title) {
      $$payload2.out += "<!--[-->";
      $$payload2.title = `<title>${escape_html(title)}</title>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (description) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="description"${attr("content", description)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (keywords) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="keywords"${attr("content", keywords)}>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (robots !== false) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<meta name="robots" content="index,follow">`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (twitter) {
      $$payload2.out += "<!--[-->";
      if (twitter?.card) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:card"${attr("content", twitter.card)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.handle) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:creator"${attr("content", twitter.handle)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.title) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:title"${attr("content", twitter.title)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.site) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:site"${attr("content", twitter.site)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.description) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:description"${attr("content", twitter.description)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.image) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:image"${attr("content", twitter.image)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (twitter?.imageAlt) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta name="twitter:image:alt"${attr("content", twitter.imageAlt)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (og) {
      $$payload2.out += "<!--[-->";
      if (og?.url) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:url"${attr("content", og.url)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.type) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:type"${attr("content", og.type)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.title) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:title"${attr("content", og.title)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.description) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:description"${attr("content", og.description)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.image) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:image"${attr("content", og.image)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.imageAlt) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:image:alt"${attr("content", og.imageAlt)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.imageWidth) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:image:width"${attr("content", og.imageWidth)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.imageHeight) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:image:height"${attr("content", og.imageHeight)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (og?.siteName) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<meta property="og:site_name"${attr("content", og.siteName)}>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  });
  pop();
}
function Runatics($$payload, $$props) {
  push();
  let { analyticsId } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<script async${attr("src", `https://www.googletagmanager.com/gtag/js?id=${stringify(analyticsId)}`)}><\/script><!---->`;
  });
  if (!analyticsId) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h2>You need to provide your Google Analytics ID, "ANALYTICS_ID", in .env file.</h2> <p>Please read the <a href="https://runatics.codewithshin.com/">docs</a> how to set it up.</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function uiHelpers() {
  let isOpen = false;
  function toggle() {
    isOpen = !isOpen;
  }
  function close() {
    isOpen = false;
  }
  function open() {
    isOpen = true;
  }
  return {
    get isOpen() {
      return isOpen;
    },
    set isOpen(value) {
      isOpen = value;
    },
    toggle,
    close,
    open
  };
}
function Darkmode($$payload, $$props) {
  push();
  let {
    class: className,
    lightIcon,
    darkIcon,
    size = "md",
    ariaLabel = "Dark mode",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const btnCls = darkmode({ class: className });
  const sizes = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6" };
  head($$payload, ($$payload2) => {
    $$payload2.out += `<script>
    if ("THEME_PREFERENCE_KEY" in localStorage) {
      localStorage.getItem("THEME_PREFERENCE_KEY") === "dark" ? window.document.documentElement.classList.add("dark") : window.document.documentElement.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) window.document.documentElement.classList.add("dark");
    }
  <\/script><!---->`;
  });
  $$payload.out += `<button${spread_attributes({
    "aria-label": ariaLabel,
    type: "button",
    ...restProps,
    class: btnCls
  })}><span class="hidden dark:block">`;
  if (lightIcon) {
    $$payload.out += "<!--[-->";
    lightIcon($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<svg role="img" aria-label="Light mode"${attr("class", sizes[size])} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
    0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>`;
  }
  $$payload.out += `<!--]--></span> <span class="block dark:hidden">`;
  if (darkIcon) {
    $$payload.out += "<!--[-->";
    darkIcon($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<svg role="img" aria-label="Dark mode"${attr("class", sizes[size])} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>`;
  }
  $$payload.out += `<!--]--></span></button>`;
  pop();
}
function Footer($$payload, $$props) {
  push();
  let {
    children,
    footerType = "default",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const footerCls = footer({ footerType, className });
  $$payload.out += `<footer${spread_attributes({ ...restProps, class: footerCls })}>`;
  children($$payload);
  $$payload.out += `<!----></footer>`;
  pop();
}
function FooterBrand($$payload, $$props) {
  push();
  let {
    children,
    aClass,
    spanClass,
    imgClass,
    href,
    src,
    alt,
    name,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, span, img } = footerBrand();
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      ...restProps,
      href,
      class: base({ class: aClass })
    })}>`;
    if (src) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<img${attr("src", src)}${attr("class", img({ class: imgClass }))}${attr("alt", alt)}>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span${attr("class", span({ class: spanClass }))}>${escape_html(name)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (children) {
      $$payload.out += "<!--[-->";
      children($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img${attr("src", src)}${attr("class", img({ class: imgClass }))}${attr("alt", alt)}>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function FooterLi($$payload, $$props) {
  push();
  let {
    children,
    liClass,
    aClass,
    href,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, link } = footerLi();
  $$payload.out += `<li${attr("class", base({ class: liClass }))}><a${spread_attributes({
    ...restProps,
    href,
    class: link({ class: aClass })
  })}>`;
  children($$payload);
  $$payload.out += `<!----></a></li>`;
  pop();
}
function FooterUl($$payload, $$props) {
  push();
  let {
    class: ulClass,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const base = footerUl({ class: ulClass });
  $$payload.out += `<ul${spread_attributes({ ...restProps, class: base })}>`;
  children($$payload);
  $$payload.out += `<!----></ul>`;
  pop();
}
function Navbar($$payload, $$props) {
  push();
  let {
    children,
    navSlotBlock,
    navSlotHiddenTop,
    navSlotHiddenBottom,
    toggleNav,
    closeNav = () => {
    },
    navStatus,
    fluid,
    brand,
    hamburgerMenu = true,
    breakPoint = "md",
    navClass,
    divClass,
    btnClass,
    div2Class,
    activeClass,
    nonActiveClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const {
    base,
    container,
    toggleButton,
    menuContainer,
    activeLink,
    inactiveLink
  } = navbar({ fluid, breakPoint, navStatus });
  setContext("navbarContext", {
    navStatus,
    breakPoint,
    get activeClass() {
      return activeLink({ class: activeClass });
    },
    get nonActiveClass() {
      return inactiveLink({ class: nonActiveClass });
    },
    closeNav
  });
  function getMenuProps(isOpen) {
    return isOpen ? { role: "menu", tabindex: 0 } : { role: "none", tabindex: -1 };
  }
  $$payload.out += `<nav${spread_attributes({
    ...restProps,
    class: base({ class: navClass })
  })}><div${attr("class", container({ class: divClass }))}>`;
  if (brand) {
    $$payload.out += "<!--[-->";
    brand($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (hamburgerMenu) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button type="button"${attr("class", toggleButton({ class: btnClass }))}><span class="sr-only">Open main menu</span> <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (navSlotBlock) {
    $$payload.out += "<!--[-->";
    navSlotBlock($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (navStatus) {
    $$payload.out += "<!--[-->";
    if (navSlotHiddenTop) {
      $$payload.out += "<!--[-->";
      navSlotHiddenTop($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div${spread_attributes({
      class: menuContainer({ class: div2Class }),
      ...getMenuProps(true)
    })}>`;
    children($$payload);
    $$payload.out += `<!----></div> `;
    if (navSlotHiddenBottom) {
      $$payload.out += "<!--[-->";
      navSlotHiddenBottom($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({
      class: menuContainer({ class: div2Class }),
      ...getMenuProps(false)
    })}>`;
    children($$payload);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></div></nav>`;
  pop();
}
function NavBrand($$payload, $$props) {
  push();
  let {
    children,
    siteName,
    closeNav,
    aClass,
    spanClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const context = getContext("navbarContext");
  closeNav = context.closeNav ?? closeNav;
  const { base, span } = navbrand();
  $$payload.out += `<a${spread_attributes({
    href: "/",
    ...restProps,
    class: base({ class: aClass })
  })}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (siteName) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span${attr("class", span({ class: spanClass }))}>${escape_html(siteName)}</span>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></a>`;
  pop();
}
function NavLi($$payload, $$props) {
  push();
  let {
    closeNav,
    href,
    children,
    aClass,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let breakPoint;
  const context = getContext("navbarContext");
  breakPoint = context.breakPoint ?? "md";
  closeNav = context.closeNav ?? closeNav;
  const activeUrlStore = getContext("activeUrl");
  let navUrl = "";
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });
  let isActive = navUrl ? href === navUrl : false;
  const { base, link } = navLi({ active: isActive, breakPoint });
  $$payload.out += `<li${attr("class", base({ class: className }))}><a${spread_attributes({
    href,
    ...restProps,
    "aria-current": isActive,
    class: link({ class: aClass })
  })}>`;
  children($$payload);
  $$payload.out += `<!----></a></li>`;
  pop();
}
function NavUl($$payload, $$props) {
  push();
  let {
    children,
    activeUrl = "",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let breakPoint;
  const context = getContext("navbarContext");
  breakPoint = context.breakPoint ?? "md";
  const base = navUl({ breakPoint, className });
  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);
  $$payload.out += `<ul${spread_attributes({ ...restProps, class: base })}>`;
  children($$payload);
  $$payload.out += `<!----></ul>`;
  pop();
}
function GitHub($$payload, $$props) {
  let { size = "lg" } = $$props;
  const sizes = { sm: "w-4 h-4", md: "w-5 h-5", lg: "w-6 h-6" };
  $$payload.out += `<svg${attr("class", sizes[size])} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false" data-icon="github" role="img"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>`;
}
function XTwitterBrands($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  let {
    size = ctx.size || "24",
    role = ctx.role || "img",
    color = ctx.color || "currentColor",
    ariaLabel = "x twitter brands,",
    class: classname,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      ...restProps,
      role,
      width: size,
      height: size,
      fill: color,
      class: classname,
      "aria-label": ariaLabel,
      viewBox: "0 0 512 512"
    },
    void 0,
    void 0,
    3
  )}><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>`;
  pop();
}
function MediumBrands($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  let {
    size = ctx.size || "24",
    role = ctx.role || "img",
    color = ctx.color || "currentColor",
    ariaLabel = "medium brands,",
    class: classname,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      ...restProps,
      role,
      width: size,
      height: size,
      fill: color,
      class: classname,
      "aria-label": ariaLabel,
      viewBox: "0 0 640 512"
    },
    void 0,
    void 0,
    3
  )}><path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z"></path></svg>`;
  pop();
}
function Nav($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let nav = uiHelpers();
  let navStatus = false;
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let divClass = "ml-auto w-full";
  let ulclass = "dark:lg:bg-transparent lg:space-x-4";
  let navClass = "w-full divide-gray-200 border-gray-200 bg-gray-50 dark:bg-sky-950 text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:transparent dark:text-gray-400 sm:px-4";
  $$payload.out += `<header class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-sky-950">`;
  {
    let brand = function($$payload2) {
      NavBrand($$payload2, {
        siteName: "codewithshin.com",
        spanClass: "self-center whitespace-nowrap text-2xl font-semibold text-primary-900 dark:text-primary-500"
      });
      $$payload2.out += `<!----> <div class="ml-auto flex items-center lg:order-1"><a class="hidden whitespace-normal rounded-lg p-2.5 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-0 focus:ring-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:inline-block" href="https://medium.com/@shinichiokada">`;
      MediumBrands($$payload2, {});
      $$payload2.out += `<!----></a> <a class="hidden whitespace-normal rounded-lg p-2.5 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-0 focus:ring-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:inline-block" href="https://twitter.com/shinokada">`;
      XTwitterBrands($$payload2, { size: "20" });
      $$payload2.out += `<!----></a> <a class="hidden whitespace-normal rounded-lg p-2.5 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-0 focus:ring-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:inline-block" href="https://github.com/shinokada/">`;
      GitHub($$payload2, {});
      $$payload2.out += `<!----></a> `;
      Darkmode($$payload2, {
        class: "inline-block hover:text-gray-900 dark:hover:text-white"
      });
      $$payload2.out += `<!----></div>`;
    };
    Navbar($$payload, {
      navClass,
      toggleNav,
      closeNav,
      navStatus,
      breakPoint: "lg",
      fluid: true,
      div2Class: divClass,
      brand,
      children: ($$payload2) => {
        NavUl($$payload2, {
          activeUrl,
          class: ulclass,
          children: ($$payload3) => {
            NavLi($$payload3, {
              href: "/svelte",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Svelte`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/svelte-svg-icon-sets",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Icons`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/terminal-tools",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Terminal`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/python-and-jupyter",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Python`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/homebrew",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Homebrew`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/web-apps",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Web apps`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "https://blog.codewithshin.com",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Blog`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
      },
      $$slots: { brand: true, default: true }
    });
  }
  $$payload.out += `<!----></header>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Footer_1($$payload) {
  Footer($$payload, {
    class: "mx-auto max-w-7xl bg-white shadow-none dark:bg-sky-950",
    footerType: "logo",
    children: ($$payload2) => {
      $$payload2.out += `<div class="sm:flex sm:items-center sm:justify-between">`;
      FooterBrand($$payload2, {
        href: "/",
        name: "codewithshin.com",
        spanClass: "text-primary-900 dark:text-primary-500"
      });
      $$payload2.out += `<!----> `;
      FooterUl($$payload2, {
        class: "mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0",
        children: ($$payload3) => {
          FooterLi($$payload3, {
            href: "/svelte",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Svelte`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            href: "/svelte-svg-icon-sets",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Icons`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            href: "/terminal-tools",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Terminal`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            href: "/python-and-jupyter",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Python`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            href: "/homebrew",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Homebrew`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            href: "/web-apps",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Web apps`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            href: "https://blog.codewithshin.com/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Blog`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let { children, data } = $$props;
  let metaTags = store_get($$store_subs ??= {}, "$page", page).data.pageMetaTags ? store_get($$store_subs ??= {}, "$page", page).data.pageMetaTags : data.layoutMetaTags;
  const analyticsId = data.ANALYTICS_ID;
  Runatics($$payload, { analyticsId });
  $$payload.out += `<!----> `;
  RunesMetaTags($$payload, spread_props([metaTags]));
  $$payload.out += `<!----> `;
  Nav($$payload);
  $$payload.out += `<!----> <section class="border-b border-gray-200 pb-16 dark:border-gray-600"><div class="mx-auto max-w-7xl px-4 pt-8">`;
  children($$payload);
  $$payload.out += `<!----></div></section> `;
  Footer_1($$payload);
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
