import Link from "next/link";

interface ButtonType {
    title: string,
    colorButton?: string,
    textColor?: string,
    hoverColor?: string,
    className?: string;
    onClick?: () => void;
}

function Button({title,colorButton, textColor, hoverColor, className, onClick}: ButtonType){
    return(
        <button onClick={onClick} className={`px-6 py-2 rounded-full ${colorButton} font-medium ${hoverColor} ${className}`}>
            <span className={textColor}>
                {title}
            </span>
        </button>
    )
}

export default Button;