import { CheckSquare, Home, Layers, Mail, User } from "react-feather-icon";

export const headerIntro = {
  title: {
    cz: "Ahoj, jsem Jakub",
    en: "Hi, I am Jakub",
  },
};

export const navBarLinks = [
  { cz: "Home", en: "Home", slug: "#home", icon: Home },
  { cz: "Skills", en: "Skills", slug: "#skills", icon: Layers },
  { cz: "Projekty", en: "Projects", slug: "#projects", icon: CheckSquare },
  { cz: "O mě", en: "About Me", slug: "#about-me", icon: User },
  { cz: "Kontakt", en: "Contact", slug: "#contact", icon: Mail },
];
