type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "ciro.sanchez.dev@gmail.com",
  title: "Hola! Im Ciro 👋",
  // profile: "/profile.webp",
  description:
    "Hola! i'm a *colombian Java developer* with more than *2 years* of experience in the development of *minecraft plugins and Java apps*.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/_cirosanchez",
    },
    {
      label: "Paypal",
      link: "https://paypal.me/cirosanchez",
    },
    {
      label: "Github",
      link: "https://github.com/cirosanchez",
    },
    {
      label: "Discord",
      link: "https://discord.cirosanchez.me",
    },
  ],
};

export default presentation;
