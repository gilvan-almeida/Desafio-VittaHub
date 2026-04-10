import Button from "../Button/Button";
import Link from "next/link";


const listLink = [
    {
        key: 1,
        name: "Diretorio",
        href: "/"
    },
    {
        key: 2,
        name: "Temas de Saúde",
        href: "/"
    },
    {
        key: 3,
        name: "Consultores",
        href:"/"
    }
]


function NavBar(){
    return(
        <nav className="flex justify-between items-center gap-12 bg-white px-10 py-4 w-full">
            <div>
                <Link href="/" className="text-[#00633b] text-2xl font-bold">
                    VitalPulse
                </Link>
            </div>
            <div className="flex gap-10 items-center text-[#475569] font-medium px-2">
                {listLink.map((link) => (
                    <Link
                        key={link.key}
                        href={link.href}
                        className="
                            relative
                            hover:text-[#006A37]
                            hover:bottom-1
                            after:content-[''] after:absolute after:-bottom-[0.5px] after:left-0
                            after:h-0.5 after:bg-[#00ED82] after:w-0
                            hover:after:w-full"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className="flex gap-4">
                <Button
                    name="Entrar"
                    href="/"
                    textColor="text-[#475569]"                 
                />
                <Button
                    name="Criar Conta"
                    href="/"
                    colorButton="bg-[#006A37]"
                    textColor="text-[#CCFFD5]"
                />
            </div>
        </nav>
    )
}

export default NavBar;