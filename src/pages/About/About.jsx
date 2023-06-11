import { Box, Container, Typography, useTheme } from "@mui/material";
import Overview from "./Overview";

const About = () => {
  const theme = useTheme();

  return (
    <section className="about">
      <Box
        sx={{
          width: "100%",
          height: "500px",
          backgroundImage: `url("https://img.freepik.com/premium-vector/background-concept-technology_49459-482.jpg?w=900")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            height: "500px",
          }}
        >
          <Typography
            sx={{ fontSize: "3.75rem", color: "#fff", fontWeight: "600" }}
          >
            GIỚI THIỆU{" "}
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "20px",
              padding: "18px 0",
              fontWeight: "500",
            }}
          >
            ĐOÀN CÔNG NGHỆ THÔNG TIN{" "}
          </Typography>
          <Typography
            sx={{ color: "#fff", fontSize: "20px", fontWeight: "500" }}
          >
            KHOA CÔNG NGHỆ THÔNG TIN TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI PHÂN HIỆU
            TP.HCM{" "}
          </Typography>
        </Box>
      </Box>

      <Container disableGutters={true} maxWidth="lg">
        <Box
          textAlign="center"
          margin="32px 0"
          color="#555"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography fontWeight="700" fontSize="25px" marginBottom="15px">
            ĐOÀN CÔNG NGHỆ THÔNG TIN
          </Typography>
          <Typography>
            Đoàn Công nghệ thông tin là tổ chức đại diện cho sinh viên và cán bộ
            giáo viên trong bộ môn Công nghệ thông tin. Hoạt động của Đoàn Công
            nghệ thông tin bao gồm tổ chức các hoạt động văn hóa, thể thao, tình
            nguyện, hội thảo, chia sẻ kinh nghiệm, tạo cơ hội giao lưu giữa các
            trường đại học và các doanh nghiệp trong lĩnh vực CNTT. Đoàn Công
            nghệ thông tin cũng đóng vai trò quan trọng trong việc hỗ trợ và đưa
            ra các giải pháp cho các vấn đề sinh viên đối diện, tạo điều kiện
            cho các sinh viên phát triển bản thân, rèn luyện kỹ năng và kết nối
            với cộng đồng CNTT.
          </Typography>
          <Typography margin="15px 0">
            Nhiệm vụ chính: Đoàn công nghệ thông tin của Đại học Giao Thông Vận
            Tải phân hiệu TPHCM có nhiệm vụ nghiên cứu, phát triển và ứng dụng
            các công nghệ thông tin trong lĩnh vực giao thông vận tải. Đây là
            một ngành có tính chất đặc thù và đóng góp quan trọng cho việc quản
            lý, vận hành và phát triển hệ thống giao thông vận tải hiệu quả.
          </Typography>
          <div
            style={{
              marginTop: "15px",
              height: "5px",
              width: "35px",
              backgroundColor: "#ced5e3",
            }}
          ></div>
        </Box>
      </Container>

      <Box color="#555">
        <Typography textAlign="center" fontSize="25px" fontWeight="600" margin="15px 0">
          {" "}
          CÁC HOẠT ĐỘNG ĐÃ DIỄN RA
        </Typography>
        <Overview
          background={theme.palette.secondary.background}
          title="HOẠT ĐỘNG NGOẠI KHÓA CỦA SINH VIÊN KHÓA 60"
          path="/introduce"
          img="https://res.cloudinary.com/dhypn6jgk/image/upload/v1682846441/IT_UTC2/Logo_Banner/78626570_10206152947458137_3434988244884783104_n.jpg_phwald.jpg"
          content="Hoạt động tham quan công ty ngành công nghệ thông tin là một hoạt động thường được tổ chức để giúp sinh viên hoặc người quan tâm có cơ hội khám phá và hiểu rõ hơn về môi trường làm việc và quy trình làm việc trong các công ty CNTT. Giúp học sinh có cái nhìn thực tế về môi trường làm việc và trang thiết bị công nghệ của công ty, có cơ hội gặp gỡ và trò chuyện với các nhân viên của công ty, bao gồm các kỹ sư, chuyên gia công nghệ thông tin, quản lý dự án và người đứng đầu các bộ phận khác nhau."
          buttonText="GIỚI THIỆU"
        />
        <Overview
          flexDirection="row-reverse"
          
          title="GIẢI BÓNG ĐÁ THƯỜNG NIÊN NGÀNH CÔNG NGHỆ THÔNG TIN"
          path="/introduce"
          img="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/316268232_553504496785045_2273244987422421274_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=LQuVFePRlagAX_GP6FJ&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDaCPL3JSbHrXSOJUnYspmsMTxeP2U2yX3z-BcjlfrIVA&oe=6468F195"
          content="Giải bóng đá ngành công nghệ thông tin là một sự kiện thể thao thường được tổ chức nhằm tạo ra một môi trường giao lưu, thể hiện tinh thần đồng đội và khám phá khả năng thể thao của các thành viên trong ngành công nghệ thông tin, là một sự kiện dành riêng cho sinh viên trong ngành CNTT  để chào đón các thành viên mới trong ngành công nghệ thông tin"
          buttonText="GIỚI THIỆU"
        />
        
      </Box>
    </section>
  );
};

export default About;
