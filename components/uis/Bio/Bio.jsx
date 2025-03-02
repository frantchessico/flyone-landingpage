import { Button } from "@/components/ui/button"
import { InfiniteCarousel } from "./infinite-carousel"
import Link from "next/link"

export default function ShareSection() {
  return (
    <section className="relative overflow-hidden bg-[#040305] min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-200 leading-tight">
            Compartilhe seu Flyone na bio do Instagram, TikTok, Twitter e outras plataformas.
            </h2>
            <p className="text-pink-100 text-lg md:text-xl max-w-2xl">
            Adicione seu link exclusivo do Flyone em todas as plataformas e lugares onde seu público está. Depois, use seu QR code para transformar seu tráfego offline em online.
            </p>
           
           <Button className="bg-pink-200 hover:bg-pink-300 text-gray-800 rounded-full px-8 py-6 text-lg font-semibold">
            <Link href={'https://app.f1y.pro'}>
            Comece grátis agora 🚀
            </Link>
            
            </Button>
           
          </div>

          {/* Right content - Infinite Carousel */}
          <div className="relative flex justify-center">
            <InfiniteCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}

