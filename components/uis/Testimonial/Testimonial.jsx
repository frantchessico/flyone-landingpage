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
      title: "CEO da SavanaPoint",
      quote:
        "O Flyone mudou completamente a forma como gerenciamos nossas campanhas. As funcionalidades avançadas e os relatórios detalhados nos ajudam a atingir nossos objetivos com facilidade.",
    },
    {
      avatar: user2,
      name: "Gamito Fumane",
      title: "CEO da Fumane Films",
      quote:
        "Com o Flyone, simplificamos nosso processo de marketing digital. É intuitivo e muito eficaz para gerenciar links e analisar resultados.",
    },
    {
      avatar: user3,
      name: "Gonçalo Mazana",
      title: "CEO da Pro Mídia",
      quote:
        "Desde que começamos a usar o Flyone, vimos um aumento significativo no engajamento e no alcance das campanhas.",
    },
    {
      avatar: user6,
      name: "Cardoso Jr",
      title: "Criador de Conteúdo",
      quote:
        "O Flyone é a solução perfeita para criadores de conteúdo. As análises detalhadas e o gerenciamento de links tornam meu trabalho muito mais eficiente.",
    },
];


  return (
    <SectionWrapper>
      <div id="testimonials" className="custom-screen text-gray-300">
        <div className="max-w-2xl text-center md:mx-auto">
          <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
          O Flyone é amado por inovadores.
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
