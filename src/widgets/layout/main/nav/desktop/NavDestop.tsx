import { Stack, Typography, Link } from "@mui/material";
import { NavItemProps, NavProps } from "../types";

export const NavDestop: React.FC<NavProps> = ({ data, Scroll, desktop }) => {
  const HandleClick = (link: string) => {
    Scroll(link);
  };

  return (
    <Stack
      component="nav"
      direction={desktop === true ? "row" : "column"}
      gap={5}
      sx={{ mr: 5 }}
    >
      {data.map((link, ind) => (
        <Link
          sx={{ cursor: "pointer" }}
          key={ind}
          // onClick={() => Scroll(link?.to ?? "")}
          onClick={() => HandleClick(link.to ?? "")}
        >
          <StyledNavItems title={link.title} />
        </Link>
      ))}
    </Stack>
  );
};

export const StyledNavItems = ({ title }: NavItemProps) => {
  return (
    <Typography
      sx={{
        color: "text.primary",
        fontWeight: "700",
        "&:hover": {
          color: "primary.main",
        },
      }}
    >
      {title}
    </Typography>
  );
};
