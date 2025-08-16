import React, { useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

// ✅ JSON data with randomuser avatars
const reviews = [
  {
    id: 1,
    name: "Rasel Ahamed",
    role: "CTO",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Nasir Uddin",
    role: "CEO",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Sadia Khatun",
    role: "Product Manager",
    text: "Posture Pro really improved my daily routine. I feel more confident and have less back pain now!",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Mehedi Hasan",
    role: "Software Engineer",
    text: "Best posture corrector I have used so far. Highly recommended for anyone sitting long hours.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Mehedi Hasan",
    role: "Software Engineer",
    text: "Best posture corrector I have used so far. Highly recommended for anyone sitting long hours.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 7,
    name: "Mehedi Hasan",
    role: "Software Engineer",
    text: "Best posture corrector I have used so far. Highly recommended for anyone sitting long hours.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const Review = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = 3;

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? reviews.length - itemsPerPage : prev - itemsPerPage
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev + itemsPerPage >= reviews.length ? 0 : prev + itemsPerPage
    );
  };

  // slice current set of 3 reviews
  const currentReviews = reviews.slice(
    activeIndex,
    activeIndex + itemsPerPage
  );

  return (
    <section className="py-16">
      <SectionTitle
        title={"What our customers are saying"}
        subTitle={
          "Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!"
        }
      />

      {/* Slider */}
      <div className="flex justify-center items-center gap-5 mt-10 relative">
        {currentReviews.map((review) => (
          <div
            key={review.id}
            className="transition-all duration-500 p-6 rounded-2xl shadow-md w-[300px] min-h-[250px] bg-white"
          >
            <p className="text-4xl text-teal-600">“</p>
            <p className="text-gray-700 text-sm mb-4 border-b border-dashed pb-4">
              {review.text}
            </p>

            <div className="flex items-center gap-3 mt-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">
                  {review.name}
                </h4>
                <p className="text-xs text-gray-500">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200"
        >
          ←
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {Array.from({ length: Math.ceil(reviews.length / itemsPerPage) }).map(
            (_, i) => (
              <span
                key={i}
                onClick={() => setActiveIndex(i * itemsPerPage)}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  activeIndex / itemsPerPage === i
                    ? "bg-teal-600"
                    : "bg-gray-400"
                }`}
              ></span>
            )
          )}
        </div>

        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 bg-lime-300"
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Review;
