export default function Footer() {
    return (
        <footer className="bg-[var(--normal-blue)] text-white py-20 bg-[url(data:image/svg+xml;base64,PHN2ZyAgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA3KSIgaGVpZ2h0PSIxNjBweCIgd2lkdGg9IjgwcHgiIHZpZXdCb3g9IjAgMCA4MCAxNjAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQxLjEyLDQwLDUzLDE2LjI4LDYwLjYyLDFIODBWMEg1OC44OEw0MCwzNy43NiwyMS4xMiwwSDBWMUgxOS4zOEwyNywxNi4yOCwzOC44OCw0MCwxOS4zOCw3OUgwdjJIMTkuMzhsMTkuNSwzOS0xOS41LDM5SDB2MUgyMS4xMkw0MCwxMjIuMjQsNTguODgsMTYwSDgwdi0xSDYwLjYybC0xOS41LTM5LDE5LjUtMzlIODBWNzlINjAuNjJaTTQwLDExNy43NiwyMS4xMiw4MCw0MCw0Mi4yNCw1OC44OCw4MFoiLz48L3N2Zz4=)]">
            <div className="container mx-auto text-center max-w-2xl md:px-8 px-6">
                <div className="grid md:grid-cols-2 gap-2 mb-12">
                    <div className="md:text-start">
                        <p className="text-[18px] font-semibold mb-4">SUIVEZ-NOUS</p>
                        <div className="flex justify-center space-x-4 mb-4">
                            <a href="#" className="hover:text-gray-300"><span className="sr-only">Facebook</span>🇫</a>
                            <a href="#" className="hover:text-gray-300"><span className="sr-only">X</span>🇽</a>
                            <a href="#" className="hover:text-gray-300"><span className="sr-only">LinkedIn</span>🇮🇳</a>
                        </div>
                        <p className="mb-0 text-[16px]">41 BD Dubouchage 06000 Nice</p>
                        <p className="mb-4 text-[16px] font-bold">contact@agencealpha.fr</p>
                        <p className="mb-2 text-[16px]">04 93 13 17 56 <br />07 56 86 86 86</p>
                    </div>
                    <div className="space-y-2 md:text-start">
                        <a href="#" className="block text-[13px] font-medium uppercase hover:text-gray-300">Accueil</a>
                        <a href="#" className="block text-[13px] font-medium uppercase hover:text-gray-300">Notre Agence</a>
                        <a href="#" className="block text-[13px] font-medium uppercase hover:text-gray-300">Nos Références</a>
                        <a href="#" className="block text-[13px] font-medium uppercase hover:text-gray-300">Nos Prestations</a>
                        <a href="#" className="block text-[13px] font-medium uppercase hover:text-gray-300">Nos Tarifs</a>
                        <a href="#" className="block text-[13px] font-medium uppercase hover:text-gray-300">Contact</a>
                        <a href="#" className="block text-[13px] font-medium uppercase hover:text-gray-300">Blog</a>
                        {/* <a href="#" className="block text-[13px] font-medium uppercase hover:text-gray-300">Instagram</a> */}
                        <a href="#" className="block text-[13px] font-medium uppercase hover:text-gray-300">Expert LinkedIn</a>
                        <a href="#" className="block text-[13px] font-medium uppercase hover:text-gray-300">Expert Instagram</a>
                        <a href="#" className="block text-[13px] font-medium uppercase hover:text-gray-300">Agence de Marketing à Marseille</a>
                        <a href="#" className="block text-[13px] font-medium uppercase hover:text-gray-300">Agence de Communication 360</a>
                    </div>
                </div>
                <p className="mt-4 text-[12px]/8 font-normal">
                    AgenceAlpha © Copyright 2013 / 2022 - Tous droits réservés <br />
                    <a href="#" className="hover:text-gray-300">Mentions Légales</a>
                </p>
            </div>
        </footer>
    );
}