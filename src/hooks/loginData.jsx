import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const loginData = () => {
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
      const response = await axios.post("https://reqres.in/api/login", form);
      localStorage.setItem("token", response.data.token);
      setSuccess("Login successful!");
      console.log(response.data.token);

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

  return { error, success, loading, form, handleChange, handleSubmit };
};

export default loginData;
