import ContactBtn from "./components/ContactBtn";
import InfiniteCarousel from "./components/InfiniteCarousel";
import ServiceCard from "./components/ServiceCard";
import { FaCoins } from "react-icons/fa";

export default function Home() {
  type serviceType = {
    img: string;
    imgAlt: string;
    name: string;
    description: string;
  };

  const services: serviceType[] = [
    {
      img: "/service-hand.png",
      imgAlt: "Mão segurando saco de dinheiro",
      name: "FGTS",
      description:
        "Antecipe as parcelas do seu Saque Aniversário agora mesmo com a menor taxa do mercado.",
    },
    {
      img: "/service-plant.png",
      imgAlt: "Vaso de planta de moeda",
      name: "INSS",
      description:
        "Crédito consignado disponível para aposentados e pensionistas em até 84 parcelas.",
    },
    {
      img: "/service-bag.png",
      imgAlt: "Saco de dinheiro com cronômetro",
      name: "Consignado",
      description:
        "Credito para servidores públicos, municipais e federais, verifique conosco as melhores condições.",
    },
    {
      img: "/service-handshake.png",
      imgAlt: "Aperto de mãos",
      name: "Emprestimo Pessoal",
      description:
        "Emprestimo pessoal que proporciona mais conforto para a família.",
    },
    {
      img: "/service-vault.png",
      imgAlt: "Cofre",
      name: "Consórcio",
      description:
        "Consórcio é planejamento, para que sua conquista fique ainda mais próxima.",
    },
    {
      img: "/service-graphic.png",
      imgAlt: "Grafico em barras",
      name: "Seguros",
      description:
        "Contratar um seguro é importante para planejar seu futuro financeiro e oferecer segurança a você e sua família.",
    },
    {
      img: "/service-car.png",
      imgAlt: "Ícone de carro",
      name: "Empréstimo com Garantia de Veículo",
      description:
        "Use seu carro como garantia para obter crédito com juros baixos e prazo estendido.",
    },
  ];

  const banks = [
    "/pan.png",
    "/safra.png",
    "/mercantil.png",
    "/C6.png",
    "/facta.png",
  ];

  return (
    <main className="space-y-16">
      <header className="lg:grid lg:grid-cols-2 lg:bg-[#12323D]">
        <div className="hidden lg:block p-8 m-auto text-[#C2AD6A] space-y-6">
          <h1>
            Transformando crédito <br />
            em oportunidade
          </h1>
          <h2 className="text-zinc-200/80">
            Taxas reduzidas, atendimento personalizado <br />e as melhores
            condições do mercado.
          </h2>
          <ContactBtn />
        </div>
        <img src="/unika.jpg" alt="" className="w-full" />
      </header>

      <section className="lg:grid lg:grid-cols-2">
        <div className="m-auto p-8 space-y-6">
          <h1 className="text-[#004d5a]">
            Transformando vidas através <br />
            do crédito há 10 anos!
          </h1>
          <p className="text-[#333] text-pretty">
            Sou Kamila Diniz, especialista em soluções financeiras com foco em
            crédito consignado. Na Unika Crédito, ofereço atendimento
            transparente e dedicado para ajudar você a encontrar a melhor opção
            para seu perfil.
          </p>
          <div className="space-y-2">
            <h2 className="font-semibold text-[#004d5a]">Difirenciais</h2>
            <ul className="list-inside">
              <li className="list-disc">
                Atendimento <strong>humanizado e sem burocracia</strong>
              </li>
              <li className="list-disc">
                Parceria com os <strong>maiores bancos e instituições</strong>
              </li>
              <li className="list-disc">
                <strong>10 anos de experiencia</strong> no mercado
              </li>
            </ul>
          </div>

          <ContactBtn className="lg:hidden" />
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex flex-col justify-between text-white">
            <p className="bg-linear-to-b from-black p-4 rounded-tr-4xl">
              Kamila Diniz
            </p>
            <p className="text-end bg-linear-to-t from-black p-4 rounded-bl-4xl">
              Fundadora da{" "}
              <strong className="font-semibold text-[#C2AD6A]">Unika</strong>
            </p>
          </div>
          <img
            src="unika.jpg"
            alt=""
            className="size-full object-cover rounded-tr-4xl rounded-bl-4xl"
          />
        </div>
      </section>
      <section className="bg-zinc-100 flex flex-col items-center">
        <div className="flex items-center my-8 py-4 border-b border-[#C2AD6A] lg:my-16">
          <div
            className="rounded-full border border-[#C2AD6A] bg-zinc-100 w-20 h-20 flex items-center justify-center 
            md:w-24 md:h-24"
          >
            <FaCoins className="text-[#C2AD6A] p-1 w-16 h-16 lg:w-20 lg:h-20" />
          </div>
          <div className="space-y-2 pl-6">
            <p className="text-[#333] text-lg font-semibold">Serviços</p>
            <h1 className="font-semibold text-[#004d5a]">
              Soluções <br /> Financeiras
            </h1>
          </div>
        </div>
        <div className="space-y-8 mb-12 mx-10 md:flex md:flex-wrap md:justify-center md:gap-12 md:space-y-0 lg:mx-0">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              img={service.img}
              imgAlt={service.imgAlt}
              name={service.name}
              description={service.description}
            />
          ))}
        </div>
      </section>

      <section className="bg-black">
        <InfiniteCarousel />
      </section>

      <footer className="h-80 w-full bg-[#004d5a] flex items-center justify-center text-[#C2AD6A]">
        <h1 className="">FOOTER</h1>
      </footer>
    </main>
  );
}
