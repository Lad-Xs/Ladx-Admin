// SenderMatched.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import susa from "../../assets/susa.jpg"; // Profile image import
import van from "../../assets/Van.jpg"; // Van image import

const SenderMatched = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "200px",
        backgroundColor: "#FFF",
        boxShadow: "0 0 5px rgba(0,0,0,0.2)",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        flexDirection: { xs: "column", sm: "row" }, // Stacks content vertically on small screens
        height: { xs: "auto", sm: "200px" }, // Adjust height for small screens
        "&:hover": {
          cursor: "pointer", // Change cursor on hover
          boxShadow: "0 0 10px rgba(0,0,0,0.3)", // Optional hover effect
        },
      }}
    >
      {/* Profile Image */}
      <Box
        component="img"
        src={susa} // Replace with actual path
        alt="Profile"
        sx={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          marginBottom: { xs: "10px", sm: "0" }, // Adds margin below image on small screens
        }}
      />

      {/* Text Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginLeft: { xs: "0", sm: "25px" }, // Adjust left margin for larger screens
          textAlign: { xs: "center", sm: "left" }, // Center text on small screens
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "black" }}>
          Susan Sandra
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-start" },
            gap: "5px",
            flexWrap: { xs: "wrap", sm: "nowrap" },
          }}
        >
          <Typography variant="body2" sx={{ color: "black" }}>
            iPhone XR
          </Typography>

          <Typography variant="body2" sx={{ color: "black" }}>
            <span style={{ color: "#28A745", marginRight: "5px" }}>•</span>
            HP Laptop
          </Typography>

          <Typography variant="body2" sx={{ color: "black" }}>
            <span style={{ color: "#28A745", marginRight: "5px" }}>•</span>
            Hand Fan
          </Typography>
        </Box>

        {/* Small Profile Image and Details */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-start" },
            marginTop: "5px",
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
    </Box>
  );
};

export default SenderMatched;
