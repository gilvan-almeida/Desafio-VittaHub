import { FaSearch } from "react-icons/fa";
import Button from "../Button/Button";

interface SearchDades{
    onSearch: (value: string) => void;
}

function SearchBar({onSearch}:SearchDades){
    return(
        <div className="bg-white py-2 rounded-full flex items-center justify-between px-5 gap-4 max-w-4xl">
            <FaSearch
                color="#006A37"
                size={18}
            />
            <input
                className="w-full h-full text-[#ABADAE] border-none focus:outline-none"
                placeholder="Buscar por nome da clínica, especialidade ou localização..."
                onChange={(e) => onSearch(e.target.value)}
            />
            <Button
                title="Buscar" 
                colorButton="bg-[#006A37]"
                textColor="text-[#CCFFD5]"
            />
        </div>
    )
}

export default SearchBar;