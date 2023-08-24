import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  const [files, setFiles] = useState([
    { nome: "Planilha1.csv", tamanho: "1MB" },
    { nome: "Planilha2.csv", tamanho: "2MB" },
  ]);

  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  return (
    <section className="font-padrao">
      <div>
        <Navbar />
      </div>
      <div className="mt-10 mx-8 relative text-xl">
        <h1 className="text-3xl font-semibold">Executar Bot B</h1>
        <p className="text-xl font-semibold">Selecione as Planilhas</p>
      </div>
      <div className="border-dashed border-black border-2 h-44 mx-8 mt-10 flex flex-col justify-center text-center text-xl">
        <h1>Arraste ou solte os arquivos aqui ou</h1>
        <Link href="/NovaexecucaoBOT/NovaExecucao1A">
          <button className="border border-black bg-gray-300 px-2 text-xl">
            Selecionar arquivos
          </button>
        </Link>
      </div>
      <div className="border border-black mt-10 mx-8 h-18 text-xl">
        {files.map((file, index) => (
          <span key={index} className="flex items-start bg-gray-100">
            <p className="w-1/2">{file.nome}</p>
            <p className="w-1/2">{file.tamanho}</p>
            
            <button className="w-1/4 text-blue-500 cursor-pointer" onClick={() => handleRemoveFile(index)}>Remover</button>
            
          </span>
        ))}
      </div>
      <div className="flex justify-end mt-10 mr-8 text-xl">
        <div className="border border-black mr-2 bg-gray-300">
          <Link href="/dashboard/Dashboard">
            <button className="mx-2 cursor-pointer">Voltar</button>
          </Link>
        </div>
        <div className="border border-black bg-gray-300">
          <Link href="/dashboard/Dashboard">
            <button className="mx-2 cursor-pointer">Executar</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
