import Link from "next/link";
import Navbarv2 from "../Navbar/Navbarv2";

export default function AlterarSenha() {
  return (
    <section className="font-padrao">
      <div>
        <Navbarv2 />
      </div>

      <div className="flex items-center justify-center mt-[150px]">
        <div className="flex flex-col items-start max-w-sm">
          <h2 className="text-xl">Alterar Senha</h2>
          <form
            autoComplete="off"
            className="flex flex-col gap-2 w-full border border-black p-10"
          >
            <div className="flex flex-col">
              <label htmlFor="email">Senha Atual:</label>
              <input
                type="text"
                name="email"
                className="border border-black outline-0 px-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="text">Nova Senha:</label>
              <input
                type="text"
                name="text"
                className="border border-black outline-0 px-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="text">Confirmar Nova Senha:</label>
              <input
                type="text"
                name="text"
                className="border border-black outline-0 px-1"
              />
            </div>
            <div className="flex justify-end items-end align-baseline">
              <Link href="/senhas/RecuperarSenha" className="">
                <p className="mx-2 underline">Voltar</p>
              </Link>
              <Link href="/">
                <p className="underline">Enviar</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
