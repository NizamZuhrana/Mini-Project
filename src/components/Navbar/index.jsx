import { useEffect, useRef, useState, useNavigate } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") !== null
  ); // Check login status
  const navigate = useNavigate ? useNavigate() : undefined;

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login"); // Redirect to login page
  };
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      var { scrollY } = window;
      if (scrollY > lastScrollTop.current) {
        setIsVisible(false);
      } else if (scrollY < lastScrollTop.current) {
        setIsVisible(true);
      } // else was horizontal scroll
      lastScrollTop.current = scrollY <= 0 ? 0 : scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-[Euclid Circular A] font-[Poppins] m-0">
      <nav
        className={`fixed z-20 top-0 left-0  flex items-center justify-between gap-[20px] px-[20px] w-full h-[72px] shadow-[0_10px_20px_rgba(0,0,0,0.1)] bg-[#DEE5D4] transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <h1 className="w-[60px] h-[60px] bg-[#f9f9f9] text-[#4f52ff] flex items-center justify-center rounded-full text-xl hover:bg-[#4f52ff] hover:text-[#f9f9f9]">
          MP
        </h1>
        <div className="flex items-center gap-[25px]">
          <a
            href="/"
            className="text-white/96 font-normal h-[72px] grid place-items-center hover:text-white/96"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white/96 font-normal h-[72px] grid place-items-center hover:text-white/96"
          >
            About
          </a>
          <a
            href="/listUser"
            className="text-white/96 font-normal h-[72px] grid place-items-center hover:text-white/96"
          >
            User
          </a>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-[#4f52ff] font-normal h-[72px] px-4 grid place-items-center hover:text-[#3b3df5] hover:bg-[#f5f5f5] rounded-lg"
            >
              <a href="/login">Logout</a>
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="text-[#4f52ff] font-normal h-[72px] px-4 grid place-items-center hover:text-[#3b3df5] hover:bg-[#f5f5f5] rounded-lg"
            >
              <a href="/login">Login</a>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
