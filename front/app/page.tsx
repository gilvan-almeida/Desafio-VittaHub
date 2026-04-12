"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import CardClinic from "@/components/CardClinic/CardClinic";
import Button from "@/components/Button/Button"
import NavBar from "@/components/NavBar/NavBar";
import SearchBar from "@/components/SearchBar/SeachBar";
import Footer from "@/components/Footer/Footer";

import { Clinic } from "@/types/clinics";
import { getClinics } from "@/service/api";


export default function Home() {

  const [allClinics, setAllClinics] = useState<Clinic[]>([]);
  const [searchDades, setSearchDades] = useState("");
  const [loading, setLoading] = useState(true);
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todas as áreas");

  useEffect(() => { 
    const dades = async () =>{
      try{
        const dadesClinic = await getClinics();
        if(dadesClinic) setAllClinics(dadesClinic);
      } catch (err) {
        console.error(err);
      } finally{
        setLoading(false);
      }
    };
    dades();
  }, []);

  const clinicFiltered = allClinics.filter(clinic => {
    const matchesSearch = 
      clinic.titulo.toLowerCase().includes(searchDades.toLowerCase()) ||
      clinic.local.toLowerCase().includes(searchDades.toLowerCase()) ||
      clinic.especializacao.some(esp => esp.toLowerCase().includes(searchDades.toLowerCase()));

    const matchesCategory = 
      categoriaAtiva === "Todas as áreas" || 
      clinic.especializacao.some(esp => esp.toLowerCase() === categoriaAtiva.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      <NavBar />
      
      <main className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center py-20 md:py-45 px-6 w-full text-center">
          <div className="mb-8 md:mb-12">
            <span className="text-[#35FF91] text-xs md:text-sm font-bold mb-4 block tracking-widest">
              REDE DE SAÚDE PREMIUM
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Encontre o cuidado que<br className="hidden md:block" />
              <span className="text-[#35FF91]"> pulsa com a vida.</span>
            </h1>
          </div>
          <div className="w-full max-w-3xl">
            <SearchBar 
              onSearch={setSearchDades}
            />
          </div>
        </div>

        <div className="bg-white w-full py-12 md:py-30">
          <div className="px-6 md:px-30 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="flex items-center gap-2"> 
              <div className="w-10 h-1 bg-[#35FF91] rounded-full"></div>
              <span className="text-[#35FF91] text-sm font-bold">TODAS AS ÁREAS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-black mt-2">
              Sua saúde, <br className="hidden md:block"/> nosso diretório.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 md:gap-4 w-full md:w-auto md:mt-0">
              <Button 
                  title="Todas as áreas" 
                  onClick={() => setCategoriaAtiva("Todas as áreas")}
                  colorButton={categoriaAtiva === "Todas as áreas" ? "bg-[#35FF91]" : "bg-gray-100"} 
                  textColor={categoriaAtiva === "Todas as áreas" ? "text-[#005D2F]" : "text-[#475569]"} 
                  className="flex-1 md:flex-none text-center" 
                />
              <Button 
                title="Fisioterapia" 
                onClick={() => setCategoriaAtiva("Fisioterapia")}
                colorButton={categoriaAtiva === "Fisioterapia" ? "bg-[#35FF91]" : "bg-gray-100"} 
                textColor={categoriaAtiva === "Fisioterapia" ? "text-[#005D2F]" : "text-[#475569]"} 
                className="flex-1 md:flex-none text-center border border-gray-100 md:border-none" 
              />
              <Button 
                title="Cardiologia" 
                onClick={() => setCategoriaAtiva("Cardiologia")}
                colorButton={categoriaAtiva === "Cardiologia" ? "bg-[#35FF91]" : "bg-gray-100"} 
                textColor={categoriaAtiva === "Cardiologia" ? "text-[#005D2F]" : "text-[#475569]"} 
                className="flex-1 md:flex-none text-center border border-gray-100 md:border-none"
              />
          </div>
          </div>

          <div className="w-full px-6 md:px-30 py-12 md:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {loading ? (
                    <p>Carregando...</p>
                ) : (
                    clinicFiltered.map((clinica) => (
                        <CardClinic
                            key={clinica.id}
                            name={clinica.titulo}
                            localization={clinica.local}
                            stars={clinica.avaliacao}
                            image={clinica.imagem}
                            price={clinica.nivelPreco}
                        />
                    ))
                )}
                {!loading && clinicFiltered.length === 0 && (
                    <p className="col-span-full text-center text-gray-500">
                        Nenhuma clínica encontrada para "{searchDades}"
                    </p>
                )}
          </div>

          <div className="bg-white w-full py-6 px-4 md:px-30">
            <div className="bg-[#35FF91] rounded-4xl md:rounded-[3rem] overflow-hidden">
              <div className="py-12 px-8 md:py-20 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
                <div className="max-w-2xl flex flex-col items-center lg:items-start">
                  <h2 className="font-bold text-4xl md:text-6xl text-[#005D2F] leading-tight">
                    Sua saúde, <br/> nosso diretório
                  </h2>
                  <p className="text-[#005D2F] py-6 md:py-10 text-lg">
                    Junte-se a milhares de pessoas que encontram as melhores clínicas especializadas e profissionais de saúde em seu bairro.
                  </p>
                  <Button
                    title="Cadastrar minha clínica"
                    colorButton="bg-[#006A37]"
                    textColor="text-[#CCFFD5]"
                    className="w-full md:w-auto py-4"
                  />
                </div>
                <div className="flex flex-row items-center justify-center lg:justify-end gap-4 md:gap-6 w-full lg:w-auto">
                  <div className="bg-white/30 rounded-2xl w-35 xs:w-[160px] md:w-45 h-27.5 md:h-32.5 text-center flex flex-col justify-center shadow-sm">
                    <h3 className="font-bold text-3xl md:text-4xl text-[#00633b]">
                      500+
                    </h3>
                    <p className="text-[#00633b] text-[10px] md:text-sm font-medium leading-tight px-2">
                      Clínicas certificadas
                    </p>
                  </div>
                  
                  <div className="bg-white/30 rounded-2xl w-35 xs:w-[160px] md:w-45 h-27.5 md:h-32.5 text-center flex flex-col justify-center shadow-sm">
                    <h3 className="font-bold text-3xl md:text-4xl text-[#00633b]">
                      15k
                    </h3>
                    <p className="text-[#00633b] text-[10px] md:text-sm font-medium leading-tight px-2">
                      Usuários mensais
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer/>
      </main>
    </div>
  );
}