import SectionWrapper from "@/components/SectionWrapper";
import Feature1 from "@/public/images/6.svg";
import Feature2 from "@/public/images/11.svg";
import Feature3 from "@/public/images/3.svg";
import Image from "next/image";

const VisualFeatures = () => {
    const features = [
        {
            title: "Advanced Link Management",
            desc: "Organize your campaigns with powerful tools to create and manage thousands of links effortlessly.",
            img: Feature1,
        },
        {
            title: "Real-Time Analytics",
            desc: "Track your link performance instantly with detailed insights into clicks, user behavior, and more.",
            img: Feature2,
        },
        {
            title: "Custom Branding",
            desc: "Elevate your marketing with personalized domains and branded short links tailored to your business.",
            img: Feature3,
        },
    ];

    return (
        <SectionWrapper>
            <div className="custom-screen text-gray-300">
                {/* Header Section */}
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                        Unlock the Full Potential of Your Marketing with Flyone
                    </h2>
                    <p className="mt-3">
                        Flyone provides advanced solutions to manage links, track results, and build your brand—all in one platform.
                    </p>
                </div>

                {/* Features Section */}
                <div className="mt-12">
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
