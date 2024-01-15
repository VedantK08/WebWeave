import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { Mail, Notifications, Pets } from "@mui/icons-material";
import { Link } from "react-router-dom";
const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(() =>
  // {
  //   /*theme*/
  // }
  ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: "5px",
    width: "40%",
  })
);

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBar = () => {
  const [open, setopen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer" }}
          onClick={() => alert("Vedantu CLicked")}
        >
          VEDANTU
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            src="https://pragativadi.com/wp-content/uploads/2021/01/Hrithik-Roshan-3-1579703264814_16fcda6e62f_large.jpg"
            onClick={(e) => setopen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setopen(true)}>
          <Avatar
            sx={{ width: 30, height: 30, cursor: "pointer" }}
            src="https://pragativadi.com/wp-content/uploads/2021/01/Hrithik-Roshan-3-1579703264814_16fcda6e62f_large.jpg"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        // MenuItems will get close when we click anywhere.
        onClose={(e) => setopen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem component={Link} to="/profile">
          Profile
        </MenuItem>
        <MenuItem component={Link} to="/myAccount">
          My account
        </MenuItem>
        <MenuItem component={Link} to="/userLogin">
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
