"use client";

import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { Image } from "@/types";

import GalleryTab from "./gallery-tab";

interface GalleryProps
{
  images: Image[];
}

export const revalidate = 0

const Gallery: React.FC<GalleryProps> = ( {
  images = []
} ) =>
{
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          { images.map( ( image ) => (
            <GalleryTab key={ image.id } image={ image } />
          ) ) }
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        { images.map( ( image ) => (
          <Tab.Panel key={ image.id }>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <NextImage
                fill
                src={ image.url }
                alt="Image"
                className="rounded-xl object-cover object-center border border-gray-300 "
              />
            </div>
          </Tab.Panel>
        ) ) }
      </Tab.Panels>
    </Tab.Group>
  );
}

export default Gallery;