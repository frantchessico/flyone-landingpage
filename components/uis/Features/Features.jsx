import LayoutEffect from "@/components/LayoutEffect";
import SectionWrapper from "@/components/SectionWrapper";

const Features = () => {
    const featuresList = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>,
            title: "Advanced Link Management",
            desc: "Create and manage thousands of links with ease and precision, tailored for your campaigns."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5l16.5 7.5-16.5 7.5V4.5z" />
                </svg>,
            title: "Detailed Analytics",
            desc: "Track link performance with real-time insights, including clicks, locations, and devices."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5h10.5m-10.5 3.75h10.5m-10.5 3.75h10.5m-7.5-11.25h1.5m-1.5 15h1.5" />
                </svg>,
            title: "Custom Domains",
            desc: "Enhance your branding with personalized domains for your short links."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75H7.5a3 3 0 00-3 3v11.25a3 3 0 003 3H16.5a3 3 0 003-3V6.75a3 3 0 00-3-3H15m-3 0h1.5m-3 0H12m0 0V12m0 0l3.75 3.75M12 12L8.25 8.25" />
                </svg>,
            title: "Advanced Segmentation",
            desc: "Organize and target audiences with unlimited segments for effective campaigns."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18.75h12m-6-12v12m-4.5-3.75h9" />
                </svg>,
            title: "Scalable API Access",
            desc: "Integrate Flyone with your tools using our robust API, supporting up to 30,000 requests per month."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75L3.75 6v12l3.75 2.25 3.75-2.25V6L7.5 3.75zM16.5 3.75L20.25 6v12l-3.75 2.25-3.75-2.25V6L16.5 3.75z" />
                </svg>,
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
