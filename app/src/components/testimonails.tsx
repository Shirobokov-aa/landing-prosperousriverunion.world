"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Carousel className="max-w-4xl w-full">
        <CarouselContent className="py-20 px-11 gap-4">
          <CarouselItem className="rounded-lg border shadow-lg shadow-log-gray-700 py-20 px-11">
            <div>
              <p className="text-xl text-log-gray-700 font-medium">
                Using this service has completely changed my workflow. Its intuitive, efficient, and the support team is outstanding!
              </p>
              <h5 className="text-2xl font-bold pt-4">Alice Johnson</h5>
            </div>
          </CarouselItem>
          <CarouselItem className="rounded-lg border shadow-lg shadow-log-gray-700 py-20 px-11">
            <div>
              <p className="text-xl text-log-gray-700 font-medium">
                Ive seen a significant increase in productivity since I started using this platform. Highly recommend it to anyone looking to optimize their business.
              </p>
              <h5 className="text-2xl font-bold pt-4">Michael Brown</h5>
            </div>
          </CarouselItem>
          <CarouselItem className="rounded-lg border shadow-lg shadow-log-gray-700 py-20 px-11">
            <div>
              <p className="text-xl text-log-gray-700 font-medium">
                A fantastic tool for small businesses! The user-friendly interface and exceptional features have made a huge difference for my team.
              </p>
              <h5 className="text-2xl font-bold pt-4">Sophia Lee</h5>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
