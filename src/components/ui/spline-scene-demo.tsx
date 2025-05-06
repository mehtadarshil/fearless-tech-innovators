'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[80vh] md:h-[90vh] bg-transparent border-none shadow-none relative overflow-visible">
      <Spotlight
        className="inset-0"
        fill="white"
      />
      
      <div className="h-full w-full">
        {/* <div className="hidden md:block md:w-1/3 relative"></div> */}

        <div className="w-full md:w-full h-full relative">
          <div className="absolute inset-0 w-full h-full pointer-events-auto">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </Card>
  )
} 