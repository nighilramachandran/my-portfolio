import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { varFade } from "../../component/animate/variants";
import { m } from "framer-motion";
import MotionViewport from "../../component/animate/MotionViewport";

type ProjectProbs = {
  name: string;
  img: string;
  desc: string;
}[];

const ProjectsData: ProjectProbs = [
  {
    name: "Golex.io",
    img: "golex.webp",
    desc: "Golex.io provides secure, trusted digital asset trading and asset management services, the highest quality investment opportunities, and the most rewarding trading experience.",
  },
  {
    name: "Golc LandingPage",
    img: "golclandingpage.png",
    desc: "is a cryptocurrency landing page that showcases the features of buying and selling cryptocurrency with new experiance useing visualization tool",
  },
  {
    name: "Arab Marketing Agency",
    img: "arabmarketingagency.png",
    desc: "is a online platform that provides up-to-date and comprehensive information on current events",
  },
  {
    name: "Meta Connect",
    img: "metaconnect.png",
    desc: "Platform that connects people by video and audio and also where you can schedule meetings etc...",
  },
  { name: "Metagols", img: "metagols.png", desc: "" },
  { name: "Gdex", img: "gdex.png", desc: "" },
];

export const Projects = () => {
  return (
    <Stack id="Proj" component={MotionViewport}>
      <Stack textAlign="center" spacing={2} mb={5}>
        <m.div variants={varFade().inDown}>
          <Typography sx={{ fontSize: "25px", letterSpacing: "10px" }}>
            Selection of my work
          </Typography>
        </m.div>
        <m.div variants={varFade().inUp}>
          <Typography sx={{ fontSize: "50px" }}>Projects</Typography>
        </m.div>
      </Stack>

      <Grid
        container
        spacing={3}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ mb: 5 }}
      >
        {ProjectsData.map((el, ind) => (
          <Grid
            key={ind}
            item
            lg={4}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            mb={5}
          >
            <m.div variants={varFade().inUp}>
              <Paper sx={{ maxWidth: "350px", width: "100%", height: "450px" }}>
                <Stack spacing={2}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "200px",
                      background: "#FFF",
                      borderRadius: "16px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      width={"100%"}
                      height={"100%"}
                      style={{ objectFit: "cover" }}
                      src={`/assets/images/projects/${el.img}`}
                      alt=""
                    />
                  </Box>
                  <Typography variant="h1" sx={{ fontSize: "20px" }}>
                    {el.name}
                  </Typography>
                  <Typography sx={{ fontSize: "15px" }}>{el.desc}</Typography>
                </Stack>
              </Paper>
            </m.div>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
