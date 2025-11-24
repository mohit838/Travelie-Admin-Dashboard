import type { LoginFormType } from "./login/login.schema";
import type { RegisterFormType } from "./register/register.schema";

export const DUMMY_USER = {
  name: "Admin User",
  email: "admin@test.com",
  password: "admin123",
};

export const loginRequest = async (payload: LoginFormType) => {
  await new Promise((res) => setTimeout(res, 800)); // fake delay

  if (payload.email === DUMMY_USER.email && payload.password === DUMMY_USER.password) {
    return {
      accessToken: "demo_access_token_123",
      refreshToken: "demo_refresh_token_456",
      user: DUMMY_USER,
    };
  }

  throw new Error("Invalid email or password");
};

export const registerRequest = async (payload: RegisterFormType) => {
  await new Promise((res) => setTimeout(res, 800));

  return {
    message: "Registered successfully (dummy)",
    user: {
      name: payload.name,
      email: payload.email,
    },
  };
};
