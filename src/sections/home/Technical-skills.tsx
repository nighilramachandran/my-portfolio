import styled from "@emotion/styled";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";
import { varFade } from "../../component/animate/variants";

const StyledRangeOutter = styled("div")(({ theme }: any) => ({
  width: "100%",
  height: "20px",
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.background.paper}`,
  borderRadius: "10px",
  padding: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledRangeInner = styled("div")(({ theme }: any) => ({
  width: "100%",
  height: "10px",
  background: "none",
  borderRadius: "10px",
  overflow: "hidden",
}));

const SkillSets = [
  { name: "React.js", percantage: 95 },
  { name: "Next.js", percantage: 90 },
  { name: "JavaScript", percantage: 90 },
  { name: "TypeScript", percantage: 90 },
  { name: "React-Bootstrap", percantage: 98 },
  { name: "Framer-Motion", percantage: 90 },
  { name: "Html5/Scss/Css", percantage: 98 },
  { name: "Tailwindcss", percantage: 89 },
  { name: "Bootstrap", percantage: 95 },
  { name: "JUNIT", percantage: 80 },
  { name: "Selenium", percantage: 95 },
  { name: "Java", percantage: 90 },
  { name: "Redux", percantage: 90 },
  { name: "MUI", percantage: 95 },
  { name: "PLSQL", percantage: 85 },
  { name: "SQL", percantage: 85 },
  { name: "Ajax", percantage: 85 },
  { name: "jQuery", percantage: 95 },
];

export const TechnicalSkills = () => {
  const [motionStart, setmotionStart] = useState<Boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 3800) {
      setmotionStart(true);
    } else {
      setmotionStart(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Stack id="Skills">
        <m.div variants={varFade().inDown}>
          <Typography sx={{ fontSize: "50px", textAlign: "center", mb: 5 }}>Skills</Typography>
        </m.div>
        <Grid container spacing={3}>
          {SkillSets.map((skill, ind) => (
            <Grid sx={{ width: "100%" }} item xs={12} lg={6} key={ind}>
              <Stack direction={"column"} spacing={2}>
                <Typography>{skill.name}</Typography>
                <StyledRangeOutter>
                  <StyledRangeInner>
                    {/* <AnimatePresence>
                      <m.div
                        style={{
                          height: "100%",
                          background: `linear-gradient(145deg, #94aea6  0%, #43685D    100%)`,
                          borderRadius: "10px",
                        }}
                        initial={{ width: "0%" }}
                        exit={{ width: "0%", transition: { delay: 0 }, transitionDuration: "0" }}
                        animate={{ width: motionStart ? `${skill.percantage}%` : "0%" }}
                        transition={{
                          duration: motionStart ? 1.2 : 0,
                          repeatType: "reverse",
                          ease: "easeInOut",
                          delay: motionStart ? (`${ind * 0.1}` as unknown as number) : 0,
                        }}
                      />
                    </AnimatePresence> */}
                    <Typography sx={{ fontSize: "8px" }}>{skill.name}</Typography>
                  </StyledRangeInner>
                </StyledRangeOutter>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
};
