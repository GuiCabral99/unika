import Link from "next/link";

export default function ContactBtn({ ...props }) {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=5517992100872"
      className="inline-block bg-[#C2AD6A] text-white px-4 py-3 rounded text-lg cursor-pointer"
    >
      Simule sem compromisso →
    </Link>
  );
}
