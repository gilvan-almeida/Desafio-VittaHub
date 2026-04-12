"use client";
import { useState } from "react";

import Button from "../Button/Button";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";





function NavBar() {

    const listLink = [
        {
            key: 1,
            name: "Diretório",
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
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white w-full border-b border-gray-100 sticky top-0 z-50">
            <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-8xl mx-auto">
                <Link href="/" className="text-[#00633b] text-2xl font-bold z-[60]">
                    VitalPulse
                </Link>

                {/* Mais facil que mudar o componente no momento, lembrar de alterar */}
                <button 
                    className="md:hidden text-3xl text-[#00633b] z-[60]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>
                <div className="hidden md:flex gap-10 items-center text-[#475569] font-medium">
                    {listLink.map((link) => (
                        <Link
                            key={link.key}
                            href={link.href}
                            className="relative hover:text-[#006A37] transition-all
                                after:content-[''] after:absolute after:-bottom-1 after:left-0
                                after:h-0.5 after:bg-[#00ED82] after:w-0 hover:after:w-full
                                "
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden md:flex gap-4">
                    <Button 
                        title="Entrar" 
                        textColor="text-[#475569]" 
                        hoverColor="hover:bg-gray-200" 
                    />
                    <Button 
                        title="Criar Conta" 
                        colorButton="bg-[#006A37]" 
                        textColor="text-[#CCFFD5]" 
                        hoverColor="hover:bg-[#048b4a]" 
                    />
                </div>

                <div className={`
                    fixed inset-0 bg-white z-[50] flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                `}>
                    {listLink.map((link) => (
                        <Link 
                            key={link.key} 
                            href={link.href} 
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-semibold text-[#475569]"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex flex-col gap-4 w-full px-10">
                        <Button 
                            title="Entrar" 
                            textColor="text-[#475569]" 
                            hoverColor="hover:bg-gray-200"
                            className="w-full text-center" 
                            />
                        <Button 
                            title="Criar Conta" 
                            colorButton="bg-[#006A37]" 
                            textColor="text-[#CCFFD5]" 
                            className="w-full text-center" 
                            />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;