import loginData from "../../hooks/loginData";
import Navbar from "../../components/Navbar";

const LoginPage = () => {
  const { error, success, loading, handleChange, handleSubmit } = loginData();

  return (
    <div>
      <Navbar />
      <div className="relative grid w-full h-screen py-6 m-0 text-white bg-no-repeat bg-cover place-items-center bg-background bg-primary animate-rotate">
        <div className="flex flex-col items-center justify-center w-11/12 max-w-lg h-auto p-8 sm:p-10 rounded-xl backdrop-blur-sm bg-[rgba(0,0,0,0.5)]">
          <h2 className="mb-4 text-3xl font-semibold sm:text-4xl">Login</h2>
          <h3 className="mb-6 text-sm font-light text-gray-300 sm:text-base">
            Login to your account
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
              href="/register"
              className="mb-4 text-sm text-left text-blue-400 sm:text-base hover:underline"
            >
              Don't have an account?
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
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
