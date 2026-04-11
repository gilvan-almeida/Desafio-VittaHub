import { FaSearch } from "react-icons/fa";
import Button from "../Button/Button";

function SearchBar(){
    return(
        <div className="bg-white py-2 rounded-full flex items-center justify-between px-5 gap-4 max-w-4xl">
            <FaSearch
                color="#006A37"
                size={18}
            />
            <input
                className="w-full h-full text-[#ABADAE] border-none focus:outline-none"
                placeholder="Buscar por nome da clínica, especialidade ou localização..."
            />
            <Button
                title="Buscar"
                href="/"    
                colorButton="bg-[#006A37]"
                textColor="text-[#CCFFD5]"
            />
        </div>
    )
}

export default SearchBar;