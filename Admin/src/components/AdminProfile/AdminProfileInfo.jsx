// AdminProfileInfo.jsx
import React from "react";
import { Box, Avatar, Typography, Button } from "@mui/material";
import image from "../../assets/image.jpg"; // Import image directly inside this component

const AdminProfileInfo = ({ name, role, handleEditClick }) => {
  return (
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: { xs: "100px", sm: "226px" },
          padding: "20px",
          position: "relative",
          marginTop: "110px",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-start" },
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          {/* Profile Image */}
          <Avatar
            src={image} // Using the imported image here
            alt="Profile Image"
            sx={{
              width: "290px",
              height: "220px",
              borderRadius: "10px",
              marginBottom: { xs: "20px", sm: "0" }, // Adjust margin for responsiveness
            }}
          />

          {/* Name and Admin Section */}
          <Box
            sx={{
              marginLeft: { sm: "20px" },
              textAlign: { xs: "center", sm: "left" }, // Center text on small screens
            }}
          >
            <Typography variant="h5">{name}</Typography>
            <Typography
              variant="body2"
              sx={{ color: "red", marginTop: "5px" }} // Style for the role
            >
              {role}
            </Typography>
          </Box>

          {/* Edit Button */}
          <Button
            variant="contained"
            onClick={handleEditClick} // Click handler for the Edit button
            sx={{
              backgroundColor: "white",
              color: "#2E2E2E",
              borderRadius: "50px",
              padding: "15px",
              paddingX: 2,
              marginLeft: { sm: "auto" }, // Align button to the right on large screens
              marginTop: { xs: "20px", sm: "0" }, // Adjust margin for responsiveness
            }}
          >
            Edit Profile
          </Button>
        </Box>
      </Box>
  );
};

export default AdminProfileInfo;
