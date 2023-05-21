import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { Header } from "./header";

export const Layout: React.FC = () => {
  return (
    <Box>
      <Header />
      {/* <Container maxWidth={"xl"} component="main"> */}
      <Outlet />
      {/* </Container> */}
    </Box>
  );
};

//nighil
//https://bootstrapmade.com/demo/Personal/
