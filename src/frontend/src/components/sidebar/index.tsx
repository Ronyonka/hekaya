import React from "react";
import homeIcon from "../icons/icon-nav-home.svg";
import bookmarkIcon from "../icons/icon-nav-bookmark.svg";
import { Link, useLocation } from "react-router-dom";
import { Box, Hidden, Typography } from "@mui/material";

const navLinks = [
    {
        name: "Home",
        icon: homeIcon,
        link: "/"
    },
    {
        name: "Reading List",
        icon: bookmarkIcon,
        link: "/reading-list"
    }
]
const Sidebar = () => {
    const { pathname } = useLocation();
  
    return (
      <Box
        sx={{
          backgroundColor: "#335c6e",
          padding: 2,
          borderRadius: 2,
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          alignItems: "center",
          justifyContent: "space-between",
          width: {
            sm: "100%",
            lg: 200,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 5,
            alignItems: {
              xs: "center",
              lg: "start",
            },
            width: "100%",
          }}
        >
          <Hidden smDown>
            <Typography
              variant="h5"
              component="h1"
              my={2}
              fontWeight={800}
              fontSize={18}
              color="white"
            >
              Hekaya
            </Typography>
          </Hidden>
  
          <Box
            sx={{
              py: {
                xs: "0px",
                lg: "16px",
              },
              display: "flex",
              flexDirection: {
                xs: "row",
                lg: "column",
              },
              gap: 4,
            }}
          >
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    style={{
                      width: "18px",
                      filter: `${
                        pathname === item.link
                          ? "#CFFAFA"
                          : "#4AA088"
                      }`,
                    }}
                  />
                  <Hidden mdDown>
                    <Typography>{item.name}</Typography>
                  </Hidden>
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    );
  };

  export default Sidebar;