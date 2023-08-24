import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";

export default function NovaExecução1A() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleLogin = () => {
    if (username === "usuario" && password === "senha") {
      setIsAuthenticated(true);
      setLoginError("");
    } else {
      setLoginError("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <section className="font-padrao">
      <div>
        <Navbar />
      </div>
      <div className="mt-10 mx-8 relative text-xl">
        <h1 className="text-3xl font-semibold">Executar Bot A</h1>
        <p className="text-xl font-semibold">Informe os Dados</p>
        <div className="border border-black h-32 mt-10 relative">
          <p className="mx-8 absolute bg-white mt-[-14px]">Credenciais de acesso</p>
          <span className="flex mt-12 mx-8">
            <div className="mr-10">
              <label htmlFor="username">Usuário:</label>
              <input
                type="text"
                name="username"
                className={`border ${loginError ? 'border-red-500' : 'border-black'} outline-0 px-1 ml-2`}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {loginError && <p className="text-red-500 mt-1 text-xs">{loginError}</p>}
            </div>
            <div className="mr-10">
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                name="password"
                className={`border ${loginError ? 'border-red-500' : 'border-black'} outline-0 px-1 ml-2`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </span>
        </div>
        <div className="border border-black h-32 mt-10 relative">
          <p className="mx-8 absolute bg-white mt-[-14px]">Planejamento</p>
          <span className="flex mt-12 mx-8">
            <div className="mr-10">
              <label htmlFor="ano">Ano:</label>
              <input
                type="text"
                name="ano"
                className="border border-black outline-0 px-1 ml-2"
              />
            </div>
            <div className="mr-10">
              <label htmlFor="orgao">Órgão:</label>
              <input
                type="text"
                name="orgao"
                className="outline-0 border border-black px-1 ml-2 "
              />
            </div>
          </span>
        </div>
        <div className="flex justify-end mt-10">
          <div className="border border-black bg-gray-300 px-2 text-xl">
            <Link href="/BotPages/BotAPage">
              <p>Voltar</p>
            </Link>
          </div>
          <div className="border border-black ml-10 bg-gray-300 px-2 text-xl">
            {isAuthenticated ? (
              <Link href="/planilhas/PlanilhaA">
                <p>Próximo</p>
              </Link>
            ) : (
              <button onClick={handleLogin}>Entrar</button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
