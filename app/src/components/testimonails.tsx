"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Testimonails() {
  return (
    <div className="flex flex-col items-center justify-center">
    <Carousel className="max-w-4xl w-full">
      <CarouselContent className="py-20 px-11 gap-4">
        <CarouselItem className="rounded-lg border shadow-lg shadow-log-gray-700 py-20 px-11">
          <div>
            <p className="text-xl text-log-gray-700 font-medium">
            Lorem ipsum dolor sit amet consectetur. Purus mattis vel in odio viverra cras dui. Fringilla sapien amet at suspendisse amet facilisis. Elit pellentesque sed arcu enim id montes sem in. Morbi tortor habitant diam ornare aliquet enim lorem.
            </p>
            <h5 className="text-2xl font-bold pt-4">Name</h5>
            <p className="text-lg pt-1">Esty Seller</p>
          </div>
        </CarouselItem>
        <CarouselItem className="rounded-lg border shadow-lg shadow-log-gray-700 py-20 px-11">
          <div>
            <p className="text-xl text-log-gray-700 font-medium">
            Lorem ipsum dolor sit amet consectetur. Purus mattis vel in odio viverra cras dui. Fringilla sapien amet at suspendisse amet facilisis. Elit pellentesque sed arcu enim id montes sem in. Morbi tortor habitant diam ornare aliquet enim lorem.
            </p>
            <h5 className="text-2xl font-bold pt-4">Name</h5>
            <p className="text-lg pt-1">Esty Seller</p>
          </div>
        </CarouselItem>
        <CarouselItem className="rounded-lg border shadow-lg shadow-log-gray-700 py-20 px-11">
          <div>
            <p className="text-xl text-log-gray-700 font-medium">
            Lorem ipsum dolor sit amet consectetur. Purus mattis vel in odio viverra cras dui. Fringilla sapien amet at suspendisse amet facilisis. Elit pellentesque sed arcu enim id montes sem in. Morbi tortor habitant diam ornare aliquet enim lorem.
            </p>
            <h5 className="text-2xl font-bold pt-4">Name</h5>
            <p className="text-lg pt-1">Esty Seller</p>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>

  );
}
