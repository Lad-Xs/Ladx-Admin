// AdminSidebar.jsx
import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MessageIcon from "@mui/icons-material/Message";
import test from "../assets/test.jpg";
import { useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: { xs: "80px", sm: "226px" }, // Adjust width for small screens
        transition: "width 0.3s ease", // Smooth transition for width change
      }}
    >
      {/* Logo at the top */}
      <Box
        component="img"
        src={test}
        alt="Ladx Logo"
        sx={{
          width: { xs: "50px", sm: "150px" }, // Adjust logo size for smaller screens
          height: "auto",
          marginTop: "20px",
          marginBottom: "30px",
        }}
      />

      {/* Sidebar with navigation items */}
      <Box
        sx={{
          backgroundColor: "#210947",
          width: "100%",
          height: "100%",
          borderTopRightRadius: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "20px 0",
        }}
      >
        <List sx={{ color: "#D3D3D3" }}>
          <ListItem
            button
            onClick={() => handleNavigation("/admin")}
            sx={{
              "&:hover": { color: "#FFF" },
              "&:active": { color: "#F66F1E" },
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "unset",
                color: "#D3D3D3",
              }}
            >
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              primary="Home"
              sx={{ display: { xs: "none", sm: "block" } }}
            />
          </ListItem>

          <ListItem
            button
            onClick={() => handleNavigation("/admin-l")}
            sx={{
              "&:hover": { color: "#FFF" },
              "&:active": { color: "#F66F1E" },
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "unset",
                color: "#D3D3D3",
              }}
            >
              <LocalShippingIcon />
            </ListItemIcon>
            <ListItemText
              primary="Orders"
              sx={{ display: { xs: "none", sm: "block" } }}
            />
          </ListItem>

          <ListItem
            button
            onClick={() => handleNavigation("/user")}
            sx={{
              "&:hover": { color: "#FFF" },
              "&:active": { color: "#F66F1E" },
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "unset",
                color: "#D3D3D3",
              }}
            >
              <PersonIcon />
            </ListItemIcon>
            <ListItemText
              primary="Users"
              sx={{ display: { xs: "none", sm: "block" } }}
            />
          </ListItem>

          <ListItem
            button
            onClick={() => handleNavigation("/admin-m")}
            sx={{
              "&:hover": { color: "#FFF" },
              "&:active": { color: "#F66F1E" },
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "unset",
                color: "#D3D3D3",
              }}
            >
              <MessageIcon />
            </ListItemIcon>
            <ListItemText
              primary="Messages"
              sx={{ display: { xs: "none", sm: "block" } }}
            />
          </ListItem>

          <ListItem
            button
            // onClick={() => handleNavigation("/settings")}
            sx={{
              "&:hover": { color: "#FFF" },
              "&:active": { color: "#F66F1E" },
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "unset",
                color: "#D3D3D3",
              }}
            >
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText
              primary="Settings"
              sx={{ display: { xs: "none", sm: "block" } }}
            />
          </ListItem>
        </List>

        <List sx={{ color: "#D3D3D3" }}>
          <ListItem
            button
            onClick={() => handleNavigation("/admin")}
            sx={{
              "&:hover": { color: "#FFF" },
              "&:active": { color: "#F66F1E" },
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: "unset",
                color: "#D3D3D3",
              }}
            >
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              sx={{ display: { xs: "none", sm: "block" } }}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default AdminSidebar;
