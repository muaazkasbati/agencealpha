import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function NosTarifs() {
    return (
        <>
            <Header />
            <section className="pt-16 mt-12">
                <div className="">
                    <div className="grid md:grid-cols-2 items-center gap-20">
                        <div className="bg-[var(--light-blue)] relative rounded-r-[60px] text-white pt-36 bg-[url(data:image/svg+xml;base64,PHN2ZyAgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA3KSIgaGVpZ2h0PSIxNjBweCIgd2lkdGg9IjgwcHgiIHZpZXdCb3g9IjAgMCA4MCAxNjAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQxLjEyLDQwLDUzLDE2LjI4LDYwLjYyLDFIODBWMEg1OC44OEw0MCwzNy43NiwyMS4xMiwwSDBWMUgxOS4zOEwyNywxNi4yOCwzOC44OCw0MCwxOS4zOCw3OUgwdjJIMTkuMzhsMTkuNSwzOS0xOS41LDM5SDB2MUgyMS4xMkw0MCwxMjIuMjQsNTguODgsMTYwSDgwdi0xSDYwLjYybC0xOS41LTM5LDE5LjUtMzlIODBWNzlINjAuNjJaTTQwLDExNy43NiwyMS4xMiw4MCw0MCw0Mi4yNCw1OC44OCw4MFoiLz48L3N2Zz4=)]">
                            <img src="https://agencealpha.fr/wp-content/uploads/2022/06/agence-alpha-generation-de-leads-women-2.png" alt="" className="md:h-full md:w-auto w-full relative z-10 md:ml-72" />
                        </div>
                        <div className="space-y-4 md:pl-10 md:pr-12 md:px-0 px-6">
                            <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold">Nos formules tout compris pour</h4>
                            <h1 className="md:text-[40px] text-[28px] text-[var(--dark-blue)] font-bold">Booster votre croissance !</h1>
                            <p className="text-[16px] text-[var(--gray)] leading-8">
                                Avec AgenceAlpha, bénéficiez de tarifs compétitifs tout en garantissant la qualité de vos leads ! Que ce soit dans la gestion de campagnes ou en collaboration directe avec vos équipes, nous adaptons nos leviers d’acquisition et notre approche à chaque client pour vous fournir des leads ultra qualifiés à un excellent rapport qualité/prix.
                            </p>

                            <div className="flex justify-center">
                                <button className="bg-[var(--dark-blue)] hover:bg-[var(--dark-blue)]/80 uppercase transition-all duration-300 cursor-pointer rounded-3xl py-4 px-8 flex items-center text-[12px] font-semibold text-white gap-1">
                                    Demander un devis
                                    <span className="bg-white h-[12px] w-[12px] rounded-full text-[var(--dark-blue)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" height={12} width={12} viewBox="0 0 48 48" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 md:px-0 px-6 bg-[#f9f9f9]">
                <div className="container mx-auto relative z-10 text-center max-w-6xl">
                    <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold mb-6">Nos prix en toute clarté</h4>
                    <h2 className="md:text-[40px] text-[28px] text-[var(--dark-blue)] font-bold mb-12">Des Leads de qualité<br />au meilleur tarif</h2>
                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-white rounded-3xl shadow-2xl p-10 text-center space-y-4">
                            <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-bold">Achat de Leads</h4>
                            <p className="text-[16px] text-[var(--gray)] leading-8 italic">À partir de</p>
                            <h2 className="md:text-[80px]/20 text-[28px] text-[var(--light-blue)] font-bold">15€</h2>
                            <h4 className="text-[16px] text-[var(--gray)] uppercase font-semibold">par lead</h4>
                            <p className="text-[16px] text-[var(--gray)]">
                                Leads pompe à chaleur
                                <br /><br />
                                Leads isolation 1€
                                <br /><br />
                                Leads assurance
                                <br /><br />
                                Leads panneaux solaires
                                <br /><br />
                                Leads poêle à granulés
                                <br /><br />
                                Leads formations
                            </p>
                            <div className="flex justify-center">
                                <button className="bg-[var(--light-blue)] hover:bg-[var(--dark-blue)]/80 uppercase transition-all duration-300 cursor-pointer rounded-3xl py-4 px-8 flex items-center text-[12px] font-semibold text-white gap-1">
                                    Obtenir un devis
                                    <span className="bg-white h-[12px] w-[12px] rounded-full text-[var(--dark-blue)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" height={12} width={12} viewBox="0 0 48 48" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl p-10 text-center space-y-4">
                            <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-bold">Achat de leads DATA</h4>
                            <p className="text-[16px] text-[var(--gray)] leading-8 italic">À partir de</p>
                            <h2 className="md:text-[80px]/20 text-[28px] text-[var(--light-blue)] font-bold">3€</h2>
                            <h4 className="text-[16px] text-[var(--gray)] uppercase font-semibold">par lead</h4>
                            <p className="text-[16px] text-[var(--gray)]">
                                Nos leads les plus abordables
                                <br /><br />
                                Délai variable : entre 3 semaines et 2 mois
                                <br /><br />
                                Uniquement des leads qualifiés
                                <br /><br />
                                Contacts ayant montré un intérêt récent pour votre service
                            </p>
                            <div className="flex justify-center">
                                <button className="bg-[var(--light-blue)] hover:bg-[var(--dark-blue)]/80 uppercase transition-all duration-300 cursor-pointer rounded-3xl py-4 px-8 flex items-center text-[12px] font-semibold text-white gap-1">
                                    Obtenir un devis
                                    <span className="bg-white h-[12px] w-[12px] rounded-full text-[var(--dark-blue)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" height={12} width={12} viewBox="0 0 48 48" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-2xl p-10 text-center space-y-4">
                            <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-bold">Gestion de campagnes</h4>
                            <p className="text-[16px] text-[var(--gray)] leading-8 italic">À partir de</p>
                            <h2 className="md:text-[80px]/20 text-[28px] text-[var(--light-blue)] font-bold">1590€</h2>
                            <h4 className="text-[16px] text-[var(--gray)] uppercase font-semibold">par mois</h4>
                            <p className="text-[16px] text-[var(--gray)]">
                                Choisissez votre canal d’acquisition
                                <br /><br />
                                Création de visuels et contenus sur mesure
                                <br /><br />
                                Suivi et gestion complète de vos campagnes
                                <br /><br />
                                Optimisation des coûts et conversion clients assurée
                            </p>
                            <div className="flex justify-center">
                                <button className="bg-[var(--light-blue)] hover:bg-[var(--dark-blue)]/80 uppercase transition-all duration-300 cursor-pointer rounded-3xl py-4 px-8 flex items-center text-[12px] font-semibold text-white gap-1">
                                    Obtenir un devis
                                    <span className="bg-white h-[12px] w-[12px] rounded-full text-[var(--dark-blue)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" height={12} width={12} viewBox="0 0 48 48" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}
