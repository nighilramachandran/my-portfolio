import styled from "@emotion/styled";
import { ListSubheader, Popover, alpha } from "@mui/material";

export const StyledPopover = styled(Popover)(({ theme }: any) => ({
  "& .MuiPopover-paper": {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    alignItems: "flex-start",
    right: 16,
    margin: "auto",
    top: `80px !important`,
    padding: theme.spacing(5, 1, 1, 3),
    boxShadow: theme.customShadows.dialog,
    maxWidth: theme.breakpoints.values.lg,
    borderRadius: Number(theme.shape.borderRadius) * 2,
    border: `solid 1px ${alpha(theme.palette.grey[500], 0.16)}`,
  },
}));

export const StyledSubheader = styled(ListSubheader)(({ theme }: any) => ({
  ...theme.typography.overline,
  padding: 0,
  fontSize: 11,
  color: theme.palette.text.primary,
}));
