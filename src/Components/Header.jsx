import { useTheme } from "@emotion/react";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Category } from "../api/modules/category.api";
import SearchBar from "./SearchBar";
import DropNav from "./DropNav";
import Navbar from "./NavBar";

// import { schoolName } from "../api/modules/schoolName.api";

const Header = (items) => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          padding: "8px 0",
          backgroundColor: theme.palette.primary.blue,
          fontWeight: "500",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: " #fff",
            }}
          >
            Phòng 3 dãy E10 450 - 451 Lê Văn Việt, Phường Tăng Nhơn Phú A, Quận
            9, TP. HỒ CHÍ MINH
          </Typography>
          <Box>
            <Link to={"https://www.facebook.com/BoMonCNTTUTCHCMC"}>
              <FacebookIcon
                className="icon"
                sx={{
                  color: "#fff",
                  marginRight: "10px",
                }}
              />
            </Link>
            <Link to={""}>
              <EmailIcon
                className="icon"
                sx={{
                  color: "#fff",
                }}
              />
            </Link>
          </Box>
        </Container>
      </Box>
      <Navbar items={Category}/>
      <SearchBar />
    </Box>
  );
};

export default Header;
