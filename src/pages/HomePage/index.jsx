import Navbar from "../../components/Navbar";
// import "./styles.css";
import image1 from "../../assets/1.svg";
import image2 from "../../assets/2.svg";
import image3 from "../../assets/3.svg";
import image4 from "../../assets/4.svg";
import image5 from "../../assets/5.svg";
import image6 from "../../assets/6.svg";

const homePage = () => {
  return (
    <div>
      <Navbar />
      <div className="grid place-items-center m-0 h-full bg-[#8EACCD] text-gray-800 font-[Poppins] pt-[-72px]">
        <section className="flex items-center gap-[40px] px-[60px] py-[100px] ">
          <h2 className="text-[20px] mb-[4px] cursor-default">About</h2>
          <p className="opacity-60 leading-[1.7]">
            Discover Fuzion, where innovation meets excellence. With a dedicated
            team, we redefine standards to deliver top-notch solutions.
          </p>

          <img src={image1} className="w-[200px] h-[200px]"/>
        </section>
        <section className="flex items-center gap-[40px] px-[60px] py-[100px] bg-[#D2E0FB]">
          <img src={image2} className="w-[200px] h-[200px] p-[20px]"/>
          <h2 className="text-[20px] mb-[4px] cursor-default">Services</h2>
          <p className="opacity-60 leading-[1.7]">
            Explore tailored solutions at Fuzion. From consulting to technology,
            we propel your business forward.
          </p>
        </section>
        <section className="flex items-center gap-[40px] px-[60px] py-[100px]">
          <h2 className="text-[20px] mb-[4px] cursor-default">Products</h2>
          <p className="opacity-60 leading-[1.7]">
            Experience innovation with Fuzion's exceptional products. Crafted
            for performance, each reflects our commitment to excellence.
          </p>

          <img src={image3} className="w-[200px] h-[200px]"/>
        </section>
        <section className="flex items-center gap-[40px] px-[60px] py-[100px] bg-[#D2E0FB]">
          <img src={image4} className="w-[200px] h-[200px] p-[20px]"/>

          <h2 className="text-[20px] mb-[4px] cursor-default">Contact</h2>
          <p className="opacity-60 leading-[1.7]">
            Ready to bring ideas to life? Connect with us today. Whether
            questions or collaboration, we're here to assist.
          </p>
        </section>
      </div>
    </div>
  );
};

export default homePage;
