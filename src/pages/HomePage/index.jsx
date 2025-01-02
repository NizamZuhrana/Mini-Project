import Navbar from "../../components/Navbar";
// import "./styles.css";
import image1 from "../../assets/1.svg";
import image2 from "../../assets/2.svg";
import image3 from "../../assets/3.svg";
import image4 from "../../assets/4.svg";

const homePage = () => {
  return (
    <div>
      <Navbar />
      <div className="grid place-items-center m-0 h-full bg-[#8EACCD] text-gray-800 font-[Poppins]">
        <section className="flex flex-col md:flex-row items-center gap-[20px] md:gap-[40px] px-[20px] md:px-[60px] py-[40px] md:py-[100px]">
          <div className="text-center md:text-left">
            <h2 className="text-[18px] md:text-[20px] mb-[8px] cursor-default">
              About
            </h2>
            <p className="opacity-60 leading-[1.7] text-sm md:text-base">
              Discover Fuzion, where innovation meets excellence. With a
              dedicated team, we redefine standards to deliver top-notch
              solutions.
            </p>
          </div>
          <img
            src={image1}
            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
          />
        </section>
        <section className="flex flex-col md:flex-row-reverse items-center gap-[20px] md:gap-[40px] px-[20px] md:px-[60px] py-[40px] md:py-[100px] bg-[#D2E0FB]">
          <div className="text-center md:text-left">
            <h2 className="text-[18px] md:text-[20px] mb-[8px] cursor-default">
              Services
            </h2>
            <p className="opacity-60 leading-[1.7] text-sm md:text-base">
              Explore tailored solutions at Fuzion. From consulting to
              technology, we propel your business forward.
            </p>
          </div>
          <img
            src={image2}
            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] p-[10px] md:p-[20px]"
          />
        </section>
        <section className="flex flex-col md:flex-row items-center gap-[20px] md:gap-[40px] px-[20px] md:px-[60px] py-[40px] md:py-[100px]">
          <div className="text-center md:text-left">
            <h2 className="text-[18px] md:text-[20px] mb-[8px] cursor-default">
              Products
            </h2>
            <p className="opacity-60 leading-[1.7] text-sm md:text-base">
              Experience innovation with Fuzion's exceptional products. Crafted
              for performance, each reflects our commitment to excellence.
            </p>
          </div>
          <img
            src={image3}
            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
          />
        </section>
        <section className="flex flex-col md:flex-row-reverse items-center gap-[20px] md:gap-[40px] px-[20px] md:px-[60px] py-[40px] md:py-[100px] bg-[#D2E0FB]">
          <div className="text-center md:text-left">
            <h2 className="text-[18px] md:text-[20px] mb-[8px] cursor-default">
              Contact
            </h2>
            <p className="opacity-60 leading-[1.7] text-sm md:text-base">
              Ready to bring ideas to life? Connect with us today. Whether
              questions or collaboration, we're here to assist.
            </p>
          </div>
          <img
            src={image4}
            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] p-[10px] md:p-[20px]"
          />
        </section>
      </div>
    </div>
  );
};

export default homePage;
