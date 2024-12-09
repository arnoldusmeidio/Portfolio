type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    linkedin: string;
    github: string;
    resume: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "Arnold's Portfolio",
  description:
    "My journey to be a better developer and growing career in tech.",
  url: "https://arnoldusmeidio.com",
  ogImage: "https://arnoldusmeidio.com/og",
  links: {
    linkedin: "https://linkedin.com/in/arnoldus-meidio",
    github: "https://github.com/arnoldusmeidio",
    resume:
      "https://drive.google.com/file/d/1AF2Ar5e0h4CB9zDP0euv9O8MB50Eeyn2/view?usp=drive_link",
  },
};
