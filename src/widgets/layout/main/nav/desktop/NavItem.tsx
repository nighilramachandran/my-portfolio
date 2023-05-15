import { CardActionArea, Link, LinkProps, ListItem } from "@mui/material";
import Iconify from "../../../../../component/iconify/Iconify";
import { forwardRef } from "react";
import { NavItemDesktopProps, NavItemProps } from "../types";

import { m } from "framer-motion";

export const NavItem = forwardRef<HTMLDivElement, NavItemDesktopProps>(({ item, open }) => {
  const { title, children } = item;

  const renderContent = (
    <ListItem
    //   ref={ref}
    // disableRipple
    // isOffset={isOffset}
    // subItem={subItem}
    // active={active}
    // open={open} {...other}
    >
      {title}
      {!!children && (
        <Iconify width={16} icon={open ? "eva:arrow-ios-upward-fill" : "eva:arrow-ios-downward-fill"} sx={{ ml: 1 }} />
      )}
    </ListItem>
  );
  // Default
  //   to={path} component={RouterLink}
  return (
    <Link sx={{ cursor: "pointer" }} underline="none">
      {renderContent}
    </Link>
  );
});

interface NavItemDashboardProps extends LinkProps {
  item: NavItemProps;
}

export function NavItemDashboard({ item, sx, ...other }: NavItemDashboardProps) {
  return (
    // <Link  component={RouterLink} {...other}>
    <>
      <CardActionArea
        sx={{
          py: 5,
          px: 10,
          borderRadius: 1,
          color: "text.disabled",
          bgcolor: "background.neutral",
          ...sx,
        }}
      >
        <m.div
          whileTap="tap"
          whileHover="hover"
          variants={{
            hover: { scale: 1.02 },
            tap: { scale: 0.98 },
          }}
        >
          {/* <Image alt="illustration_dashboard" src="/assets/illustrations/illustration_dashboard.png" /> */}
        </m.div>
      </CardActionArea>
    </>
    // </Link>
  );
}
