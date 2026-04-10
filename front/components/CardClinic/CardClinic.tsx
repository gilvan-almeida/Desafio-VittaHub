import { FiMapPin} from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

function CardClinic(){
    return (
        <div className="max-w-[350px] bg-white rounded-[30px] shadow-lg overflow-hidden">
            <div className="">

            </div>
            <div>
                <div className="title_Text_Card_Clinic">
                    <h1>
                        Clínica Vitta Saúde - Pinheiros
                    </h1>
                    <div className="localization-clinic">
                        <FiMapPin
                            color="white"
                        />
                        <h2>
                            São Paulo
                        </h2>
                    </div>

                    <div className="price_and_options">
                        <div className="card_clinic_price">
                            $$ 150
                        </div>
                        <div className="card_clinic_show_options">
                            <h1>
                                Ver Detalhes
                            </h1>
                            <FaArrowRight/>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default CardClinic;