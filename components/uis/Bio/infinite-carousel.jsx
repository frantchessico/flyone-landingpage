"use client"

import { useEffect, useRef } from "react"
import { ProfileCard } from "./profile-card"

export function InfiniteCarousel() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationFrameId
    let offset = 0
    const speed = 0.5 // Slower speed for better visibility

    const animate = () => {
      offset -= speed

      // Reset position when a card moves out of view
      if (offset <= -700) {
        // Adjusted for card height
        offset = 0
      }

      container.style.transform = `translateY(${offset}px)`
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="relative h-[700px] overflow-hidden">
      <div ref={containerRef} className="flex flex-col gap-6">
        {/* Six different variants */}
        {[1, 2, 3, 4, 5, 6].map((variant) => (
          <div key={variant} className="flex-shrink-0">
            <ProfileCard variant={variant} />
          </div>
        ))}
      </div>
    </div>
  )
}

