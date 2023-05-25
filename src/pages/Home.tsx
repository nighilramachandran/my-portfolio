import { Container, Stack } from "@mui/material";
import { Hero } from "../sections/home/hero";
import { Intro } from "../sections/home/Introduction";
import { Experience } from "../sections/home/experiences";
import { Awards } from "../sections/home/awards";
import { TechnicalSkills } from "../sections/home/Technical-skills";
import { Projects } from "../sections/home/Projects";
import { Contact } from "../sections/home/contact";
import { Dna } from "react-loader-spinner";
import { useEffect, useState } from "react";

export const Home: React.FC = () => {
  console.log("document.readyState", document.readyState);
  const [playLoader, setPayLoader] = useState<boolean>(false);
  useEffect(() => {
    const onPageLoad = () => {
      setPayLoader(true);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  return (
    <>
      {playLoader !== false ? (
        <Stack gap={15}>
          <Container maxWidth={"xl"}>
            <Stack gap={15}>
              <Hero />
              <Intro />
              <Experience />
              <Awards />
              <Projects />
              <TechnicalSkills />
            </Stack>
          </Container>
          <Contact />
        </Stack>
      ) : (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{ position: "fixed", left: "50%", top: "50%", zIndex: "9999" }}
          wrapperClass="dna-wrapper"
        />
      )}
    </>
  );
};
