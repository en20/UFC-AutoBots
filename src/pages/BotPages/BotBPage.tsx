import Navbar from "../Navbar/Navbar";
import Link from "next/link";

export default function BotAPage() {
  return (
    <section className="font-padrao">
      <div>
        <Navbar />
      </div>
      <div className="mt-10 mx-8">
        <h1 className="text-3xl font-semibold">Bot B</h1>
        <p className="text-xl font-semibold">Histórico de Execuções</p>
      </div>

      <div className="flex flex-col border border-black mx-8 mt-4 text-xl">
        <div className="flex justify-between items-center w-full align-baseline bg-gray-300 px-2">
          <p className="w-1/4">Data/Hora</p>
          <p className="w-1/4">Task</p>
          <p className="w-1/4">Status</p>
          <p className="w-1/4">Detalhes</p>
        </div>
        <div className="flex justify-between items-center w-full align-baseline bg-gray-100 px-2">
          <p className="w-1/4">2023-08-01 08:00:00</p>
          <p className="w-1/4 pr-10">070d67c8-4448-4714-9e89-f934bbfc0c49</p>
          <p className="w-1/4">Sucesso</p>
          <div className="w-1/4">
            <Link href="/detalhes/DetalhesB1">
              <p className="text-blue-500 underline cursor-pointer">Visualizar</p>
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center w-full align-baseline px-2">
          <p className="w-1/4">2023-08-02 18:00:00</p>
          <p className="w-1/4 pr-10">d946cca4-a581-474e-8951-f985166c9647</p>
          <p className="w-1/4">Falha</p>
          <div className="w-1/4">
            <Link href="/detalhes/DetalhesB2">
              <p className="text-blue-500 underline cursor-pointer">Visualizar</p>
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center w-full align-baseline bg-gray-100 px-2">
          <p className="w-1/4">2023-08-03 12:00:00</p>
          <p className="w-1/4 pr-10">1f8e174f-73fa-406d-91f8-acf4d36ae56</p>
          <p className="w-1/4">Pendente</p>
          <div className="w-1/4">
            <Link href="/detalhes/DetalhesB3">
              <p className="text-blue-500 underline cursor-pointer">Visualizar</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-10 mr-8 text-xl">
        <div className="border border-black mr-2 bg-gray-300">
          <Link href="/dashboard/Dashboard">
            <button className="mx-2 cursor-pointer">
              Voltar
            </button>
          </Link>
        </div>
        <div className="border border-black bg-gray-300">
        <Link href="/NovaexecucaoBOT/NovaExecucao1B">
            <button className="mx-2  cursor-pointer">
              Nova Execução
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
