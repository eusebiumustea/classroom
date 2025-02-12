import { memo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, LinkButton, PasswordInput } from "../../components";
import { useAuthUtils } from "../../hooks";
import { LoginInput } from "../../models/auth";

export const Login = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();
  const { signIn } = useAuthUtils();
  const onSubmit = useCallback(handleSubmit(signIn), []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-700">Login</h2>
        </div>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <Input
              id="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <PasswordInput
              id="password"
              label="Password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <Button type="submit" text="Login" />
        </form>
        <LinkButton
          description="Don't have an account?"
          text="Register"
          to="/register"
        />
      </div>
    </div>
  );
});
