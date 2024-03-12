'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import type { CarouselApi } from '@/components/ui/carousel';

interface ProduecImagesProps {
  srcList: string[];
}

const ProductImages = ({ srcList }: ProduecImagesProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex flex-col items-center h-[518px]">
      <Carousel setApi={setApi} className="w-[480px]">
        <CarouselContent>
          {srcList.map((src, idx) => (
            <CarouselItem key={idx}>
              <Card>
                <CardContent className="flex-box aspect-square p-[5px] object-contain">
                  <Image
                    src={src}
                    width={470}
                    height={470}
                    alt={`product img ${idx}`}
                    className="max-w-[470px] max-h-[470px] rounded-md"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        {current} / {count}
      </div>
    </div>
  );
};

export default ProductImages;
