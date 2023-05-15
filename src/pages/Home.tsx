import { Stack } from "@mui/material";
import { Hero } from "../sections/home/hero";
import { Intro } from "../sections/home/Introduction";
import { Experience } from "../sections/home/experiences";
import { Awards } from "../sections/home/awards";
import { TechnicalSkills } from "../sections/home/Technical-skills";
import { Projects } from "../sections/home/Projects";
import { Contact } from "../sections/home/contact";

export const Home: React.FC = () => {
  return (
    <Stack gap={15}>
      <Hero />

      {/* No problem in Intro */}
      <Intro />
      {/* <Experience /> */}

      {/* No problem in awards */}
      <Awards />

      {/* No problem in Projects */}
      <Projects />

      {/* No problem in TechnicalSkills */}
      <TechnicalSkills />

      {/* No problem in Contact */}
      <Contact />
    </Stack>
  );
};
