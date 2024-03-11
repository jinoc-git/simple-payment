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

const ProduecImages = ({ srcList }: ProduecImagesProps) => {
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
    <div className="flex flex-col items-center">
      <Carousel setApi={setApi} className="w-[360px] max-w-xs">
        <CarouselContent>
          {srcList.map((src, idx) => (
            <CarouselItem key={idx}>
              <Card className="max-w-[340px] h-[340px]">
                <CardContent className="flex-box aspect-square p-[10px] object-contain">
                  <Image
                    src={src}
                    width={320}
                    height={320}
                    alt={`product img ${idx}`}
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

export default ProduecImages;
