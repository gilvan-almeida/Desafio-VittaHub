import Image from "next/image";
import CardClinic from "@/components/CardClinic/CardClinic";
import Button from "@/components/Button/Button"
import NavBar from "@/components/NavBar/NavBar";
import SearchBar from "@/components/SearchBar/SeachBar";


export default function Home() {

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <NavBar />
      
      <main className="flex flex-col items-center justify-center">

        <div className="flex flex-col items-center justify-center py-30 px-4 w-full">
          <div className="text-center mb-12">
            <span className="text-[#35FF91] text-sm font-bold mb-4 block ">
              Rede de Saúde Premium
            </span>
            <h1 className="text-6xl font-bold leading-tight">
              Encontre o cuidado que<br/>
              <span className="text-[#35FF91]">pulsa com a vida.</span>
            </h1>
          </div>
          <div className="w-full max-w-3xl">
            <SearchBar />
          </div>
        </div>

        <div className="bg-white w-full py-10">
          <div className="px-20 flex justify-between">
            <div>
              <div className="flex items-center gap-2"> 
                <div className="w-10 h-0.75 bg-[#35FF91] rounded-full"></div>
                <span className="text-[#35FF91] text-sm font-light">
                  TODAS AS ÁREAS
                </span>
              </div>
              <h1 className="text-5xl font-bold text-black">
                Sua saúde, <br/> nosso diretório.
              </h1>
            </div>

            <div className="flex gap-4 mt-20">
              <Button
                title="Todas as áreas"
                href="/"
                colorButton="bg-[#35FF91]"
                textColor="text-[#005D2F]"
              />
              <Button
                title="Todas as áreas"
                href="/"
                textColor="text-[#475569]"
                hoverColor="hover:bg-[#cccaca]"
              />
              <Button
                title="Todas as áreas"
                href="/"
                textColor="text-[#475569]"
                hoverColor="hover:bg-[#cccaca]"
              />
            </div>

          </div>

          <div>

          </div>
          
        </div>

      </main>
    </div>
  );
}