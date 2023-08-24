import Navbar from "../Navbar/Navbar";
import Carousel from "../itemCarrossel/Carrosel";
export default function Dashboard() {
  return (
    <section className="font-padrao">
      <div>
        <Navbar />
      </div>

      <div className="mt-10">
        <h1 className="mx-4 text-2xl font-semibold">Bem vindo, Usuário</h1>
        <p className="mx-4 text-xl">Selecione um bot</p>
      </div>
      <div className="mt-10">
        <Carousel/>
      </div>
    </section>
  );
}
