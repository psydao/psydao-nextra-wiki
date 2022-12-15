import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs';
import Image from 'next/image';
import Logo from '/public/images/PsyDAO_Icon_White.svg';
import { toASCII } from 'punycode';

const config: DocsThemeConfig = {
  head: (
    <>
    <title>PsyDAO- Wiki</title>
    
    <script
        lang="javascript"
        dangerouslySetInnerHTML={{
          __html: `if (!window.localStorage.getItem("theme_default")) {
            window.localStorage.setItem("theme", "dark");
            window.localStorage.setItem("theme_default", "dark");
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
          }`,
        }}
      />
    </>
  ),
  logo: <><Image src={Logo} className="logo" alt="PsyDAO logo" width={40} height={40} /><span className="psydao-name"><a href="https://psydao.io/">PsyDAO Wiki</a></span></>,
  logoLink: "https://psydao.io/",
  project: {
    link: 'https://github.com/psydao',
  },
  chat: {
    link: 'https://discord.gg/9z5w4wFt',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  darkMode: false,
  footer: {
    text: <>{new Date().getFullYear()} © PsyDAO</>,
  },
  editLink: {
    text: null,
    component: null
  },
  feedback: {
    content: null,
  }
}
export default config
