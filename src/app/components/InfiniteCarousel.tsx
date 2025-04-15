export default function InfiniteCarousel() {
  const images = [
    "/pan.png",
    "/safra.png",
    "/mercantil.png",
    "/C6.png",
    "/facta.png",
  ];
  const loopImages = [...images, ...images];

  return (
    <div className="relative overflow-hidden w-full bg-black">
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex animate-carousel whitespace-nowrap">
        {loopImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`carousel-${idx}`}
            className="w-1/3 flex-shrink-0 object-contain h-24 px-4"
          />
        ))}
      </div>
    </div>
  );
}
