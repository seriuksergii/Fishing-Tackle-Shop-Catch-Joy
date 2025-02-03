import React from 'react';
import { ProductCard } from './ProductCard';

const productData = [
  {
    img: '/reels 10000.jpg',
    title: 'FOX EOS 10000FD REEL',
    description: 'FOX EOS 10000FD REEL',
    rating: 3,
    price: '64.99',
  },
  {
    img: '/reel 14000.jpg',
    title: 'FOX 14000XC REEL',
    description: 'FOX 14000XC REEL',
    rating: 4,
    price: '219.99',
  },
  {
    img: '/pva.jpg',
    title: 'FOX EDGES™ RAPIDE™ LOAD PVA BAG SYSTEM - FAST MELT',
    description: 'FOX EDGES™ RAPIDE™ LOAD PVA BAG SYSTEM - FAST MELT',
    rating: 5,
    price: '8.99',
  },
  {
    img: '/pva2.jpg',
    title: 'FOX EDGES™ PVA MESH SYSTEM',
    description: 'FOX EDGES™ PVA MESH SYSTEM',
    rating: 3,
    price: '9.99',
  },
  {
    img: '/shelter1.jpg',
    title: 'FOX FRONTIER LITE SYSTEM PACKAGE',
    description: 'FOX FRONTIER LITE SYSTEM PACKAGE',
    rating: 4,
    price: '329.99',
  },
  {
    img: '/shelter2.jpg',
    title: 'FOX EOS SOCIAL SHELTER',
    description: 'FOX EOS SOCIAL SHELTER',
    rating: 3,
    price: '299.99',
  },
];

export const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productData.map((i, index) => (
            <ProductCard
              key={index}
              img={i.img}
              title={i.title}
              description={i.description}
              rating={i.rating}
              price={i.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
