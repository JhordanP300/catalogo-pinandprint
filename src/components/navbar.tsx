"use client"


import { useState } from "react"
import { useApp } from "../context/AppContext"

export default function Navbar() {
	const { cartCount } = useApp()
	const [open, setOpen] = useState(false)

	return (
		<header className="sticky top-0 z-100 bg-verdePrint px-4 md:px-8 flex items-center justify-between h-14 md:h-17.5 shadow-[0_4px_0_var(--negroPrint)]">

			{/* LOGO PIN AND PRINT */}
			<a href="#" className="flex items-center gap-3 no-underline" aria-label="Pin & Print - Inicio">
				<span className="text-xl md:text-2xl font-['SuperKindly'] text-amarilloPrint">Pin
					<span className="text-blancoPrint hover:text-naranjaPrint">&amp;</span>Print
				</span>
			</a>

			{/* Botón hamburguesa */}
			<button
				className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-2"
				aria-label="Abrir menú"
				onClick={() => setOpen(o => !o)}
			>
				<span className={`block w-6 h-0.5 bg-blancoPrint mb-1 transition-all duration-200 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
				<span className={`block w-6 h-0.5 bg-blancoPrint mb-1 transition-all duration-200 ${open ? 'opacity-0' : ''}`}></span>
				<span className={`block w-6 h-0.5 bg-blancoPrint transition-all duration-200 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
			</button>

			{/* NAVBAR */}
			<nav
				className={`fixed md:static top-0 left-0 w-full md:w-auto h-full md:h-auto bg-verdePrint md:bg-transparent flex flex-col md:flex-row items-center gap-6 md:gap-2 pt-20 md:pt-0 z-50 transition-all duration-300
				${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
				aria-label="Navegación principal"
			>
				<a
					className="font-['AmberlySans'] font-bold text-[1.2rem] md:text-[0.85rem] text-blancoPrint no-underline px-6 md:px-4 py-3 md:py-[0.4rem] rounded-full border-2 border-transparent uppercase tracking-[0.05em] transition-[background,color,border-color] duration-200 hover:bg-amarilloPrint hover:text-negroPrint hover:border-negroPrint"
					href="#catalogo"
					onClick={() => setOpen(false)}
				>
					Catálogo
				</a>

				<a
					className="font-['AmberlySans'] font-bold text-[1.2rem] md:text-[0.85rem] text-blancoPrint no-underline px-6 md:px-4 py-3 md:py-[0.4rem] rounded-full border-2 border-transparent uppercase tracking-[0.05em] transition-[background,color,border-color] duration-200 hover:bg-amarilloPrint hover:text-negroPrint hover:border-negroPrint"
					href="#personalizar"
					onClick={() => setOpen(false)}
				>
					Personalizar
				</a>

				<a
					className="font-['AmberlySans'] font-bold text-[1.2rem] md:text-[0.85rem] text-blancoPrint no-underline px-6 md:px-4 py-3 md:py-[0.4rem] rounded-full border-2 border-transparent uppercase tracking-[0.05em] transition-[background,color,border-color] duration-200 hover:bg-amarilloPrint hover:text-negroPrint hover:border-negroPrint"
					href="#nosotros"
					onClick={() => setOpen(false)}
				>
					Nosotros
				</a>

				<a
					href="#catalogo"
					className="font-['AmberlySans'] font-bold text-[1.2rem] md:text-[0.85rem] text-blancoPrint no-underline px-6 md:px-[1.4rem] py-3 md:py-2 rounded-full border-[3px] border-negroPrint bg-naranjaPrint uppercase tracking-[0.05em] cursor-pointer inline-flex items-center gap-2 shadow-[4px_4px_0_var(--negroPrint)] transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--negroPrint)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_var(--negroPrint)]"
					onClick={() => setOpen(false)}
				>
					Pedir ahora 🛒
					<span className="font-['AmberlySans'] font-bold text-[0.8rem] md:text-[0.65rem] px-[0.6rem] py-[0.15rem] rounded-full border-2 bg-amarilloPrint text-negroPrint border-negroPrint">
						{cartCount}
					</span>
				</a>
			</nav>
		</header>
	)
}
