import Head from "next/head";
import Footer from "./uis/Footer";
import Navbar from "./uis/Navbar";


const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Flyone - Smart Link Management for Marketing Success</title>
                <meta
                    name="description"
                    content="Flyone helps businesses streamline their marketing campaigns with advanced link management, detailed analytics, and personalized branding tools. Supercharge your marketing today!"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="Flyone, link management, marketing tools, analytics, custom branding, marketing automation" />
                <meta name="author" content="Flyone Team" />
                <meta property="og:title" content="Flyone - Smart Link Management for Marketing Success" />
                <meta
                    property="og:description"
                    content="Flyone helps businesses streamline their marketing campaigns with advanced link management, detailed analytics, and personalized branding tools. Supercharge your marketing today!"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.flyone.io/" />
                <meta property="og:image" content="/images/flyone-preview.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Flyone - Smart Link Management for Marketing Success" />
                <meta
                    name="twitter:description"
                    content="Flyone helps businesses streamline their marketing campaigns with advanced link management, detailed analytics, and personalized branding tools."
                />
                <meta name="twitter:image" content="/images/flyone-preview.png" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://www.flyone.io/" />
            </Head>
            <Navbar />
            <main className="min-h-screen bg-[#030303] from-gray-900 to-gray-800 text-gray-100">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
