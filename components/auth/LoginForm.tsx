"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import useApiManager from "@/hooks/useApiManager";
import { setAuthTokenPair } from "@/lib/session";
import { AuthResponseDto, LoginDto } from "@/types/api.schemas";
import { ApiResponse } from "@/types/general";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

/* -----------------------------
   Schema
------------------------------ */
const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const { mutation, isLoading } = useApiManager<
    ApiResponse<AuthResponseDto>,
    unknown,
    LoginDto
  >({
    endpoint: "/api/auth/login",
    method: "POST",
    isAuth: false,
    showSuccessToast: false, // We'll handle toast manually
  });

  /* -----------------------------
     Submit Handler
  ------------------------------ */
  const onSubmit = async (values: LoginFormValues) => {
    mutation.mutate(values, {
      onSuccess(data) {
        const { accessToken, refreshToken, refreshTokenExpires, user } =
          data.data.data;

        // Set tokens with Remember Me option
        setAuthTokenPair(
          accessToken,
          refreshToken,
          refreshTokenExpires,
          values.rememberMe,
        );

        toast.success(`Welcome ${user.name}`);

        queryClient.invalidateQueries({}); // Refresh all cached queries

        router.push("/"); // Redirect after login
      },
      onError(error) {
        toast.error("Login failed. Check your credentials.");
      },
    });
  };

  return (
    <Card className="shadow-none bg-transparent border-none w-full text-base md:w-[485px]">
      <CardHeader>
        <CardTitle className="text-[#0A0707] font-bold md:text-[20px]">
          Sign In
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="your@email.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="••••••••"
                        type={showPassword ? "text" : "password"}
                        className="pr-10"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Remember Me + Forgot Password */}
            <FormItem className="flex justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="border-primary-500"
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">
                      Remember me
                    </FormLabel>
                  </FormItem>
                )}
              />
              <Button className="bg-transparent text-primary-500 hover:bg-transparent hover:border-b-2 hover:border-b-primary-500">
                Forgot Password
              </Button>
            </FormItem>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full h-14 font-bold tracking-normal leading-32 text-[16px]"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Form>

        <CardDescription className="mt-4 text-tertiary-900 font-semibold text-center md:text-left">
          Don't have an account? <br className="md:hidden" />
          <span className="text-primary-500">
            Partner with fresh2carts
          </span>{" "}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
