import { Box, Stack, Typography } from "@mui/material";
// import ReactPlayer from "react-player";
import { varFade } from "../../component/animate/variants";
import { m } from "framer-motion";
import MotionViewport from "../../component/animate/MotionViewport";
import ReactPlayer from "react-player";

export const Awards = () => {
  const isiPhone = /iPhone/i.test(navigator.userAgent);

  return (
    <Stack
      id="Awrd"
      component={MotionViewport}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      spacing={8}
    >
      <Stack textAlign={"center"} spacing={3}>
        <m.div variants={varFade().inDown}>
          <Typography sx={{ fontSize: "25px", letterSpacing: "10px", textAlign: "center" }}>
            CRYPTO EXPO AWARD TO GOLEX EXCHANGE AS
          </Typography>
        </m.div>
        <m.div variants={varFade().inUp}>
          <Typography sx={{ fontSize: "50px" }}>Best BlockChain Project 2023</Typography>
        </m.div>
      </Stack>
      {isiPhone ? (
        <Box>
          <video src="/assets/media/Trophy_1_VP8.m4v" autoPlay loop playsInline muted preload="none" width={600} />
        </Box>
      ) : (
        <Box sx={{ width: "100%", maxWidth: "1200px", height: "100%" }}>
          <video
            src="/assets/media/Trophy_1_VP8.webm"
            autoPlay
            loop
            playsInline
            muted
            preload="none"
            width={"100%"}
            height={"100%"}
          />
        </Box>
      )}
      {/* {!isiPhone && (
        <Box sx={{ width: "100%", maxWidth: "1200px", height: "100%" }}>
          <video
            src="/assets/media/Trophy_1_VP8.webm"
            autoPlay
            loop
            playsInline
            muted
            preload="none"
            width={"100%"}
            height={"100%"}
          />
        </Box>
      )} */}

      {/*    <Box>
       <video src="/assets/media/Trophy_1_VP8.m4v" autoPlay loop playsInline muted preload="none" width={600} /> 
      </Box>
      */}
      {/* <ReactPlayer url="/assets/media/Trophy_1_VP8.webm" playing loop muted width={1200} /> */}
    </Stack>
  );
};
