import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";

const faqsList = [
    {
        q: "O que é o Flyone?",
        a: "O Flyone é uma plataforma avançada de gerenciamento de links que ajuda a encurtar, rastrear e analisar seus links para otimizar suas campanhas de marketing e gerar resultados.",
    },
    {
        q: "Como funcionam as análises de links do Flyone?",
        a: "O Flyone oferece insights em tempo real sobre o desempenho dos links, incluindo cliques, localização geográfica, dispositivos e muito mais, permitindo refinar suas estratégias de forma eficaz.",
    },
    {
        q: "Posso usar domínios personalizados com o Flyone?",
        a: "Sim! O Flyone suporta domínios personalizados, permitindo criar links curtos com a sua marca, alinhados à identidade do seu negócio.",
    },
    {
        q: "O Flyone oferece recursos de colaboração em equipe?",
        a: "Com certeza! O Flyone permite que múltiplos usuários colaborem em campanhas, tornando-se uma solução ideal para equipes de marketing.",
    },
    {
        q: "O que faz o Flyone ser diferente de outros encurtadores de links?",
        a: "O Flyone combina análises avançadas, segmentação ilimitada e branding personalizado para fornecer uma solução completa para profissionais de marketing que buscam mais controle e insights.",
    },
    {
        q: "O Flyone é adequado para negócios de todos os tamanhos?",
        a: "Sim! O Flyone é projetado para atender desde profissionais de marketing individuais até pequenas empresas e grandes corporações, com planos escaláveis adaptados às suas necessidades.",
    },
];

const FAQs = () => (
    <SectionWrapper id="faqs">
        <div className="custom-screen text-gray-300">
            <div className="max-w-xl text-center xl:mx-auto">
                <h2 className="text-gray-50 text-3xl font-extrabold sm:text-4xl">
                Tudo o que você precisa saber sobre o Flyone!
                </h2>
                <p className="mt-3">
                Aqui estão as respostas para algumas das perguntas mais comuns sobre nossa plataforma.
                </p>
            </div>
            <div className="mt-12">
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-12",
                    }}
                >
                    <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">
                        {faqsList.map((item, idx) => (
                            <li key={idx} className="space-y-3">
                                <summary
                                    className="flex items-center justify-between font-semibold text-gray-100 cursor-pointer">
                                    {item.q}
                                </summary>
                                <p
                                    dangerouslySetInnerHTML={{ __html: item.a }}
                                    className="leading-relaxed">
                                </p>
                            </li>
                        ))}
                    </ul>
                </LayoutEffect>
            </div>
        </div>
    </SectionWrapper>
);

export default FAQs;
