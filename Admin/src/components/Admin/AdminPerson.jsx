import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

const AdminPerson = () => {
  return (
    <Grid
      container
      direction="column" // Column by default for all items
      alignItems="center"
      sx={{ width: "100%", marginTop: "20px" }}
    >
      {/* Bell Icon, Name Section (Name + Admin), and Person Icon */}
      <Grid
        container
        item
        direction={{ xs: "column", md: "row" }} // Column on mobile, row on larger screens
        alignItems="center"
        justifyContent="center"
        spacing={3} // Adds space between items in row layout
      >
        {/* Bell Icon with Black Background and Green Dot */}
        <Grid item>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                backgroundColor: "black",
                borderRadius: "50%",
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <NotificationsIcon sx={{ color: "white" }} />
            </Box>
            {/* Green Dot */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "10px",
                height: "10px",
                backgroundColor: "#009951",
                borderRadius: "50%",
              }}
            />
          </Box>
        </Grid>

        {/* Name Section (Name + Admin) */}
        <Grid item>
          <Box sx={{ textAlign: "center" }}>
            {/* Name */}
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Sam Adeniyi
            </Typography>
            {/* Role */}
            <Typography variant="body2" sx={{ color: "#009951" }}>
              Admin
            </Typography>
          </Box>
        </Grid>

        {/* Person Icon with Square Background */}
        <Grid item>
          <Box
            sx={{
              backgroundColor: "black",
              width: "65px",
              height: "65px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "0",
            }}
          >
            <PersonIcon sx={{ color: "white", fontSize: "40px" }} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdminPerson;
