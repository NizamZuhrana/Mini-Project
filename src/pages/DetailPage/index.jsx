import { useEffect } from "react";
import useDetailsData from "../../hooks/detailsData";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
// import "./styles.css";

const detailPage = () => {
  const { detailsData, getDetails } = useDetailsData();
  const { id } = useParams();

  const quotes = [
    {
      id: 1,
      quotes: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.",
    },
    {
      id: 2,
      quotes: "When you arise in the morning, think of what a privilege it is to be alive, to think, to enjoy, to love. The happiness of your life depends upon the quality of your thoughts. Therefore, guard accordingly, and take care that you entertain no notions unsuitable to virtue and reasonable nature.",
    },
    {
      id: 3,
      quotes: "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. Life is a series of natural and spontaneous changes. Don’t resist them—that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.",
    },
    {
      id: 4,
      quotes: "People are often unreasonable, illogical, and self-centered; forgive them anyway. If you are kind, people may accuse you of selfish motives; be kind anyway. If you are honest, people may cheat you; be honest anyway. If you find happiness, people may be jealous; be happy anyway. The good you do today may be forgotten tomorrow; do good anyway. Give the world the best you have, and it may never be enough; give your best anyway. In the final analysis, it is between you and God; it was never between you and them anyway.",
    },
    {
      id: 5,
      quotes: "Twenty years from now, you will be more disappointed by the things that you didn’t do than by the ones you did do. So, throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    },
    {
      id: 6,
      quotes: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. I've learned that making a 'living' is not the same thing as making a 'life.' I've learned that you shouldn’t go through life with a catcher’s mitt on both hands; you need to be able to throw something back.",
    },
    {
      id: 7,
      quotes: "Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’ Life is not about waiting for the storm to pass, it’s about learning how to dance in the rain. And the most important thing is to have the courage to keep moving forward even when the road is uncertain.",
    },
    {
      id: 8,
      quotes: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. Happiness comes as a by-product of that purpose, and in pursuing it, you’ll find a joy deeper than simple pleasures.",
    },
    {
      id: 9,
      quotes: "Success is not measured by what you accomplish, but by the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds. True success is the ability to go from failure to failure without losing your enthusiasm.",
    },
    {
      id: 10,
      quotes: "Don’t aim for success if you want it; just do what you love and believe in, and it will come naturally. The happiest people don’t necessarily have the best of everything; they just make the best of everything they have. Life is about creating yourself, not finding yourself.",
    },
    {
      id: 11,
      quotes: "To laugh often and much; to win the respect of intelligent people and the affection of children; to earn the appreciation of honest critics and endure the betrayal of false friends; to appreciate beauty, to find the best in others; to leave the world a bit better, whether by a healthy child, a garden patch, or a redeemed social condition; to know even one life has breathed easier because you have lived. This is to have succeeded.",
    },
    {
      id: 12,
      quotes: "Life is not measured by the number of breaths we take, but by the moments that take our breath away. Life is short, but it is wide. This too, shall pass. So live life to the fullest, do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    },
  ]
  useEffect(() => {
    getDetails();
  }, [id]);
  return (
    <div>
      {/* <Navbar /> */}
      <div className="grid place-items-center m-0 h-screen bg-[#8EACCD] text-[#fdfcfd] font-[Poppins]">
        <div className="card flex items-center w-[75vw] max-w-[650px] p-[50px_30px_50px_20px] bg-[#121017] rounded-[24px]">
          <img src={detailsData.avatar} alt="" className="max-w-[280px] w-[35vw] h-[300px] object-cover -ml-[60px] mr-[30px] rounded-[inherit] shadow-card"/>
          <div>
            <h2 className="mt-0 mb-3 mr-8 text-2xl font-normal ">
              {detailsData.first_name} {detailsData.last_name}
            </h2>
            <p className="mb-8 text-sm font-normal opacity-[0.5]">{quotes[id-1].quotes}</p>
            <a href={`mailto:${detailsData.email}`} className="grid place-items-center border-0 bg-detail-card text-[#f8f8f8] py-[16px] px-[26px] text-[16px] rounded-[40px]">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default detailPage;
