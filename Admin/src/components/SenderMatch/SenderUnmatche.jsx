// SenderUnmatched.jsx
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import van from "../../assets/Van.jpg"; // Delivery Car image import
import men from "../../assets/men.jpg"; // Profile image import

const SenderUnmatched = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        backgroundColor: "#FFF",
        boxShadow: "0 0 5px rgba(0,0,0,0.2)",
        borderRadius: "10px",
        display: "flex",
        marginTop: "40px",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        flexDirection: "row",
        "&:hover": {
          cursor: "pointer", // Change cursor on hover
          boxShadow: "0 0 10px rgba(0,0,0,0.3)", // Optional: add hover effect
        },
        "@media (max-width: 600px)": {
          flexDirection: "column",
          height: "auto", // Adjust height for small screens
        },
      }}
    >
      {/* Profile Image */}
      <Box
        component="img"
        src={men} // Replace with the actual path
        alt="Profile"
        sx={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          marginBottom: { xs: "10px", sm: "0" },
        }}
      />

      {/* Text Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginLeft: "25px",
          "@media (max-width: 600px)": {
            textAlign: "center", // Center text on small screens
          },
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "black" }}>
          Susan Sandra
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Typography variant="body2" sx={{ color: "black" }}>
            iPhone XR
          </Typography>

          <Typography
            variant="body2"
            sx={{ display: "inline", color: "black" }}
          >
            <span style={{ color: "#28A745", marginRight: "5px" }}>•</span>
            HP Laptop
          </Typography>

          <Typography
            variant="body2"
            sx={{ display: "inline", color: "black" }}
          >
            <span style={{ color: "#28A745", marginRight: "5px" }}>•</span>
            Hand Fan
          </Typography>
        </Box>

        {/* Small Profile Image and Details */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "5px",
            "@media (max-width: 600px)": {
              justifyContent: "center", // Center profile details on small screens
            },
          }}
        >
          <Typography
            variant="body2"
            sx={{ marginRight: "25px", color: "black" }}
          >
            Gadgets
          </Typography>
          <Box
            component="img"
            src={van} // Replace with the actual path
            alt="Delivery Car"
            sx={{
              width: "15px",
              height: "15px",
              margin: "0 5px",
            }}
          />
          <Typography variant="body2" sx={{ color: "black" }}>
            From Nigeria - To Kigali, Rwanda
          </Typography>
        </Box>
        <Typography variant="body2" sx={{ marginTop: "5px", color: "black" }}>
          Delivery ID: 345YH3456
        </Typography>
      </Box>

      {/* Match Button */}
      <Button
        variant="contained"
        // onClick={handleMatchClick} // Separate click handler for the button
        sx={{
          backgroundColor: "#210947",
          color: "#FFF",
          borderRadius: "5px",
          padding: { xs: "8px 10px", sm: "10px 20px" },
          flexShrink: 0,
          "@media (max-width: 600px)": {
            width: "100%", // Make the button take full width on small screens
            marginTop: "10px",
          },
          "&:hover": {
            backgroundColor: "#3E2B69",
          },
        }}
      >
        Match With Susan
      </Button>
    </Box>
  );
};

export default SenderUnmatched;
