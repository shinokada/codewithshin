import { Y as spread_attributes, S as pop, Q as push, W as attr, X as stringify, a0 as spread_props, V as escape_html, a2 as ensure_array_like } from "./index.js";
import { i as card } from "./theme.js";
import { twMerge } from "tailwind-merge";
function Card($$payload, $$props) {
  push();
  let {
    children,
    href,
    color = "gray",
    horizontal = false,
    shadow = "md",
    reverse = false,
    img,
    padding = "lg",
    size = "sm",
    class: className,
    imgClass,
    contentClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, image, content } = card({
    size,
    color,
    shadow,
    padding,
    horizontal,
    reverse,
    href: !!href
  });
  const commonProps = {
    class: base({ class: className }),
    ...restProps
  };
  const anchorProps = { ...commonProps, href };
  const divProps = { ...commonProps, type: "presentation" };
  function childSlot($$payload2) {
    if (img) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<img${attr("class", image({ class: imgClass }))}${attr("src", img.src)}${attr("alt", img.alt)}> <div${attr("class", content({ class: contentClass }))}>`;
      children($$payload2);
      $$payload2.out += `<!----></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<div${attr("class", content({ class: contentClass }))}>`;
      children($$payload2);
      $$payload2.out += `<!----></div>`;
    }
    $$payload2.out += `<!--]-->`;
  }
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({ ...anchorProps })}>`;
    childSlot($$payload);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...divProps })}>`;
    childSlot($$payload);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function GitHubVersion($$payload, $$props) {
  push();
  let {
    user,
    repo,
    include_prereleases,
    sort,
    filter,
    display_name = "release",
    style = "flat",
    logo,
    logoColor,
    logoSize,
    label = "",
    labelColor,
    color,
    cacheSeconds,
    link,
    class: classname,
    $$slots,
    $$events,
    ...attributes
  } = $$props;
  const styleOpt = style ? `style=${style}` : "style=flat";
  const include_prereleasesOpt = include_prereleases ? `&include_prereleases` : "";
  const sortOpt = sort ? `&sort=${sort}` : "";
  const filterOpt = filter ? `&filter=${filter}` : "";
  const logoOpt = logo ? `&logo=${logo}` : "";
  const logoColorOpt = logoColor ? `&logoColor=${logoColor}` : "";
  const logoSizeOpt = logoSize ? `&logoSize=${logoSize}` : "";
  const labelOpt = label ? `&label=${encodeURIComponent(label)}` : "";
  const labelColorOpt = labelColor ? `&labelColor=${labelColor}` : "";
  const colorOpt = color ? `&color=${color}` : "";
  const cacheSecondsOpt = cacheSeconds ? `&cacheSeconds=${cacheSeconds}` : "";
  const link1 = link ? `&link=${encodeURIComponent(link[0])}` : "";
  const link2 = link ? `&link=${encodeURIComponent(link[1])}` : "";
  let srcData = `https://img.shields.io/github/v/${display_name}/${user}/${repo}?${styleOpt}${include_prereleasesOpt}${sortOpt}${filterOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`;
  if (link) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<object${attr("data", srcData)}${attr("title", `GitHub ${stringify(display_name)} - ${stringify(user)}/${stringify(repo)}`)}${attr("class", classname)}></object>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img${spread_attributes({
      src: srcData,
      alt: `GitHub ${stringify(display_name)} - ${stringify(user)}/${stringify(repo)}`,
      class: classname,
      ...attributes
    })} onload="this.__e=event" onerror="this.__e=event">`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function NpmVersion($$payload, $$props) {
  push();
  let {
    packageName,
    tag,
    style,
    logo,
    logoColor,
    logoSize,
    label,
    labelColor,
    color,
    cacheSeconds,
    link,
    class: classname,
    $$slots,
    $$events,
    ...attributes
  } = $$props;
  const styleOpt = style ? `style=${style}` : "style=flat";
  const logoOpt = logo ? `&logo=${logo}` : "";
  const tagOpt = tag ? `/${tag}` : "";
  const logoColorOpt = logoColor ? `&logoColor=${logoColor}` : "";
  const logoSizeOpt = logoSize ? `&logoSize=${logoSize}` : "";
  const labelOpt = label ? `&label=${encodeURIComponent(label)}` : "";
  const labelColorOpt = labelColor ? `&labelColor=${labelColor}` : "";
  const colorOpt = color ? `&color=${color}` : "";
  const cacheSecondsOpt = cacheSeconds ? `&cacheSeconds=${cacheSeconds}` : "";
  const link1 = link ? `&link=${encodeURIComponent(link[0])}` : "";
  const link2 = link ? `&link=${encodeURIComponent(link[1])}` : "";
  let srcData = `https://img.shields.io/npm/v/${packageName}${tagOpt}?${styleOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`;
  if (link) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<object${attr("data", srcData)}${attr("title", packageName)}${attr("class", classname)}></object>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img${spread_attributes({
      src: srcData,
      alt: `NPM version of ${stringify(packageName)}`,
      class: classname,
      ...attributes
    })} onload="this.__e=event" onerror="this.__e=event">`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function PypiVersion($$payload, $$props) {
  push();
  let {
    packageName,
    pypiBaseUrl,
    style,
    logo,
    logoColor,
    logoSize,
    label,
    labelColor,
    color,
    cacheSeconds,
    link,
    class: classname,
    $$slots,
    $$events,
    ...attributes
  } = $$props;
  const styleOpt = style ? `style=${style}` : "style=flat";
  const pypiBaseUrlOpt = pypiBaseUrl ? `&pypiBaseUrl=${pypiBaseUrl}` : "";
  const logoOpt = logo ? `&logo=${logo}` : "";
  const logoColorOpt = logoColor ? `&logoColor=${logoColor}` : "";
  const logoSizeOpt = logoSize ? `&logoSize=${logoSize}` : "";
  const labelOpt = label ? `&label=${encodeURIComponent(label)}` : "";
  const labelColorOpt = labelColor ? `&labelColor=${labelColor}` : "";
  const colorOpt = color ? `&color=${color}` : "";
  const cacheSecondsOpt = cacheSeconds ? `&cacheSeconds=${cacheSeconds}` : "";
  const link1 = link ? `&link=${encodeURIComponent(link[0])}` : "";
  const link2 = link ? `&link=${encodeURIComponent(link[1])}` : "";
  let srcData = `https://img.shields.io/pypi/v/${packageName}?${styleOpt}${pypiBaseUrlOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`;
  if (link) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<object${attr("data", srcData)}${attr("title", packageName)}${attr("class", classname)}></object>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img${spread_attributes({
      src: srcData,
      alt: `Pypi version of ${stringify(packageName)}`,
      class: classname,
      ...attributes
    })} onload="this.__e=event" onerror="this.__e=event">`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function StaticBadge($$payload, $$props) {
  push();
  let {
    badgeContent,
    style,
    logo,
    logoColor,
    logoSize,
    label,
    labelColor,
    color,
    cacheSeconds,
    link,
    class: classname,
    $$slots,
    $$events,
    ...attributes
  } = $$props;
  const styleOpt = style ? `style=${style}` : "style=flat";
  const logoOpt = logo ? `&logo=${logo}` : "";
  const logoColorOpt = logoColor ? `&logoColor=${logoColor}` : "";
  const logoSizeOpt = logoSize ? `&logoSize=${logoSize}` : "";
  const labelOpt = label ? `&label=${encodeURIComponent(label)}` : "";
  const labelColorOpt = labelColor ? `&labelColor=${labelColor}` : "";
  const colorOpt = color ? `&color=${color}` : "";
  const cacheSecondsOpt = cacheSeconds ? `&cacheSeconds=${cacheSeconds}` : "";
  const link1 = link ? `&link=${encodeURIComponent(link[0])}` : "";
  const link2 = link ? `&link=${encodeURIComponent(link[1])}` : "";
  let srcData = `https://img.shields.io/badge/${encodeURIComponent(badgeContent)}?${styleOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`;
  if (link) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<object${attr("data", srcData)}${attr("title", badgeContent)}${attr("class", classname)}></object>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img${spread_attributes({
      src: srcData,
      alt: `Badge for ${stringify(badgeContent)}`,
      class: classname,
      ...attributes
    })} onload="this.__e=event" onerror="this.__e=event">`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function CompoCard($$payload, $$props) {
  let {
    name = "",
    path = "",
    thumnailSize,
    headerColor = "bg-gray-50 dark:bg-gray-700",
    cardHeight = "h-52",
    description = "Hello, I am description",
    icon = "",
    npm_version,
    github_release,
    pypi_version,
    static_badge,
    $$slots,
    $$events,
    ...attributes
  } = $$props;
  Card($$payload, spread_props([
    { href: path, padding: "none" },
    attributes,
    {
      class: "dark:hover:shadow-lg-light !max-w-none shadow-none hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900",
      children: ($$payload2) => {
        $$payload2.out += `<div${attr("class", `${stringify(headerColor)} flex items-center justify-between rounded-t-md border-b border-gray-200 px-5 py-2.5 dark:border-gray-700`)}><span class="text-base font-medium text-gray-900 dark:text-white">${escape_html(name)}</span> <span class="text-gray-500 dark:text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></span></div> <div${attr("class", `p-8 ${stringify(cardHeight)}`)}>`;
        if (icon) {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<div${attr("class", `relative h-5/6 dark:hidden ${stringify(thumnailSize ? thumnailSize : "w-64")}`)}><span style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img${attr("alt", name)}${attr("src", `/images/icons/${stringify(icon)}.png`)}> ${escape_html(description)}</span></div> <div${attr("class", `relative hidden h-5/6 dark:block ${stringify(thumnailSize ? thumnailSize : "w-64")}`)}><span style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img${attr("alt", name)}${attr("src", `/images/icons/${stringify(icon)}-dark.png`)}> ${escape_html(description)}</span></div>`;
        } else {
          $$payload2.out += "<!--[!-->";
          $$payload2.out += `<div class="grid gap-4">`;
          if (npm_version) {
            $$payload2.out += "<!--[-->";
            NpmVersion($$payload2, spread_props([npm_version]));
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (github_release) {
            $$payload2.out += "<!--[-->";
            GitHubVersion($$payload2, spread_props([github_release]));
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (pypi_version) {
            $$payload2.out += "<!--[-->";
            PypiVersion($$payload2, spread_props([pypi_version]));
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> `;
          if (static_badge) {
            $$payload2.out += "<!--[-->";
            StaticBadge($$payload2, spread_props([static_badge]));
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> ${escape_html(description)}</div>`;
        }
        $$payload2.out += `<!--]--></div>`;
      },
      $$slots: { default: true }
    }
  ]));
}
function Components($$payload, $$props) {
  push();
  let {
    componentData = [],
    colNum = 3,
    class: classname
  } = $$props;
  const cols = {
    1: "grid-cols-1 gap-4 ",
    2: "grid-cols-1 gap-4 sm:grid-cols-2 ",
    3: "grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3"
  };
  let divCls = twMerge("grid", cols[colNum], classname);
  const each_array = ensure_array_like(componentData);
  $$payload.out += `<div${attr("class", divCls)}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let {
      path,
      name,
      thumnailSize,
      icon,
      npm_version,
      github_release,
      pypi_version,
      static_badge,
      description
    } = each_array[$$index];
    CompoCard($$payload, {
      name,
      thumnailSize,
      path,
      icon,
      npm_version,
      github_release,
      pypi_version,
      static_badge,
      description,
      headerColor: "bg-gray-50 dark:bg-sky-800"
    });
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  Card as C,
  Components as a
};
