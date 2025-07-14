import { useState, useEffect } from 'react';

export default function Header() {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full ${isFixed ? 'py-3 bg-white/60' : 'py-5 bg-white'} shadow-sm shadow-black/5 transition-all duration-300`}>
            <nav className="container mx-auto flex justify-between items-center max-w-8xl px-10">
                <div >
                    <img src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-agence-alpha.png" alt="" className={`${isFixed ? "w-[220px]" : "w-[320px]"} transition-all duration-300`} />
                </div>
                <div className="flex gap-8 items-center justify-end">
                    <ul className="flex space-x-3">
                        <li><a href="/" className="text-[#2EA3F2] hover:text-[#2EA3F2] text-[14px] font-semibold">Accueil</a></li>
                        <li><a href="#" className="text-black/60 hover:text-[#2EA3F2] text-[14px] font-semibold">Notre Agence</a></li>
                        <li><a href="#" className="text-black/60 hover:text-[#2EA3F2] text-[14px] font-semibold">Nos Références</a></li>
                        <li><a href="#" className="text-black/60 hover:text-[#2EA3F2] text-[14px] font-semibold">Nos Leads</a></li>
                        <li><a href="#" className="text-black/60 hover:text-[#2EA3F2] text-[14px] font-semibold">Nos Tarifs</a></li>
                        <li><a href="#" className="text-black/60 hover:text-[#2EA3F2] text-[14px] font-semibold">Contact</a></li>
                        <li><a href="#" className="text-black/60 hover:text-[#2EA3F2] text-[14px] font-semibold">Blog</a></li>
                        <li><a href="tel:0756868686" className="bg-[#0088cc] text-[13px] font-semibold text-white uppercase rounded-[12px] py-1 px-2">07 56 86 86 86</a></li>
                        <li><a href="tel:0493131756" className="bg-[#00cef7] text-[13px] font-semibold text-white uppercase rounded-[12px] py-1 px-2">04 93 13 17 56</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}