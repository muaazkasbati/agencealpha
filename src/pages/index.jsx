import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function Home() {
  return (
    <>
      <Header />
      <section className="py-16 mt-12">
        <div className="">
          <div className="grid md:grid-cols-2 items-center gap-20">
            <div className="space-y-4 md:pl-10 md:pr-12 md:order-1 order-2 md:px-0 px-6">
              <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold">Agence génération leads qualifiés</h4>
              <h1 className="md:text-[40px] text-[28px] text-[var(--dark-blue)] font-bold">Développer votre business n’a jamais été aussi facile</h1>
              <p className="text-[16px] text-[var(--gray)] leading-8">Experts en <b>génération de leads</b>, nous vous apportons des prospects <b>qualifiés</b> et répondant à vos critères de qualification. Nous activons pour cela un ensemble de leviers de marketing digital qui nous permettront d’identifier les intentions et les recherches de vos futurs clients.</p>
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
            <div className="bg-[var(--dark-blue)] md:order-2 order-1 relative rounded-l-[60px] text-white pt-24 bg-[url(data:image/svg+xml;base64,PHN2ZyAgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA3KSIgaGVpZ2h0PSIxNjBweCIgd2lkdGg9IjgwcHgiIHZpZXdCb3g9IjAgMCA4MCAxNjAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQxLjEyLDQwLDUzLDE2LjI4LDYwLjYyLDFIODBWMEg1OC44OEw0MCwzNy43NiwyMS4xMiwwSDBWMUgxOS4zOEwyNywxNi4yOCwzOC44OCw0MCwxOS4zOCw3OUgwdjJIMTkuMzhsMTkuNSwzOS0xOS41LDM5SDB2MUgyMS4xMkw0MCwxMjIuMjQsNTguODgsMTYwSDgwdi0xSDYwLjYybC0xOS41LTM5LDE5LjUtMzlIODBWNzlINjAuNjJaTTQwLDExNy43NiwyMS4xMiw4MCw0MCw0Mi4yNCw1OC44OCw4MFoiLz48L3N2Zz4=)]">
              <img src="https://agencealpha.fr/wp-content/uploads/2022/06/agence-alpha-generation-de-leads-men-1.png" alt="" className="h-full relative z-10 md:-ml-30" />
              <img src="https://agencealpha.fr/wp-content/uploads/2022/05/screen-5.png" alt="" className="md:w-[580px] w-[260px] z-0 absolute md:left-30 left-10 top-1/3 block mx-auto" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url(https://agencealpha.fr/wp-content/uploads/2022/03/app-19.png)] md:px-0 px-6 mb-3 shadow-xl md:bg-size-[50%] bg-size-1 bg-no-repeat bg-center relative py-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white/80">
        <div className="container mx-auto relative z-10 md:pt-20 text-center max-w-6xl">
          <div className="mx-auto block w-14 h-4 bg-[var(--light-blue)] mb-12"></div>
          <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold mb-12">Génération de leads</h4>
          <h2 className="md:text-[40px] text-[28px] text-[var(--dark-blue)] font-bold mb-2">Une expertise métier à 360°</h2>
          <p className="text-[16px] text-[var(--gray)] leading-8 mb-6">Nous générons pour vous <b>des leads qualifiés</b> sur votre secteur pour <b>faire décoller votre business</b></p>
          <div className="grid md:grid-cols-5 grid-cols-2 mb-12">
            <div className="text-center space-y-3">
              <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
              </svg>
              <h4 className="text-[18px]"><a href="#" className="text-black">Google Ads</a></h4>
            </div>
            <div className="text-center space-y-3">
              <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
              </svg>
              <h4 className="text-[18px]"><a href="#" className="text-black">Facebook Ads</a></h4>
            </div>
            <div className="text-center space-y-3">
              <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
              </svg>
              <h4 className="text-[18px]"><a href="#" className="text-black">Emailing</a></h4>
            </div>
            <div className="text-center space-y-3">
              <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
              </svg>
              <h4 className="text-[18px]"><a href="#" className="text-black">Linkedin Ads</a></h4>
            </div>
            <div className="text-center space-y-3">
              <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
              </svg>
              <h4 className="text-[18px]"><a href="#" className="text-black">SMS</a></h4>
            </div>
          </div>
          <h2 className="md:text-[40px] text-[28px] text-[var(--dark-blue)] font-bold mb-4">Et bien plus encore…</h2>
          <div className="flex justify-center">
            <button className="bg-[var(--orange)] hover:bg-[var(--orange)]/80 uppercase transition-all duration-300 cursor-pointer rounded-3xl py-4 px-8 flex items-center text-[12px] font-semibold text-white gap-1">
              nos leads
              <span className="bg-white h-[12px] w-[12px] rounded-full text-[var(--orange)]">
                <svg xmlns="http://www.w3.org/2000/svg" height={12} width={12} viewBox="0 0 48 48" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="py-20 md:px-0 px-6">
        <div className="container mx-auto relative z-10 text-center max-w-6xl">
          <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold mb-6">Nos leads</h4>
          <h2 className="md:text-[40px] text-[28px] text-[var(--dark-blue)] font-bold mb-2">Une multitude de leads pour répondre à vos attentes</h2>
          <p className="text-[16px] text-[var(--gray)] leading-8 mb-8">Plus de <b>100 000 leads déjà vendus</b> sur plus de <b>30 secteurs différents</b>.<br />
            Découvrez quelques-uns de nos domaines d'expertises</p>
          <div className="grid md:grid-cols-6 grid-cols-3 gap-12 mb-12">
            <div className="text-center space-y-3">
              <a href="">
                <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
              </a>
              <h4 className="text-[15px] text-[var(--gray)] font-bold">SMS</h4>
            </div>
            <div className="text-center space-y-3">
              <a href="">
                <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
              </a>
              <h4 className="text-[15px] text-[var(--gray)] font-bold">SMS</h4>
            </div>
            <div className="text-center space-y-3">
              <a href="">
                <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
              </a>
              <h4 className="text-[15px] text-[var(--gray)] font-bold">SMS</h4>
            </div>
            <div className="text-center space-y-3">
              <a href="">
                <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
              </a>
              <h4 className="text-[15px] text-[var(--gray)] font-bold">SMS</h4>
            </div>
            <div className="text-center space-y-3">
              <a href="">
                <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
              </a>
              <h4 className="text-[15px] text-[var(--gray)] font-bold">SMS</h4>
            </div>
            <div className="text-center space-y-3">
              <a href="">
                <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
              </a>
              <h4 className="text-[15px] text-[var(--gray)] font-bold">SMS</h4>
            </div>
            <div className="text-center space-y-3">
              <a href="">
                <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
              </a>
              <h4 className="text-[15px] text-[var(--gray)] font-bold">SMS</h4>
            </div>
            <div className="text-center space-y-3">
              <a href="">
                <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
              </a>
              <h4 className="text-[15px] text-[var(--gray)] font-bold">SMS</h4>
            </div>
            <div className="text-center space-y-3">
              <a href="">
                <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
              </a>
              <h4 className="text-[15px] text-[var(--gray)] font-bold">SMS</h4>
            </div>
            <div className="text-center space-y-3">
              <a href="">
                <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
              </a>
              <h4 className="text-[15px] text-[var(--gray)] font-bold">SMS</h4>
            </div>
            <div className="text-center space-y-3">
              <a href="">
                <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
              </a>
              <h4 className="text-[15px] text-[var(--gray)] font-bold">SMS</h4>
            </div>
            <div className="text-center space-y-3">
              <a href="">
                <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
              </a>
              <h4 className="text-[15px] text-[var(--gray)] font-bold">SMS</h4>
            </div>
            <div className="text-center space-y-3">
              <a href="">
                <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
              </a>
              <h4 className="text-[15px] text-[var(--gray)] font-bold">SMS</h4>
            </div>
            <div className="text-center space-y-3">
              <a href="">
                <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
              </a>
              <h4 className="text-[15px] text-[var(--gray)] font-bold">SMS</h4>
            </div>
            <div className="text-center space-y-3">
              <a href="">
                <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
              </a>
              <h4 className="text-[15px] text-[var(--gray)] font-bold">SMS</h4>
            </div>
            <div className="text-center space-y-3">
              <a href="">
                <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
              </a>
              <h4 className="text-[15px] text-[var(--gray)] font-bold">SMS</h4>
            </div>
            <div className="text-center space-y-3">
              <a href="">
                <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
              </a>
              <h4 className="text-[15px] text-[var(--gray)] font-bold">SMS</h4>
            </div>
            <div className="text-center space-y-3">
              <a href="">
                <svg class="w-[68px] h-[68px] text-[var(--normal-blue)] block mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
              </a>
              <h4 className="text-[15px] text-[var(--gray)] font-bold">SMS</h4>
            </div>
          </div>
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
      </section>
      <section className="py-6">
        <div className="container mx-auto max-w-6xl md:px-10 px-6">
          <div className="grid md:grid-cols-2 items-center gap-10">
            <div className="space-y-4 pr-8 md:order-1 order-2">
              <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold">Notre approche</h4>
              <h2 className="md:text-[40px]/12 text-[28px] text-[var(--dark-blue)] font-bold">Des leads de qualités pour une campagne réussie !</h2>
              <p className="text-[16px] text-[var(--gray)] leading-8">
                Pour <b>générer des leads de qualité</b>, nous identifions les <b>canaux les plus adaptés à votre secteur d’activité</b>. Nous lançons les opérations marketing de <b>génération de leads</b>, et nos experts génèrent, pour vous, <b>des leads qualitatifs et les moins chers</b> possibles pour une collaboration sur le long terme.
                <br /><br />
                Nous garantissons à nos clients <b>des leads exclusifs</b> et une totale transparence dans nos actions de communication.
              </p>
              <div className="flex justify-center">
                <button className="bg-[var(--orange)] hover:bg-[var(--orange)]/80 uppercase transition-all duration-300 cursor-pointer rounded-3xl py-4 px-8 flex items-center text-[12px] font-semibold text-white gap-1">
                  Nos leads
                  <span className="bg-white h-[12px] w-[12px] rounded-full text-[var(--orange)]">
                    <svg xmlns="http://www.w3.org/2000/svg" height={12} width={12} viewBox="0 0 48 48" fill="currentColor" class="size-6">
                      <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="bg-[var(--orange)] md:order-2 order-1 relative rounded-[60px] text-white pt-24 bg-[url(data:image/svg+xml;base64,PHN2ZyAgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA3KSIgaGVpZ2h0PSIxNjBweCIgd2lkdGg9IjgwcHgiIHZpZXdCb3g9IjAgMCA4MCAxNjAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQxLjEyLDQwLDUzLDE2LjI4LDYwLjYyLDFIODBWMEg1OC44OEw0MCwzNy43NiwyMS4xMiwwSDBWMUgxOS4zOEwyNywxNi4yOCwzOC44OCw0MCwxOS4zOCw3OUgwdjJIMTkuMzhsMTkuNSwzOS0xOS41LDM5SDB2MUgyMS4xMkw0MCwxMjIuMjQsNTguODgsMTYwSDgwdi0xSDYwLjYybC0xOS41LTM5LDE5LjUtMzlIODBWNzlINjAuNjJaTTQwLDExNy43NiwyMS4xMiw4MCw0MCw0Mi4yNCw1OC44OCw4MFoiLz48L3N2Zz4=)]">
              <img src="https://agencealpha.fr/wp-content/uploads/2022/06/agence-alpha-generation-de-leads-women-3.png" alt="" className="h-full relative z-10 md:-ml-20" />
              <img src="https://agencealpha.fr/wp-content/uploads/2022/05/screen-4.png" alt="" className="md:w-[380px] w-[200px] z-0 absolute md:left-30 left-14 top-1/3 block mx-auto" />
            </div>

          </div>
        </div>
      </section>
      <section className="py-6">
        <div className="container mx-auto max-w-6xl md:px-10 px-6">
          <div className="grid md:grid-cols-2 items-center gap-10">
            <div className="bg-[var(--light-blue)] relative rounded-[60px] text-white pt-48 bg-[url(data:image/svg+xml;base64,PHN2ZyAgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA3KSIgaGVpZ2h0PSIxNjBweCIgd2lkdGg9IjgwcHgiIHZpZXdCb3g9IjAgMCA4MCAxNjAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQxLjEyLDQwLDUzLDE2LjI4LDYwLjYyLDFIODBWMEg1OC44OEw0MCwzNy43NiwyMS4xMiwwSDBWMUgxOS4zOEwyNywxNi4yOCwzOC44OCw0MCwxOS4zOCw3OUgwdjJIMTkuMzhsMTkuNSwzOS0xOS41LDM5SDB2MUgyMS4xMkw0MCwxMjIuMjQsNTguODgsMTYwSDgwdi0xSDYwLjYybC0xOS41LTM5LDE5LjUtMzlIODBWNzlINjAuNjJaTTQwLDExNy43NiwyMS4xMiw4MCw0MCw0Mi4yNCw1OC44OCw4MFoiLz48L3N2Zz4=)]">
              <img src="https://agencealpha.fr/wp-content/uploads/2022/06/agence-alpha-generation-de-leads-women-2.png" alt="" className="md:w-[360px] w-[260px] relative z-10 md:ml-52" />
              {/* <img src="https://agencealpha.fr/wp-content/uploads/2022/05/screen-4.png" alt="" className="w-[380px] z-0 absolute left-30 top-1/3 block mx-auto" /> */}
            </div>
            <div className="space-y-4 md:pl-10 md:pr-8">
              <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold">Nos clients</h4>
              <h2 className="md:text-[40px]/12 text-[28px] text-[var(--dark-blue)] font-bold">La réussite de nos clients au cœur de nos priorités</h2>
              <p className="text-[16px] text-[var(--gray)] leading-8">Experts en <b>génération de leads</b>, nous vous apportons des prospects <b>qualifiés</b> et répondant à vos critères de qualification. Nous activons pour cela un ensemble de leviers de marketing digital qui nous permettront d’identifier les intentions et les recherches de vos futurs clients.</p>
              <div className="flex justify-center">
                <button className="bg-[var(--orange)] hover:bg-[var(--orange)]/80 uppercase transition-all duration-300 cursor-pointer rounded-3xl py-4 px-8 flex items-center text-[12px] font-semibold text-white gap-1">
                  Découvrir nos tarifs
                  <span className="bg-white h-[12px] w-[12px] rounded-full text-[var(--orange)]">
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
      <section className="py-6">
        <div className="container mx-auto max-w-6xl md:px-10 px-6">
          <div className="grid md:grid-cols-2 items-center gap-10">
            <div className="space-y-4 pr-8 md:order-1 order-2">
              <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold">Achetez des leads</h4>
              <h2 className="md:text-[40px]/12 text-[28px] text-[var(--dark-blue)] font-bold">Pourquoi et comment acheter des leads ?</h2>
              <p className="text-[16px] text-[var(--gray)] leading-8">
                Achetez des leads avec notre Agence s’adresse à toutes les entreprises souhaitant acquérir <b>des leads qualifiés sur un secteur d’activité bien précis.</b>
                <br /><br />
                <b>La qualité de nos leads</b> est certifiée et vous permet d’obtenir des contacts directement activables pour l’ensemble de vos campagnes marketing et commerciales.
                <br /><br />
                <b>Le budget,</b> un point essentiel, est également <b>adaptable</b> selon vos critères et vous permettra ainsi de trouver le <b>meilleur lead au meilleur tarif.</b>
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
            <div className="bg-[#003591] md:order-2 order-1 relative rounded-[60px] text-white pt-64 bg-[url(data:image/svg+xml;base64,PHN2ZyAgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA3KSIgaGVpZ2h0PSIxNjBweCIgd2lkdGg9IjgwcHgiIHZpZXdCb3g9IjAgMCA4MCAxNjAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQxLjEyLDQwLDUzLDE2LjI4LDYwLjYyLDFIODBWMEg1OC44OEw0MCwzNy43NiwyMS4xMiwwSDBWMUgxOS4zOEwyNywxNi4yOCwzOC44OCw0MCwxOS4zOCw3OUgwdjJIMTkuMzhsMTkuNSwzOS0xOS41LDM5SDB2MUgyMS4xMkw0MCwxMjIuMjQsNTguODgsMTYwSDgwdi0xSDYwLjYybC0xOS41LTM5LDE5LjUtMzlIODBWNzlINjAuNjJaTTQwLDExNy43NiwyMS4xMiw4MCw0MCw0Mi4yNCw1OC44OCw4MFoiLz48L3N2Zz4=)]">
              <img src="https://agencealpha.fr/wp-content/uploads/2022/06/agence-alpha-generation-de-leads-women-1.png" alt="" className="md:w-[420px] w-[280px] relative z-10 md:-ml-20" />
              <img src="https://agencealpha.fr/wp-content/uploads/2022/05/screen-3.png" alt="" className="md:w-[380px] w-[220px] z-0 absolute left-0 right-0 top-1/4 block mx-auto" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[var(--dark-blue)] text-white md:py-36 py-20 bg-[url(data:image/svg+xml;base64,PHN2ZyAgZmlsbD0icmdiYSgwLDAsMCwwLjA3KSIgaGVpZ2h0PSIxNjBweCIgd2lkdGg9IjgwcHgiIHZpZXdCb3g9IjAgMCA4MCAxNjAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQxLjEyLDQwLDUzLDE2LjI4LDYwLjYyLDFIODBWMEg1OC44OEw0MCwzNy43NiwyMS4xMiwwSDBWMUgxOS4zOEwyNywxNi4yOCwzOC44OCw0MCwxOS4zOCw3OUgwdjJIMTkuMzhsMTkuNSwzOS0xOS41LDM5SDB2MUgyMS4xMkw0MCwxMjIuMjQsNTguODgsMTYwSDgwdi0xSDYwLjYybC0xOS41LTM5LDE5LjUtMzlIODBWNzlINjAuNjJaTTQwLDExNy43NiwyMS4xMiw4MCw0MCw0Mi4yNCw1OC44OCw4MFoiLz48L3N2Zz4=)]">
        <div className="container mx-auto max-w-6xl text-center md:px-8 px-6">
          <h2 className="md:text-[40px]/12 text-[28px] font-bold mb-12">VOTRE PROJET</h2>
          <h4 className="text-[16px] uppercase font-semibold mb-16">En moyenne, nos clients reçoivent 5 à 20 prospects intéressés par jour</h4>
          <div className="grid md:grid-cols-3 gap-16 mb-18">
            <div className="bg-white rounded-3xl md:p-12 p-8">
              <svg class="w-[98px] h-[98px] text-[var(--normal-blue)] block mx-auto mb-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
              </svg>
              <h4 className="text-[20px] text-[var(--light-blue)] uppercase font-semibold mb-2">Achats de leads</h4>
              <p className="text-[18px] text-[var(--gray)] leading-8">
                Nos experts collectent pour vous des <strong>leads qualifiés</strong> sur un ensemble de leviers d’acquisition. Les contacts vous sont <strong>transmis en temps réel</strong> !
              </p>
            </div>
            <div className="bg-white rounded-3xl md:p-12 p-8">
              <svg class="w-[98px] h-[98px] text-[var(--normal-blue)] block mx-auto mb-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
              </svg>
              <h4 className="text-[20px] text-[var(--light-blue)] uppercase font-semibold mb-2">Gestion de campagne</h4>
              <p className="text-[18px] text-[var(--gray)] leading-8">
                Nos experts prennent le relais sur la <b>gestion de vos campagnes</b>. Vous maîtrisez l’ensemble des process et avez la gestion totale de vos comptes.
              </p>
            </div>
            <div className="bg-white rounded-3xl md:p-12 p-8">
              <svg class="w-[98px] h-[98px] text-[var(--normal-blue)] block mx-auto mb-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
              </svg>
              <h4 className="text-[20px] text-[var(--light-blue)] uppercase font-semibold mb-2">Hybride</h4>
              <p className="text-[18px] text-[var(--gray)] leading-8">
                Le meilleur des deux mondes. Vous décentralisez la gestion de vos comptes avec nos experts et nous développons <b>de nouveaux leviers d’acquisition.</b>
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-white hover:bg-white/80 uppercase transition-all duration-300 cursor-pointer rounded-3xl py-4 px-8 flex items-center text-[12px] font-semibold text-[var(--normal-blue)] gap-1">
              Découvrir nos prestations
              <span className="bg-[var(--normal-blue)] h-[12px] w-[12px] rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" height={12} width={12} viewBox="0 0 48 48" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto max-w-6xl md:px-8 px-6">
          <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold text-center mb-4">Le secret de votre réussite</h4>
          <h2 className="md:text-[40px]/12 text-[28px] text-[var(--dark-blue)] font-bold text-center mb-12">6 points clés qui feront le succès de vos campagnes !</h2>
          <div className="grid md:grid-cols-3 mb-8 md:gap-0 gap-6">
            <div className="space-y-10">
              <div className="text-end">
                <svg class="w-[48px] h-[48px] text-[var(--normal-blue)] block ml-auto mb-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
                <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold mb-4">À L’ÉCOUTE DE VOTRE STRATÉGIE</h4>
                <p className="text-[16px] text-[var(--gray)] leading-8">
                  Avant chaque lancement de projet, nous prenons le temps d’écouter chaque client. L’objectif étant de comprendre quel est votre besoin et comment il s’inscrit dans votre stratégie globale.
                </p>
              </div>

              <div className="text-end">
                <svg class="w-[48px] h-[48px] text-[var(--normal-blue)] block ml-auto mb-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
                <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold mb-4">TARIF FIXE</h4>
                <p className="text-[16px] text-[var(--gray)] leading-8">
                  Aucune surprise, nous définissions ensemble le prix et les critères de qualification des leads. Ainsi vous pouvez piloter votre acquisition sereinement !
                </p>
              </div>

              <div className="text-end">
                <svg class="w-[48px] h-[48px] text-[var(--normal-blue)] block ml-auto mb-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
                <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold mb-4">DÉFINIR  VOTRE CIBLE</h4>
                <p className="text-[16px] text-[var(--gray)] leading-8">
                  Nous accordons une attention toute particulière à la définition de votre cible / personae. Nous pourrons ainsi créer des campagnes ultras ciblées et personnalisées.
                </p>
              </div>
            </div>
            <div className="px-12">
              <img src="https://agencealpha.fr/wp-content/uploads/2022/03/Asset-3.png" alt="" className="w-full" />
            </div>
            <div className="space-y-10">
              <div className="text-start">
                <svg class="w-[48px] h-[48px] text-[var(--normal-blue)] block mb-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
                <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold mb-4">CHAQUE LEAD EST UNIQUE</h4>
                <p className="text-[16px] text-[var(--gray)] leading-8">
                  L’acquisition de lead exclusif vous permettra de prendre une longueur d’avance sur vos concurrents.
                </p>
              </div>

              <div className="text-start">
                <svg class="w-[48px] h-[48px] text-[var(--normal-blue)] block mb-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
                <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold mb-4">UNE GESTION DE VOS CAMPAGNES</h4>
                <p className="text-[16px] text-[var(--gray)] leading-8">
                  Nos Accounts Manager pilotent les campagnes de façon granulaire en lien avec votre service Commercial et/ou Marketing. Nos équipes sont une extension de votre société pour une meilleure efficacité !
                </p>
              </div>

              <div className="text-start">
                <svg class="w-[48px] h-[48px] text-[var(--normal-blue)] block mb-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                </svg>
                <h4 className="text-[16px] text-[var(--light-blue)] uppercase font-semibold mb-4">LIVRAISON EN TEMPS RÉEL</h4>
                <p className="text-[16px] text-[var(--gray)] leading-8">
                  Chaque lead est livré en temps réel après la soumission du formulaire. Vos commerciaux profitent donc de leads chauds et d’une qualité incomparable permettant de convertir 20% de plus.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-[var(--light-blue)] hover:bg-[var(--light-blue)]/80 uppercase transition-all duration-300 cursor-pointer rounded-3xl py-4 px-8 flex items-center text-[12px] font-semibold text-white gap-1">
              Nos leads
              <span className="bg-white h-[12px] w-[12px] rounded-full text-[var(--light-blue)]">
                <svg xmlns="http://www.w3.org/2000/svg" height={12} width={12} viewBox="0 0 48 48" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
      {/* <div className="h-[130vh]"></div> */}
      <Footer />
    </>
  );
}
