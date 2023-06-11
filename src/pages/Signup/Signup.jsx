import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import accountApi from "../../api/modules/account.api";
import { setAccount } from "../../redux/features/accountSlice";

const defaultTheme = createTheme();

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signupForm = useFormik({
    initialValues: {
      firtsName: "",
      lastName: "",
      gmail: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Bạn phải nhập họ"),
      lastName: Yup.string().required("Bạn phải nhập tên"),
      gmail: Yup.string()
        .matches(
          /([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g,
          "Gmail không hợp lệ"
        )
        .required("Bạn phải nhập Gmail"),
      password: Yup.string()
        .min(8, "Mật khẩu tối thiểu 8 ký tự ")
        .required("Bạn phải nhập mật khẩu"),
    }),
    onSubmit : async (values) => {
      try {
        const respone = await accountApi.signup({ ...values });
        if (respone.response.status === 201) {
          navigate("/");
          dispatch(setAccount(respone.response.data));
        }
      } catch (error) {
        console.log(error);
      }
    }
  });

 

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={signupForm.handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="text"
                  name="firstName"
                  placeholder="Nhập họ"
                  required
                  fullWidth
                  value={signupForm.values.firstName}
                  onChange={signupForm.handleChange}
                  color="success"
                  error={
                    signupForm.touched.firstName &&
                    signupForm.errors.firstName !== undefined
                  }
                  helperText={
                    signupForm.touched.firstName && signupForm.errors.firstName
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="text"
                  placeholder="Nhập tên"
                  name="lastName"
                  required
                  fullWidth
                  value={signupForm.values.lastName}
                  onChange={signupForm.handleChange}
                  color="success"
                  error={
                    signupForm.touched.lastName &&
                    signupForm.errors.lastName !== undefined
                  }
                  helperText={
                    signupForm.touched.lastName && signupForm.errors.lastName
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="text"
                  fullWidth
                  name="gmail"
                  placeholder="Nhập gmail"
                  value={signupForm.values.gmail}
                  onChange={signupForm.handleChange}
                  color="success"
                  error={
                    signupForm.touched.gmail &&
                    signupForm.errors.gmail !== undefined
                  }
                  helperText={
                    signupForm.touched.gmail && signupForm.errors.gmail
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="password"
                  required
                  fullWidth
                  placeholder="Nhập mật khẩu"
                  name="password"
                  value={signupForm.values.password}
                  onChange={signupForm.handleChange}
                  color="success"
                  error={
                    signupForm.touched.password &&
                    signupForm.errors.password !== undefined
                  }
                  helperText={
                    signupForm.touched.password && signupForm.errors.password
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
