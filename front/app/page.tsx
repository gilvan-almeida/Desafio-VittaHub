import Image from "next/image";
import CardClinic from "@/components/CardClinic/CardClinic";
import Button from "@/components/Button/Button"
import NavBar from "@/components/NavBar/NavBar";
import SearchBar from "@/components/SearchBar/SeachBar";


const listCard = [
  {
    key: 1,
    name: "Clínica Vitta Saúde — Pinheiros",
    localization: "São Paulo",
    price: "150"
  },{
    key: 2,
    name: "Clínica Vitta Saúde — Pinheiros",
    localization: "São Paulo",
    price: "150"
  },{
    key: 3,
    name: "Clínica Vitta Saúde — Pinheiros",
    localization: "São Paulo",
    price: "150"
  },{
    key: 4,
    name: "Clínica Vitta Saúde — Pinheiros",
    localization: "São Paulo",
    price: "150"
  },{
    key: 5,
    name: "Clínica Vitta Saúde — Pinheiros",
    localization: "São Paulo",
    price: "150"
  }, {
    key: 6,
    name: "Clínica Vitta Saúde — Pinheiros",
    localization: "São Paulo",
    price: "150"
  }
]

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

        <div className="bg-white w-full py-30">
          <div className="px-30 flex justify-between">
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

          <div className="w-full md:px-30 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {listCard.map((list) => (
              <CardClinic
                key={list.key}
                name={list.name}
                localization={list.localization}
                price={list.price}
              />
            ))}
          </div>

          <div className="bg-white w-full py-6 px-30">
            <div className="h-full bg-[#35FF91] rounded-[3rem]">
              <div className="py-20 px-20 flex justify-between">
                <div>
                  <div>
                    <h1 className="font-bold text-6xl text-[#005D2F]">
                      Sua saúde, <br/> nosso diretorio
                    </h1>
                    <h1 className="text-[#005D2F] py-10">
                      Junte-se a milhares de pessoas que encontram as melhores clínicas <br/>especializadas e profissionais de saúde em seu bairro.
                    </h1>
                    <Button
                      title="Cadastrar minha clínica"
                      href="/"
                      colorButton="bg-[#006A37]"
                      textColor="text-[#CCFFD5]"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end gap-6">
                  <div className="bg-white/20 rounded-2xl w-[180px] h-[130px] text-center flex flex-col justify-center">
                    <h1 className="font-bold text-4xl text-[#00633b]"> 
                      500+
                    </h1>
                    <h2 className="text-[#00633b] text-sm  font-medium">
                      Clínicas certificadas
                    </h2>
                  </div>
                  <div className="bg-white/20 rounded-2xl w-[180px] h-[130px] text-center flex flex-col justify-center">
                    <h1 className="font-bold text-4xl text-[#00633b] "> 
                      15k
                    </h1>
                    <h2 className="text-[#00633b] text-sm  font-medium">
                      Usuários mensais
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}