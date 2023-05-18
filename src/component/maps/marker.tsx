import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Marker = ({ text, onClick }: any) => {
  const StyledWrapper = styled(Box)(({ theme }: any) => ({
    width: "100%",
    height: "100%",
    borderRadius: 10,
    overflow: "hidden",
  }));
  return <StyledWrapper alt={text} onClick={onClick} />;
};

Marker.defaultProps = {
  onClick: null,
  text: "marker",
};

// Marker.propTypes = {
//   onClick: PropTypes.func,
//   text: PropTypes.string.isRequired,
// };
