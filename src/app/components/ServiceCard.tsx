import Link from "next/link";

type propsType = {
  img: string;
  imgAlt: string;
  name: string;
  description: string;
};

export default function ServiceCard({
  img,
  imgAlt,
  name,
  description,
}: propsType) {
  return (
    <div className="w-full flex flex-col border rounded md:w-5/12 lg:w-1/4">
      <img
        src={img}
        alt={imgAlt}
        className="w-full rounded-t overflow-hidden"
      />
      <div className="space-y-4 p-2">
        <h3 className="text-xl font-semibold lg:text-2xl">{name}</h3>
        <p className="text-[#333] lg:text-lg">{description}</p>
        <Link
          href="https://api.whatsapp.com"
          className="block  p-2 text-center rounded text-lg bg-[#C2AD6A] text-white hover:text-color-dark hover:transition hover:duration-150 duration-150 lg:text-xl"
          target="_blank"
        >
          Quero saber mais
        </Link>
      </div>
    </div>
  );
}
