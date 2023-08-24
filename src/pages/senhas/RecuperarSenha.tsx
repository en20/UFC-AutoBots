import Link from "next/link";
import Navbarv2 from "../Navbar/Navbarv2";


export default function Home() {
  return (
    <section className="font-padrao">
        <div>
            <Navbarv2/>
        </div>
    
    <div className="flex items-center justify-center mt-[175px]">
      <div className="flex flex-col items-start max-w-sm">
        <h2 className="text-xl">Recuperar Senha</h2>
        <form
          autoComplete="off"
          className="flex flex-col gap-2 w-full border border-black p-10"
        >
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              className="border border-black outline-0 px-1"
              
            />
          </div>
          <div className="flex justify-end items-end align-baseline">
            <Link href="/">
            <p className="mx-2 underline">Voltar</p>
            </Link>

            <Link href="/senhas/AlterarSenha">
            <p className="underline">Enviar</p>
            </Link>
            
          </div>
        </form>
      </div>
    </div>
    </section>
  );
}
