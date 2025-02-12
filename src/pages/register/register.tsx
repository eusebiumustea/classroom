import { memo } from "react";
import { useForm } from "react-hook-form";
import {
  EmailInput,
  PasswordInput,
  Button,
  LinkButton,
} from "../../components";

interface RegisterFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export const Register = memo(() => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const onSubmit = (data: RegisterFormInputs) => {
    console.log("Register Data:", data);
  };

  const password = watch("password");

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-700">Register</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <EmailInput
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
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="mb-4">
            <PasswordInput
              id="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button type="submit" text="Register" />
        </form>
        <LinkButton
          description="Already have an account?"
          text="Login"
          to="/login"
        />
      </div>
    </div>
  );
});
