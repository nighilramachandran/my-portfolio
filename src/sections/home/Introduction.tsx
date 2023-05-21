import { Box, Stack, Typography } from "@mui/material";
import { m } from "framer-motion";
import { varFade } from "../../component/animate/variants";
import MotionViewport from "../../component/animate/MotionViewport";

type IntroProps = {
  heading: string;
  description: { desc: string }[];
}[];

const IntroD: IntroProps = [
  {
    heading: "About me...",
    description: [
      {
        desc: "As a Front End Developer, I combine my love for coding with my passion for design to create beautiful and functional websites. I specialize in creating responsive and user-friendly interfaces for websites and applications.",
      },
      {
        desc: "Throughout my career, I have had the opportunity to work on a variety of projects, from small business websites to large-scale applications used by millions of users. I am passionate about web design and development, and I am always looking for new and innovative ways to improve the user experience.",
      },
      {
        desc: "In my work, I strive to balance aesthetics with functionality, using the latest technologies and best practices to create interfaces that are both visually stunning and user friendly. I believe that good design is not just about looking pretty, but about creating a seamless and intuitive user experience that keeps users coming back.",
      },
      {
        desc: "In this portfolio, you will find a selection of my work, showcasing my skills and experience as a front-end developer. Whether you are a potential client, employer, or fellow developer, I hope that this portfolio will give you a good sense of my abilities and approach to web development.",
      },
      {
        desc: "Thank you for taking the time to visit my portfolio, and I look forward to hearing from you!",
      },
    ],
  },
];

export const Intro: React.FC = () => {
  return (
    <Box id="Intro" component={MotionViewport}>
      {IntroD.map((el, ind) => (
        <Stack key={ind} direction={"column"} gap={4}>
          <m.div variants={varFade().inRight}>
            <Typography sx={{ fontSize: "50px" }}>{el.heading}</Typography>
          </m.div>

          {el.description.map((el, ind) => (
            <m.div key={ind} variants={varFade().inRight}>
              <Typography sx={{ fontSize: "25px" }}>{el.desc}</Typography>
            </m.div>
          ))}
        </Stack>
      ))}
    </Box>
  );
};
