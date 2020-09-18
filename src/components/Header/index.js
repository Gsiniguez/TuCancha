import { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [isExpanded, toggleExpansion] = useState(false);

    return (
        <header className="bg-teal-500">
            <div className="flex flex-wrap md:flex-no-wrap items-center justify-between max-w-6xl mx-auto p-4 h-18 md:p-8 md:h-6">
                <div className="flex items-center text-white">
                    <Link href="/">
                        {/* TODO = Poner Logo de tucancha 
                        <img
                            src="/Brand.png"
                            className="mr-3 text-white h-12"
                        /> */}
                        TUCANCHA
                    </Link>
                </div>

                <button
                    className="block md:hidden border border-white px-3 py-2 rounded text-white"
                    onClick={() => toggleExpansion(!isExpanded)}
                >
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>

                <ul
                    className={`${
                        isExpanded ? `block` : `hidden`
                        } md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto`}
                >
                    {[
                        { title: "Inicio", route: "/" },
                        { title: "Complejos", route: "/complejos" },
                        { title: "Sobre Nosotros", route: "/about" },
                        { title: "Ingresar", route: "/login" },
                    ].map(navigationItem => (
                        <li className="mt-3 md:mt-0 md:ml-6" key={navigationItem.title}>
                            <Link href={navigationItem.route}>
                                <a className="block text-white">{navigationItem.title}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}


export default Header