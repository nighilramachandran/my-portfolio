import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { LottieLazyLoad } from "../../component/lottie-lazyload/LottieLazyLoad";
import { varFade } from "../../component/animate/variants";
import { m } from "framer-motion";
import MotionViewport from "../../component/animate/MotionViewport";
import { MapComponents } from "../../component/maps/map";

type contactType = {
  title: string;
  icon: string;
}[];

const contactData: contactType = [
  { title: "Dubai", icon: "location" },
  { title: "+971 56 601 49 39", icon: "phone" },
  { title: "nighilramm@gmail.com", icon: "mail" },
  { title: "Nighil.R", icon: "linkedin" },
  { title: "Nighil.R", icon: "facebook" },
  { title: "Nighil.R", icon: "instagram" },
];

export const Contact = () => {
  const Icons = ({ icon, title }: any) => {
    return (
      <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
        <Box sx={{ width: "30px", height: "30px" }}>
          <img src={`/assets/icons/${icon}.svg`} alt="" />
        </Box>

        <Typography>{title}</Typography>
      </Stack>
    );
  };

  return (
    <Stack id="Cont" component={MotionViewport} spacing={8} sx={{ position: "relative" }}>
      <m.div variants={varFade().inDown}>
        <Typography sx={{ fontSize: "50px", textAlign: "center" }}>Get in Touch</Typography>
      </m.div>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <MapComponents />
      </Stack>
      <m.div variants={varFade().inUp}>
        <Paper sx={{ mb: 10 }}>
          <Grid container>
            <Grid
              item
              xs={12}
              lg={4}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{ mb: { xs: 5, lg: 0 } }}
            >
              <Box sx={{ width: "300px", height: "300px" }}>
                <LottieLazyLoad url={`/lotties/contact.json`} />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={4}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{ mb: { xs: 5, lg: 0 } }}
            >
              <Stack sx={{ textAlign: { xs: "center", lg: "initial" } }}>
                <Typography fontSize={"30px"}>Thank you for taking the time to visit my portfolio.</Typography>
                <Typography fontSize={"30px"}>I look forward to hearing from you!</Typography>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              lg={4}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{ mb: { xs: 5, lg: 0 } }}
            >
              <Stack spacing={3}>
                {contactData.map((el, ind) => (
                  <Box key={ind}>
                    <Icons title={el.title} icon={el.icon} />
                  </Box>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </m.div>
    </Stack>
  );
};
