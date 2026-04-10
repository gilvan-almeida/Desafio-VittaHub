import Link from "next/link";

interface ButtonType {
    name: string,
    href: string,
    colorButton?: string,
    textColor: string
}

function Button({name, href, colorButton, textColor}: ButtonType){
    return(
        <Link href={href} className={`px-6 py-2 rounded-full ${colorButton} font-medium`}>
            <span className={textColor}>
                {name}
            </span>
        </Link>
    )
}

export default Button;