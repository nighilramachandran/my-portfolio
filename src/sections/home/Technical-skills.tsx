import { Grid, Stack, Typography } from "@mui/material";
import { m } from "framer-motion";
import { varFade } from "../../component/animate/variants";
import MotionViewport from "../../component/animate/MotionViewport";

interface SkillProps {
  heading: string;
  children: { title: string }[];
}

const Skills: SkillProps[] = [
  {
    heading: "ReactJs & NextJs",
    children: [
      { title: "HOOKS" },
      { title: "react-router" },
      { title: "FORMIK" },
      { title: "reacti18n" },
      { title: "MUI" },
      { title: "react-bootstrap" },
      { title: "react-spring" },
      { title: "FRAMER-MOTION" },
      { title: "react-query" },
      { title: "react-table" },
      { title: "react-select" },
      { title: "react-contexify" },
      { title: "immer" },
      { title: "React Testing Library" },
    ],
  },
  {
    heading: "State Management",
    children: [
      { title: "REDUX" },
      { title: "TOLKIT" },
      { title: "SAGA" },
      { title: "THUNK" },
      { title: "ZUSTAND" },
      { title: "INDEXEDDB" },
      { title: "DEXIE-REACT-HOOKS" },
      { title: "Context Api" },
      { title: "@hookstate/core" },
      { title: "recoil" },
      { title: "xstate/react" },
      { title: "mobx-react" },
      { title: "Rematch" },
      { title: "jotai" },
      { title: "valtio" },
    ],
  },
  {
    heading: "DIGITAL SKILLS",
    children: [
      { title: "GIT" },
      { title: "Doker" },
      { title: "POSTMAN" },
      { title: "ClickUp" },
      { title: "Jira" },
      { title: "Google-firbase" },
      { title: "Google-maps" },
      { title: "Windows" },
      { title: "MacOs" },
    ],
  },
  {
    heading: "Web Skills",
    children: [
      { title: "WEBPACK" },
      { title: "MomentJs" },
      { title: "GSAP3" },
      { title: "AXIOS" },
      { title: "SOCKET.IO" },
    ],
  },
  {
    heading: "Database",
    children: [{ title: "PLSQL" }, { title: "SQL" }],
  },
  {
    heading: "UI",
    children: [
      { title: "MUI" },
      { title: "React-Bootstrap" },
      { title: "Tailwindcss" },
      { title: "HTML5" },
      { title: "CSS" },
      { title: "SASS" },
      { title: "BOOTSTRAP" },
      { title: "Ajax" },
      { title: "JQuery" },
    ],
  },
  {
    heading: "Testing",
    children: [{ title: "SELINIUM" }, { title: "Junits" }],
  },
  {
    heading: "Familiar With",
    children: [
      { title: "FIGMA" },
      { title: "AdobeXd Photoshop & Illustrator" },
      { title: "BLENDER" },
    ],
  },
];

export const TechnicalSkills = () => {
  return (
    <>
      <Stack id="Skills" component={MotionViewport}>
        <m.div variants={varFade().inDown}>
          <Typography sx={{ fontSize: "50px", textAlign: "center", mb: 5 }}>
            Skills
          </Typography>
        </m.div>

        <Stack spacing={3}>
          {Skills.map((el, ind) => (
            <Stack key={ind}>
              <m.div variants={varFade().inLeft}>
                <Typography color={"#d28994"} fontSize={"35px"}>
                  {el.heading}
                </Typography>
              </m.div>
              <Grid container direction={"row"} gap={2}>
                {el.children &&
                  el.children.map((child, ind) => (
                    <m.div key={ind} variants={varFade().inLeft}>
                      <Grid item>
                        <Typography
                          fontSize={"23px"}
                          color={
                            child.title === child.title.toUpperCase()
                              ? "primary.main"
                              : "text.primary"
                          }
                        >
                          {child.title}
                        </Typography>
                      </Grid>
                    </m.div>
                  ))}
              </Grid>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
};
