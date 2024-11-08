// UserInfo.jsx
import React from "react";
import { Box, Badge, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

const UserInfo = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "20px",
        right: "20px",
        width: { xs: "200px", sm: "380px" }, // Fixed width for small screens and up
        height: "99px",
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        boxShadow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      {/* Bell Icon with Green Dot */}
      <Badge
        color="success"
        variant="dot"
        overlap="circular"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          marginRight: "2px", // Reduced space between bell and name
        }}
      >
        <Box
          sx={{
            backgroundColor: "#210947",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NotificationsIcon sx={{ color: "#FFFFFF" }} />
        </Box>
      </Badge>

      {/* Name */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ textAlign: "center", fontSize: { xs: "0.9rem", sm: "1rem" } }}
        >
          Sam Adeniyi
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            marginTop: "2px",
            fontSize: { xs: "0.7rem", sm: "0.8rem" },
          }}
        >
          Admin
        </Typography>
      </Box>

      {/* Small person icon to the right of the name */}
      <Box
        sx={{
          backgroundColor: "#210947",
          borderRadius: "4px",
          width: "24px",
          height: "24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "2px",
        }}
      >
        <PersonIcon sx={{ color: "#FFFFFF", fontSize: "16px" }} />
      </Box>
    </Box>
  );
};

export default UserInfo;
