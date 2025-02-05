import { useEffect, useState } from "react"
import ProfileCard from "./profile-card"

const FloatingCardCarousel = () => {
  const [activeCards, setActiveCards] = useState([0, 1, 2])
  const totalCards = 6

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCards((prev) => {
        const next = [...prev]
        next.push((next[next.length - 1] + 1) % totalCards)
        return next.slice(1)
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[700px] w-[500px]">
      <div className="absolute inset-0">
        {activeCards.map((cardIndex, i) => (
          <div
            key={cardIndex}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-out"
            style={{
              zIndex: i,
              animation: "floating 6s ease-in-out infinite",
              animationDelay: `${i * 0.5}s`,
              transform: `
                translate(-50%, -50%)
                rotate(${i === 0 ? -15 : i === 1 ? 5 : 10}deg)
                translateX(${i === 0 ? -50 : i === 1 ? 0 : 50}px)
                translateY(${i * 20}px)
                scale(${1 - i * 0.05})
              `,
              opacity: 1 - i * 0.2,
            }}
          >
            <ProfileCard variant={(cardIndex % 6) + 1} />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes floating {
          0% {
            transform: translate(-50%, -50%)
                       rotate(${Math.random() * 10 - 5}deg)
                       translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%)
                       rotate(${Math.random() * 10 - 5}deg)
                       translateY(-20px);
          }
          100% {
            transform: translate(-50%, -50%)
                       rotate(${Math.random() * 10 - 5}deg)
                       translateY(0px);
          }
        }
      `}</style>
    </div>
  )
}

export default FloatingCardCarousel

