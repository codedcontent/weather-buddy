import CustomButton from "@/components/CustomButton";
import CustomTextField from "@/components/CustomTextField";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <main className="w-full h-full">
      {/* Login CTA */}
      <div className="w-full">
        <p className="text-lg font-semibold">Login</p>
        <p className="font-light">
          Login to your account to see your Weather Buddy account settings
        </p>
      </div>

      {/* Login Form */}
      <form
        className="flex flex-col gap-y-0 my-6 gap-2"
        // onSubmit={formik.handleSubmit}
      >
        {/* Email */}
        <CustomTextField
          label="Email"
          //   touched={formik.touched.email}
          //   error={formik.errors.email}
          //   fieldProps={formik.getFieldProps("email")}
          //   disabled={formik.isSubmitting}
          placeholder="Enter your email"
        />

        {/* Password */}
        <CustomTextField
          label="Password"
          //   touched={formik.touched.password}
          //   error={formik.errors.password}
          //   fieldProps={formik.getFieldProps("password")}
          //   disabled={formik.isSubmitting}
          placeholder="Enter your password"
        />

        <div className="mt-10">
          <CustomButton
            label="Login"
            variant="filled"
            type="submit"
            // loading={formik.isSubmitting}
          />
        </div>
      </form>

      {/* Create Account */}
      <Link
        href={"/register"}
        className="text-sm underline font-light float-right mt-6"
      >
        Don&apos;t have an account? Create one here
      </Link>
    </main>
  );
};

export default LoginPage;
