import { AppBar, Box, Button, Toolbar, useTheme } from "@mui/material";
import { NavDestop } from "./main/nav/desktop/NavDestop";
import navConfig from "./main/nav/config";
import useOffSetTop from "../../hooks/useOffSetTop";
import { bgBlur } from "../../utils/cssStyles";
import { HEADER } from "../../utils/config";
import useResponsive from "../../hooks/useResponsive";
import styled from "@emotion/styled";

import MotionViewport from "../../component/animate/MotionViewport";
import { animateScroll, scroller } from "react-scroll";

const StyledAvatar = styled(Box)(({ theme }: any) => ({
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  background: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "3px",
  border: `3px solid ${theme.palette.primary.main}`,
  marginRight: "40px",
}));

const StyledAvatarInner = styled(Box)(({ theme }: any) => ({
  width: "100%",
  height: "100%",
  background: "white",
  borderRadius: "50%",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 10px 6px -6px #777",
}));

export const Header: React.FC = () => {
  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

  const theme = useTheme();

  const isDesktop = useResponsive("up", "md");

  const ScrollFunction = (val: string) => {
    scroller.scrollTo(val, {
      duration: 800,
      delay: 0,
      smooth: "easeInOut",
      offset: -150,
    });
  };

  return (
    <AppBar component={MotionViewport} sx={{ position: "sticky", bgcolor: "background.header", borderRadius: 0 }}>
      <Toolbar
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_MAIN_DESKTOP,
          },
          transition: theme.transitions.create(["height", "background-color"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(isOffset && {
            ...bgBlur({ color: theme.palette.background.default }),
            height: {
              md: HEADER.H_MAIN_DESKTOP - 16,
            },
          }),
        }}
      >
        <StyledAvatar>
          <StyledAvatarInner>
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain", position: "absolute", top: "7px" }}
              src="/assets/images/me.JPG"
              alt="Nighil Logo"
            />
          </StyledAvatarInner>
        </StyledAvatar>
        {isDesktop && <NavDestop Scroll={(val: string) => ScrollFunction(val)} data={navConfig} />}
        <Box sx={{ marginLeft: "auto" }}>
          <Button
            sx={{
              color: "text.primary",
              background: "transparent",
              border: "2px solid #fc9915",
              borderRadius: "10px",
            }}
            variant="contained"
          >
            Download CV
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
