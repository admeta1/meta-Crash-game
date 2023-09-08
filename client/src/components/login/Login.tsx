
import React, { useState, useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";



type LoginFormInputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();

  const schema = z.object({
    email: z.string().nonempty("Email is required").email("Email not valid"),
    password: z.string().nonempty("Password is required").min(6).max(20),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, // Retrieve values from password and confirmPassword inputs
  } = useForm<LoginFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const passwordValue = watch("password");

  const onSubmit: SubmitHandler<LoginFormInputs> = async(data) => {
    console.log(data);
   try {
    const response = await axios.post('http://192.168.68.133:3300/auth/login', data);
    // Handle the successful response here
    console.log(response.data); 

    
   } catch (error) {
    console.log(error,'this is error');
    
   }
  };

  return (
    <div className="container-1">
      <div className="page">
        <div className="cover">
          <div className="login-heading">
            <h1>LOGIN</h1>
            <h4>Welcome Back !</h4>
          </div>
          <div className="center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label>Email:</label>
                <input {...register("email")} />
                {errors.email && <span>{errors.email.message}</span>}
              </div>

              <div>
                <label>Password:</label>
                <input {...register("password")} />
                {errors.password && <span>{errors.password.message}</span>}
              </div>

              <div className="forgot-btn">Forgot password?</div>

              <button className="login-btn" type="submit">
                Submit
              </button>
            </form>

            <div
              className="login-Account-btn"
              onClick={() => navigate("/register")}
            >
              Don't have an account? Register First
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

