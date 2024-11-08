import React from "react";
import { Box, Typography, Button } from "@mui/material";
import van from "../../assets/Van.jpg"; // Replace with your actual path
import susa from "../../assets/susa.jpg"; // Replace with your actual path
import af from "../../assets/af.jpg"; // Replace with your actual path

const unmatchedTravelers = [
  {
    profileImage: susa,
    name: "Susan Sandra",
    items: ["iPhone XR", "HP Laptop", "Hand Fan"],
    category: "Gadgets",
    deliveryRoute: "From Nigeria - To Kigali, Rwanda",
    deliveryId: "345YH3456",
  },
  {
    profileImage: af,
    name: "Afia Mensah",
    items: ["MacBook Pro", "Smart Watch", "Camera"],
    category: "Electronics",
    deliveryRoute: "From Ghana - To Nairobi, Kenya",
    deliveryId: "567YH7890",
  },
];

const UnmatchedTraveler = () => {
  return (
    <>
      {unmatchedTravelers.map((traveler, index) => (
        <Box
          key={index}
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
            marginTop: "40px",
            flexDirection: "row",
            "&:hover": {
              cursor: "pointer",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            },
            "@media (max-width: 600px)": {
              flexDirection: "column",
              height: "auto",
            },
          }}
        >
          {/* Profile Image */}
          <Box
            component="img"
            src={traveler.profileImage}
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
                textAlign: "center",
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "black" }}
            >
              {traveler.name}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              {traveler.items.map((item, idx) => (
                <Typography key={idx} variant="body2" sx={{ color: "black" }}>
                  {item}
                </Typography>
              ))}
            </Box>

            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "5px" }}
            >
              <Typography
                variant="body2"
                sx={{ marginRight: "25px", color: "black" }}
              >
                {traveler.category}
              </Typography>
              <Box
                component="img"
                src={van}
                alt="Delivery Car"
                sx={{
                  width: "15px",
                  height: "15px",
                  margin: "0 5px",
                }}
              />
              <Typography variant="body2" sx={{ color: "black" }}>
                {traveler.deliveryRoute}
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{ marginTop: "5px", color: "black" }}
            >
              Delivery ID: {traveler.deliveryId}
            </Typography>
          </Box>

          {/* Match Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#210947",
              color: "#FFF",
              borderRadius: "5px",
              padding: { xs: "8px 10px", sm: "10px 20px" },
              flexShrink: 0,
              "@media (max-width: 600px)": {
                width: "100%",
                marginTop: "10px",
              },
              "&:hover": {
                backgroundColor: "#3E2B69",
              },
            }}
          >
            Match with {traveler.name}
          </Button>
        </Box>
      ))}
    </>
  );
};

export default UnmatchedTraveler;
