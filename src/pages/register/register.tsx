import { memo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, LinkButton, PasswordInput } from "../../components";
import { useAuthUtils } from "../../hooks";

export interface RegisterFormInputs {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
}

export const Register = memo(() => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<RegisterFormInputs>();
  const { signUp } = useAuthUtils();
  const onSubmit = useCallback(handleSubmit(signUp), []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-700">Register</h2>
        </div>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <Input
              id="firstName"
              type="text"
              label="First Name"
              placeholder="Enter your firstname"
              errorMessage={errors.firstName?.message}
              {...register("firstName", { required: "Firstname is required" })}
            />
          </div>
          <div className="mb-4">
            <Input
              id="lastName"
              type="text"
              label="Last Name"
              placeholder="Enter your lastname"
              errorMessage={errors.lastName?.message}
              {...register("lastName", { required: "Lastname is required" })}
            />
          </div>
          <div className="mb-4">
            <Input
              id="username"
              type="text"
              label="Username"
              errorMessage={errors.username?.message}
              placeholder="Enter your username"
              {...register("username", { required: "Username is required" })}
            />
          </div>
          <div className="mb-4">
            <Input
              id="email"
              type="email"
              label="Email"
              errorMessage={errors.email?.message}
              placeholder="Enter your email"
              {...register("email", { required: "Email is required" })}
            />
          </div>
          <div className="mb-4">
            <Input
              id="dateOfBirth"
              type="date"
              label="Date of birthday"
              errorMessage={errors.dateOfBirth?.message}
              placeholder="Enter your date of birthday"
              {...register("dateOfBirth", {
                required: "Entering your date of birthday is required",
              })}
            />
          </div>
          <div className="mb-4">
            <PasswordInput
              id="password"
              label="Password"
              errorMessage={errors.password?.message}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
          </div>

          <div className="mb-4">
            <PasswordInput
              id="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm Password"
              errorMessage={errors.confirmPassword?.message}
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
            />
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
