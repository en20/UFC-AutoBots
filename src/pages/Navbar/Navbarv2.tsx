import Link from "next/link";

export default function Navbarv2() {
    return (
        <nav className="p-4 flex justify-between items-center font-padrao">
            <div>
                <Link href="/dashboard/Dashboard">
                <h1 className=" text-3xl font-semibold">UFC AutoBots</h1>
                </Link>
            </div>
           
        </nav>
    );
}
