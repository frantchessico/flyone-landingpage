import SectionWrapper from "@/components/SectionWrapper";
import GradientWrapper from "@/components/GradientWrapper";
import user1 from "@/public/testimonial/profile-pic.png";
import user2 from "@/public/testimonial/gamito.jpeg";
import user3 from "@/public/testimonial/mazana.jpeg";
import user4 from "@/public/testimonial/cardoso.jpeg";
import user5 from "@/public/testimonial/user5.webp";
import user6 from "@/public/testimonial/cardoso.jpeg";

import Image from "next/image";
import LayoutEffect from "@/components/LayoutEffect";

const Testimonial = () => {
  const testimonials = [
    {
      avatar: user1,
      name: "Francisco Inoque",
      title: "CEO of SavanaPoint",
      quote:
        "Flyone has completely changed the way we manage our campaigns. The advanced features and detailed reports help us achieve our goals effortlessly.",
    },
    {
      avatar: user2,
      name: "Gamito Fumane",
      title: "CEO of Fumane Films",
      quote:
        "With Flyone, we’ve simplified our digital marketing process. It’s intuitive and very effective for managing links and analyzing results.",
    },
    {
      avatar: user3,
      name: "Gonçalo Mazana",
      title: "CEO of Pro Mídia",
      quote:
        "Since we started using Flyone, we’ve seen a significant increase in engagement and campaign reach.",
    },
    // {
    //   avatar: user4,
    //   name: "Braimo Selemane",
    //   title: "CTO of Waza Cursos",
    //   quote:
    //     "Flyone’s personalization tools and real-time analytics are amazing. I highly recommend it for any business looking to professionalize their marketing.",
    // },
    // {
    //   avatar: user5,
    //   name: "Elina Tsovo",
    //   title: "Developer at Genesis Bank",
    //   quote:
    //     "The automation and user-friendly interface of Flyone have impressed me. It’s the best investment for any marketing professional.",
    // },
    {
      avatar: user6,
      name: "Cardoso Jr",
      title: "Content Creator",
      quote:
        "Flyone is the perfect solution for content creators. The detailed insights and link management make my work much more efficient.",
    },
  ];

  return (
    <SectionWrapper>
      <div id="testimonials" className="custom-screen text-gray-300">
        <div className="max-w-2xl text-center md:mx-auto">
          <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
            Flyone is loved by innovators and leaders worldwide
          </h2>
        </div>
        <GradientWrapper
          wrapperClassName="max-w-sm h-40 top-12 inset-x-0"
          className="mt-12"
        >
          <LayoutEffect
            className="duration-1000 delay-300"
            isInviewState={{
              trueState: "opacity-1",
              falseState: "opacity-0 translate-y-12",
            }}
          >
            <ul className="grid gap-6 duration-1000 delay-300 ease-in-out sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((item, idx) => (
                <li
                  key={idx}
                  className="p-4 rounded-xl border border-gray-800"
                  style={{
                    backgroundImage:
                      "radial-gradient(100% 100% at 50% 50%, rgba(124, 58, 237, 0.05) 0%, rgba(124, 58, 237, 0) 100%)",
                  }}
                >
                  <figure className="flex flex-col justify-between gap-y-6 h-full">
                    <blockquote className="">
                      <p className="">{item.quote}</p>
                    </blockquote>
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <span className="block text-gray-50 font-semibold">
                          {item.name}
                        </span>
                        <span className="block text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              ))}
            </ul>
          </LayoutEffect>
        </GradientWrapper>
      </div>
    </SectionWrapper>
  );
};

export default Testimonial;
