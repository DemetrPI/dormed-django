import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Trans } from "react-i18next";

function Regulamin() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        className="justify-content-end regulamin pulse"
        onClick={() => setShow(true)}
      >
        <Trans i18nKey = "Regulamin">
        Regulamin
        </Trans>
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        fullscreen
        centered
      >
        <Modal.Header closeButton className="modalHeader"></Modal.Header>
        <Modal.Title className="text-center modalTitle">
          <h1>Regulamin Willi Dorotka i Dormed Medical SPA</h1>
          <p>(obowiązuje od 01.11.2017)</p>
        </Modal.Title>

        <Modal.Body className="modalBody">
          <p>
            Właściciel Willi Dorotka oraz Pensjonatu*** Dormed Medical SPA -
            Dorota Sagan będzie Państwu bardzo wdzięczna za współpracę w
            przestrzeganiu niniejszego regulaminu, który ma służyć zapewnieniu
            spokoju i bezpiecznego pobytu wszystkich Gości.
          </p>
          <p>
            Recepcja ogólna znajduje się w Dormed Medical SPA ul. Rokosza 5w
            Busku-Zdroju Tel. 41 378 23 18 lub 600 45 46 35
          </p>
          <ol type="I">
            <li>
              W pokojach obowiązuje całkowity zakaz palenia papierosów i
              tytoniu!!!
              <p>
                W przypadku nie przestrzegania zakazu palenia będziemy obciążać
                Państwa za malowanie i odświeżanie pokoju.
              </p>
            </li>
            <li>
              Określenie doby hotelowej
              <p>
                Doba hotelowa jest terminem umownym i trwa od godziny 15:00 w
                dniu przyjazdu i kończy się o godzinie 12:00 w dniu odjazdu - w
                indywidualnych przypadkach po uzgodnieniu z recepcją możliwe
                jest wcześniejsze przyjęcie gościa do zamieszkania lub
                późniejszego opuszczenia pokoju.
              </p>
              <p>
                Gość przybywający do Willi/Pensjonatu zobowiązany jest do
                dokonania zameldowania w recepcji zgodnie z przepisami „Ustawy z
                dnia 10 kwietnia 1974r. o ewidencji ludności i dowodach
                osobistych” wraz z późniejszymi zmianami oraz opłacenia pobytu z
                góry w dniu zameldowania i uiszczenia opłaty klimatycznej
                (Uchwała Rady Miasta do wglądu w recepcji).
              </p>
              <p>
                Zajmujący pokój w chwili meldunku określa czas swojego pobytu
                informując o tym recepcjonistę. Jeśli gość nie określił pobytu
                najmując pokój przyjmuje się iż pokój został wynajęty na 1 dobę.
              </p>
              <p>
                Płatność za pobyt przyjmowana jest z góry, za czas pobytu
                ustalony w rezerwacji.
              </p>
              <p>
                W przypadku braku zapłaty w dniu przyjazdu za czas pobytu
                ustalony w rezerwacji przyjmujemy, że pobyt trwa 1 dobę i nie
                gwarantujemy pokoju na pozostałe dni rezerwacji.
              </p>
            </li>
            <li>
              Tryb przedłużania pobytu
              <p>
                Życzenia przedłużenia pobytu poza okres wskazany w dniu
                przybycia gość zgłasza recepcji do godz. 1000 w dniu
                poprzedzającym dzień wyjazdu. Właściciel może odmówić
                przedłużenia pobytu gościom w przypadku rezerwacji wszystkich
                miejsc noclegowych / pokoi / lub w przypadku gości nie
                przestrzegających regulaminu.
              </p>
            </li>
            <li>
              Willa Dorotka oraz pensjonat Dormed Medical SPA ma obowiązek
              zapewnić:
              <ol type="i">
                <li>
                  Warunki pełnego i nieskrępowanego wypoczynku gościa .
                  Bezpieczeństwo pobytu, w tym zachowanie tajemnicy informacji o
                  gościu.
                </li>
                <li>Profesjonalną i miłą obsługę.</li>
                <li>Sprzątanie pokoju 2 razy w tygodniu</li>
                <li>
                  Bezpłatną wymianę ręczników po 7 dobach pobytu - ręczniki
                  bezpłatnie wymieniane są w każdej 8 (ósmej) dobie pobytu lub
                  ODPŁATNIE NA KAŻDE ŻYCZENIE KLIENTA wg cennika znajdującego
                  się w recepcji.
                </li>
                <li>
                  Bezpłatną wymianę pościeli po 14 dobach pobytu pościel
                  bezpłatnie wymieniana są w każdej 15 (piętnastej) dobie pobytu
                  LUB ODPŁATNIE NA KAŻDE ŻYCZENIE KLIENTA wg cennika
                  znajdującego się w recepcji.
                </li>
                <li>
                  Wykonywanie niezbędnych napraw urządzeń podczas nieobecności
                  gościa lub jego obecności gdy wyrazi na to zgodę i życzenie.
                </li>
              </ol>
            </li>
            <li>
              Świadczenie usług
              <p>
                Na życzenie gości Willa Dorotka świadczy nieodpłatne usługi
                (prosimy o kontakt z recepcją tel. 600 45 46 35 lub 41 378 23
                18):
              </p>
              <ol type="i">
                <li>udzielanie informacji związanych z pobytem lub podróżą</li>
                <li>zamawianie taxi</li>
                <li>udostępnienia grilla ogrodowego</li>
                <li>bezprzewodowe łącze internetowe</li>
                <li>udostępnienie żelazka</li>
                <li>
                  parking monitorowany niestrzeżony płatny - liczba miejsc
                  ograniczona (nie ma możliwości wcześniejszego rezerwowania
                  miejsc parkingowych)
                </li>
              </ol>
              <p>
                Ze względu na ograniczoną liczbę miejsc parkingowych Willa
                Dorotka nie gwarantuje dostępności do parkingu.
              </p>
            </li>
            <p>
              Odpłatne usługi wg obowiązującego cennika znajdującego się w
              recepcji (prosimy o kontakt z recepcją tel. 600 45 46 35 lub 41
              378 23 18):
            </p>
            <ol type="i">
              <li>śniadania na ustaloną z recepcją godzinę</li>
              <li>obiady na ustaloną z recepcją godzinę</li>
              <li>kolacje na ustaloną z recepcją godzinę</li>
              <li>kawa Lavazza z expresu ciśnieniowego</li>
              <li>herbata owocowa, zielona lub czarna z cytryną</li>
              <li>zabiegi z zakresu fizykoterapii i balneologii</li>
              <li>zabiegi z zakresu kosmetyki, manicure, pedicure</li>
              <li>Zabiegi z zakresu kosmetologii i medycyny estetycznej</li>
              <li>
                Masaż klasyczny, leczniczy, wyszczuplający, antycellulitowy,
                odchudzający
              </li>
              <li>
                Rowerek do ćwiczeń, Orbitrek, urządzenie do ćwiczenia brzuszków
              </li>
              <li>
                Rowery i kije Nordic Walking płatne wg cennika znajdującego się
                w recepcji
              </li>
              <li>Solarium</li>
            </ol>
            <li>
              Podejmowanie lub użyczanie pokoju osobom trzecim
              <p>
                Pokój jest wynajmowany konkretnym osobom w związku z czym
                zabrania się samowolnej zmianie pokoi przez gości jak również
                użyczania pokoi osobomnie zameldowanym w Willi Dorotka lub
                Pensjonacie Dormed Medical SPA.
              </p>
            </li>
            <li>
              Przebywanie osób trzecich w pokojach gościnnych w porze nocnej
              <p>
                Osoby nie zameldowane w Willi Dorotka mogą przebywać w pokoju
                gościa w godzinach od 8:00 do 22:00. Jeśli osoby niezameldowane
                będą przebywały na terenie willi po godzinie 22.00 będzie to
                traktowane jako wynajęcie miejsca noclegowego i zostanie pobrana
                opłata wg. cennika.
              </p>
            </li>
            <li>
              Obowiązywanie ciszy nocnej
              <p>
                W celu zapewnienia spokojnego pobytu przybywającym w Willi
                Dorotka gościom obliguję wszystkich do zachowania ciszy nocnej w
                godzinach 22:00 do 7:00.
              </p>
            </li>
            <li>
              Tryb składania reklamacji
              <p>
                Goście mają prawo do składania reklamacji w przypadkach
                związanych z jakością świadczonych usług. Reklamacje przyjmuje
                recepcja lub prosimy wysłać na maila{" "}
                <span>
                  <a href="mailto:willadorotka@gmail.com">
                    willadorotka@gmail.com
                  </a>
                </span>{" "}
                lub{" "}
                <span>
                  <a href="mailto:salon@salondorotka.pl">
                    salon@salondorotka.pl
                  </a>
                </span>
              </p>
            </li>
            <li>
              Odpowiedzialność za utratę lub uszkodzenie rzeczywniesionych przez
              gości
              <p>
                Właściciel nie ponosi odpowiedzialności za utratę lub
                uszkodzenie rzeczy wniesionych przez gości. Willa Dorotka oraz
                Pensjonat Dormed Medical SPA, nie przyjmuje do depozytu rzeczy
                wartościowych gości. Właściciel nie ponosi odpowiedzialności za
                uszkodzenie lub utratę samochodu lub innego pojazdu należącego
                do gościa. Gość przyjmuje do wiadomości, że znajdujący na
                terenie Willi Dorotka parking jest parkingiem niestrzeżonym.
              </p>
            </li>
            <li>
              Ograniczenie w korzystaniu z urządzeń elektrycznych
              <p>
                Ze względu na bezpieczeństwo przeciwpożarowe zabronione jest
                używanie w pokojach urządzeń elektrycznych i innych podobnych
                urządzeń nie stanowiących wyposażenia pokoi gościnnych.
              </p>
            </li>
            <li>
              Odpowiedzialność za utratę lub uszkodzenie wyposażenia pokoi
              <p>
                Każdy pokój wyposażony jest w telewizor, radio, czajnik,
                lodówkę, suszarkę do włosów, ręczniki oraz niezbędny komplet
                naczyń stołowych.Gość ponosi odpowiedzialność materialną za
                wszystkiego rodzaju uszkodzenia przedmiotów stanowiących
                wyposażenie i urządzenia techniczne powstałe z jego winy lub z
                winy odwiedzających Gości. Gość powinien poinformować recepcję o
                ujawnieniu szkody bezzwłocznie po jej stwierdzeniu każdorazowo
                opuszczając pokój. Gość powinien sprawdzić zamknięcie drzwi.
                Kluczem od pokoju otwierają Państwo zarówno drzwi od recepcji
                jak również furtkę.
              </p>
            </li>
            <li>
              Przebywanie zwierząt
              <p>
                Za odpowiednią odpłatnością Willa Dorotka zezwala na przebywanie
                ze zwierzętami. Prosimy właścicieli swoich pupili aby nie
                pozwalali załatwiać się im na terenie zieleni Willi a także pod
                drzewkami. Właściciel zwierzęcia zobowiązany jest posprzątać
                teren Willi po odchodach swojego pupilach. Właściciel zwierzęcia
                odpowiada i ponosi pełną odpowiedzialność materialną za
                wszelkiego rodzaju uszkodzenia lub zniszczenia poczynione przez
                zwierzę w wyposażeniu oraz urządzeniach technicznych za
                wszystkie szkody jakie on poczyni. Właściciel zwierzęcia
                odpowiada również za bezpieczeństwo innych gości przebywających
                w otoczeniu swojego zwierzęcia - zwierzęta przebywające poza
                wynajętym pokojem, a na terenie Willi Dorotka, powinny mieć
                założony kaganiec i być uwiązane na smyczy. Właściciel nie
                wyraża zgody na pozostawianie zwierząt samych w pokoju.
                <p className="text-danger text-center">
                  Pensjonat*** Dormed Medical SPA nie przyjmuje zwierząt.
                </p>
              </p>
            </li>
            <li>
              BEZPIECZNE PŁATNOŚCI ONLINE - Rozliczenia transakcji kartą
              kredytową i e-przelewem przeprowadzane są za pośrednictwem{" "}
              <span className="text-success">
                Centrum Rozliczeniowego Dotpay
              </span>
              <p>
                Nasz system rezerwacyjny wymaga wpłaty zaliczki w wysokości do
                30% kwoty rezerwacji. Po dokonaniu wpłaty rezerwacja uznawana
                jest za GWARANTOWANĄ. Płatności realizowane są przez firmę
                DotPay. W celu dokonania płatności należy wypełnić wszystkie
                pola w formularzu na szyfrowanej stronie systemu DotPay, na
                którą zostaną Państwo przekierowani w trakcie dokonywania
                rezerwacji. Następnie należy kliknąć przycisk "dokonaj
                płatności" i postępować zgodnie z dalszymi instrukcjami. Po
                dokonaniu płatności otrzymają Państwo wiadomość e-mail od
                operatora systemu DotPay zawierającą potwierdzenie dokonania
                przelewu lub płatności kartą kredytową. Pozostała część kwoty
                płatne jest gotówką (w PLN) w dniu przyjazdu do Willi Dorotka.
                Osoba przekazująca klucze nie może zameldować gości bez pobrania
                należnej za wynajem kwoty.
              </p>
            </li>
          </ol>
          <h4 className="text-center text-success">OCHRONA DANYCH OSOBOWYCH</h4>
          <p>
            <span className="text-success">Dotpay</span> przykłada ogromną wagę
            do kwestii zachowania prywatności swoich klientów. Polityka
            zachowania poufności na stronach internetowych Dotpay jest
            udostępniana wszystkim zainteresowanym. Dotpay Ltd., jako
            administrator danych, dba o bezpieczeństwo udostępnionych danych.
            Dane te są szczególnie chronione i zabezpieczone przed dostępem osób
            nieupoważnionych. Dane osobowe przetwarzane są wyłącznie w celach
            związanych z prowadzeniem działalności usługowej serwisu. Informacje
            dotyczące użytkowników mogą być przekazywane uprawnionym organom
            publicznym. Dotpay Ltd. zapewnia użytkownikom serwisu prawo wglądu
            do własnych danych, prawo żądania aktualizacji danych oraz prawo
            żądania skasowania danych.
          </p>
          <p>
            Skargi i wnioski proszę składać osobiście lub za pomocą e-maila:{" "}
            <span>
              <a href="mailto:willadorotka@gmail.com">willadorotka@gmail.com</a>
            </span>{" "}
            lub{" "}
            <span>
              <a href="mailto:salon@salondorotka.pl">salon@salondorotka.pl</a>
            </span>
          </p>
          <h4 className="text-success text-center">
            Życzę Państwu miłego pobytu!
          </h4>
          <h4 className="text-success text-center">dr n. med. Dorota Sagan</h4>
        </Modal.Body>
        <Modal.Footer className="modalHeader"></Modal.Footer>
      </Modal>
    </>
  );
}

export default Regulamin;
