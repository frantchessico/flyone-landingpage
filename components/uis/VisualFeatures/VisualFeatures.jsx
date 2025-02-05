import SectionWrapper from "@/components/SectionWrapper";
import Feature1 from "@/public/images/6.svg";
import Feature2 from "@/public/images/11.svg";
import Feature3 from "@/public/images/3.svg";
import Image from "next/image";

const VisualFeatures = () => {
    const features = [
        {
            title: "Gerenciamento Avançado de Links",
            desc: "Organize suas campanhas com ferramentas poderosas para criar e gerenciar milhares de links sem esforço.",
            img: Feature1,
        },
        {
            title: "Análises em Tempo Real",
            desc: "Acompanhe o desempenho dos seus links instantaneamente com insights detalhados sobre cliques, comportamento do usuário e mais.",
            img: Feature2,
        },
        {
            title: "Branding Personalizado",
            desc: "Eleve seu marketing com domínios personalizados e links curtos com sua marca, feitos sob medida para o seu negócio.",
            img: Feature3,
        },
    ];
    
    return (
        <SectionWrapper>
            <div className="custom-screen text-gray-300 bg-[#030303]">
                {/* Header Section */}
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                    Desbloqueie todo o potencial do seu marketing com o Flyone!
                    </h2>
                    <p className="mt-3">
                    O Flyone oferece soluções avançadas para gerenciar links e acompanhar resultados—tudo em uma única plataforma.
                    </p>
                </div>

                {/* Features Section */}
                <div className="mt-12 bg-[#030303]">
                    <ul className="space-y-8 gap-x-6 sm:flex sm:space-y-0">
                        {features.map((item, idx) => (
                            <li
                                className="flex-1 flex flex-col justify-between border border-gray-800 rounded-2xl shadow-md"
                                key={idx}
                                style={{
                                    background:
                                        "radial-gradient(141.61% 141.61% at 29.14% -11.49%, rgba(203, 213, 225, 0.15) 0%, rgba(203, 213, 225, 0) 57.72%)",
                                }}
                            >
                                <div className="p-8">
                                    <h3 className="text-gray-50 text-xl font-semibold">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 sm:text-sm md:text-base text-gray-300">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className="pl-8">
                                    <Image
                                        src={item.img}
                                        className="w-full ml-auto"
                                        alt={item.title}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default VisualFeatures;
