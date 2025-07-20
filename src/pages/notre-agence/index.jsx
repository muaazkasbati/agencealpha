import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function NotreAgence() {
    return (
        <>
            <Header />
            <section className="py-16 mt-12">
                <div className="">
                    <div className="grid md:grid-cols-2 items-center gap-20">
                        <div className="space-y-4 md:pl-10 md:pr-12 md:order-1 order-2 md:px-0 px-6">
                            <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold">Notre agence</h4>
                            <h1 className="md:text-[40px] text-[28px] text-[var(--dark-blue)] font-bold">Engagée pour votre succès</h1>
                            <p className="text-[16px] text-[var(--gray)] leading-8">
                                <b>Forte de plus de 20 ans d’expertise en génération de leads</b>, notre agence accompagne des entreprises de toutes tailles dans la mise en place de stratégies d’acquisition performantes et durables.
                                <br /><br />
                                Ensemble, nous allons <b>concevoir et perfectionner votre dispositif d’acquisition</b> afin de propulser votre activité vers de nouveaux sommets !
                            </p>

                            <div className="flex justify-center">
                                <button className="bg-[var(--orange)] hover:bg-[var(--orange)]/80 uppercase transition-all duration-300 cursor-pointer rounded-3xl py-4 px-8 flex items-center text-[12px] font-semibold text-white gap-1">
                                    Demander un devis
                                    <span className="bg-white h-[12px] w-[12px] rounded-full text-[var(--orange)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" height={12} width={12} viewBox="0 0 48 48" fill="currentColor" class="size-6">
                                            <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="bg-[var(--dark-blue)] md:order-2 order-1 relative rounded-l-[60px] bg-[url('https://agencealpha.fr/wp-content/uploads/2022/05/agence-alpha-generation-de-leads-team.jpg')] md:h-[630px] h-[480px]">

                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 md:px-0 px-6 bg-[#f9f9f9]">
                <div className="container mx-auto relative z-10 text-center max-w-6xl">
                    <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold mb-6">L’équipe</h4>
                    <h2 className="md:text-[40px] text-[28px] text-[var(--dark-blue)] font-bold mb-12">Découvrez nos experts</h2>
                    <div className="grid md:grid-cols-5 grid-cols-2 gap-10">
                        {/* Row 1 */}
                        <div className="text-start">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/agencealpha-generation-leads__portrait-19.jpg"
                                alt=""
                                className="rounded-full w-[150px] h-[150px] border-8 border-white shadow-2xl mb-6"
                            />
                            <p className="text-[16px] text-[var(--gray)]">
                                <strong>Kevin</strong>
                                <br />
                                <em>CEO</em>
                            </p>
                        </div>
                        <div className="text-start">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/agencealpha-generation-leads__portrait-15.jpg"
                                alt=""
                                className="rounded-full w-[150px] h-[150px] border-8 border-white shadow-2xl mb-6"
                            />
                            <p className="text-[16px] text-[var(--gray)]">
                                <strong>Catherine</strong>
                                <br />
                                <em>Directeur Marketing International</em>
                            </p>
                        </div>
                        <div className="text-start">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/agencealpha-generation-leads__portrait-9.jpg"
                                alt=""
                                className="rounded-full w-[150px] h-[150px] border-8 border-white shadow-2xl mb-6"
                            />
                            <p className="text-[16px] text-[var(--gray)]">
                                <strong>Audrey</strong>
                                <br />
                                <em>Directrice commercial</em>
                            </p>
                        </div>
                        <div className="text-start">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/agencealpha-generation-leads__portrait-17.jpg"
                                alt=""
                                className="rounded-full w-[150px] h-[150px] border-8 border-white shadow-2xl mb-6"
                            />
                            <p className="text-[16px] text-[var(--gray)]">
                                <strong>Quentin</strong>
                                <br />
                                <em>Chef de projet</em>
                            </p>
                        </div>
                        <div className="text-start">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/agencealpha-generation-leads__portrait-14.jpg"
                                alt=""
                                className="rounded-full w-[150px] h-[150px] border-8 border-white shadow-2xl mb-6"
                            />
                            <p className="text-[16px] text-[var(--gray)]">
                                <strong>Isabelle</strong>
                                <br />
                                <em>Chef de projet</em>
                            </p>
                        </div>

                        {/* Row 2 */}
                        <div className="text-start">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/agencealpha-generation-leads__portrait-8.jpg"
                                alt=""
                                className="rounded-full w-[150px] h-[150px] border-8 border-white shadow-2xl mb-6"
                            />
                            <p className="text-[16px] text-[var(--gray)]">
                                <strong>Joshua</strong>
                                <br />
                                <em>Chef de Projet</em>
                            </p>
                        </div>
                        <div className="text-start">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/agencealpha-generation-leads__portrait-13.jpg"
                                alt=""
                                className="rounded-full w-[150px] h-[150px] border-8 border-white shadow-2xl mb-6"
                            />
                            <p className="text-[16px] text-[var(--gray)]">
                                <strong>Nathalie</strong>
                                <br />
                                <em>Spécialiste SEA & Display</em>
                            </p>
                        </div>
                        <div className="text-start">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/agencealpha-generation-leads__portrait-10.jpg"
                                alt=""
                                className="rounded-full w-[150px] h-[150px] border-8 border-white shadow-2xl mb-6"
                            />
                            <p className="text-[16px] text-[var(--gray)]">
                                <strong>Frank</strong>
                                <br />
                                <em>Spécialiste SEA & Display</em>
                            </p>
                        </div>
                        <div className="text-start">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/agencealpha-generation-leads__portrait-7.jpg"
                                alt=""
                                className="rounded-full w-[150px] h-[150px] border-8 border-white shadow-2xl mb-6"
                            />
                            <p className="text-[16px] text-[var(--gray)]">
                                <strong>Pierre</strong>
                                <br />
                                <em>Spécialiste SEA & Display</em>
                            </p>
                        </div>
                        <div className="text-start">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/agencealpha-generation-leads__portrait-11.jpg"
                                alt=""
                                className="rounded-full w-[150px] h-[150px] border-8 border-white shadow-2xl mb-6"
                            />
                            <p className="text-[16px] text-[var(--gray)]">
                                <strong>Maeva</strong>
                                <br />
                                <em>Spécialiste Email & RTB</em>
                            </p>
                        </div>

                        {/* Row 3 */}
                        <div className="text-start">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/agencealpha-generation-leads__portrait-5.jpg"
                                alt=""
                                className="rounded-full w-[150px] h-[150px] border-8 border-white shadow-2xl mb-6"
                            />
                            <p className="text-[16px] text-[var(--gray)]">
                                <strong>Alexandre</strong>
                                <br />
                                <em>Spécialiste Email & RTB</em>
                            </p>
                        </div>
                        <div className="text-start">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/agencealpha-generation-leads__portrait-16.jpg"
                                alt=""
                                className="rounded-full w-[150px] h-[150px] border-8 border-white shadow-2xl mb-6"
                            />
                            <p className="text-[16px] text-[var(--gray)]">
                                <strong>Gérard</strong>
                                <br />
                                <em>Spécialiste Email & RTB</em>
                            </p>
                        </div>
                        <div className="text-start">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/agencealpha-generation-leads__portrait-1.jpg"
                                alt=""
                                className="rounded-full w-[150px] h-[150px] border-8 border-white shadow-2xl mb-6"
                            />
                            <p className="text-[16px] text-[var(--gray)]">
                                <strong>Jade</strong>
                                <br />
                                <em>Expert Lead Génération</em>
                            </p>
                        </div>
                        <div className="text-start">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/agencealpha-generation-leads__portrait-18.jpg"
                                alt=""
                                className="rounded-full w-[150px] h-[150px] border-8 border-white shadow-2xl mb-6"
                            />
                            <p className="text-[16px] text-[var(--gray)]">
                                <strong>Arnaud</strong>
                                <br />
                                <em>Expert Lead Génération</em>
                            </p>
                        </div>
                        <div className="text-start">
                            <img
                                src="https://agencealpha.fr/wp-content/uploads/2022/05/agencealpha-generation-leads__portrait-12.jpg"
                                alt=""
                                className="rounded-full w-[150px] h-[150px] border-8 border-white shadow-2xl mb-6"
                            />
                            <p className="text-[16px] text-[var(--gray)]">
                                <strong>Antoine</strong>
                                <br />
                                <em>Rédacteur Web</em>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="container mx-auto max-w-6xl md:px-10 px-6">
                    <div className="grid md:grid-cols-2 items-center gap-10">
                        <div className="bg-[var(--darkest-blue)] relative rounded-[60px] text-white pt-24 bg-[url(data:image/svg+xml;base64,PHN2ZyAgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA3KSIgaGVpZ2h0PSIxNjBweCIgd2lkdGg9IjgwcHgiIHZpZXdCb3g9IjAgMCA4MCAxNjAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQxLjEyLDQwLDUzLDE2LjI4LDYwLjYyLDFIODBWMEg1OC44OEw0MCwzNy43NiwyMS4xMiwwSDBWMUgxOS4zOEwyNywxNi4yOCwzOC44OCw0MCwxOS4zOCw3OUgwdjJIMTkuMzhsMTkuNSwzOS0xOS41LDM5SDB2MUgyMS4xMkw0MCwxMjIuMjQsNTguODgsMTYwSDgwdi0xSDYwLjYybC0xOS41LTM5LDE5LjUtMzlIODBWNzlINjAuNjJaTTQwLDExNy43NiwyMS4xMiw4MCw0MCw0Mi4yNCw1OC44OCw4MFoiLz48L3N2Zz4=)]">
                            <img src="https://agencealpha.fr/wp-content/uploads/2022/06/agence-alpha-generation-de-leads-men-2.png" alt="" className=" relative z-10 md:ml-18" />
                        </div>
                        <div className="space-y-4 md:pl-10 md:pr-8">
                            <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold">Objectif</h4>
                            <h2 className="md:text-[40px]/12 text-[28px] text-[var(--dark-blue)] font-bold">Un dispositif personnalisé</h2>
                            <p className="text-[16px] text-[var(--gray)] leading-8">
                                Grâce à une expertise 360° reconnue, notre agence est parfaitement positionnée pour répondre à vos objectifs. Boostez votre ROI dès aujourd’hui avec des campagnes 100% axées sur la performance, orchestrées par nos spécialistes.
                                <br /><br />
                                Quelle que soit la taille de votre entreprise ou votre secteur d’activité, nos équipes s’adaptent à vos besoins et à votre budget.
                                <br /><br />
                                Nous plaçons la performance de vos campagnes et votre satisfaction au cœur de nos priorités. Nous agissons comme un partenaire de confiance, engagé à vos côtés, peu importe votre localisation.
                                <br /><br />
                                Offrez un nouvel élan à votre business dès maintenant.
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
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
