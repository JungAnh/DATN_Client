import { Box, Typography, Container, useTheme } from "@mui/material"

const HomeContain1 = () => {
  const theme = useTheme();
  return(
    <Box>
      <Container sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginY:"100px",
        fontWeight:"500",
        fontSize:"20px",
        textAlign:"center"

      }}>
      Đoàn khoa Công nghệ thông tin là một đội ngũ sinh viên trẻ, năng động và tài năng của trường Đại học Giao thông Vận tải 
      Phân hiệu tại TPHCM, với mục tiêu đưa công nghệ thông tin đến gần hơn với cộng đồng và đóng góp tích cực cho sự phát triển 
      của ngành này. Đoàn khoa tổ chức nhiều hoạt động ý nghĩa như các buổi seminar, cuộc thi, chương trình tình nguyện và 
      các sự kiện hội thảo với những chủ đề sôi động và thú vị. Với tinh thần đoàn kết, sự cống hiến và tâm huyết, 
      đoàn khoa Công nghệ thông tin đã trở thành một thương hiệu uy tín và được nhiều người yêu mến và tôn trọng.
      </Container>

    </Box>
  )
}

export default HomeContain1