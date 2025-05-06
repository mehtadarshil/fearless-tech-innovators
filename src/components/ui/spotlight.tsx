'use client'

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

interface SpotlightProps {
  className?: string
  fill?: string
}

export function Spotlight({
  className = "",
  fill = "white",
}: SpotlightProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: MouseEvent) => {
    if (!divRef.current) return
    
    const div = divRef.current
    const rect = div.getBoundingClientRect()
    
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
    
    // Ensure opacity is set when mouse moves
    if (opacity === 0) setOpacity(0.8)
  }

  // Global mouse tracking to handle edge cases
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return
      
      const div = divRef.current
      const rect = div.getBoundingClientRect()
      
      // Check if mouse is near or in the container
      const buffer = 100 // Add buffer area around element
      if (
        e.clientX >= rect.left - buffer &&
        e.clientX <= rect.right + buffer &&
        e.clientY >= rect.top - buffer &&
        e.clientY <= rect.bottom + buffer
      ) {
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
        
        if (opacity < 0.8) setOpacity(0.8)
      } else if (opacity > 0) {
        // Fade out when mouse is far from container
        setOpacity(0)
      }
    }
    
    document.addEventListener("mousemove", handleGlobalMouseMove)
    
    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove)
    }
  }, [opacity])

  return (
    <div
      ref={divRef}
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, ${fill}15, transparent 60%)`,
        }}
      />
    </div>
  )
} 