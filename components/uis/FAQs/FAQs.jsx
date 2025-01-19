import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";

const faqsList = [
    {
        q: "What is Flyone?",
        a: "Flyone is an advanced link management platform that helps you shorten, track, and analyze your links to optimize your marketing campaigns and drive results.",
    },
    {
        q: "How does Flyone's link analytics work?",
        a: "Flyone provides real-time insights into link performance, including clicks, geographic location, devices, and more, allowing you to refine your strategies effectively.",
    },
    {
        q: "Can I use custom domains with Flyone?",
        a: "Yes! Flyone supports custom domains, allowing you to create branded short links that align with your business identity.",
    },
    {
        q: "Does Flyone offer team collaboration features?",
        a: "Absolutely! Flyone allows multiple users to collaborate on campaigns, making it an ideal solution for marketing teams.",
    },
    {
        q: "What makes Flyone different from other link shorteners?",
        a: "Flyone combines advanced analytics, unlimited segmentation, and custom branding to provide a comprehensive solution for marketers who want more control and insights.",
    },
    {
        q: "Is Flyone suitable for businesses of all sizes?",
        a: "Yes! Flyone is designed to support individual marketers, small businesses, and enterprises, with scalable plans tailored to your needs.",
    },
];

const FAQs = () => (
    <SectionWrapper id="faqs">
        <div className="custom-screen text-gray-300">
            <div className="max-w-xl text-center xl:mx-auto">
                <h2 className="text-gray-50 text-3xl font-extrabold sm:text-4xl">
                    Everything You Need to Know About Flyone
                </h2>
                <p className="mt-3">
                    Here are answers to some of the most common questions about our platform.
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
