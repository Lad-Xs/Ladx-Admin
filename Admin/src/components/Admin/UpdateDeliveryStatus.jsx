import React from "react";
import { Box, TextField, Typography, Checkbox } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import johnImg from "../../assets/john.jpg";
import leilaImg from "../../assets/leila.jpg";
import samImg from "../../assets/sam.jpg";

const UpdateDeliveryStatus = () => {
  return (
    <Box sx={{ marginTop: "15px", marginBottom: "10px" }}>
      {/* Search bar with search icon on the left */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "15px",
          marginBottom: "10px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          sx={{
            flexGrow: 1,
            backgroundColor: "white",
            borderRadius: "10px",
            marginRight: "10px",
          }}
          InputProps={{
            startAdornment: (
              <SearchIcon sx={{ color: "inherit", marginRight: "8px" }} />
            ),
          }}
        />
        <Box
          sx={{
            backgroundColor: "white",
            color: "#F66F1E",
            padding: "10px 15px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Today{" "}
          <KeyboardArrowDownIcon sx={{ marginLeft: "4px", color: "#F66F1E" }} />
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#F5F5F5",
          flexGrow: 1,
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        {/* White Container */}
        <Box
          sx={{
            backgroundColor: "white",
            padding: { xs: "10px", sm: "15px", md: "20px" },
            borderRadius: "10px",
            marginTop: "1px",
            width: "100%",
            height: { xs: "auto", sm: "auto", md: "100vh" },
            position: "relative",
          }}
        >
          <h2>Update Delivery Status</h2>

          {/* Header Row for Items, Traveler, Status */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "space-between" },
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: { xs: "5px", sm: "8px", md: "10px" },
              marginBottom: "20px",
              flexWrap: "wrap",
            }}
          >
            {["Item", "Traveler", "Status"].map((text, index) => (
              <Typography
                key={index}
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "12px", md: "16px" },
                  textAlign: "center",
                  flex: { xs: "1 1 100%", md: "auto" },
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>

          {/* Item List */}
          <Box sx={{ marginBottom: "20px" }}>
            {["Hand Bags", "Gadgets", "Food Items", "Hand Bags"].map(
              (item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                    borderBottom: index < 3 ? "1px solid #E0E0E0" : "none",
                    paddingBottom: "10px",
                    paddingX: { xs: "10px", sm: "0" },
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  {/* Item Name and Checkbox */}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Checkbox size="small" />
                    <Typography
                      sx={{
                        marginLeft: "10px",
                        fontSize: { xs: "14px", md: "16px" },
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>

                  {/* Traveler Information */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: { xs: "8px", md: "0" },
                    }}
                  >
                    <Box
                      component="img"
                      src={[johnImg, leilaImg, samImg, johnImg][index]}
                      alt="profile"
                      sx={{
                        width: 25,
                        height: 25,
                        borderRadius: "50%",
                        marginRight: "10px",
                      }}
                    />
                    <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                      {
                        [
                          "Sam Kethin",
                          "John Durelo",
                          "Leila Adebayo",
                          "Sam Kethin",
                        ][index]
                      }
                    </Typography>
                  </Box>

                  {/* Status Information */}
                  <Box
                    sx={{
                      borderRadius: "4px",
                      padding: "5px 10px",
                      textAlign: "end",
                      color:
                        index === 1 ? "red" : index === 2 ? "green" : "blue",
                      fontSize: { xs: "14px", md: "16px" },
                      marginTop: { xs: "8px", md: "0" },
                    }}
                  >
                    {["In Process", "Failed", "Delivered", "In Process"][index]}
                  </Box>
                </Box>
              )
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UpdateDeliveryStatus;
