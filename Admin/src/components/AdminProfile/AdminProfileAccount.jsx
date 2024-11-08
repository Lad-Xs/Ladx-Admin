// AdminProfileAccount.jsx

import React from "react";
import { Box, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LanguageIcon from "@mui/icons-material/Language";

const AdminProfileAccount = () => {
  return (
    <Box sx={{ padding: "10px" }}>
      {/* Account Settings Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: 4,
          marginBottom: 4,
        }}
      >
        <PersonOutlineIcon
          sx={{
            fontSize: 30,
            color: "black",
            backgroundColor: "#F5F5F5",
            borderRadius: "50%",
            padding: 0.5,
          }}
        />
        <Box sx={{ marginLeft: 3 }}>
          <Typography variant="body1">Account settings</Typography>
          <Typography variant="body2" color="textSecondary">
            Account information, reset password or account deactivation.
          </Typography>
        </Box>
      </Box>

      {/* Language Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: 4,
          marginBottom: 4,
        }}
      >
        <LanguageIcon
          sx={{
            fontSize: 30,
            color: "black",
            backgroundColor: "#F5F5F5",
            borderRadius: "50%",
            padding: 0.5,
          }}
        />
        <Box sx={{ marginLeft: 3 }}>
          <Typography variant="body1">Language</Typography>
          <Typography variant="body2" color="textSecondary">
            English, UK
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminProfileAccount;
