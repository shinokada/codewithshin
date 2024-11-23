import { Z as getContext, Y as spread_attributes, W as attr, V as escape_html, S as pop, Q as push, X as stringify, a0 as spread_props } from "../../chunks/index.js";
import "../../chunks/theme.js";
import { C as Card, a as Components } from "../../chunks/Components.js";
function Bash($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  let {
    size = ctx.size || "24",
    role = ctx.role || "img",
    ariaLabel = "bash",
    class: classname,
    title,
    desc,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      class: classname,
      ...restProps,
      "aria-label": ariaLabel,
      role,
      viewBox: "0 0 512 512",
      "aria-describedby": hasDescription ? ariaDescribedby : void 0
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path d="m0 0H512V512H0" fill="none"></path><path fill="#2A3238" d="m268 249q-16 12-16 30v148q0 22 19 21l153-93V176q-9-19-29-6m-88.1 106.1q1.7-1 2 2v10.3q7.6-2.8 12.3-1.3 1 .4.7 2.2l-2.8 11q-.5 2-3 1c-11-2-21 8-19.3 17s19-1 26 12-3 34-13.5 41.4l.3 11q0 2-1.2 3l-7 4q-2 1-2-2v-9.9q-8 3.4-14 1.6-2-.4-1.3-3l2.4-10q1-3 3-1.7c16 3 26-13 22-21s-19 0-25.2-10 0-30 12.7-39.5v-10.5q0-2.8 2-4"></path><path fill="none" stroke="#2A3238" stroke-width="9" d="m109 139q-25 15-25 44v146q0 29 26 44l123 73q23 13 46 0l123-73q26-15 26-44V183q0-29-25-44L278 65q-23-12-44 0z"></path><path fill="#4DA925" d="m342.4 364.7q-1.1.7-1.1 2v8c0 1.3.9 1.5 1.6 1l32-19.4q.9-.6.9-2.4v-7c0-1.5-1-1.4-1.6-1"></path></svg>`;
  pop();
}
function Css3($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  let {
    size = ctx.size || "24",
    role = ctx.role || "img",
    ariaLabel = "css3",
    class: classname,
    title,
    desc,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      class: classname,
      ...restProps,
      "aria-label": ariaLabel,
      role,
      viewBox: "0 0 512 512",
      fill: "#264de4",
      "aria-describedby": hasDescription ? ariaDescribedby : void 0
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path fill="#264de4" d="M72 460L30 0h451l-41 460-184 52"></path><path fill="#2965f1" d="M256 37V472l149-41 35-394"></path><path fill="#ebebeb" d="m114 94h142v56H119m5 58h132v57H129m3 28h56l4 45 64 17v59L139 382"></path><path fill="#fff" d="m256 208v57h69l-7 73-62 17v59l115-32 26-288H256v56h80l-5.5 58Z"></path></svg>`;
  pop();
}
function Git($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  let {
    size = ctx.size || "24",
    role = ctx.role || "img",
    ariaLabel = "git",
    class: classname,
    title,
    desc,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      class: classname,
      ...restProps,
      "aria-label": ariaLabel,
      role,
      viewBox: "0 0 512 512",
      "aria-describedby": hasDescription ? ariaDescribedby : void 0
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path d="m0 0H512V512H0" fill="none"></path><path fill="#f05133" d="M441 240a25 25 0 010 32L272 441a24 24 0 01-33 0L71 272a24 24 0 010-34L186 123l44 44a29 29 0 0015 38V310a29 29 0 1024 1V207l40 40a29 29 0 1018-17l-43-43a29 29 0 00-37-37l-44-44 35-35a24 24 0 0134 0L441 240"></path></svg>`;
  pop();
}
function Github($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  let {
    size = ctx.size || "24",
    role = ctx.role || "img",
    ariaLabel = "github",
    class: classname,
    title,
    desc,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      class: classname,
      ...restProps,
      "aria-label": ariaLabel,
      role,
      viewBox: "0 0 512 512",
      "aria-describedby": hasDescription ? ariaDescribedby : void 0
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path d="m0 0H512V512H0" fill="#181717"></path><path fill="#fff" d="M335 499c-13 0-16-6-16-12l1-70c0-24-8-40-18-48 57-6 117-28 117-126 0-28-10-51-26-69 3-6 11-32-3-67 0 0-21-7-70 26-42-12-86-12-128 0-49-33-70-26-70-26-14 35-6 61-3 67-16 18-26 41-26 69 0 98 59 120 116 126-7 7-14 18-16 35-15 6-52 17-74-22 0 0-14-24-40-26 0 0-25 0-1 16 0 0 16 7 28 37 0 0 15 50 86 34l1 44c0 6-3 12-16 12-14 0-12 17-12 17H347s2-17-12-17Z"></path></svg>`;
  pop();
}
function Html5($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  let {
    size = ctx.size || "24",
    role = ctx.role || "img",
    ariaLabel = "html5",
    class: classname,
    title,
    desc,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      class: classname,
      ...restProps,
      "aria-label": ariaLabel,
      role,
      viewBox: "0 0 512 512",
      fill: "#e34f26",
      "aria-describedby": hasDescription ? ariaDescribedby : void 0
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path fill="#e34f26" d="M71 460L30 0h451l-41 460-185 52"></path><path fill="#ef652a" d="M256 472l149-41 35-394H256"></path><path fill="#ebebeb" d="M255 414 139 382l-7-89h56l4 45 63 17Zm1-149H129L114 94H256v56H176l5 58h75Z"></path><path fill="#fff" d="M255 208v57h70l-7 73-63 17v59l116-32 16-174zm0-114v56h137l5-56z"></path></svg>`;
  pop();
}
function Javascript($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  let {
    size = ctx.size || "24",
    role = ctx.role || "img",
    ariaLabel = "javascript",
    class: classname,
    title,
    desc,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      class: classname,
      ...restProps,
      "aria-label": ariaLabel,
      role,
      viewBox: "0 0 512 512",
      "aria-describedby": hasDescription ? ariaDescribedby : void 0
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path d="m0 0H512V512H0" fill="#f7df1e"></path><path d="m324 370q17 29 45 29 35 0 35-27c0-11-15-21-39-31q-67-22-66-75c0-36 27-64 70-64q48 0 68 39l-37 24q-12-22-31-21-22 1-23 21c0 14 9 20 39 33 43 17 67 36 67 77q-3 65-79 67-63 0-89-49zm-170 4c8 13 13 25 33 25q24 0 24-30V203h48v164q-1 71-72 72-53-1-72-44z"></path></svg>`;
  pop();
}
function Nodejs($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  let {
    size = ctx.size || "24",
    role = ctx.role || "img",
    ariaLabel = "nodejs",
    class: classname,
    title,
    desc,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      class: classname,
      ...restProps,
      "aria-label": ariaLabel,
      role,
      viewBox: "0 0 512 512",
      "aria-describedby": hasDescription ? ariaDescribedby : void 0
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path d="m0 0H512V512H0" fill="none"></path><path fill="#539E43" d="M247 281q3 0 4 2c2 3-2 27 34 30s57-2 60-18-4-21-60-27-56-33-56-42 0-49 68-49 70 40 71 47 0 9-4 9H346q-4 0-5-5c-3-12-9-25-44-25s-39 11-39 22 11 13 47 18 65 9 69 39-16 58-71 58q-79 0-79-54 0-5 5-5M417 145q16 9 16 29V340q0 18-14 27L273 452q-16 8-32 0l-49-29q-8-4-2-6 13-4 22-10 2-1 4 0l37 22q3 2 6 0l145-84q2-1 2-5V172q0-3-2-4L259 84q-3-2-6 0L107 168q-2 1-2 4V341q0 3 2 4l40 23c16 9 35 3 35-15V188q0-6 6-6h16q6 0 6 6V353c0 49-45 55-77 37L94 368q-15-9-15-27V172q0-18 16-27L237 63q19-12 38 0"></path></svg>`;
  pop();
}
function Python($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  let {
    size = ctx.size || "24",
    role = ctx.role || "img",
    ariaLabel = "python",
    class: classname,
    title,
    desc,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      class: classname,
      ...restProps,
      "aria-label": ariaLabel,
      role,
      viewBox: "0 0 512 512",
      "aria-describedby": hasDescription ? ariaDescribedby : void 0
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path d="m0 0H512V512H0" fill="none"></path><g fill="#5a9fd4"><path id="p" d="M254 64c-16 0-31 1-44 4-39 7-46 21-46 47v35h92v12H130c-27 0-50 16-58 46-8 35-8 57 0 93 7 28 23 47 49 47h32v-42c0-30 26-57 57-57h91c26 0 46-21 46-46v-88c0-24-21-43-46-47-15-3-32-4-47-4zm-50 28c10 0 17 8 17 18 0 9-7 17-17 17-9 0-17-8-17-17 0-10 8-18 17-18z"></path></g><use xlink:href="#p" fill="#ffd43b" transform="rotate(180,256,255)"></use></svg>`;
  pop();
}
function Svelte($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  let {
    size = ctx.size || "24",
    role = ctx.role || "img",
    ariaLabel = "svelte",
    class: classname,
    title,
    desc,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      class: classname,
      ...restProps,
      "aria-label": ariaLabel,
      role,
      viewBox: "0 0 512 512",
      "aria-describedby": hasDescription ? ariaDescribedby : void 0
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path d="m0 0H512V512H0" fill="none"></path><path fill="#ff3e00" d="M149 138a103 103 0 00-36 138A115 115 0 00274 431l89-57a108 108 0 0036-138A115 115 0 00238 81zm99 256a70 70 0 01-102-83 109 109 0 0043 21 22 22 0 0032 23l89-57a20 20 0 00-23-33l-34 21A66 66 0 01175 175l89-57a70 70 0 01102 83 115 115 0 00-43-21 21 21 0 00-32-23l-89 57a20 20 0 0023 33l34-21a66 66 0 0178 111z"></path></svg>`;
  pop();
}
function Typescript($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  let {
    size = ctx.size || "24",
    role = ctx.role || "img",
    ariaLabel = "typescript",
    class: classname,
    title,
    desc,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      class: classname,
      ...restProps,
      "aria-label": ariaLabel,
      role,
      viewBox: "0 0 512 512",
      "aria-describedby": hasDescription ? ariaDescribedby : void 0
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path d="m0 0H512V512H0" fill="#3178c6"></path><path fill="#fff" d="m233 284h64V243H118v41h64v183h51zm84 173c18.03 9.21 42.31 12.5 64 12.5 18.7 0 42.93-2.43 62-14.4 8.1-5.3 15-12 19-21s7.1-19 7.1-32c-.09-41.15-29.29-54.79-58.1-68-13.08-5.95-42.5-15.56-42.5-34.1 0-14.94 16.81-22.53 38.2-22.6 16.68 0 39.1 5.43 53 15.64v-47c-18.77-7.21-38.44-8.56-56-8.6-49.25 0-87.66 20.32-88 66.8.49 35.11 21.32 50.44 52 65 16.71 7.56 47.57 17.24 47.8 38.2-.73 19.57-24.58 22.55-38.4 22.7-21.56 0-44.36-8.19-60.1-21.14z"></path></svg>`;
  pop();
}
function Vim($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  let {
    size = ctx.size || "24",
    role = ctx.role || "img",
    ariaLabel = "vim",
    class: classname,
    title,
    desc,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      class: classname,
      ...restProps,
      "aria-label": ariaLabel,
      role,
      viewBox: "0 0 512 512",
      "aria-describedby": hasDescription ? ariaDescribedby : void 0
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path d="m0 0H512V512H0" fill="none"></path><g transform="matrix(5.75 0 0 5.75 83.5 83.5)"><path d="m30 0L0 30l30 30 30-30z" fill="#007f00" stroke="#000" stroke-width=".8"></path><g fill="#bfbfbf"><g stroke="#000" stroke-width="2.5"><path id="a" d="m8 5-2 2v4l2 1h2v40l3 2h3l43-44V7l-2-2H40l-2 2v4l2 1h2l-1 1-17 16V12h2l2-1V7l-2-2z"></path></g><use xlink:href="#a"></use><g stroke="#000" stroke-width="2.5"><path id="b" d="m31 36h3v3h-3zm-.5 6-.5-1h4l-4 11.5h1V54h-5v-1.5h1zm7.5-1h5l1 1 1-1h4l1 1 1-1h5l1 1v3l-3 7.5h1V54h-5v-1.5h1l3-7.5h-5l-3 7.5h1V54h-5v-1.5h1l3-7.5h-5l-3 7.5h1V54h-5v-1.5h1L38.5 42z"></path></g><use xlink:href="#b"></use></g></g></svg>`;
  pop();
}
function Visualstudiocode($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  let {
    size = ctx.size || "24",
    role = ctx.role || "img",
    ariaLabel = "visualstudiocode",
    class: classname,
    title,
    desc,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      class: classname,
      ...restProps,
      "aria-label": ariaLabel,
      role,
      viewBox: "0 0 512 512",
      "aria-describedby": hasDescription ? ariaDescribedby : void 0
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path d="m0 0H512V512H0" fill="none"></path><filter id="a"><feFlood flood-opacity="0" result="b"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feGaussianBlur stdDeviation="4"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .25 0"></feColorMatrix><feBlend in2="b" result="c"></feBlend><feBlend in="SourceGraphic" in2="c"></feBlend></filter><path fill="#27b" d="m423 114-75-37a23 23 0 00-26 5L77 306a15 15 0 000 22l20 18a15 15 0 0020 1l295-224c10-7 24-1 24 12v-1c0-9-5-17-13-20"></path><path fill="#08c" d="m423 399-75 36a23 23 0 01-26-5L77 207a15 15 0 010-22l20-19a15 15 0 0120-1l295 224c10 8 24 1 24-12v1c0 9-5 17-13 21" filter="url(#a)"></path><path fill="#19f" d="M348 435a23 23 0 01-26-5c9 9 23 3 23-9V92c0-12-14-19-23-10a23 23 0 0127-4l75 36c7 3 12 11 12 20v244c0 9-5 17-12 21"></path></svg>`;
  pop();
}
function Tailwindcss($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  let {
    size = ctx.size || "24",
    role = ctx.role || "img",
    color = ctx.color || "currentColor",
    ariaLabel = "Tailwindcss",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<svg${spread_attributes(
    {
      viewBox: "0 0 24 24",
      width: size,
      height: size,
      fill: color,
      ...restProps,
      role,
      "aria-label": ariaLabel,
      xmlns: "http://www.w3.org/2000/svg"
    },
    void 0,
    void 0,
    3
  )}><title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></svg>`;
  pop();
}
function HeroSection($$payload) {
  const svgclass = "text-white dark:text-sky-950";
  const size = "40";
  $$payload.out += `<div class="max-w-8xl mx-auto px-4 py-0 lg:px-20"><div class="flex flex-col gap-20"><div class="flex items-center gap-8"><div class="flex flex-col justify-start gap-10"><div class="flex flex-col gap-2 text-left align-text-top xl:gap-6"><h1 class="mt-2 max-w-2xl text-4xl font-extrabold leading-none text-gray-900 dark:text-white lg:text-5xl"><span class="block1 xl:inline">Welcome to</span> <span class="block1 text-primary-700 dark:text-primary-700 xl:inline">codewithshin</span> <span class="block1 xl:inline">where you can find a lot of coding goodies</span></h1> <p class="text-2xl leading-normal text-gray-500 dark:text-gray-400 xl:text-3xl">Hi, I'm Shin, a programmer and technology enthusiast with a passion for sharing my knowledge and experience.</p> <div class="mt-4 justify-center sm:flex sm:justify-start md:mt-2"><div class="eading-normal relative w-full gap-1 text-xl text-gray-500 dark:text-gray-400 xl:text-2xl">Please explore my projects and share your thoughts. <div class="mt-4 flex w-full flex-wrap gap-1">`;
  Svelte($$payload, { size, class: svgclass, fill: "currentColor" });
  $$payload.out += `<!----> `;
  Javascript($$payload, { size, class: svgclass });
  $$payload.out += `<!----> `;
  Tailwindcss($$payload, { size, color: "#39BDF8" });
  $$payload.out += `<!----> `;
  Typescript($$payload, { size, class: svgclass });
  $$payload.out += `<!----> `;
  Nodejs($$payload, { size, class: svgclass, fill: "currentColor" });
  $$payload.out += `<!----> `;
  Git($$payload, { size, class: svgclass, fill: "currentColor" });
  $$payload.out += `<!----> `;
  Github($$payload, { size, class: svgclass });
  $$payload.out += `<!----> `;
  Bash($$payload, { size, class: svgclass });
  $$payload.out += `<!----> `;
  Css3($$payload, { size, class: svgclass });
  $$payload.out += `<!----> `;
  Html5($$payload, { size, class: svgclass });
  $$payload.out += `<!----> `;
  Python($$payload, { size, class: svgclass, fill: "currentColor" });
  $$payload.out += `<!----> `;
  Visualstudiocode($$payload, { size, class: svgclass, fill: "currentColor" });
  $$payload.out += `<!----> `;
  Vim($$payload, { size, class: svgclass, fill: "currentColor" });
  $$payload.out += `<!----></div></div></div></div></div> <div class="hidden p-0 lg:block"><div class="relative dark:hidden"><img class="-me-7 max-w-[460px]" src="/images/codewithshin.png" alt="Header"></div> <div class="relative hidden dark:block"><img class="-me-7 max-w-[460px]" src="/images/codewithshin-dark.png" alt="Header"></div></div></div></div></div>`;
}
function Section($$payload, $$props) {
  push();
  let {
    children,
    tinted,
    class: classname,
    $$slots,
    $$events,
    ...attributes
  } = $$props;
  $$payload.out += `<section${spread_attributes({
    class: tinted ? "bg-gray-50 dark:bg-gray-800" : "",
    ...attributes
  })}><div${attr("class", `max-w-8xl mx-auto px-4 py-8 lg:px-20 ${stringify(classname ?? "")}`)}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></section>`;
  pop();
}
function GitHubProfile($$payload) {
  const headerColor = "";
  const cardHeight = "h-56";
  $$payload.out += `<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-2">`;
  Card($$payload, {
    href: "https://github.com/shinokada",
    padding: "none",
    class: "dark:hover:shadow-lg-light !max-w-none shadow-none hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900",
    children: ($$payload2) => {
      $$payload2.out += `<div${attr("class", `${stringify(headerColor)} flex items-center justify-between rounded-t-md border-b border-gray-200 px-5 py-2.5 dark:border-gray-700`)}><span class="text-base font-medium text-gray-900 dark:text-white">GitHub Stats</span></div> <div${attr("class", `flex items-center justify-center ${stringify(cardHeight)}`)}><div class="flex hidden items-center justify-center gap-8 dark:block"><img alt="github stats" class="inline" src="https://github-readme-stats.vercel.app/api?username=shinokada&amp;show_icons=true&amp;theme=tokyonight&amp;hide_border=true"></div> <div class="flex items-center justify-center gap-8 dark:hidden"><img alt="github stats" class="inline" src="https://github-readme-stats.vercel.app/api?username=shinokada&amp;show_icons=true"></div></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Card($$payload, {
    href: "https://github.com/shinokada",
    padding: "none",
    class: "dark:hover:shadow-lg-light !max-w-none shadow-none hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900",
    children: ($$payload2) => {
      $$payload2.out += `<div${attr("class", `${stringify(headerColor)} flex items-center justify-between rounded-t-md border-b border-gray-200 px-5 py-2.5 dark:border-gray-700`)}><span class="text-base font-medium text-gray-900 dark:text-white">GitHub Contributions</span></div> <div${attr("class", `flex items-center justify-center ${stringify(cardHeight)}`)}><div class="flex hidden items-center justify-center gap-8 dark:block"><img alt="streak stats" class="inline" src="https://github-readme-streak-stats.herokuapp.com?user=shinokada&amp;theme=neon-palenight&amp;hide_border=true"></div> <div class="flex items-center justify-center gap-8 dark:hidden"><img alt="streak stats" class="inline" src="https://github-readme-streak-stats.herokuapp.com?user=shinokada&amp;hide_border=true"></div></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="mt-4 grid grid-cols-1">`;
  Card($$payload, {
    href: "https://github.com/shinokada",
    padding: "none",
    class: "dark:hover:shadow-lg-light !max-w-none shadow-none hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900",
    children: ($$payload2) => {
      $$payload2.out += `<div${attr("class", `${stringify(headerColor)} flex items-center justify-between rounded-t-md border-b border-gray-200 px-5 py-2.5 dark:border-gray-700`)}><span class="text-base font-medium text-gray-900 dark:text-white">GitHub trophies</span></div> <div${attr("class", `flex items-center justify-center ${stringify(cardHeight)}`)}><div class="flex hidden items-center justify-center dark:block"><img alt="github trophy" class="inline" src="https://github-profile-trophy.vercel.app/?username=shinokada&amp;theme=onedark&amp;no-frame=true&amp;row=1"></div> <div class="flex items-center justify-center dark:hidden"><img alt="github trophy" class="inline" src="https://github-profile-trophy.vercel.app/?username=shinokada&amp;no-frame=true&amp;row=1"></div></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function NpmAuthorDownload($$payload, $$props) {
  push();
  let {
    interval = "dw",
    author,
    style = "flat",
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
  let srcData = `https://img.shields.io/npm-stat/${interval}/${author}?${styleOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`;
  if (link) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<object${attr("data", srcData)}${attr("title", `NPM ${stringify(interval)} Downloads - ${stringify(author)}`)}${attr("class", classname)}></object>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img${spread_attributes({
      src: srcData,
      alt: `NPM ${stringify(interval)} Downloads - ${stringify(author)}`,
      class: classname,
      ...attributes
    })} onload="this.__e=event" onerror="this.__e=event">`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function NpmProfile($$payload) {
  const weekly = {
    author: "shinichiokada",
    style: "for-the-badge"
  };
  const monthly = {
    author: "shinichiokada",
    interval: "dm",
    style: "for-the-badge"
  };
  const yearly = {
    author: "shinichiokada",
    interval: "dy",
    style: "for-the-badge"
  };
  const cardHeight = "h-40";
  $$payload.out += `<div class="mx-auto my-10 flex max-w-lg items-center">`;
  Card($$payload, {
    padding: "sm",
    class: "dark:hover:shadow-lg-light max-w-lg px-4 hover:shadow-lg dark:bg-sky-950 dark:hover:bg-sky-900",
    children: ($$payload2) => {
      $$payload2.out += `<div${attr("class", `flex items-center justify-center gap-2 px-4 ${stringify(cardHeight)}`)}>`;
      NpmAuthorDownload($$payload2, spread_props([weekly]));
      $$payload2.out += `<!----> `;
      NpmAuthorDownload($$payload2, spread_props([monthly]));
      $$payload2.out += `<!----> `;
      NpmAuthorDownload($$payload2, spread_props([yearly]));
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function _page($$payload) {
  const list = [
    {
      name: "Svelte Libraries",
      thumnailSize: "",
      path: "/svelte",
      description: "Official Flowbite UI components, Admin dashboard, Block components for Svelte.",
      static_badge: {
        badgeContent: "Svelte-Libraries-1d6a96",
        logo: "svelte",
        labelColor: "0E766E"
      }
    },
    {
      name: "Svelte SVG Icon Sets",
      thumnailSize: "",
      path: "/svelte-svg-icon-sets",
      description: "29 SVG Icon sets including Flowbite Svelte icons, Heroicons, Font Awesome icons, Bootstrap, and more.",
      static_badge: {
        badgeContent: "Svelte-Icon_Libraries-1d6a96",
        logo: "svelte",
        labelColor: "0E766E"
      }
    },
    {
      name: "Terminal Tools",
      thumnailSize: "",
      path: "/terminal-tools",
      description: "Terminal Tools for macOS, and Linux including terminal radio, package manager, text effects, and more.",
      static_badge: {
        badgeContent: "Terminal-Tools-1d6a96",
        logo: "gnubash",
        labelColor: "0E766E"
      }
    },
    {
      name: "Python and Jupyter",
      thumnailSize: "",
      path: "/python-and-jupyter",
      description: "Starter for FASTAPI, data science with Jupyter.",
      static_badge: {
        badgeContent: "Python-Jupyter-1d6a96",
        logo: "python",
        labelColor: "0E766E"
      }
    },
    {
      name: "Homebrew",
      thumnailSize: "",
      path: "/homebrew",
      description: "Homebrew taps for MacOS and Linux.",
      static_badge: {
        badgeContent: "Homebrew-Packages-1d6a96",
        logo: "homebrew",
        labelColor: "0E766E"
      }
    },
    {
      name: "Web Apps",
      thumnailSize: "",
      path: "/web-apps",
      description: "Web apps for learning and more."
    },
    {
      name: "Blog",
      thumnailSize: "",
      path: "https://blog.codewithshin.com/",
      description: "More than 170 programming articles and tutorials."
    }
  ];
  HeroSection($$payload);
  $$payload.out += `<!----> `;
  Section($$payload, {
    class: "flex flex-col gap-8 sm:gap-12 lg:pt-24",
    children: ($$payload2) => {
      $$payload2.out += `<div class="flex flex-col items-center gap-4 sm:gap-4"><h2 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">My Projects</h2> <p class="mx-auto max-w-3xl text-center text-xl font-normal text-gray-500 dark:text-gray-400">Please explore my projects and share your thoughts.</p></div> `;
      Components($$payload2, { componentData: list });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <h2>Github Profile</h2> `;
  GitHubProfile($$payload);
  $$payload.out += `<!----> <h2 class="mt-12">NPM Profile</h2> `;
  NpmProfile($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
