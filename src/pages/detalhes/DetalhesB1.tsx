import Navbar from "../Navbar/Navbar";
import Link from "next/link";

export default function DetalhesA1() {
  return (
    <section className="font-padrao">
      <div>
        <Navbar />
      </div>
      <div className="mt-10 mx-8">
        <h1 className="text-3xl font-semibold">Bot B</h1>
        <p className="text-xl font-semibold">Informações sobre a execução</p>
      </div>
      <div className="border border-black h-20 mt-8 mx-8 flex items-center justify-between text-xl">
        <div className="flex items-center mx-10 justify-between">
          <p>Data/Hora:</p>
          <p className="ml-2 mr-8 border border-black px-2 text-gray-500">
            2023-08-01 08:00:00
          </p>
          <p className="ml-20">Task:</p>
          <p className="ml-2  border border-black px-2 text-gray-500">
            070d67c8-4448-4714-9e89-f934bbf
          </p>
          <p className="ml-64">Status:</p>
          <p className="border-black px-2 border ml-2 text-gray-500">Sucesso</p>
        </div>
      </div>
      <div className="mt-6 mx-8">
        <p className="text-xl font-semibold">Detalhes da Execução</p>
       

        <div className="flex flex-col border border-black mx-8 mt-4 text-xl">
          <div className="flex justify-between items-center w-full align-baseline bg-gray-300 px-2">
            <p className="w-1/2">Data/Hora</p>
            <p className="w-1/2">Mensagem</p>
            
          </div>
          <div className="flex justify-between items-center w-full align-baseline bg-gray-100 px-2">
            <p className="w-1/2">2023-08-01 08:00:00</p>
            <p className="w-1/2 pr-10">Acessando https://www.google.com.br</p>
           
          </div>
          <div className="flex justify-between items-center w-full align-baseline px-2">
            <p className="w-1/2">2023-08-02 18:00:00</p>
            <p className="w-1/2 pr-10">Aplicando string de busca</p>
           
          </div>
          <div className="flex justify-between items-center w-full align-baseline bg-gray-100 px-2">
            <p className="w-1/2">2023-08-03 12:00:00</p>
            <p className="w-1/2 pr-10">Submetendo pesquisa</p>
            
          </div>
          <div className="flex justify-between items-center w-full align-baseline px-2">
            <p className="w-1/2">2023-08-02 18:00:00</p>
            <p className="w-1/2 pr-10">Aguardando resultado</p>
           
          </div>
          <div className="flex justify-between items-center w-full align-baseline px-2">
            <p className="w-1/2">2023-08-02 18:00:00</p>
            <p className="w-1/2 pr-10">Contando numero de resultados obtidos</p>
           
          </div>
          <div className="flex justify-between items-center w-full align-baseline px-2">
            <p className="w-1/2">2023-08-02 18:00:00</p>
            <p className="w-1/2 pr-10">1000 resultados obtidos</p>
           
          </div>
          
        </div>
        <div className="justify-end align-bottom flex items-center mt-10 mr-8 text-xl">
          
        <Link href="/BotPages/BotBPage">
            <button className="underline">Voltar</button>
            </Link>
            
          </div>
      </div>
    </section>
  );
}
