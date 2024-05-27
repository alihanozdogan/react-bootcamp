import React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

interface CustomAppBarProps extends MuiAppBarProps {
  open?: boolean;
  handleDrawerOpen: () => void;
}

const drawerWidth = 240;

const CustomAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<CustomAppBarProps>(({ open }) => ({
  ...(open && {
    backgroundColor: "black",
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
  }),
}));

const AppBar: React.FC<CustomAppBarProps> = ({ open, handleDrawerOpen }) => {
  return (
    <CustomAppBar handleDrawerOpen={handleDrawerOpen} position="fixed" open={open} sx={{ backgroundColor: "#272727" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ color: "white" }}>
          UTAL Bootcamp
        </Typography>
      </Toolbar>
    </CustomAppBar>
  );
};

export default AppBar;