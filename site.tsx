import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Phone, Send, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ nome: "", telefone: "", mensagem: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappURL = `https://wa.me/5521976402914?text=Olá, me chamo ${encodeURIComponent(
      form.nome
    )}. Meu telefone é ${encodeURIComponent(
      form.telefone
    )}. Gostaria de agendar um horário. ${encodeURIComponent(form.mensagem)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <main className="min-h-screen bg-pink-50 text-gray-800 font-sans px-4 md:px-8 relative">
      <img
        src="/user-uploads/366415063_295416926365095_5329030825103194171_n(1).jpg"
        alt="Keyla Corrêa"
        className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 object-cover opacity-10 rounded-full m-4"
      />

      <section className="bg-pink-100 p-6 md:p-8 text-center shadow-lg rounded-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-900 mb-3 tracking-tight">
          Keyla Corrêa
        </h1>
        <p className="text-xl md:text-2xl text-pink-700">
          Depilação Profissional Feminina
        </p>
        <p className="text-md text-gray-700 max-w-2xl mx-auto mt-3 leading-relaxed">
          Com mais de 10 anos de experiência, ofereço um atendimento humanizado e técnicas que garantem conforto, segurança e resultados impecáveis. Sua autoestima em primeiro lugar!
        </p>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-3 p-4 md:p-6 max-w-6xl mx-auto">
        <Card className="rounded-2xl shadow-xl border border-pink-100">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-xl font-bold mb-3 text-pink-800">
              Por que escolher a Keyla?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-base">
              <li>Atendimento acolhedor e respeitoso</li>
              <li>Produtos de alta qualidade e 100% descartáveis</li>
              <li>Ambiente limpo, confortável e climatizado</li>
              <li>Técnicas modernas para minimizar a dor</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-xl border border-pink-100">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-xl font-bold mb-3 text-pink-800">
              Agende seu horário
            </h2>
            <p className="mb-4 text-gray-700 text-sm">
              Preencha o formulário e inicie uma conversa personalizada no WhatsApp.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="nome"
                placeholder="Seu nome"
                value={form.nome}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded text-sm"
                required
              />
              <input
                type="tel"
                name="telefone"
                placeholder="Telefone para contato"
                value={form.telefone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded text-sm"
                required
              />
              <textarea
                name="mensagem"
                placeholder="Mensagem (opcional)"
                value={form.mensagem}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded text-sm"
                rows={3}
              />
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded animate-pulse transition duration-500"
              >
                AGENDAR VIA WHATSAPP
              </button>
            </form>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-xl border border-pink-100">
          <CardContent className="p-4 md:p-6">
            <h2 className="text-xl font-bold mb-3 text-pink-800">
              Contato e Redes
            </h2>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-center">
                <Phone className="mr-2 text-pink-600" /> (21) 97640-2914
              </p>
              <p className="flex items-center">
                <Instagram className="mr-2 text-pink-600" />
                <a
                  href="https://www.instagram.com/keylacorrea.depilacao/"
                  className="text-pink-700 hover:underline"
                  target="_blank"
                >
                  @keylacorrea.depilacao
                </a>
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2 text-pink-600" />
                <span className="text-pink-700">Madureira - Rio de Janeiro</span>
              </p>
              <p className="flex items-center">
                <Clock className="mr-2 text-pink-600" />
                <span className="text-pink-700">Seg a Sex: 9h às 18h</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="bg-white py-10 px-4 md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-800 mb-8">
          O que dizem nossas clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="rounded-xl border border-pink-100 shadow-md p-4">
            <p className="text-sm text-gray-600 italic">
              “A Keyla é maravilhosa! Sempre atenciosa e cuidadosa. Nunca me senti tão confortável durante uma depilação.”
            </p>
            <p className="mt-2 text-right text-pink-700 font-semibold">
              — Juliana M.
            </p>
          </Card>
          <Card className="rounded-xl border border-pink-100 shadow-md p-4">
            <p className="text-sm text-gray-600 italic">
              “Atendimento impecável, ambiente super limpo e confortável. Recomendo de olhos fechados!”
            </p>
            <p className="mt-2 text-right text-pink-700 font-semibold">
              — Camila R.
            </p>
          </Card>
          <Card className="rounded-xl border border-pink-100 shadow-md p-4">
            <p className="text-sm text-gray-600 italic">
              “Já sou cliente há anos. A Keyla tem mãos de fada. Sempre saio renovada!”
            </p>
            <p className="mt-2 text-right text-pink-700 font-semibold">
              — Fernanda L.
            </p>
          </Card>
        </div>
      </section>

      <section className="bg-pink-50 py-10 px-4 md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-pink-800 mb-8">
          Galeria
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <img
            src="/user-uploads/galeria1.jpg"
            alt="Foto 1"
            className="rounded-xl shadow-md object-cover w-full h-44 md:h-52"
          />
          <img
            src="/user-uploads/galeria2.jpg"
            alt="Foto 2"
            className="rounded-xl shadow-md object-cover w-full h-44 md:h-52"
          />
          <img
            src="/user-uploads/galeria3.jpg"
            alt="Foto 3"
            className="rounded-xl shadow-md object-cover w-full h-44 md:h-52"
          />
          <img
            src="/user-uploads/galeria4.jpg"
            alt="Foto 4"
            className="rounded-xl shadow-md object-cover w-full h-44 md:h-52"
          />
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6 px-4">
        <img
          src="/user-uploads/366415063_295416926365095_5329030825103194171_n(1).jpg"
          alt="Foto da Keyla"
          className="mx-auto mb-3 w-16 h-16 rounded-full object-cover"
        />
        Desenvolvido com ❤️ por{" "}
        <a
          href="https://www.instagram.com/marcelosilveira.dev"
          className="underline hover:text-pink-800"
          target="_blank"
        >
          @marcelosilveira.dev
        </a>
        <br />
        © {new Date().getFullYear()} Keyla Corrêa Depilação. Todos os direitos reservados.
        <br />
        <span className="text-xs text-gray-400">
          Este site é uma demonstração de portfólio e não representa um serviço comercial ativo.
        </span>
      </footer>
    </main>
  );
}
