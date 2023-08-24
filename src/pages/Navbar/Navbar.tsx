import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="p-4 flex justify-between items-center font-padrao">
            <div>
                <Link href="/dashboard/Dashboard">
                <h1 className=" text-3xl font-semibold">UFC AutoBots</h1>
                </Link>
            </div>
            <div className="flex space-x-4">
                <Link href="/senhas/RecuperarSenha">
                    <p className=" hover:underline">Alterar Senha</p>
                </Link>
                <Link href="/">
                    <p className=" hover:underline">Encerrar Sessão</p>
                </Link>
            </div>
        </nav>
    );
}
