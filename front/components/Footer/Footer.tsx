import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-white w-full border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 px-6 md:px-30 py-10 max-w-10xl mx-auto">
        <Link href="/" className="text-[#00633b] text-2xl font-bold">
          VitalPulse
        </Link>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <Link 
            href="/" 
            className="text-[#475569] text-sm md:text-base hover:text-[#00633b] ">
            Política de Privacidade
          </Link>
          <Link 
            href="/" 
                className="text-[#475569] text-sm md:text-base hover:text-[#00633b]">
            Suporte
          </Link>
        </div>
        <p className="text-[#475569] text-xs md:text-sm text-center md:text-right opacity-80">
          © 2024 VitalPulse Health Editorial. <br className="md:hidden" /> 
          Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
}

export default Footer;