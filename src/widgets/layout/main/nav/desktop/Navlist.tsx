import { Box } from "@mui/material";
import { NavItem } from "./NavItem";
import { NavItemProps } from "../types";
import { useState } from "react";

type NavListProps = {
  item: NavItemProps;
  isOffset?: boolean;
};

export const NavList = ({ item }: NavListProps) => {
  const [openPopover, setOpenPopover] = useState<HTMLElement | null>(null);

  return <NavItem item={item} open={Boolean(openPopover)} />;
};
