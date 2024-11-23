import { a as Components } from "../../../chunks/Components.js";
function _page($$payload) {
  const list = [
    {
      name: "TERA: Terminal Radio",
      description: "Interactive terminal music radio player. Play your favorite radio station, CRUD your favorite lists, and explore new radio stations from your terminal.",
      path: "https://tera.codewithshin.com/",
      github_release: {
        user: "shinokada",
        repo: "tera",
        style: "flat",
        color: "orange",
        label: "TERA"
      }
    },
    {
      name: "Teffects",
      description: "A bash script that automates creating header images for your articles, email, presentation and other purposes.",
      path: "https://teffects.codewithshin.com/",
      github_release: {
        user: "shinokada",
        repo: "teffects",
        style: "flat",
        color: "orange",
        label: "Teffects"
      }
    },
    {
      name: "Shellscript starter",
      description: "Quick starter for Shell/Bash script",
      path: "https://shellscript-starter.codewithshin.com/",
      github_release: {
        user: "shinokada",
        repo: "shellscript-starter",
        style: "flat",
        color: "orange",
        label: "Shellscript starter"
      }
    },
    {
      name: "MacGNU",
      description: "Transform the macOS CLI into a fresh GNU/Linux CLI by installing missing GNU programs, updating outdated GNU programs, replacing pre-installed BSD programs.",
      path: "https://macgnu.codewithshin.com/",
      github_release: {
        user: "shinokada",
        repo: "macgnu",
        style: "flat",
        color: "orange",
        label: "MacGNU"
      }
    },
    {
      name: "Awesome",
      description: "A simple shell script package manager that installs a shell script package from a GitHub repo on your macOS/Linux.",
      path: "https://awesome.codewithshin.com/",
      github_release: {
        user: "shinokada",
        repo: "awesome",
        style: "flat",
        color: "orange",
        label: "Awesome"
      }
    },
    {
      name: "BIMGC",
      description: "A Node script for converting PNG and JPG images to AVIF and WebP format with various sizes.",
      path: "https://bimgc.codewithshin.com/",
      github_release: {
        user: "shinokada",
        repo: "bimgc",
        style: "flat",
        color: "orange",
        label: "BIMGC"
      }
    },
    {
      name: "Consize",
      description: "Convert formats and resize image",
      path: "https://consize.codewithshin.com/",
      github_release: {
        user: "shinokada",
        repo: "consize",
        style: "flat",
        color: "orange",
        label: "Consize"
      }
    },
    {
      name: "SPT: Simple Pacakage Tool",
      description: "A Bash script to generate a basic DEBIAN package from Github-name/repo-name.",
      path: "https://spt.codewithshin.com/",
      github_release: {
        user: "shinokada",
        repo: "spt",
        style: "flat",
        color: "orange",
        label: "SPT"
      }
    },
    {
      name: "Typelet",
      description: "Create and add large words print it with a typewriter effect.",
      path: "https://typelet.codewithshin.com/",
      github_release: {
        user: "shinokada",
        repo: "typelet",
        style: "flat",
        color: "orange",
        label: "Typelet"
      }
    },
    {
      name: "Gitstart",
      description: "Automates creating a GitHub repo. The script creates .gitignore, a license.txt, a README.md file and commit with a message. It will create a remote repo and push all the files.",
      path: "https://gitstart.codewithshin.com/",
      github_release: {
        user: "shinokada",
        repo: "gitstart",
        style: "flat",
        color: "orange",
        label: "Gitstart"
      }
    },
    {
      name: "Gitig",
      description: "Fix your gitignore problem by recursively removing all unstaged and paths from the index, and adding all files, commit, and push to the origin main.",
      path: "https://gitig.codewithshin.com/",
      github_release: {
        user: "shinokada",
        repo: "gitig",
        style: "flat",
        color: "orange",
        label: "Gitig"
      }
    },
    {
      name: "Replaceit",
      description: "Replaces spaces of file names with underscores as the default",
      path: "https://replaceit.codewithshin.com/",
      github_release: {
        user: "shinokada",
        repo: "replaceit",
        style: "flat",
        color: "orange",
        label: "Replaceit"
      }
    },
    {
      name: "Dotties",
      description: "A dotfile management script that saves specified dotfiles to a secret Gist and clone them from the Gist.",
      path: "https://dotties.codewithshin.com/",
      github_release: {
        user: "shinokada",
        repo: "dotties",
        style: "flat",
        color: "orange",
        label: "Dotties"
      }
    },
    {
      name: "imgtaggen",
      description: "A CLI tool for generating a responsive image tag with support for AVIF and WebP formats",
      path: "https://imgtaggen.codewithshin.com/",
      github_release: {
        user: "shinokada",
        repo: "imgtaggen",
        style: "flat",
        color: "orange",
        label: "imgtaggen"
      }
    },
    {
      name: "markdown-docs-as-pdf",
      description: "A Bash Script to create PDF documents for React, Vue, Svelte, SvelteKit, Nuxt, Vitest, pnpm, Slidev, and more.",
      path: "https://markdown-docs-as-pdf.codewithshin.com",
      github_release: {
        user: "shinokada",
        repo: "markdown-docs-as-pdf",
        style: "flat",
        color: "orange",
        label: "markdown-docs-as-pdf"
      }
    },
    {
      name: "Cleanit",
      description: "Cleanit cleanup your ~/Downloads and ~/.Trash directory, and set the cleanup schedule on your MacOS.",
      path: "https://cleanit.codewithshin.com/",
      github_release: {
        user: "shinokada",
        repo: "cleanit",
        style: "flat",
        color: "orange",
        label: "Cleanit"
      }
    },
    {
      name: "ABI: Automate Brew Install",
      description: "Automate Brew Install creates a Gist of your Homebrew formula or cask, and install Homebrew them from a Gist",
      path: "https://abi.codewithshin.com/",
      github_release: {
        user: "shinokada",
        repo: "abi",
        style: "flat",
        color: "orange",
        label: "ABI"
      }
    },
    {
      name: "Manop",
      description: "A simple Bash script that display a command description and options from Man page or help on macOS/Linux.",
      path: "https://manop.codewithshin.com/",
      github_release: {
        user: "shinokada",
        repo: "manop",
        style: "flat",
        color: "orange",
        label: "Manop"
      }
    },
    {
      name: "SSIC",
      description: "Svelte SVG Icons Creator: Bash Script for creating Svelte SVG icons",
      path: "https://ssic.codewithshin.com/",
      github_release: {
        user: "shinokada",
        repo: "ssic",
        style: "flat",
        color: "orange",
        label: "SSIC"
      }
    },
    {
      name: "quick-resize",
      description: "A command-line tool for resizing images quickly and easily.",
      path: "https://github.com/shinokada/quick-resize",
      github_release: {
        user: "shinokada",
        repo: "quick-resize",
        style: "flat",
        color: "orange",
        label: "quick-resize"
      }
    },
    {
      name: "pdftoimg",
      description: "A wrapper for Poppler/pdftoimg that converts pdf files to image files.",
      path: "https://github.com/shinokada/pdftoimg",
      github_release: {
        user: "shinokada",
        repo: "pdftoimg",
        style: "flat",
        color: "orange",
        label: "pdftoimg"
      }
    }
  ];
  $$payload.out += `<div class="mb-8 flex flex-col items-center gap-4 sm:gap-4"><h1>Terminal Tools</h1> <h2>Bash and Node.js tools for your terminal.</h2></div> `;
  Components($$payload, { componentData: list });
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
