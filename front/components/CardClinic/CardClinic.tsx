import { FiMapPin} from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

interface CardDades{
    image?: string,
    name: string,
    localization: string,
    price: string
}



function CardClinic({image, name, localization, price}: CardDades){
    return (
        <div className="w-full bg-white rounded-[30px] shadow-lg overflow-hidden">

            <div className="relative w-full h-60 ">
                <Image
                    src="/image.png"
                    alt="Banner de teste clínica"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div>
                <div className="p-6">
                    <h1 className="text-gray-900 text-xl font-bold"> 
                        {name}
                    </h1>
                    <div className="flex items-center gap-1 text-gray-500">
                        <FiMapPin
                           size={14}
                        />
                        <span className="font-medium text-sm">
                            {localization}
                        </span>
                    </div>

                    <div className="flex items-center justify-between mt-8">
                        <div className="text-[#087f5b] font-bold text-xl">
                            <span>
                                $$ {price}
                            </span>
                        </div>
                        <button className="flex items-center text-[#087f5b] text-sm gap-2 font-bold">
                            <span>
                                Ver Detalhes
                            </span>
                            <FaArrowRight
                                size={14}
                                color="#087f5b"
                            />
                        </button>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default CardClinic;