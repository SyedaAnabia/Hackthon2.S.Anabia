import React from 'react';
import Image from "next/image";

const Furniture = () => {
  const images = [
    { id: 1, src: '/f1.png', styles: 'col-span-2 row-span-3' }, // Top-left
    { id: 2, src: '/f2.png', styles: 'col-span-3 row-span-2' }, // Top-middle
    { id: 3, src: '/f3.png', styles: 'col-span-2 row-span-3' }, // Top-right
    { id: 4, src: '/f4.png', styles: 'col-span-2 row-span-2' }, // Bottom-left
    { id: 5, src: '/f5.png', styles: 'col-span-2 row-span-2' }, // Bottom-middle-left
    { id: 6, src: '/f6.png', styles: 'col-span-3 row-span-3' }, // Center
    { id: 7, src: '/f7.png', styles: 'col-span-3 row-span-2' }, // Bottom-right
    { id: 8, src: '/f8.png', styles: 'col-span-2 row-span-2' }, // Bottom-middle
    { id: 9, src: '/f9.png', styles: 'col-span-2 row-span-2' }, // Bottom-center-right
  ];

  return (
    <div className="grid grid-cols-8 grid-rows-6 gap-4 max-w-screen-lg mx-auto mt-8">
      {images.map((image) => (
        <div
          key={image.id}
          className={`overflow-hidden ${image.styles}`} // 
        >
          <Image 
            width={1000} 
            height={1000}
            src={image.src}
            alt={`Furniture ${image.id}`} // 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};
export default Furniture;










