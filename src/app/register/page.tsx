"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";
import { userApi } from "@/lib/api/user.api";
import { UserDocument } from "@/models/user";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsRegistering(true);
    if (!firstName || !lastName || !email || !password) {
      toast.error("Please fill in all fields");
      setIsRegistering(false);
      return;
    }

    const userData: UserDocument = {
      firstName,
      lastName,
      email,
      password,
    };

    const res: any = await userApi.register(userData);
    setIsRegistering(false);

    console.log("Return: ", res);
    if (res.result !== 0) {
      toast.error("Check your user informations.");
      return;
    }

    toast.success("Registration successful!");
    router.push("/login"); // Client-side navigation - no page reload
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-white to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Image
            src="/budget_logo.png"
            alt="Logo"
            width={300}
            height={300}
            className="mx-auto"
          />
          <p className="text-gray-600">Create your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              First Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your first name"
                required
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Last Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Create a password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          {isRegistering ? (
            <button
              type="button"
              className="w-full cursor-progress bg-[#01501f] text-white py-3 px-4 rounded-lg focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors font-medium"
              disabled={true}
            >
              Creating Account...
            </button>
          ) : (
            <button
              type="submit"
              className="w-full cursor-pointer bg-[#38921e] text-white py-3 px-4 rounded-lg hover:bg-[#01501f] focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors font-medium"
            >
              Sign Up
            </button>
          )}
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => router.push("/login")}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
