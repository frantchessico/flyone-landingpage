import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";
import {  LinkIcon, ChartLine, Globe, FlaskConical, Target , Send} from 'lucide-react';

const Features = () => {
    const featuresList = [
        {
            icon:
            <LinkIcon />,
            title: "Advanced Link Management",
            desc: "Create and manage thousands of links with ease and precision, tailored for your campaigns."
        },
        {
            icon:
            <ChartLine />,
            title: "Detailed Analytics",
            desc: "Track link performance with real-time insights, including clicks, locations, and devices."
        },
        {
            icon:
            <Globe />,
            title: "Custom Domains",
            desc: "Enhance your branding with personalized domains for your short links."
        },
        {
            icon:
            <Target />,
            title: "Advanced Segmentation",
            desc: "Organize and target audiences with unlimited segments for effective campaigns."
        },
        {
            icon:
            <FlaskConical />,
            title: "Scalable API Access",
            desc: "Integrate Flyone with your tools using our robust API, supporting up to 30,000 requests per month."
        },
        {
            icon:
            <Send />,
            title: "Email Reports",
            desc: "Receive automated performance reports directly in your inbox for better decision-making."
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
                            Supercharge Your Marketing with Flyone
                        </h2>
                        <p className="mt-3">
                            Flyone provides cutting-edge tools to optimize your marketing campaigns and improve your results.
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
