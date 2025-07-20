import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function Contact() {
    return (
        <>
            <Header />
            <section className="py-16 mt-12">
                <div className="">
                    <div className="grid md:grid-cols-2 items-center gap-20">
                        <div className="bg-[var(--light-blue)] relative rounded-r-[60px] text-white pt-12 bg-[url(data:image/svg+xml;base64,PHN2ZyAgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA3KSIgaGVpZ2h0PSIxNjBweCIgd2lkdGg9IjgwcHgiIHZpZXdCb3g9IjAgMCA4MCAxNjAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQxLjEyLDQwLDUzLDE2LjI4LDYwLjYyLDFIODBWMEg1OC44OEw0MCwzNy43NiwyMS4xMiwwSDBWMUgxOS4zOEwyNywxNi4yOCwzOC44OCw0MCwxOS4zOCw3OUgwdjJIMTkuMzhsMTkuNSwzOS0xOS41LDM5SDB2MUgyMS4xMkw0MCwxMjIuMjQsNTguODgsMTYwSDgwdi0xSDYwLjYybC0xOS41LTM5LDE5LjUtMzlIODBWNzlINjAuNjJaTTQwLDExNy43NiwyMS4xMiw4MCw0MCw0Mi4yNCw1OC44OCw4MFoiLz48L3N2Zz4=)]">
                            <img src="https://agencealpha.fr/wp-content/uploads/2022/06/agence-alpha-generation-de-leads-men-1.png" alt="" className="md:h-full md:w-auto w-full relative z-10 md:ml-10" />
                        </div>
                        <div className="space-y-4 md:pl-8 md:pr-12 md:px-0 px-6">
                            <h1 className="md:text-[40px] text-[28px] text-[var(--dark-blue)] font-bold text-center">Contactez-nous</h1>
                            <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold text-center">Nos équipes d’experts sont là pour répondre à vos questions !</h4>
                            <div className="w-36 h-1.5 block mx-auto bg-[var(--orange)]"></div>
                            <form className="py-8 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input type="text" placeholder="Nom" className="bg-gray-100 p-4 w-full outline-none" />
                                    <input type="text" placeholder="Prénom" className="bg-gray-100 p-4 w-full outline-none" />

                                    <input type="tel" placeholder="Téléphone" className="bg-gray-100 p-4 w-full outline-none" />
                                    <input type="email" placeholder="Adresse e-mail" className="bg-gray-100 p-4 w-full outline-none" />

                                    <input type="text" placeholder="Votre site internet" className="bg-gray-100 p-4 w-full outline-none" />
                                    <select className="bg-gray-100 p-4 w-full outline-none">
                                        <option value="">Vos besoins en leads</option>
                                        <option value="seo">SEO</option>
                                        <option value="ads">Google Ads</option>
                                        <option value="social">Social Media</option>
                                    </select>
                                </div>

                                <textarea
                                    rows={5}
                                    placeholder="Message"
                                    className="bg-gray-100 p-4 w-full outline-none resize-none"
                                ></textarea>

                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-700 text-sm">5 + 14 =</span>
                                        <input
                                            type="text"
                                            className="bg-gray-100 w-16 p-2 text-center outline-none"
                                            placeholder=""
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-[var(--dark-blue)] text-white text-sm font-semibold uppercase rounded-full px-6 py-3 cursor-pointer"
                                    >
                                        ENVOI
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
