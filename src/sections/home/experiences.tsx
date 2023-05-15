import { Box, Stack, Typography } from "@mui/material";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IndustrialDetails } from "../../utils/industries";
import { CalculateTimeGap } from "../../component/calculate-time-gap/TimeGap";
import MotionViewport from "../../component/animate/MotionViewport";
import { varFade } from "../../component/animate/variants";
import { m } from "framer-motion";

const TimeGap = (year: number, month: number) => {
  const { years, months } = CalculateTimeGap(year, month);

  return (
    <>
      Dec 2021 - present · {years} yrs {months} mon
    </>
  );
};

export const Experience: React.FC = () => {
  return (
    <Stack id="Expe" component={MotionViewport} gap={10}>
      <m.div variants={varFade().inDown}>
        <Typography sx={{ fontSize: "50px", textAlign: "center" }}>Work Experience</Typography>
      </m.div>
      <VerticalTimeline>
        {IndustrialDetails?.map((comp, ind) => (
          <VerticalTimelineElement
            key={ind}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#43685D", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #43685D" }}
            date={comp.company.includes("Silwana Infotech") ? (TimeGap(2021, 12) as unknown as string) : comp.time}
            iconStyle={{ background: "#fc9915", overflow: "hidden" }}
            icon={
              <Box
                sx={{
                  border: "4px solid #003c3b",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  overflow: "hidden",
                }}
              >
                <img style={{ width: "100%", height: "100%" }} src={comp.icon} alt="company icons" />
              </Box>
            }
          >
            <h3 className="vertical-timeline-element-title">{comp.position}</h3>
            <h4 className="vertical-timeline-element-subtitle">{comp.company}</h4>
            {comp.desc.map((el, ind) => (
              <p key={ind}>{el.detail}</p>
            ))}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Stack>
  );
};
