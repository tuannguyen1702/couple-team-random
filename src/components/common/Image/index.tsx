/* eslint-disable @next/next/no-img-element */
'use client';

import { ImageProps as NextImageProps } from 'next/image';
import { useState, Fragment, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

type SourceType = {
  media: string;
  srcSet: string;
};

export interface ImageProps extends NextImageProps {
  src: string;
  sources?: SourceType[];
  objectFit?: 'contain' | 'cover' | 'fill';
  className?: string;
  fallbackSrc?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width = 500,
  height = 500,
  className,
  objectFit,
  fill,
  sources,
  fallbackSrc = '/images/placeholder.png',
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc);
  const Wrapper = sources?.length ? 'picture' : Fragment;
  const ref = useRef(null);

  // Check image error after hydration
  useEffect(() => {
    setCurrentSrc(src);
    setTimeout(() => {
      if (ref && ref.current) {
        const { complete, naturalHeight } = ref.current;
        const errorLoadingImgBeforeHydration = complete && naturalHeight === 0;

        if (errorLoadingImgBeforeHydration) {
          setCurrentSrc(fallbackSrc);
        }
      }
    }, 500);
  }, [src]);

  const allClass = twMerge(
    className,
    objectFit ? `max-h-[100%] max-w-[100%] object-${objectFit}` : ''
  );

  const propsCustom = {
    ...(!fill && {
      width,
      height,
    }),
  };

  return (
    <Wrapper>
      {sources?.map((item, idx) => (
        <source key={idx} media={item.media} srcSet={item.srcSet}></source>
      ))}
      {/* <NextImage
        src={currentSrc}
        alt={alt}
        onError={() => {
          setCurrentSrc(fallbackSrc);
        }}
        fill={fill}
        {...propsCustom}
        {...props}
        loading="lazy"
        blurDataURL={`"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 200'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='none' style='filter: url(%23b);' href='data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAACAgEFAAAAAAAAAAAAAAAAAQIDBAUGElGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAXEQADAQAAAAAAAAAAAAAAAAAAARES/9oADAMBAAIRAxEAPwCawN0RorSnplFkOuTT9AAtZLlH/9k='/%3E%3C/svg%3E"`}
        className={allClass}
      /> */}
      <img
        className={allClass}
        src={currentSrc}
        alt={alt}
        loading="lazy"
        onError={() => {
          setCurrentSrc(fallbackSrc);
        }}
        {...propsCustom}
        {...props}
        ref={ref}
      />
    </Wrapper>
  );
};

export default Image;
