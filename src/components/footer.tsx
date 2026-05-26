"use client"
import Image from "next/image"
import { useState, type FormEvent } from "react"
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa6"
const socialLinks = [
	{ icon: FaInstagram, href: "https://www.instagram.com/pinandprint.co", label: "Instagram" },
	{ icon: FaTiktok, href: "https://www.tiktok.com/@pinandprint", label: "TikTok" },
	{ icon: FaWhatsapp, href: "https://wa.me/3136458875", label: "WhatsApp" },
]

export default function Footer() {
	const [email, setEmail] = useState("")
	
	return (
		<footer className="bg-verdePrint border-t-[3px] border-negroPrint pt-10 pb-8 px-4 md:px-8 text-blancoPrint flex flex-col items-center justify-center">
			<div className="max-w-300 w-full mx-auto">
				{/* Desktop layout */}
				<div className="hidden md:grid grid-cols-[1fr_1fr_1fr] gap-12 items-start justify-items-center text-center">
					{/* Columna marca */}
					<div>
						<a href="#" className="flex items-center justify-center gap-3 no-underline" aria-label="Pin & Print - Inicio">
							<p className="font-['SuperKindly'] text-amarilloPrint [-webkit-text-stroke:1px_var(--negroPrint)] text-[1.6rem] tracking-[1px] leading-none">
								Pin<span className="text-blancoPrint hover:text-naranjaPrint">&amp;</span>Print
							</p>
						</a>

						<p className="font-['AmberlySans'] text-[0.9rem] opacity-85 leading-[1.6] mb-6 mt-2">
							Camisas únicas hechas a tu mood. Diseño, calidad y personalización en un solo lugar.
						</p>

						<div className="flex gap-3 justify-center">
							{socialLinks.map(({ icon, href, label }) => (
								<a
									key={label}
									href={href}
									aria-label={label}
									className="w-10 h-10 border-2 border-white/40 rounded-full flex items-center justify-center text-[1rem] text-blancoPrint no-underline transition-[background,border-color,color] duration-200 hover:bg-amarilloPrint  hover:border-naranjaPrint hover:text-negroPrint"
								>
									{icon({ size: 18 })}
								</a>
							))}
						</div>
					</div>

					{/* Columna enlaces */}
					<div>
						<h4 className="font-['AmberlySans'] font-bold text-[0.8rem] uppercase tracking-[0.12em] text-amarilloPrint mb-4">
							Catálogo
						</h4>
						<ul className="list-none">
							{["Anime", "Gamers", "Series y peliculas", "Bandas"].map(item => (
								<li key={item} className="mb-2">
									<a href="#catalogo" className="text-white/70 no-underline font-['AmberlySans'] text-[0.88rem] transition-colors duration-200 hover:text-amarilloPrint">
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					 {/* Mascota */}
					<div className="flex justify-center items-center animate-mascotFloat">
						<Image src="/pinardo.svg" alt="Pinardo, mascota de Pin & Print" width={100} height={100} />
					</div>
				</div>

				{/* Mobile layout */}
				<div className="md:hidden flex flex-col items-center text-center gap-6">
					{/* Marca */}
					<a href="#" className="flex items-center justify-center gap-3 no-underline" aria-label="Pin & Print - Inicio">
						<p className="font-['SuperKindly'] text-amarilloPrint [-webkit-text-stroke:1px_var(--negroPrint)] text-[1.6rem] tracking-[1px] leading-none">
							Pin<span className="text-blancoPrint hover:text-naranjaPrint">&amp;</span>Print
						</p>
					</a>

					{/* Descripción */}
					<p className="font-['AmberlySans'] text-[0.9rem] opacity-85 leading-[1.6]">
						Camisas únicas hechas a tu mood. Diseño, calidad y personalización en un solo lugar.
					</p>

					{/* Redes */}
					<div className="flex gap-3 justify-center">
						{socialLinks.map(({ icon, href, label }) => (
							<a
								key={label}
								href={href}
								aria-label={label}
								className="w-10 h-10 border-2 border-white/40 rounded-full flex items-center justify-center text-[1rem] text-blancoPrint no-underline transition-[background,border-color,color] duration-200 hover:bg-amarilloPrint  hover:border-naranjaPrint hover:text-negroPrint"
							>
								{icon({ size: 18 })}
							</a>
						))}
					</div>

					{/* Enlace catálogo */}
					<div>
						<h4 className="font-['AmberlySans'] font-bold text-[0.8rem] uppercase tracking-[0.12em] text-amarilloPrint mb-4">
							Catálogo
						</h4>
						<ul className="list-none">
							{["Anime", "Gamers", "Series y peliculas", "Bandas"].map(item => (
								<li key={item} className="mb-2">
									<a href="#catalogo" className="text-white/70 no-underline font-['AmberlySans'] text-[0.88rem] transition-colors duration-200 hover:text-amarilloPrint">
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Mascota */}
					<div className="flex justify-center items-center animate-mascotFloat">
						<Image src="/pinardo.svg" alt="Pinardo, mascota de Pin & Print" width={80} height={80} />
					</div>
				</div>
			</div>
			{/* Footer bottom */}
			<div className="w-full mt-8 pt-6 border-t border-white/20 flex flex-col items-center justify-center gap-2 text-center">
				<p className="font-['AmberlySans'] text-[0.8rem] text-white/60">
					© {new Date().getFullYear()} Pin & Print — Todos los derechos reservados.
				</p>
				<p className="font-['AmberlySans'] text-[0.8rem] text-white/60">
					Hecho con 💜 en Medellín Colombia.
				</p>
			</div>
		</footer>
	)
}
