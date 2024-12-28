import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const RegisterPage = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setError("");
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("https://reqres.in/api/register", form);
      setSuccess("Registration successful!");

      setTimeout(() => {
        navigate("/");
      }, 2000);
      console.log(response);
    } catch (error) {
      console.log(error);
      setError("Invalid username or password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="relative grid w-full h-screen py-6 m-0 text-white bg-no-repeat bg-cover place-items-center bg-background bg-primary animate-rotate">
        <div className="flex flex-col items-center justify-center w-11/12 max-w-lg p-8 sm:p-10 rounded-xl backdrop-blur-sm bg-[rgba(0,0,0,0.5)]">
          <h2 className="mb-4 text-3xl font-semibold sm:text-4xl">Register</h2>
          <h3 className="mb-6 text-sm font-light text-gray-300 sm:text-base">
            Create your account
          </h3>
          <form
            className="grid w-full gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              className="w-full h-12 sm:h-14 rounded-lg border-0 text-white bg-[rgba(255,255,255,0.08)] text-base px-4 placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              className="w-full h-12 sm:h-14 rounded-lg border-0 text-white bg-[rgba(255,255,255,0.08)] text-base px-4 placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-primary"
            />
            <a
              href="/login"
              className="mb-4 text-sm text-left text-blue-400 sm:text-base hover:underline"
            >
              Already have an account?
            </a>
            {error && <p className="text-sm text-red-500 sm:text-base">{error}!</p>}
            {success && (
              <p className="text-sm text-green-500 sm:text-base">{success}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 text-lg font-bold text-center text-white transition duration-300 bg-blue-600 rounded-lg sm:py-3 hover:bg-blue-700 disabled:bg-gray-400"
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
