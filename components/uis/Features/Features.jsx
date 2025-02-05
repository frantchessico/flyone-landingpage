import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";
import {  LinkIcon, ChartLine, Globe, FlaskConical, Target , Send} from 'lucide-react';

const Features = () => {
    const featuresList = [
        {
            icon: <LinkIcon />,
            title: "Gerenciamento Avançado de Links",
            desc: "Crie e gerencie milhares de links com facilidade e precisão, feitos sob medida para suas campanhas."
        },
        {
            icon: <ChartLine />,
            title: "Análises Detalhadas",
            desc: "Acompanhe o desempenho dos links com insights em tempo real, incluindo cliques, localizações e dispositivos."
        },
        {
            icon: <Globe />,
            title: "Domínios Personalizados",
            desc: "Melhore seu branding com domínios personalizados para seus links curtos."
        },
        {
            icon: <Target />,
            title: "Segmentação Avançada",
            desc: "Organize e segmente seu público com segmentos ilimitados para campanhas mais eficazes."
        },
        {
            icon: <FlaskConical />,
            title: "Acesso API Escalável",
            desc: "Integre o Flyone às suas ferramentas usando nossa API robusta, suportando até 30.000 requisições por mês."
        },
        {
            icon: <Send />,
            title: "Relatórios por E-mail",
            desc: "Receba relatórios automáticos de desempenho diretamente na sua caixa de entrada para tomar decisões mais assertivas."
        },
    ];
    
    return (
        <SectionWrapper>
            <div id="features" className="custom-screen text-gray-300">
                <LayoutEffect
                    className="duration-1000 delay-300"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0 translate-y-6",
                    }}
                >
                    <div className="max-w-xl mx-auto text-center">
                        <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                        Potencialize seu marketing com o Flyone!
                        </h2>
                        <p className="mt-3">
                        O Flyone oferece ferramentas de ponta para otimizar suas campanhas de marketing e melhorar seus resultados. 
                        </p>
                    </div>
                </LayoutEffect>
                <LayoutEffect
                    className="duration-1000 delay-500"
                    isInviewState={{
                        trueState: "opacity-1",
                        falseState: "opacity-0",
                    }}
                >
                    <div className="relative mt-12">
                        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {featuresList.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="space-y-3 p-4 rounded-xl border border-gray-800"
                                    style={{
                                        background:
                                            "radial-gradient(157.73% 157.73% at 50% -29.9%, rgba(203, 213, 225, 0.16) 0%, rgba(203, 213, 225, 0) 100%)",
                                    }}
                                >
                                    <div className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-lg text-gray-50">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg text-gray-50 font-semibold">
                                        {item.title}
                                    </h3>
                                    <p>{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </LayoutEffect>
            </div>
        </SectionWrapper>
    );
};

export default Features;
