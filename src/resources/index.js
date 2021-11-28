import * as routes from "../constants";

export const resources = {
  headerMenu: [
    { menuName: "Home", menuLink: routes.HOME_LINK },
    { menuName: "About", menuLink: routes.ABOUT_LINK },
    { menuName: "Portfolio", menuLink: routes.PORTFOLIO_LINK },
    { menuName: "Blog", menuLink: "https://dev.to/tomokawaguchi", external: true }, // "https://dev.to/tomokawaguchi"
  ],
  socialMenu: [
    {
      socialName: "twitter",
      socialIcon: "&#xe805;",
      socialLink: "https://twitter.com/TomoKawaguchi",
    },
    {
      socialName: "linkedin",
      socialIcon: "&#xe806;",
      socialLink: "https://www.linkedin.com/in/tomoko-kawaguchi/",
    },
    {
      socialName: "github",
      socialIcon: "&#xe807;",
      socialLink: "https://github.com/tomokawaguchi",
    },
  ],
  bannerTexts: {
    home: {
      title: "Hi, I'm Tomoko",
      subtitle: "Freelance Web Developer",
      summaryText:
        "Self-motivated professional with 3+ years of experience in the tech industry. Passionate about building digital products that help people. Currently working as a freelance developer on custom WordPress theme projects.",
      bannerType: "profile",
      type: "home",
    },
    about: {
      title: "About",
      subtitle: "Junior Android Engineer based in Japan",
      summaryText:
        "Former website project manager turned frontend web developer. Passionate about building digital products that help people.",
      bannerType: "profile",
      type: "about",
    },
    portfolio: {
      title: "Portfolio",
      subtitle: "Check out some of my latest projects!",
      summaryText: "Showcasing personal and commercial projects that I have worked on.",
      bannerType: "mobile",
      type: "portfolio",
    },
  },
};
