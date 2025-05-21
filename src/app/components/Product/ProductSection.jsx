'use client';

import { useState } from 'react';
import ImageGallery from './ImageGallery';
import Details from './Details';

export default function ProductSection() {
  const [selectedInitial, setSelectedInitial] = useState('A');
  const [selectedColor, setSelectedColor] = useState('Gold');

  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-4 py-10">
      <div className="w-full md:w-1/2">
        <ImageGallery selectedInitial={selectedInitial} selectedColor={selectedColor} />
      </div>
      <div className="w-full md:w-1/2">
        <Details
          selectedInitial={selectedInitial}
          setSelectedInitial={setSelectedInitial}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
    </section>
  );
}
