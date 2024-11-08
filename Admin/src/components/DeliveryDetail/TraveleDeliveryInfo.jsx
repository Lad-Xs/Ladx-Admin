// TravelerDeliveryInfo.jsx
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import susa from "../../assets/susa.jpg";
import van from "../../assets/van.jpg";

const TravelerDeliveryInfo = ({ selectedTab }) => {
  return (
    <>
      {selectedTab === "travelers" && (
        <Box sx={{ padding: "10px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[...Array(3)].map((_, index) => (
              <Link
                key={index}
                to="/Tdev-d" // Set the URL to navigate to when the box is clicked
                style={{ textDecoration: "none", color: "inherit" }} // Inherit text color
              >
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
                    flexDirection: "row",
                    "@media (max-width: 600px)": {
                      flexDirection: "column",
                      height: "auto", // Adjust height for small screens
                    },
                  }}
                >
                  {/* Profile Image */}
                  <Box
                    component="img"
                    src={susa} // Replace with the actual path
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
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", color: "black" }}
                    >
                      Susan Sandra
                    </Typography>
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: "5px" }}
                    >
                      <Typography variant="body2" sx={{ color: "black" }}>
                        20Kg
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
                      <Box />
                      <Typography
                        variant="body2"
                        sx={{ marginRight: "5px", color: "black" }}
                      >
                        Dana Airline
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
                        From Nigeria - To Kigali, Rwanda 13 November, 2024 1:30
                        PM
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ marginTop: "5px", color: "black" }}
                    >
                      12f54338644
                    </Typography>
                  </Box>

                  {/* View Button */}
                  <Button
                    variant="contained"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the Link's onClick from firing
                    }}
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
                    Match
                  </Button>
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default TravelerDeliveryInfo;
