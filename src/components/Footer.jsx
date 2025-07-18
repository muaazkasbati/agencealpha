export default function Footer() {
    return (
        <footer className="bg-[var(--normal-blue)] text-white py-20 bg-[url(data:image/svg+xml;base64,PHN2ZyAgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA3KSIgaGVpZ2h0PSIxNjBweCIgd2lkdGg9IjgwcHgiIHZpZXdCb3g9IjAgMCA4MCAxNjAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQxLjEyLDQwLDUzLDE2LjI4LDYwLjYyLDFIODBWMEg1OC44OEw0MCwzNy43NiwyMS4xMiwwSDBWMUgxOS4zOEwyNywxNi4yOCwzOC44OCw0MCwxOS4zOCw3OUgwdjJIMTkuMzhsMTkuNSwzOS0xOS41LDM5SDB2MUgyMS4xMkw0MCwxMjIuMjQsNTguODgsMTYwSDgwdi0xSDYwLjYybC0xOS41LTM5LDE5LjUtMzlIODBWNzlINjAuNjJaTTQwLDExNy43NiwyMS4xMiw4MCw0MCw0Mi4yNCw1OC44OCw4MFoiLz48L3N2Zz4=)]">
            <div className="container mx-auto text-center max-w-2xl md:px-8 px-6">
                <div className="grid md:grid-cols-2 gap-2 mb-12">
                    <div className="md:text-start">
                        <p className="text-[18px] font-semibold mb-4">SUIVEZ-NOUS</p>
                        <div className="flex space-x-4 mb-4">
                            <a href="#" className="bg-white w-[45px] h-[45px] flex items-center justify-center rounded-full text-[var(--light-blue)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                            <a href="#" className="bg-white w-[45px] h-[45px] flex items-center justify-center rounded-full text-[var(--light-blue)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                            </a>
                            <a href="#" className="bg-white w-[45px] h-[45px] flex items-center justify-center rounded-full text-[var(--light-blue)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>
                        </div>
                        <p className="mb-0 text-[16px]">41 BD Dubouchage 06000 Nice</p>
                        <p className="mb-4 text-[16px] font-bold">contact@lotuscale.com</p>
                        <p className="mb-2 text-[16px]">04 93 13 17 56 <br />07 56 86 86 86</p>
                    </div>
                    <div className="space-y-2 md:text-start">
                        <a href="/" className="block text-[13px] font-medium uppercase hover:text-gray-300">Accueil</a>
                        <a href="/notre-agence" className="block text-[13px] font-medium uppercase hover:text-gray-300">Notre Agence</a>
                        <a href="/nos-references" className="block text-[13px] font-medium uppercase hover:text-gray-300">Nos Références</a>
                        <a href="/nos-leads" className="block text-[13px] font-medium uppercase hover:text-gray-300">Nos Prestations</a>
                        <a href="/nos-tarifs" className="block text-[13px] font-medium uppercase hover:text-gray-300">Nos Tarifs</a>
                        <a href="/contact" className="block text-[13px] font-medium uppercase hover:text-gray-300">Contact</a>
                        {/* <a href="#" className="block text-[13px] font-medium uppercase hover:text-gray-300">Blog</a> */}
                        {/* <a href="#" className="block text-[13px] font-medium uppercase hover:text-gray-300">Instagram</a> */}
                        <a href="/expert-linkedin" className="block text-[13px] font-medium uppercase hover:text-gray-300">Expert LinkedIn</a>
                        <a href="/expert-instagram" className="block text-[13px] font-medium uppercase hover:text-gray-300">Expert Instagram</a>
                        <a href="/agence-de-marketing-a-marseille" className="block text-[13px] font-medium uppercase hover:text-gray-300">Agence de Marketing à Marseille</a>
                        <a href="/agence-de-communication-360-2" className="block text-[13px] font-medium uppercase hover:text-gray-300">Agence de Communication 360</a>
                    </div>
                </div>
                <p className="mt-4 text-[12px]/8 font-normal">
                    Lotuscale © Copyright 2013 / 2022 - Tous droits réservés <br />
                    <a href="/mentions-legales" className="hover:text-gray-300">Mentions Légales</a>
                </p>
            </div>
        </footer>
    );
}