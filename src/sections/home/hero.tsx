import { Box, Grid, Stack, Typography } from "@mui/material";

import { m, useAnimate } from "framer-motion";
import { varFade } from "../../component/animate/variants";
import { LottieLazyLoad } from "../../component/lottie-lazyload/LottieLazyLoad";

import { useEffect } from "react";
import styled from "@emotion/styled";
import MotionViewport from "../../component/animate/MotionViewport";
import useResponsive from "../../hooks/useResponsive";

type nameProps = {
  name: string;
}[];

let _scroll = false;

const skillframes: nameProps = [{ name: "javascript" }, { name: "react" }, { name: "next" }];

export const Hero: React.FC = () => {
  const [scope, animate] = useAnimate();
  const isDesktop = useResponsive("up", "md");

  const handleScroll = () => {
    if (window.scrollY > 250) {
      _scroll = true;
    } else if (window.scrollY < 10) {
      _scroll = false;
    }

    if (_scroll === true) {
      animate(
        scope.current,
        { opacity: 0, y: -100 },
        {
          duration: 2,
        }
      );
    }

    if (_scroll === false) {
      animate(
        scope.current,
        { opacity: 1, y: 0 },
        {
          duration: 2,
        }
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    animate(scope.current, { opacity: 1, y: [-100, 0] }, { duration: 2 });
  }, []);

  const StyledMouse = styled(Box)(({ theme }: any) => ({
    width: "60px",
    height: "60px",
    position: "absolute",
    bottom: 16,
    left: "50%",
  }));

  return (
    <Box
      id="Home"
      component={MotionViewport}
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Grid container>
        <Grid item md={4} display={"flex"} alignItems={"center"}>
          <Stack direction={"column"}>
            <m.div variants={varFade().inLeft}>
              <Typography sx={{ fontSize: "25px", letterSpacing: "10px" }}>WELCOME TO MY WORLD</Typography>
            </m.div>
            <m.div variants={varFade().inLeft}>
              <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                <Typography variant="h1" sx={{ fontSize: "50px", mb: 4, color: "text.secondary" }}>
                  Hi, I’m
                </Typography>
                <Typography variant="h1" sx={{ fontSize: "50px", mb: 4 }}>
                  Nighil
                </Typography>
              </Box>
            </m.div>
            <m.div variants={varFade().inLeft}>
              <Typography sx={{ fontSize: "25px", mb: 3 }}>I develop Web Application and User Interface</Typography>
            </m.div>
            <m.div variants={varFade().inLeft}>
              <Typography sx={{ fontSize: "18px", maxWidth: "473px" }}>
                I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in
                frameworks like Reactjs and NextJs
              </Typography>
            </m.div>

            <Stack sx={{ display: "flex", flexDirection: "row", gap: 2, mt: 4 }}>
              {skillframes.map((el, ind) => (
                <m.div key={ind} variants={varFade().inLeft}>
                  <Box
                    sx={{
                      width: "80px",
                      height: "80px",
                      background: "#e6ebee",
                      borderRadius: "12px",
                      boxShadow: " 5px 5px 15px #012625, -5px -5px 15px #012625",
                      overflow: "hidden",
                      padding: "10px",
                    }}
                  >
                    <LottieLazyLoad url={`/lotties/${el.name}.json`} />
                  </Box>
                </m.div>
              ))}
            </Stack>
          </Stack>
        </Grid>
        {isDesktop && (
          <Grid item md={8}>
            <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
              {/* heromain */}
              <m.div variants={varFade().inUp}>
                <m.div
                  animate={{
                    y: [0, 16],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <img style={{ width: "100%", height: "100%" }} src="/assets/images/heromain.png" alt="heromain" />
                </m.div>
              </m.div>
              {/* gear-orange */}

              <Box sx={{ position: "absolute", left: "145px", top: 0 }}>
                <m.div variants={varFade({ durationIn: 0.6 }).inDown}>
                  <m.div
                    animate={{
                      y: [0, 25],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      style={{ width: "200px", height: "200px", left: "145px" }}
                      src="/assets/icons/gear-orange.png"
                      alt="gear-orange"
                    />
                  </m.div>
                </m.div>
              </Box>

              {/* tag */}

              <Box sx={{ position: "absolute", top: 0, left: "370px" }}>
                <m.div variants={varFade({ durationIn: 0.95 }).inDown}>
                  <m.div
                    animate={{
                      y: [0, 40],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <img style={{ width: "200px", height: "200px" }} src="/assets/icons/tag.png" alt="tag" />
                  </m.div>
                </m.div>
              </Box>

              {/* gear-blue */}

              <Box sx={{ position: "absolute", top: "100px", right: "-30px" }}>
                <m.div variants={varFade({ durationIn: 0.85 }).inDown}>
                  <m.div
                    animate={{
                      y: [25, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  >
                    <img
                      style={{ width: "150px", height: "150px" }}
                      src="/assets/icons/gear-blue.png"
                      alt="gear-blue"
                    />
                  </m.div>
                </m.div>
              </Box>
            </Box>
          </Grid>
        )}
      </Grid>
      {!isDesktop && <div ref={scope}></div>}
      {isDesktop && (
        <StyledMouse>
          <div ref={scope}>
            <LottieLazyLoad url={"/lotties/mouse.json"} />
          </div>
        </StyledMouse>
      )}
    </Box>
  );
};
