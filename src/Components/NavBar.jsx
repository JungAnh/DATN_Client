import React from "react";
import { Box, Container } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "@emotion/react";
import DropNav from "./DropNav";
import { useSelector } from "react-redux";

const Navbar = ({ justify, items }) => {
  const theme = useTheme();
  const user = useSelector((state) => state.account.account);
  return (
    <section className="navbar">

      <Container disableGutters={true} maxWidth="lg" sx={{display:"flex", justifyContent:"space-between", alignItems:"center", marginY:"15px"}}>
        <Link to="/">
          <img src="https://res.cloudinary.com/dhypn6jgk/image/upload/v1682318111/IT_UTC2/Logo_Banner/319276402_573424818126346_7421643665744894014_n.jpg_xj4oc3.jpg" alt="" width="100px" height="100px"/>
        </Link>
        <Box
          display="flex"
          justifyContent={justify}
          sx={{
            padding: "0 24px",
          }}
        >
          {items.map((item) => {
            return (
              <Box
                key={item.id}
                sx={{
                  a: {
                    textTransform: "uppercase",
                    position: "relative",
                    margin: "10px",
                    color: theme.palette.primary.contrastText,
                    fontWeight: "500",
                   
                  },
                  "a.active": {
                    color: theme.palette.primary.highlightText,
                  },
                  ".navdrop": {
                    display: "none",
                  },
                  "&:hover .navdrop": {
                    display: "block",
                  },
                  "a:hover": {
                    color: theme.palette.primary.highlightText,
                  },
                }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  {item.title}
                  {item.drop ? (
                    <i
                      className="fa-solid fa-chevron-down"
                      style={{
                        marginLeft: "6px",
                        fontSize: "0.7rem",
                        transform: `translateY(${-3}px)`,
                      }}
                    ></i>
                  ) : (
                    <></>
                  )}
                </NavLink>
                {item.drop ? <DropNav items={item.drop} /> : <></>}
                {user?.role === "member" && item.drop2 ? (
                  <DropNav items={item.drop2} />
                ) : (
                  <></>
                )}
              </Box>
            );
          })}
        </Box>
      </Container>
    </section>
  );
};

export default Navbar;
