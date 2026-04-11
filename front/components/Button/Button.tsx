import Link from "next/link";

interface ButtonType {
    title: string,
    href: string,
    colorButton?: string,
    textColor?: string,
    hoverColor?: string,
}

function Button({title, href, colorButton, textColor, hoverColor}: ButtonType){
    return(
        <Link href={href} className={`px-6 py-2 rounded-full ${colorButton} font-medium ${hoverColor}`}>
            <span className={textColor}>
                {title}
            </span>
        </Link>
    )
}

export default Button;