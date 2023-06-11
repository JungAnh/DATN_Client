import { Box, Typography, useTheme } from "@mui/material"
import { Link } from "react-router-dom"

const HomeContain2 = () => {
  const theme = useTheme();
  return(
    <Box sx={{
       display:"flex",
       justifyContent:"center"
    }}>
      <Typography >HOẠT ĐỘNG</Typography>
    </Box>
  )
}

export default HomeContain2