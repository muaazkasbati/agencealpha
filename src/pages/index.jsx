import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function Home() {
  return (
    <>
      <Header />
      <section className="py-16 mt-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 items-center gap-20">
            <div className="space-y-4 pl-10 pr-12">
              <h4 className="text-[16px] text-[#00cef7] uppercase font-semibold">Agence génération leads qualifiés</h4>
              <h1 className="text-[40px] text-[#0088cc] font-bold">Développer votre business n’a jamais été aussi facile</h1>
              <p className="text-[16px] text-[#666] leading-8">Experts en <b>génération de leads</b>, nous vous apportons des prospects <b>qualifiés</b> et répondant à vos critères de qualification. Nous activons pour cela un ensemble de leviers de marketing digital qui nous permettront d’identifier les intentions et les recherches de vos futurs clients.</p>
            </div>
            <div className="bg-[#0088cc] relative rounded-l-[60px] text-white pt-20 bg-[url(data:image/svg+xml;base64,PHN2ZyAgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA3KSIgaGVpZ2h0PSIxNjBweCIgd2lkdGg9IjgwcHgiIHZpZXdCb3g9IjAgMCA4MCAxNjAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQxLjEyLDQwLDUzLDE2LjI4LDYwLjYyLDFIODBWMEg1OC44OEw0MCwzNy43NiwyMS4xMiwwSDBWMUgxOS4zOEwyNywxNi4yOCwzOC44OCw0MCwxOS4zOCw3OUgwdjJIMTkuMzhsMTkuNSwzOS0xOS41LDM5SDB2MUgyMS4xMkw0MCwxMjIuMjQsNTguODgsMTYwSDgwdi0xSDYwLjYybC0xOS41LTM5LDE5LjUtMzlIODBWNzlINjAuNjJaTTQwLDExNy43NiwyMS4xMiw4MCw0MCw0Mi4yNCw1OC44OCw4MFoiLz48L3N2Zz4=)]">
            <img src="https://agencealpha.fr/wp-content/uploads/2022/06/agence-alpha-generation-de-leads-men-1.png" alt="" className="w-[80%] relative z-10 -ml-30" />
            <img src="https://agencealpha.fr/wp-content/uploads/2022/05/screen-5.png" alt="" className="w-[580px] z-0 absolute left-30 top-1/3 block mx-auto" />
            </div>

          </div>
        </div>
      </section>
      <div className="h-[130vh]"></div>
      <Footer />
    </>
  );
}
