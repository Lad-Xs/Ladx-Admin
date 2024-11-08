import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import johnImg from "../../assets/john.jpg";
import leilaImg from "../../assets/leila.jpg";
import homepp from "../../assets/homepp.jpg";

const BoxComponent = () => {
  return (
    <Grid container spacing={2} sx={{ flexGrow: 0 }}>
      {Array.from(Array(3)).map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box
            sx={{
              backgroundColor: "white",
              width: { xs: "90%", sm: "180px", md: "205px" },
              height: { xs: "160px", sm: "180px", md: "190px" },
              padding: { xs: "8px", sm: "10px", md: "10px" },
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: { xs: "auto", sm: "10px auto", md: "0" },
            }}
          >
            {index === 0 && (
              <>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ position: "relative", width: 50, height: 30 }}>
                    <Box
                      component="img"
                      src={johnImg}
                      sx={{
                        width: { xs: 25, md: 30 },
                        height: { xs: 25, md: 30 },
                        borderRadius: "50%",
                        border: "2px solid white",
                        position: "absolute",
                        left: 0,
                        zIndex: 3,
                      }}
                    />
                    <Box
                      component="img"
                      src={leilaImg}
                      sx={{
                        width: { xs: 25, md: 30 },
                        height: { xs: 25, md: 30 },
                        borderRadius: "50%",
                        border: "2px solid white",
                        position: "absolute",
                        left: 10,
                        zIndex: 2,
                      }}
                    />
                    <Box
                      component="img"
                      src={johnImg}
                      sx={{
                        width: { xs: 25, md: 30 },
                        height: { xs: 25, md: 30 },
                        borderRadius: "50%",
                        border: "2px solid white",
                        position: "absolute",
                        left: 20,
                        zIndex: 1,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "10px", md: "12px" },
                      marginLeft: "50px",
                    }}
                  >
                    Amount of Travelers
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#F66F1E",
                    marginTop: "10px",
                    fontSize: { xs: "20px", md: "24px" },
                  }}
                >
                  101
                </Typography>
              </>
            )}

            {index === 1 && (
              <>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      display: "flex",
                      position: "relative",
                      marginRight: "10px",
                    }}
                  >
                    <Box
                      component="img"
                      src={homepp}
                      sx={{
                        width: { xs: 25, md: 30 },
                        height: { xs: 25, md: 30 },
                        borderRadius: "50%",
                        border: "2px solid white",
                        position: "absolute",
                        left: 0,
                      }}
                    />
                    <Box
                      component="img"
                      src={homepp}
                      sx={{
                        width: { xs: 25, md: 30 },
                        height: { xs: 25, md: 30 },
                        borderRadius: "50%",
                        border: "2px solid white",
                        position: "absolute",
                        left: 15,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: "10px", md: "12px" },
                      marginLeft: "50px",
                    }}
                  >
                    Amount of Senders
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#F66F1E",
                    marginTop: "10px",
                    fontSize: { xs: "20px", md: "24px" },
                  }}
                >
                  226
                </Typography>
              </>
            )}

            {index === 2 && (
              <>
                <Box
                  sx={{
                    alignSelf: "flex-start",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#F66F1E",
                      fontSize: { xs: "14px", md: "16px" },
                    }}
                  >
                    Monthly
                  </Typography>
                  <ArrowDropDownIcon
                    sx={{
                      color: "#F66F1E",
                      fontSize: { xs: "18px", md: "20px" },
                      marginLeft: "5px",
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    color: "#210947",
                    fontSize: { xs: "24px", md: "28px" },
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  74
                </Typography>

                <Typography
                  sx={{
                    color: "#210947",
                    fontSize: { xs: "12px", md: "14px" },
                    marginTop: "5px",
                    textAlign: "center",
                  }}
                >
                  Total Amount of Package <br /> Delivered/Sender
                </Typography>
              </>
            )}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default BoxComponent;
