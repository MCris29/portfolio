import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import styles from "@/styles/Login.module.scss";
import {
  TextField,
  Typography,
  Button,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "@/lib/auth";
import withoutAuth from "@/hocs/withoutAuth";
import { getStoredTheme } from "@/utils/theme";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Enter your email")
    .email("Enter a valid email"),
  password: yup
    .string()
    .required("Enter a valid password")
    .min(6, "The password must be at least 6 characters"),
});

const Login: NextPage = () => {
  const [mode, setMode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  useEffect(() => {
    const storedTheme = getStoredTheme();
    setMode("" + storedTheme);
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { login } = useAuth();

  const onSubmit = async (data: any = {}) => {
    console.log("data", data);
    setLoading(true);

    try {
      const userData = await login(data);

      if (userData.data.error) {
        console.log("error", userData.data.error);
        setError(userData.data.error);
      } else console.log("userData", userData);
    } catch (error) {
      console.log("error", error);
    }
    setLoading(false);
  };

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
  };

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <Typography>Welcome!</Typography>
        {error ? (
          <span className={styles.error_2}>{error}</span>
        ) : (
          <span></span>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                id="email"
                label="Email"
                name="email"
                required
                fullWidth
                autoFocus
                margin="normal"
                className={styles.textField}
                error={Boolean(errors.email)}
              />
            )}
          />
          <span className={styles.error}>{errors.email?.message}</span>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <FormControl
                sx={{
                  width: "-webkit-fill-available",
                  "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
                    transform: "translate(0, -6px)",
                    fontSize: "12px",
                    margin: "0 14px",
                    padding: "0 5px",
                    backgroundColor: mode == "light" ? "#F8F8FF" : "#2A2A2A",
                  },
                }}
                variant="outlined"
                margin="normal"
                {...field}
                error={Boolean(errors.password)}
              >
                <InputLabel htmlFor="password">Password *</InputLabel>
                <OutlinedInput
                  id="password"
                  name="password"
                  className={styles.textField}
                  fullWidth={true}
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            )}
          />
          <span className={styles.error}>{errors.password?.message}</span>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={styles.button}
            style={{ color: mode == "light" ? "#F8F8FF" : "#2A2A2A" }}
            disabled={loading}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default withoutAuth(Login);
