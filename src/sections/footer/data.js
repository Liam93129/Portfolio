import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#services", title: "Services" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const socials = [
  { id: 1, link: "mailto:rosaleseliasandy@gmail.com", icon: <HiOutlineMail /> },
  { id: 2, link: "https://www.linkedin.com/in/andyrosales/", icon: <AiOutlineLinkedin /> },
  { id: 3, link: "tel:+12097039755", icon: <AiOutlinePhone /> },
  { id: 4, link: "https://github.com/markeddolphin", icon: <AiFillGithub /> },
];