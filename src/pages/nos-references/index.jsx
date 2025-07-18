import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function NosReferences() {
    return (
        <>
            <Header />
            <section className="py-12 mt-12">
                <div className="">
                    <div className="grid md:grid-cols-2 items-center gap-20">
                        <div className="space-y-4 md:pl-10 md:pr-12 md:order-1 order-2 md:px-0 px-6">
                            <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold">Obtenez des leads qualifiés grâce à</h4>
                            <h1 className="md:text-[40px] text-[28px] text-[var(--dark-blue)] font-bold">Agence Alpha</h1>
                            <p className="text-[16px] text-[var(--gray)] leading-8">
                                Spécialiste de la génération de leads, nous vous fournissons des prospects ciblés, correspondant précisément à vos besoins.
                                Pour cela, nous mettons en œuvre des stratégies de marketing digital permettant d’identifier les intentions et comportements de vos futurs clients.
                                <br /><br />
                                Grâce à notre expertise digitale, nous exploitons efficacement les canaux d’acquisition comme le SEO et les réseaux sociaux.
                                Les leads que nous générons sont exclusifs, et notre collaboration avec vous se fait en toute transparence.
                            </p>
                            <div className="flex justify-center">
                                <button className="bg-[var(--dark-blue)] hover:bg-[var(--dark-blue)]/80 uppercase transition-all duration-300 cursor-pointer rounded-3xl py-4 px-8 flex items-center text-[12px] font-semibold text-white gap-1">
                                    Découvrir nos prestations
                                    <span className="bg-white h-[12px] w-[12px] rounded-full text-[var(--dark-blue)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" height={12} width={12} viewBox="0 0 48 48" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="bg-[var(--light-blue)] md:order-2 order-1 relative rounded-l-[60px] text-white pt-2 bg-[url(data:image/svg+xml;base64,PHN2ZyAgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA3KSIgaGVpZ2h0PSIxNjBweCIgd2lkdGg9IjgwcHgiIHZpZXdCb3g9IjAgMCA4MCAxNjAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQxLjEyLDQwLDUzLDE2LjI4LDYwLjYyLDFIODBWMEg1OC44OEw0MCwzNy43NiwyMS4xMiwwSDBWMUgxOS4zOEwyNywxNi4yOCwzOC44OCw0MCwxOS4zOCw3OUgwdjJIMTkuMzhsMTkuNSwzOS0xOS41LDM5SDB2MUgyMS4xMkw0MCwxMjIuMjQsNTguODgsMTYwSDgwdi0xSDYwLjYybC0xOS41LTM5LDE5LjUtMzlIODBWNzlINjAuNjJaTTQwLDExNy43NiwyMS4xMiw4MCw0MCw0Mi4yNCw1OC44OCw4MFoiLz48L3N2Zz4=)]">
                            <img src="https://agencealpha.fr/wp-content/uploads/2022/06/agence-alpha-generation-de-leads-men-2.png" alt="" className="h-full relative z-10 md:-ml-30" />
                            <img src="https://agencealpha.fr/wp-content/uploads/2022/05/screen-3.png" alt="" className="w-[460px] z-0 absolute md:left-20 left-10 top-1/3 block mx-auto" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20">
                <div className="container mx-auto max-w-6xl md:px-8 px-6">
                    <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold text-center mb-4">Générez des leads qualifiés avec</h4>
                    <h2 className="md:text-[40px]/12 text-[28px] text-[var(--dark-blue)] font-bold text-center mb-12">Agence Alpha</h2>
                    <div className="grid md:grid-cols-6 grid-cols-3 gap-6 mb-12">
                        {/* Row 1 */}
                        <div className="flex justify-center">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-gan.jpg"
                                alt=""
                                title="logo-gan"
                                className="h-[73px] w-auto"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-seiko.png"
                                alt=""
                                title="logo-gan"
                                className="h-[73px] w-auto"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-caisse-epargne.png"
                                alt=""
                                title="logo-gan"
                                className="h-[73px] w-auto"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-ollioules.png"
                                alt=""
                                title="logo-gan"
                                className="h-[73px] w-auto"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-michael-kors.png"
                                alt=""
                                title="logo-gan"
                                className="h-[73px] w-auto"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-gallerielafayette.jpg"
                                alt=""
                                title="logo-gan"
                                className="h-[73px] w-auto"
                            />
                        </div>

                        {/* Row 2 */}
                        <div className="flex justify-center">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-endofrance.jpg"
                                alt=""
                                title="logo-gan"
                                className="h-[73px] w-auto"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/Logo-naturado.png"
                                alt=""
                                title="logo-gan"
                                className="h-[73px] w-auto"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-grand-paris.png"
                                alt=""
                                title="logo-gan"
                                className="h-[73px] w-auto"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-banque-transatlantique.jpg"
                                alt=""
                                title="logo-gan"
                                className="h-[73px] w-auto"
                            />
                        </div>
                        32
                        <div className="flex justify-center">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-optic2000.png"
                                alt=""
                                title="logo-gan"
                                className="h-[73px] w-auto"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-eurolinks.jpg"
                                alt=""
                                title="logo-gan"
                                className="h-[73px] w-auto"
                            />
                        </div>

                        {/* Row 3 */}
                        <div className="flex justify-center">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-carrefour.jpg"
                                alt=""
                                title="logo-gan"
                                className="h-[73px] w-auto"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-lacoste.jpg"
                                alt=""
                                title="logo-gan"
                                className="h-[73px] w-auto"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-edf.jpg"
                                alt=""
                                title="logo-gan"
                                className="h-[73px] w-auto"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-subway.jpg"
                                alt=""
                                title="logo-gan"
                                className="h-[73px] w-auto"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-engie.jpg"
                                alt=""
                                title="logo-gan"
                                className="h-[73px] w-auto"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-tarte-jacqueline.jpg"
                                alt=""
                                title="logo-gan"
                                className="h-[73px] w-auto"
                            />
                        </div>

                        {/* Row 4 */}
                        <div className="flex justify-center">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-pathe.jpg"
                                alt=""
                                title="logo-gan"
                                className="h-[73px] w-auto"
                            />
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/logo-leonidas.jpg"
                                alt=""
                                title="logo-gan"
                                className="h-[73px] w-auto"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-[var(--dark-blue)] hover:bg-[var(--dark-blue)]/80 uppercase transition-all duration-300 cursor-pointer rounded-3xl py-4 px-8 flex items-center text-[12px] font-semibold text-white gap-1">
                            Découvrir nos prestations
                            <span className="bg-white h-[12px] w-[12px] rounded-full text-[var(--dark-blue)]">
                                <svg xmlns="http://www.w3.org/2000/svg" height={12} width={12} viewBox="0 0 48 48" fill="currentColor" class="size-6">
                                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
