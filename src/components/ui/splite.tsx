'use client'

import { Suspense, lazy, useRef, useEffect } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Make container and parent elements ready for 3D interactions
    const container = containerRef.current
    if (container) {
      // Set proper styles for interaction
      container.style.position = 'absolute'
      container.style.width = '100%'
      container.style.height = '100%'
      container.style.touchAction = 'none'
      
      // Make sure parent elements are properly sized
      let parent = container.parentElement
      while (parent) {
        if (getComputedStyle(parent).position === 'static') {
          parent.style.position = 'relative'
        }
        parent = parent.parentElement
      }
    }
  }, [])

  return (
    <div ref={containerRef} className={`${className || ''}`}>
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="loader"></span>
          </div>
        }
      >
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Spline
            scene={scene}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </Suspense>
    </div>
  )
} 