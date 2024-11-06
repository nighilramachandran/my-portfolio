import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { LottieLazyLoad } from "../../component/lottie-lazyload/LottieLazyLoad";
import { varFade } from "../../component/animate/variants";
import { m } from "framer-motion";
import MotionViewport from "../../component/animate/MotionViewport";
import { MapComponents } from "../../component/maps/map";

interface contactMeData {
  title: string;
  icons: string;
  desc: string;
  social?: { title: string; icon: string; link: string }[];
}

const contactMeDatas: contactMeData[] = [
  {
    title: "Email Me",
    desc: "nighilramm@gmail.com",
    icons: "mail",
  },
  { title: "Call Me", desc: "+971 56 601 49 39", icons: "phone" },
  {
    title: "My address",
    desc: "Aayah Residence, JVC - Dubai",
    icons: "location",
  },
  {
    title: "Social Profiles",
    desc: "",
    icons: "socialMedia",
    social: [
      {
        title: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/nighil-ramachandran-6a2251176/",
      },
      {
        title: "facebook",
        icon: "facebook",
        link: "https://www.facebook.com/nighil.ram.7",
      },
      {
        title: "Instagram",
        icon: "instagram",
        link: "https://www.instagram.com/nig_hil/",
      },
    ],
  },
];

export const Contact = () => {
  // const Icons = ({ icon, title }: any) => {
  //   return (
  //     <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
  //       <Box sx={{ width: "30px", height: "30px" }}>
  //         <img src={`/assets/icons/${icon}.svg`} alt="" />
  //       </Box>

  //       <Typography>{title}</Typography>
  //     </Stack>
  //   );
  // };

  return (
    <Stack id="Cont" component={MotionViewport}>
      <Container maxWidth={"xl"}>
        <m.div variants={varFade().inDown}>
          <Typography sx={{ fontSize: "50px", mb: 2, textAlign: "center" }}>
            Get in Touch
          </Typography>
        </m.div>
      </Container>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <MapComponents />
      </Stack>

      <Container maxWidth={"xl"} component={MotionViewport}>
        <Stack alignItems={"center"}>
          <Box sx={{ maxWidth: "1000px" }}>
            <Paper
              sx={{
                mb: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderTopRightRadius: "0px",
                borderTopLeftRadius: "0px",
              }}
            >
              <Box sx={{ width: "300px", height: "300px" }}>
                <LottieLazyLoad url={`/lotties/contact.json`} />
              </Box>
              <Grid container spacing={1}>
                {contactMeDatas.map((el, ind) => (
                  <Grid key={ind} item xs={12} lg={6}>
                    <Box
                      sx={{
                        width: "100%",
                        height: "110px",
                        bgcolor: "background.default",
                        display: "flex",
                        alignItems: "center",
                        padding: 1.5,
                        borderRadius: "5px",
                      }}
                    >
                      <Stack justifyContent={"space-between"} height={"100%"}>
                        <Typography fontSize={"20px"}>{el.title}</Typography>
                        <Stack
                          alignItems={"center"}
                          direction={"row"}
                          spacing={1}
                        >
                          <Box
                            sx={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background: "#012625",
                            }}
                          >
                            <img
                              style={{ width: "30px", height: "30px" }}
                              src={`/assets/icons/${el.icons}.svg`}
                              alt=""
                            />
                          </Box>
                          <Typography>{el.desc}</Typography>
                          {el.social && (
                            <>
                              {el.social.map((soc, ind) => (
                                <Box
                                  key={ind}
                                  sx={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                  }}
                                  onClick={() =>
                                    window.open(soc.link, "_blank")
                                  }
                                >
                                  <img
                                    style={{ width: "30px", height: "30px" }}
                                    src={`/assets/icons/${soc.icon}.svg`}
                                    alt=""
                                  />
                                </Box>
                              ))}
                            </>
                          )}
                        </Stack>
                      </Stack>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
            <Stack
              component={MotionViewport}
              sx={{ textAlign: { xs: "center" }, mb: 4 }}
            >
              <m.div variants={varFade().inUp}>
                <Typography fontSize={"30px"}>
                  Thank you for taking the time to visit my portfolio.
                </Typography>
              </m.div>
              <m.div variants={varFade().inUp}>
                <Typography fontSize={"30px"}>
                  I look forward to hearing from you!
                </Typography>
              </m.div>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};
