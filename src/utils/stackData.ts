import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import { FaPython, FaDocker, FaReact} from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiGit,SiFigma,SiVisualstudiocode,SiAdobeillustrator,SiExpress,SiJavascript,SiTrello, SiSlack } from "react-icons/si";
import { DiDjango, DiScrum } from "react-icons/di";
import {TbBrandNextjs} from "react-icons/tb"


export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  { title: "JavaScript", img: SiJavascript },
  {
    title: "Node JS",
    img: imgNode,
  },
  { title: "TypeScript", img: SiTypescript },
  { title: "VSCode", img: SiVisualstudiocode},
  {
    title: "Styled Components",
    img: imgStyled,
  },
  { title: "React", img: FaReact },
  { title: "Git", img: SiGit },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "ExpressJS", img: SiExpress },
  { title: "Python", img: FaPython },
  { title: "Django", img: DiDjango },
  { title: "Figma", img: SiFigma },
  { title: "Adobe Illustrator", img: SiAdobeillustrator },
  { title: "Trello", img: SiTrello },
  { title: "Scrum", img: DiScrum },
  { title: "Slack", img: SiSlack },
  { title: "Estudando sobre Docker", img: FaDocker },
  { title: "Estudando sobre NextJS", img: TbBrandNextjs },


];
