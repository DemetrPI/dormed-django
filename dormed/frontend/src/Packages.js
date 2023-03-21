import React from "react";
import { useTranslation } from "react-i18next";
import '../static/css/packages.css'
import seniors from "../static/images/seniors_on_the_bench.jpg"
import seniors1 from "../static/images/seniors_on_the_bench_back.jpg"


function Packages() {
   const {t} = useTranslation();
   return(
<>
    <div className="tm-container mx-auto">
        <section className="tm-section tm-section-1">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="tm-bg-circle-white tm-flex-center-v">
                            <header className="text-center">
                                <h1 className="tm-site-title">{t("Pakiety Rehabilitacja")}</h1>
                                <p className="tm-site-subtitle">Free HTML one-page template</p>
                            </header>
                            <p>This HTML page features alternating circular spots in a clean and attractive way. You may use this template for any purpose. Photos are from Unsplash website.</p>
                            <p className="text-center mt-4 mb-0">
                                <a data-scroll href="#tm-section-2" className="btn tm-btn-secondary">Continue...</a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="tm-section-2" className="tm-section pt-2 pb-2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 tm-flex-center-v tm-text-container tm-section-left">
                        <h2 className="tm-color-secondary mb-4">Lorem ipsum dolor site</h2>
                        <p className="mb-4">Nullam erat dolor, ullamcorper et nisi nec, porta portitor nisi. Quisque lobortis sem ut facilisis
                            mattis. Sed eu pellentesque sapien, a finibus eros. Nunc ut ultricies augue.</p>
                        <p className="mb-5">Mauris sagittis dui arcu, sed luctus metus faucibus nec. Sed vulputate ipsum massa, ut dapibus purus
                            volutpat vel. Interdum et malesuada fames ac ante.</p>
                        <p className="text-right mb-0">
                            <a href="#tm-section-3" className="btn tm-btn-secondary">Continue...</a>
                        </p>
                    </div>
                    <div className="col-xl-7 col-lg-6 tm-circle-img-container">
                        <img src={seniors1} alt="Image" className="rounded-circle tm-circle-img"/>
                    </div>
                </div>
            </div>
        </section>
        <section id="tm-section-3" className="tm-section tm-section-3">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 tm-section-2-right">
                        <div className="tm-bg-circle-white tm-bg-circle-pad-2 tm-flex-center-v">
                            <header>
                                <h2 className="tm-color-primary">Duis vel vaius eros</h2>
                            </header>
                            <p>In hac habitasse platea dictumst. Ut tristique, purus vitae egestas hendrerit, tellus elit luctus
                                lacus
                            </p>
                            <ul className="dashed">
                                <li>Quisque lobortis sem ut facilisis mattis</li>
                                <li>Sed eu pellentesque sapien</li>
                                <li>Mauris sagittis dui arcu</li>
                                <li>Sed luctus metus faucibus nec</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="tm-section pt-2 pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 tm-flex-center-v tm-section-left">
                    </div>
                    <div className="col-xl-8 col-lg-8 tm-circle-img-container tm-contact-right">
                        <img src={seniors} alt="Image" className="rounded-circle tm-circle-img"/>
                    </div>
                </div>
            </div>
        </section>



<h2>{t(" PAKIETY PROMOCYJNE Z ZABIEGAMI I WY&#379;YWIENIEM")}</h2>

<p>{("w WILLI DOROTKA i Pensjonacie Dormed*** Medical SPA")}</p>

<p>{("obowi&#261;zuj&#261; od 1.01.2019!!!")}</p>

<p>{("Rehabilitacja 7 dni (6 nocleg&oacute;w i 18 zabieg&oacute;w)")}</p>

<p>{("Willa Dorotka - 960 zl/doba")}</p>

<p>{("Dormed Medical Spa - 1080 z&#322;/osoba")}</p>

<p>{("Rehabilitacja 14 dni (13 nocleg&oacute;w i 39 zabieg&oacute;w)")}</p>

<p>{("Willa Dorotka - 2080 zl/doba")}</p>

<p>{("Dormed Medical Spa - 2340 z&#322;/osoba")}</p>



<p>{("PAKIET 1 - 14 - dniowy w")}</p>

<p> {("WILLI DOROTKA w cenie promocyjnej 160 z&#322;/doba/osoba Pensjonacie*** Dormed Medical SPA w promocyjnej cenie 180 z&#322;/doba/osoba zawiera:")}
</p>

<ul>
   <li>nocleg w przytulnym pokoju</li>

&#347;niadanie formie bufetu lub podawane do pokoju, obiadokolacj&#281;
 kuchni tradycyjnej (w tym deser) opiek&#281; piel&#281;gniarsk&#261; 
opiek&#281; fizjoterapeuty 3 zabiegi dziennie z listy do wyboru:

 K&#261;piel siarczkowa, K&#261;piel w zawiesinie borowinowej, Kapiel mineralna, K&#261;piel solankowa, K&#261;piel kwasow&#281;glowa, Inhalacja, Kuracja pitna wod&#261; siarczkow&#261;, Jonoforeza 10 min, Galwanizacja 10 min, Diadynamik, Pr&#261;dy Nemeca, Pr&#261;dy Traberta, Pr&#261;dy Tensa, Pr&#261;dy Kotza, Elektrostymulacja/Pulsatronic, Pr&#261;dy interferencyjne, Magnetronik, Ultrad&#378;wi&#281;ki, Sonoforeza/Fonoforeza, Laseroterapia, Sollux, 
Plastry borowinowe, Krioterapia miejscowa, masa&#380; klasyczny 15 min, Gimnastyka, Masa&#380; nefrytowy 20 min, Masa&#380; turmalinowy 15 min, Hydrojet 20 min, &#321;&oacute;&#380;ko BMS terapia biomechaniczna 15 min, Masa&#380; ondulacyjny 15 min, Fotel masuj&#261;cy 15 min, Platforma wibracyjna BMS 10 min, Masa&#380; wibracyjny 10 min, Masa&#380; st&oacute;p z podczerwieni&#261;
</ul>

<p></p>

<p>Mo&#380;liwo&#347;&#263; bezp&#322;atnego korzystania:</p>

<p>- rower stacjonarny - 1h/dziennie</p>

<p>- rower g&oacute;rski - 1h/dziennie</p>

<p>- orbitrek - 1h/dziennie</p>

<p>- kije Nordic Walking - 1h/dziennie</p>

<p>- z internetu Wi-Fi</p>

<p>- z placu zabaw</p>

<p>- z grilla ogrodowego</p>

<p>- z le&#380;ak&oacute;w</p>

<p>dziecko do 5 lat* - bezp&#322;atnie</p>

<p> * zakwaterowanie z dwoma osobami doros&#322;ymi lub na wsp&oacute;lnym &#322;&oacute;&#380;ku z 1 osob&#261; doros&#322;&#261;, bez wy&#380;ywienia</p>

<p></p>

<p>Pobyt rozpoczyna si&#281; o godzinie 15 w dniu przyjazdu, a ko&#324;czy o godzinie 12 w dniu wyjazdu.Rezerwacj&#281; pobytu, uwa&#380;a si&#281; za dokonan&#261; po uprzednim uzgodnieniu rodzaju pokoju oraz wp&#322;aceniu zadatku w wysoko&#347;ci 100,00 z&#322; od osoby. W przypadku rezygnacji zadatek przepada. Cena pakietu zawiera podatek VAT.</p>

<p>Parking niestrze&#380;ony monitorowany na terenie Willi, liczba miejsc parkingowych ograniczona - nie jest mo&#380;liwa wcze&#347;niejsza rezerwacja w cenie 10 z&#322;/doba lun 40 z&#322;/tydzie&#324; lub parking bezp&#322;atny og&oacute;lnodostepny naprzeciwko pensjonatu Dormed Medical SPA</p>

<p></p>

<p> ZAPRASZAMY!!!!!</p>

<p>
Na Pa&#324;stwa &#380;yczenie, bezp&#322;atnie wstawimy do pokoju &#322;&oacute;&#380;eczko dla ma&#322;ego dziecka, wanienk&#281;, podgrzewacz, nak&#322;adk&#281; na sedes.</p>

<p>
Dodatkowe atrakcje:</p>

<p>
- zabiegi kosmetyczne w Dormed Medical SPA &ndash; ceny promocyjne ju&#380; od 70 z&#322; 
- manicure, pedicure w Dormed Medical SPA - ceny promocyjne ju&#380; od 25 z&#322; 
- medycyna estetyczna w Dormed Medical SPA &ndash; sp&#322;ycanie i wype&#322;nianie zmarszczek - ceny promocyjne ju&#380; od 150 z&#322; 
B&#281;dzie nam niezmiernie mi&#322;o go&#347;ci&#263; pa&#324;stwa w naszym pensjonacie. 
</p>

<p> Wiecej informacji tel. 41 378 23 18, 600 45 46 35, 606 43 03 65, 604 59 64 73</p>
   </div>
   </>
   )
}

export default Packages
