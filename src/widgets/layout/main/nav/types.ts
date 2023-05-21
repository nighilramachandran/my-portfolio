import { ListItemButtonProps } from "@mui/material";

export type NavProps = {
  //   isOffset: boolean;
  data: NavItemProps[];
  Scroll: (val: string) => void;
  desktop: boolean;
};

export type NavItemProps = {
  to?: string;
  title: string;
  children?: {
    subheader: string;
    items: {
      title: string;
      path?: string;
    }[];
  }[];
};

export interface NavItemDesktopProps extends ListItemButtonProps {
  item: NavItemProps;
  isOffset?: boolean;
  active?: boolean;
  open?: boolean;
  subItem?: boolean;
  isExternalLink?: boolean;
}
