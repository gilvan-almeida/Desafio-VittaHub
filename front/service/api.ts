import { Clinic } from "@/types/clinics";

const URL_API = "http://localhost:3001"

export async function getClinics():Promise<Clinic[]>{
    const response = await fetch(`${URL_API}/clinicas`,{
        next: {revalidate: 3600/2}
    });
    if(!response.ok){
        throw new Error("Error na busca dos clientes")
    }

    return response.json()
}
