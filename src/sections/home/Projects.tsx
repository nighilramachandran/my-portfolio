import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { varFade } from "../../component/animate/variants";
import { m } from "framer-motion";
import MotionViewport from "../../component/animate/MotionViewport";

type ProjectProbs = {
  name: string;
  img: string;
  desc: string;
  lang: { lan: string }[];
  link: string;
  button: string;
}[];

const ProjectsData: ProjectProbs = [
  {
    name: "Golex.io",
    img: "golex.webp",
    desc: "Golex.io provides secure, trusted digital asset trading and asset management services, the highest quality investment opportunities, and the most rewarding trading experience.",
    lang: [{ lan: "#NextJs" }, { lan: "#websockets" }, { lan: "#Material-UI" }],
    link: "https://golex.io/",
    button: "Live",
  },
  {
    name: "GolCoin Stacking",
    img: "golstacking.png",
    desc: "GolCoin Stacking is a platform for cryptocurrency stacking. GolCoin Stacking empowers individuals to participate in the staking economy and earn passive income from their digital assets.",
    lang: [{ lan: "#ReactJs" }, { lan: "#Redux" }, { lan: "#Axios" }],
    link: "https://golstaking.io/",
    button: "Live",
  },
  {
    name: "Golc LandingPage",
    img: "golclandingpage.png",
    desc: "Golc LandingPage is a cryptocurrency landing page that showcases the features of buying and selling cryptocurrency with new experiance useing visualization tool.",
    lang: [{ lan: "#ReactJs" }, { lan: "#threeJs" }, { lan: "#webpack" }],
    link: "http://www.boss-accounting.com:8011/",
    button: "Live",
  },

  {
    name: "Metagols LandingPage",
    img: "metagols.png",
    desc: "Metagols is a platform to connect friends and family, it also features in exchanging cryptos.",
    lang: [{ lan: "#ReactJs" }, { lan: "#Bootstrap" }],
    link: "http://boss-accounting.com:8099/",
    button: "Live",
  },
  {
    name: "FIZZ NFT",
    img: "fizz.png",
    desc: "FIZZ NFT is a platform which lets you to connect with wallet, discover, buy NTFs, sell your NFTs and earn money.",
    lang: [{ lan: "#ReactJs" }, { lan: "#Redux" }, { lan: "#Tailwind" }],
    link: "http://boss-accounting.com:8098/",
    button: "Live",
  },
  // {
  //   name: "Arab Marketing Agency",
  //   img: "arabmarketingagency.png",
  //   desc: "Arab Marketing Agency is a online platform that provides up-to-date and comprehensive information on current events",
  //   lang: [{ lan: "#ReactJs" }, { lan: "#Redux" }, { lan: "#Axios" }],
  //   link: "",
  //   button: "Maintenance",
  // },
  {
    name: "Gdex",
    img: "gdex.png",
    desc: "Gdex is a platform for the users to seamlessly exchange cryptocurrencies with ease",
    lang: [{ lan: "#ReactJs" }, { lan: "#MUI" }, { lan: "#Redux" }],
    link: "",
    button: "Comming Soon",
  },
];

export const Projects = () => {
  return (
    <Stack id="Proj" component={MotionViewport}>
      <Stack textAlign="center" spacing={2} mb={5}>
        <m.div variants={varFade().inDown}>
          <Typography sx={{ fontSize: "25px", letterSpacing: "10px" }}>
            Best of my work
          </Typography>
        </m.div>
        <m.div variants={varFade().inUp}>
          <Typography sx={{ fontSize: "50px" }}>Projects</Typography>
        </m.div>
      </Stack>

      <Grid
        container
        spacing={2}
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
            <m.div variants={varFade().inUp} whileHover={{ scale: 1.02 }}>
              <Paper
                sx={{
                  maxWidth: "350px",
                  width: "100%",
                  height: "500px",
                  overflow: "hidden",
                }}
              >
                <Stack justifyContent={"space-between"} height={"100%"}>
                  {/* image for the project */}
                  <Stack gap={3}>
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
                    <Stack spacing={2}>
                      <Typography variant="h1" sx={{ fontSize: "20px" }}>
                        {el.name}
                      </Typography>
                      <Typography sx={{ fontSize: "15px" }}>
                        {el.desc}
                      </Typography>
                    </Stack>
                  </Stack>

                  <Stack spacing={2}>
                    <Stack direction={"column"} spacing={2}>
                      <Stack direction={"row"} spacing={1}>
                        {el.lang &&
                          el.lang.map((lang, ind) => (
                            <Typography
                              key={ind}
                              color={
                                ind === 0
                                  ? "#22d8dc"
                                  : ind === 1
                                  ? "#38ef7d"
                                  : "#fc6767"
                              }
                            >
                              {lang.lan}
                            </Typography>
                          ))}
                      </Stack>
                      <Button
                        onClick={() => window.open(el.link, "_blank")}
                        disabled={el.button === "Live" ? false : true}
                        variant="contained"
                        sx={{ color: "text.primary" }}
                      >
                        {el.button}
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Paper>
            </m.div>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
