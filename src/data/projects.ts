export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Basics",
    techs: ["Java", "JSON", "YAML","Maven","SpigotMC"],
    link: "https://github.com/cirosanchez/Basics",
    isComingSoon: true,
  },
  {
    title: "Portfolio",
    techs: ["Astro", "TypeScript"],
    link: "https://cirosanchez.me/",
  },
];

export default projects;
