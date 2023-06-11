import { Box, Typography, Grid } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  
  return (
    <Box sx={{
      display:"flex",
      flexDirection:"column"
    }}>
      <Grid container item
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "160px",
          paddingY: "160px",
          backgroundColor: "#17479d",
        }}
      >
        <Grid item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              sx={{ fontSize: "25px", fontWeight: "600", color: "#fff" }}
            >
              Đoàn
            </Typography>
            <Typography
              sx={{ fontSize: "35px", fontWeight: "600", color: "#fff" }}
            >
              CÔNG NGHỆ THÔNG TIN
            </Typography>
          </Box>
        </Grid>
        <Grid item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "start",
          }}
        >
          <Box>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "18px",
                color: "#fff",
              }}
            >
              <LocationOnIcon sx={{ paddingRight: "10px" }}></LocationOnIcon>
              Địa chỉ: 450 - 451 Lê Văn Việt, phường Tăng Nhơn Phú A, Quận 9,
              TP.Hồ Chí Minh
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "18px",
                color: "#fff",
              }}
            >
              {" "}
              <LocalPhoneIcon sx={{ paddingRight: "10px" }}></LocalPhoneIcon>
              Điện thoại: +84-28-38966798
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "18px",
                color: "#fff",
              }}
            >
              {" "}
              <EmailIcon sx={{ paddingRight: "10px" }}></EmailIcon>Email:
              banbientap@utc2.edu.vn
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "25px",
                fontSize: "18px",
                color: "#fff",
              }}
            >
              Website: http://dept.utc2.edu.vn/bomoncntt/
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        textAlign="center"
        sx={{
          backgroundColor: "#5b5b5b",
        }}
      >
        <Box padding="13px 0" color="#acacac">
          <Typography fontWeight={500}>
            Copyright 2023 © BỘ MÔN CÔNG NGHỆ THÔNG TIN
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
