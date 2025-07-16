// import { useState, useEffect } from 'react';

// export default function Header() {
//     const [isFixed, setIsFixed] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 50) {
//                 setIsFixed(true);
//             } else {
//                 setIsFixed(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <header className={`fixed top-0 w-full z-20 ${isFixed ? 'py-3 bg-white/60 backdrop-blur-lg' : 'py-5 bg-white'} shadow-sm shadow-black/5 transition-all duration-300`}>
//             <nav className="container mx-auto flex justify-between items-center max-w-8xl px-10">
//                 <div >
//                     <img src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-agence-alpha.png" alt="" className={`${isFixed ? "w-[220px]" : "w-[320px]"} transition-all duration-300`} />
//                 </div>
//                 <div className="flex gap-8 items-center justify-end">
//                     <ul className="flex space-x-3">
//                         <li><a href="/" className="text-[#2EA3F2] hover:text-[#2EA3F2] text-[14px] font-semibold">Accueil</a></li>
//                         <li><a href="#" className="text-black/60 hover:text-[#2EA3F2] text-[14px] font-semibold">Notre Agence</a></li>
//                         <li><a href="#" className="text-black/60 hover:text-[#2EA3F2] text-[14px] font-semibold">Nos Références</a></li>
//                         <li><a href="#" className="text-black/60 hover:text-[#2EA3F2] text-[14px] font-semibold">Nos Leads</a></li>
//                         <li><a href="#" className="text-black/60 hover:text-[#2EA3F2] text-[14px] font-semibold">Nos Tarifs</a></li>
//                         <li><a href="#" className="text-black/60 hover:text-[#2EA3F2] text-[14px] font-semibold">Contact</a></li>
//                         <li><a href="#" className="text-black/60 hover:text-[#2EA3F2] text-[14px] font-semibold">Blog</a></li>
//                         <li><a href="tel:0756868686" className="bg-[#0088cc] text-[13px] font-semibold text-white uppercase rounded-[12px] py-1 px-2">07 56 86 86 86</a></li>
//                         <li><a href="tel:0493131756" className="bg-[var(--light-blue)] text-[13px] font-semibold text-white uppercase rounded-[12px] py-1 px-2">04 93 13 17 56</a></li>
//                     </ul>
//                 </div>
//             </nav>
//         </header>
//     );
// }

import { useState, useEffect } from 'react';

export default function Header() {
    const [isFixed, setIsFixed] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-20 ${isFixed ? 'py-3 bg-white/60 backdrop-blur-lg' : 'py-5 bg-white'} shadow-sm shadow-black/5 transition-all duration-300`}>
            <nav className="container mx-auto flex justify-between items-center max-w-8xl px-4 md:px-10">
                <a href='/'>
                    <img src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-agence-alpha.png" alt="Logo"
                        className={`${isFixed ? "w-[220px]" : "w-[320px]"} transition-all duration-300`} />
                </a>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex space-x-3 items-center">
                    <li><a href="/" className="text-[#2EA3F2] hover:text-[#2EA3F2] text-[14px] font-semibold">Accueil</a></li>
                    <li><a href="/notre-agence" className="text-black/60 hover:text-[#2EA3F2] text-[14px] font-semibold">Notre Agence</a></li>
                    <li><a href="/nos-references" className="text-black/60 hover:text-[#2EA3F2] text-[14px] font-semibold">Nos Références</a></li>
                    <li><a href="/nos-leads" className="text-black/60 hover:text-[#2EA3F2] text-[14px] font-semibold">Nos Leads</a></li>
                    <li><a href="/nos-tarifs" className="text-black/60 hover:text-[#2EA3F2] text-[14px] font-semibold">Nos Tarifs</a></li>
                    <li><a href="/contact" className="text-black/60 hover:text-[#2EA3F2] text-[14px] font-semibold">Contact</a></li>
                    <li><a href="/blog" className="text-black/60 hover:text-[#2EA3F2] text-[14px] font-semibold">Blog</a></li>
                    <li><a href="tel:0756868686" className="bg-[#0088cc] text-[13px] font-semibold text-white uppercase rounded-[12px] py-1 px-2">07 56 86 86 86</a></li>
                    <li><a href="tel:0493131756" className="bg-[var(--light-blue)] text-[13px] font-semibold text-white uppercase rounded-[12px] py-1 px-2">04 93 13 17 56</a></li>
                </ul>

                {/* Hamburger Icon */}
                <div className="lg:hidden z-30">
                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        {!menuOpen ? (
                            <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        ) : (
                            <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden fixed top-0 left-0 h-full w-full bg-white transition-transform duration-300 z-20 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="p-6">
                        <button onClick={() => setMenuOpen(false)} className="mb-6">
                            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <ul className="flex flex-col space-y-4">
                            <li><a href="/" className="text-[#2EA3F2] text-[16px] font-semibold">Accueil</a></li>
                            <li><a href="/notre-agence" className="text-black/80 text-[16px] font-semibold">Notre Agence</a></li>
                            <li><a href="/nos-references" className="text-black/80 text-[16px] font-semibold">Nos Références</a></li>
                            <li><a href="/nos-leads" className="text-black/80 text-[16px] font-semibold">Nos Leads</a></li>
                            <li><a href="/nos-tarifs" className="text-black/80 text-[16px] font-semibold">Nos Tarifs</a></li>
                            <li><a href="/contact" className="text-black/80 text-[16px] font-semibold">Contact</a></li>
                            <li><a href="/blog" className="text-black/80 text-[16px] font-semibold">Blog</a></li>
                            <li><a href="tel:0756868686" className="bg-[var(--dark-blue)] text-[14px] text-white rounded-[12px] py-2 px-4">07 56 86 86 86</a></li>
                            <li><a href="tel:0493131756" className="bg-[var(--light-blue)] text-[14px] text-white rounded-[12px] py-2 px-4">04 93 13 17 56</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
