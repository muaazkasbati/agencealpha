import Header from '@/components/Header'
import React from 'react'

export default function NosLeads() {
    return (
        <>
            <Header />
            <section className="py-16 mt-12">
                <div className="">
                    <div className="grid md:grid-cols-2 items-center gap-20">
                        <div className="space-y-4 md:pl-10 md:pr-12 md:order-1 order-2 md:px-0 px-6">
                            <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold">Nos services</h4>
                            <h1 className="md:text-[40px] text-[28px] text-[var(--dark-blue)] font-bold">Développez votre business de façon exponentielle</h1>
                            <p className="text-[16px] text-[var(--gray)] leading-8">
                                Vous perdez beaucoup de temps avec le démarchage commercial sans obtenir de très bon résultats ?
                                <br /><br />
                                Il est de temps de passer à vitesse supérieure !
                                <br /><br />
                                L’achat de leads qualifiés vous permettra d’alimenter votre force de vente de façon optimisée et sans aucun effort. Nos experts sont en charge de votre prospection commerciale et livrent à vos commerciaux des leads qualifiés répondant à vos critères.
                            </p>
                            <ul className="text-[16px] text-[var(--gray)] leading-8 list-disc pl-5">
                                <li>Gain de temps</li>
                                <li>Volume de leads important</li>
                                <li>Leads 100% qualifiés</li>
                                <li>Augmentation de votre CA</li>
                            </ul>
                        </div>
                        <div className="bg-[var(--dark-blue)] bg-center md:order-2 order-1 relative rounded-l-[60px] bg-[url('http://agencealpha.fr/wp-content/uploads/2022/06/agence-alpha-generation-de-leads-women-5.jpg')] h-[630px]">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
