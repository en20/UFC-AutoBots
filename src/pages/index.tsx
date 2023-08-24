import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar/Navbar";
import Navbarv2 from "./Navbar/Navbarv2";

const mockAuthenticate = async (username: string, password: string) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  if (username === "usuario" && password === "senha") {
    return { success: true };
  } else {
    return { success: false, message: "Credenciais inválidas" };
  }
};

export default function Home() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const authResult = await mockAuthenticate(username, password);
    if (authResult.success) {
      router.push("/dashboard/Dashboard");
    } else {
      setErrorMessage("Login inválido. Dica: Observe bem. ");
    }
  };

  return (
    <section className="">
      <div>
        <Navbarv2/>
      </div>
      <div className="flex items-center justify-center h-[85vh] font-padrao">
     
      <div className="flex flex-col items-start">
        <h2 className="justify-start items-start text-xl">Login</h2>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="flex flex-col gap-2 w-[100%] max-w-[100%] border border-black p-10 "
        >
          <div className="flex flex-col">
            <label htmlFor="username">Usuário:</label>
            <input
              type="text"
              name="username"
              className="border border-black outline-0 px-1"
              placeholder="usuario"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              name="password"
              className="outline-0 border border-black px-1"
              placeholder="senha"
            />
          </div>
          
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          
          <button type="submit" className="font-medium border border-black mt-4 hover:bg-gray-100 ">
            Fazer Login
          </button>
        </form>
        
        <div className="items-end justify-end">
          <Link href="/senhas/RecuperarSenha">
            <p className="pl-64 text-blue-500 underline">Esqueci minha senha</p>
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}
