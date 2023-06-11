import { Box, Container, Typography, useTheme } from "@mui/material";
import Overview from "./Overview";
import Banner from "../../Components/Banner";

const HomePage = () => {
    const theme = useTheme();
  return (
    <>
      <Banner/>
      {/* <HomeContain1 /> */}
      <Container sx={{
        
      }}>
       
        <Box>
        <Box
            marginY="100px"
            textTransform="uppercase"
            display="flex"
            justifyContent="center"
            alignItems="center"
            margin="48px 0 24px 0"
          >
            {/* <b
              style={{
                display: "block",
                flex: "1",
                height: "2px",
                opacity: ".1",
                backgroundColor: "#555555",
              }}
            ></b> */}
            <Typography
              fontSize="2rem"
              fontWeight={600}
              padding="16px"
              color={theme.palette.secondary.main}
            >
              GIỚI THIỆU ĐOÀN CÔNG NGHỆ THÔNG TIN
            </Typography>
            {/* <b
              style={{
                display: "block",
                flex: "1",
                height: "2px",
                opacity: ".1",
                backgroundColor: "#555555",
              }}
            ></b> */}
          </Box>
        </Box>
      </Container>
      <Overview 
        background={theme.palette.secondary.background}
        title="ĐOÀN CÔNG NGHỆ THÔNG TIN"
        path="/introduce"
        img="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/319276402_573424818126346_7421643665744894014_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yE89EajLS3kAX89IBHL&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfAabFfr1v9U0AvPMXArNSUCFzb8FmAybXrGKiccawFsuQ&oe=6465A1A2"
        content="Đoàn Công nghệ thông tin là tổ chức đại diện cho sinh viên và cán bộ giáo viên trong bộ môn Công nghệ thông tin. Hoạt động của Đoàn Công nghệ thông tin bao gồm tổ chức các hoạt động văn hóa, thể thao, tình nguyện, hội thảo, chia sẻ kinh nghiệm, tạo cơ hội giao lưu giữa các trường đại học và các doanh nghiệp trong lĩnh vực CNTT. Đoàn Công nghệ thông tin cũng đóng vai trò quan trọng trong việc hỗ trợ và đưa ra các giải pháp cho các vấn đề sinh viên đối diện, tạo điều kiện cho các sinh viên phát triển bản thân, rèn luyện kỹ năng và kết nối với cộng đồng CNTT."
        buttonText="GIỚI THIỆU"
        
      />
      <Overview 
        flexDirection="row-reverse"
        title="CÁC HOẠT ĐỘNG"
        path="/activities"
        img="https://res.cloudinary.com/dhypn6jgk/image/upload/v1682846441/IT_UTC2/Logo_Banner/78626570_10206152947458137_3434988244884783104_n.jpg_phwald.jpg"
        content="Đoàn Công nghệ thông tin là tổ chức đại diện cho sinh viên và cán bộ giáo viên trong bộ môn Công nghệ thông tin. Hoạt động của Đoàn Công nghệ thông tin bao gồm tổ chức các hoạt động văn hóa, thể thao, tình nguyện, hội thảo, chia sẻ kinh nghiệm, tạo cơ hội giao lưu giữa các trường đại học và các doanh nghiệp trong lĩnh vực CNTT. Đoàn Công nghệ thông tin cũng đóng vai trò quan trọng trong việc hỗ trợ và đưa ra các giải pháp cho các vấn đề sinh viên đối diện, tạo điều kiện cho các sinh viên phát triển bản thân, rèn luyện kỹ năng và kết nối với cộng đồng CNTT."
        buttonText="XEM THÊM"
      />
      <Container disableGutters={true} maxWidth="lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.2750790998148!2d106.79288403848689!3d10.845696397326853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527158a0a5b81%3A0xf45c5d34ac580517!2zUGjDom4gaGnhu4d1IFRyxrDhu51uZyDEkOG6oWkgaOG7jWMgR1RWVCB04bqhaSBUcC4gSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1682851576998!5m2!1svi!2s"
          style={{
            width: "100%",
            height: "400px",
            border: "0",
            allowfullscreen: "",
            loading: "lazy",
            referrerpolicy: "no-referrer-when-downgrade",
            margin: "24px 0",
            boxShadow: " rgba(0, 0, 0, 0.32) -3.67394e-16px 2px 8px 0px ",
          }}
        ></iframe>
      </Container>
    </>
  );
};

export default HomePage;
