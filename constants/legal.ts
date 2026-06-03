// TODO: Laat dit document controleren door een Nederlandse jurist voordat de site live gaat.
// Onderstaande tekst is een AVG/GDPR-georiënteerde standaardtekst en moet door een
// gekwalificeerde jurist worden aangepast aan jouw situatie en jurisdictie.

import type { LegalDocument } from "@/types";

const CONTACT_EMAIL = "info@goedkopewebsite-latenmaken.nl";
const LAST_UPDATED = "26 mei 2026";
const BRAND = "Sarte Global";
const SERVICE_DOMAIN = "goedkopewebsite-latenmaken.nl";
// TODO: vervang door echte KvK- en BTW-nummers
const COMPANY_DETAILS = `${BRAND} (KvK: TODO · BTW: NL000000000B00) — verantwoordelijke voor ${SERVICE_DOMAIN}`;

export const LEGAL_PRIVACY: LegalDocument = {
  slug: "privacy",
  icon: "shield",
  heroEyebrow: "Juridisch · Privacyverklaring",
  titleLead: "Hoe wij omgaan",
  titleEm: "met uw gegevens.",
  intro:
    "Wij verzamelen alleen wat we nodig hebben om onze diensten te leveren, ons bedrijf te runnen en aan onze wettelijke verplichtingen te voldoen. Deze verklaring beschrijft wat, waarom en welke rechten u heeft — in duidelijke taal.",
  lastUpdated: LAST_UPDATED,
  contact: { email: CONTACT_EMAIL, subject: "Privacyverklaring" },
  sections: [
    {
      id: "wie-wij-zijn",
      heading: "Wie wij zijn",
      body: [
        `${BRAND} ("wij", "ons", "onze") is een digitaal bureau in Nederland. Wij zijn de verwerkingsverantwoordelijke voor persoonsgegevens die wij via deze website, offertes en klantopdrachten verzamelen.`,
        `Voor privacy-gerelateerde vragen of het uitoefenen van uw rechten kunt u contact opnemen via ${CONTACT_EMAIL}.`,
        COMPANY_DETAILS,
      ],
    },
    {
      id: "welke-gegevens",
      heading: "Welke gegevens wij verzamelen",
      body: [
        "Wij verzamelen persoonsgegevens op drie manieren: gegevens die u ons verstrekt, gegevens die wij automatisch verzamelen en gegevens die wij van vertrouwde derden ontvangen.",
        { type: "subheading", text: "Gegevens die u verstrekt" },
        {
          type: "list",
          items: [
            "Contactgegevens (naam, e-mail, bedrijf, functie) die u invult in ons contactformulier, een offerteverzoek of de nieuwsbrief.",
            "Projectbriefings en materialen die u onder een opdracht met ons deelt.",
            "Betaal- en facturatiegegevens die worden verwerkt door onze betaalproviders.",
          ],
        },
        { type: "subheading", text: "Gegevens die wij automatisch verzamelen" },
        {
          type: "list",
          items: [
            "Apparaat- en browserinformatie (type, besturingssysteem, taal).",
            "Geschatte locatie afgeleid uit het IP-adres.",
            "Geaggregeerde statistieken over hoe bezoekers de website gebruiken.",
          ],
        },
      ],
    },
    {
      id: "hoe-wij-gebruiken",
      heading: "Hoe wij uw gegevens gebruiken",
      body: [
        "Wij gebruiken persoonsgegevens om onze diensten te leveren, te communiceren met prospects en klanten, onze website te verbeteren en te voldoen aan wettelijke verplichtingen.",
        {
          type: "list",
          items: [
            "Reageren op vragen en beheren van klantrelaties.",
            "Leveren, ondersteunen en verbeteren van onze diensten.",
            "Versturen van product-updates, nieuwsbrieven en operationele e-mails (met uitschrijfmogelijkheid).",
            "Detecteren, voorkomen en reageren op fraude en beveiligingsincidenten.",
            "Voldoen aan toepasselijke wetgeving, administratieve en fiscale verplichtingen.",
          ],
        },
      ],
    },
    {
      id: "rechtsgrond",
      heading: "Rechtsgrond (AVG art. 6)",
      body: [
        "Wij verwerken persoonsgegevens op één of meer van de volgende grondslagen:",
        {
          type: "list",
          items: [
            "Toestemming — voor marketing-e-mails en niet-essentiële cookies.",
            "Overeenkomst — voor het onderhandelen, leveren en beheren van klantopdrachten.",
            "Gerechtvaardigd belang — voor het runnen, beveiligen en laten groeien van ons bedrijf met respect voor uw rechten.",
            "Wettelijke verplichting — voor het voldoen aan toepasselijke wetgeving, gerechtelijke bevelen en fiscale administratie.",
          ],
        },
      ],
    },
    {
      id: "delen",
      heading: "Delen met derden",
      body: [
        "Wij verkopen nooit persoonsgegevens. Wij delen ze uitsluitend met dienstverleners die ons helpen bij het runnen van het bureau — bijvoorbeeld e-mail, analytics, betalingen en cloud-infrastructuur — onder schriftelijke verwerkersovereenkomsten met gelijkwaardige bescherming.",
        "Wij kunnen persoonsgegevens ook delen wanneer dat wettelijk verplicht is, om onze voorwaarden af te dwingen of om de rechten en veiligheid van klanten en publiek te beschermen.",
      ],
    },
    {
      id: "internationale-doorgifte",
      heading: "Internationale doorgifte",
      body: [
        "Sommige van onze dienstverleners bevinden zich buiten de EER. Wanneer persoonsgegevens de EER verlaten, gebruiken wij Modelcontractbepalingen of vergelijkbare door de toezichthouder erkende waarborgen.",
      ],
    },
    {
      id: "bewaartermijn",
      heading: "Bewaartermijn",
      body: [
        "Wij bewaren persoonsgegevens alleen zolang dat nodig is voor het leveren van onze diensten, het nakomen van contractuele verplichtingen, het oplossen van geschillen en het voldoen aan toepasselijke wetgeving. Wanneer gegevens niet meer nodig zijn, worden ze verwijderd of geanonimiseerd.",
      ],
    },
    {
      id: "uw-rechten",
      heading: "Uw rechten",
      body: [
        "Onder de AVG heeft u de volgende rechten met betrekking tot uw persoonsgegevens:",
        {
          type: "list",
          items: [
            "Inzage — vraag een kopie op van de gegevens die wij van u bewaren.",
            "Rectificatie — corrigeer onjuiste of onvolledige gegevens.",
            "Verwijdering — vraag ons om gegevens te wissen, binnen wettelijke kaders.",
            "Beperking — beperk hoe wij uw gegevens gebruiken in specifieke situaties.",
            "Overdraagbaarheid — ontvang uw gegevens in een gangbaar, machine-leesbaar formaat.",
            "Bezwaar — maak bezwaar tegen verwerking op grond van gerechtvaardigd belang, inclusief direct marketing.",
            "Intrekken toestemming — op elk moment, wanneer verwerking op toestemming is gebaseerd.",
          ],
        },
        `Om een recht uit te oefenen kunt u mailen naar ${CONTACT_EMAIL}. U heeft ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens.`,
      ],
    },
    {
      id: "kinderen",
      heading: "Privacy van kinderen",
      body: [
        "Onze diensten zijn niet gericht op kinderen onder de 16 jaar. Wij verzamelen niet bewust persoonsgegevens van kinderen. Vermoedt u dat een kind ons gegevens heeft verstrekt? Neem contact op en wij verwijderen ze.",
      ],
    },
    {
      id: "wijzigingen",
      heading: "Wijzigingen in deze verklaring",
      body: [
        "Wij werken deze verklaring van tijd tot tijd bij. De datum bovenaan geeft de meest recente versie aan. Belangrijke wijzigingen worden op de website gemarkeerd of, waar passend, per e-mail aangekondigd.",
      ],
    },
    {
      id: "contact",
      heading: "Neem contact op",
      body: [
        `Heeft u vragen over deze verklaring of de manier waarop wij met uw gegevens omgaan? Mail naar ${CONTACT_EMAIL} en wij reageren binnen een redelijke termijn.`,
      ],
    },
  ],
};

export const LEGAL_TERMS: LegalDocument = {
  slug: "terms",
  icon: "code",
  heroEyebrow: "Juridisch · Algemene voorwaarden",
  titleLead: "De spelregels van",
  titleEm: "onze samenwerking.",
  intro:
    "Deze voorwaarden gelden voor het gebruik van onze website en de diensten die wij leveren. Ze beschrijven wat u van ons mag verwachten en wat wij van u verwachten.",
  lastUpdated: LAST_UPDATED,
  contact: { email: CONTACT_EMAIL, subject: "Algemene%20voorwaarden" },
  sections: [
    {
      id: "acceptatie",
      heading: "Acceptatie van de voorwaarden",
      body: [
        `Door gebruik te maken van de website van ${BRAND} of door ons in te schakelen voor diensten, gaat u akkoord met deze voorwaarden. Als u niet akkoord gaat, verzoeken wij u onze website niet te gebruiken en geen opdracht te verstrekken.`,
      ],
    },
    {
      id: "diensten",
      heading: "Onze diensten",
      body: [
        `${BRAND} levert digitale diensten zoals websites, webshops, design, SEO en online marketing. De precieze scope, deliverables, planning en tarieven van elke opdracht worden vastgelegd in een afzonderlijke offerte, opdrachtbevestiging of raamovereenkomst, die bij strijdigheid voorrang heeft op deze algemene voorwaarden.`,
      ],
    },
    {
      id: "accounts",
      heading: "Accounts en verantwoordelijkheden",
      body: [
        "Wanneer wij u in het kader van een opdracht inloggegevens, dashboards of accounts verstrekken, bent u verantwoordelijk voor het veilig bewaren daarvan en voor de activiteit onder die accounts. Meld onmiddellijk een vermoeden van ongeautoriseerde toegang.",
      ],
    },
    {
      id: "acceptabel-gebruik",
      heading: "Acceptabel gebruik",
      body: [
        "U gaat ermee akkoord onze website of diensten niet te gebruiken om:",
        {
          type: "list",
          items: [
            "Wettelijke regels of rechten van derden te schenden.",
            "Reverse engineering, scraping of verstoring van de normale werking uit te voeren.",
            "Malware, spam of andere schadelijke inhoud te verspreiden.",
            "Iemand anders te imiteren of uw relatie verkeerd voor te stellen.",
          ],
        },
      ],
    },
    {
      id: "intellectueel-eigendom",
      heading: "Intellectueel eigendom",
      body: [
        `Alle inhoud op deze website — tekst, beeld, logo's, code en design — is eigendom van ${BRAND} of onze licentiegevers en wordt beschermd door auteursrecht en andere intellectuele eigendomsrechten.`,
        "Bij klantopdrachten wordt het eigendom van de opgeleverde werken geregeld in de opdrachtovereenkomst. Standaard behouden wij eigendom van onze pre-existente tools, libraries en methoden.",
      ],
    },
    {
      id: "betaling",
      heading: "Betaling en facturatie",
      body: [
        "Tarieven, facturatieschema en valuta worden vastgelegd in de relevante offerte of opdrachtbevestiging. Facturen zijn opeisbaar op de op de factuur vermelde datum, tenzij schriftelijk anders overeengekomen. Bij te late betaling kan wettelijke rente worden gerekend.",
      ],
    },
    {
      id: "garanties",
      heading: "Garanties en uitsluitingen",
      body: [
        `Onze website wordt geleverd "zoals deze is" zonder enige garantie. Wij garanderen niet dat de website ononderbroken, foutloos of vrij van schadelijke componenten zal zijn. Voor klantopdrachten garanderen wij dat de diensten op professionele en vakkundige wijze worden uitgevoerd; de garanties die expliciet in de opdrachtovereenkomst staan zijn de enige garanties die wij geven.`,
      ],
    },
    {
      id: "aansprakelijkheid",
      heading: "Beperking van aansprakelijkheid",
      body: [
        `Voor zover wettelijk toegestaan is ${BRAND} niet aansprakelijk voor indirecte, incidentele, bijzondere of gevolgschade, gederfde winst, omzet, gegevens of zakelijke kansen. Onze totale aansprakelijkheid voortvloeiend uit of in verband met deze voorwaarden is beperkt tot het bedrag dat in de twaalf maanden voorafgaand aan de gebeurtenis aan ons is betaald.`,
      ],
    },
    {
      id: "vrijwaring",
      heading: "Vrijwaring",
      body: [
        `U verdedigt, vrijwaart en stelt ${BRAND} en haar team schadeloos voor elke vordering die voortvloeit uit uw schending van deze voorwaarden, oneigenlijk gebruik van de website of schending van enig recht.`,
      ],
    },
    {
      id: "beëindiging",
      heading: "Beëindiging",
      body: [
        "Wij kunnen op elk moment de toegang tot de website opschorten of beëindigen als wij menen dat u deze voorwaarden heeft geschonden. Beëindiging van een klantopdracht wordt geregeld in de bijbehorende overeenkomst.",
      ],
    },
    {
      id: "toepasselijk-recht",
      heading: "Toepasselijk recht en geschillen",
      body: [
        "Op deze voorwaarden is Nederlands recht van toepassing, zonder rekening te houden met bepalingen van conflictenrecht. Geschillen worden uitsluitend voorgelegd aan de bevoegde Nederlandse rechter, tenzij in een bindende overeenkomst anders is bepaald.",
      ],
    },
    {
      id: "contact",
      heading: "Neem contact op",
      body: [
        `Voor vragen over deze voorwaarden kunt u mailen naar ${CONTACT_EMAIL}.`,
      ],
    },
  ],
};

export const LEGAL_COOKIES: LegalDocument = {
  slug: "cookies",
  icon: "spark",
  heroEyebrow: "Juridisch · Cookieverklaring",
  titleLead: "Hoe wij",
  titleEm: "cookies gebruiken.",
  intro:
    "Deze verklaring beschrijft wat cookies zijn, welke wij gebruiken en hoe u ze kunt beheren. Hij vormt een aanvulling op onze privacyverklaring.",
  lastUpdated: LAST_UPDATED,
  contact: { email: CONTACT_EMAIL, subject: "Cookieverklaring" },
  sections: [
    {
      id: "wat-zijn-cookies",
      heading: "Wat zijn cookies?",
      body: [
        "Cookies zijn kleine tekstbestanden die op uw apparaat worden geplaatst wanneer u een website bezoekt. Ze worden veel gebruikt om websites goed te laten werken, prestaties te verbeteren en informatie te geven aan de eigenaar van de site.",
        "Sommige cookies blijven alleen actief tijdens uw bezoek (sessiecookies); andere blijven een vastgestelde periode op uw apparaat staan (permanente cookies).",
      ],
    },
    {
      id: "hoe-wij-gebruiken",
      heading: "Hoe wij cookies gebruiken",
      body: [
        "Wij gebruiken cookies om de website te laten werken, uw voorkeuren te onthouden, te begrijpen hoe bezoekers de site gebruiken en — met uw toestemming — om onze marketing te verbeteren.",
      ],
    },
    {
      id: "categorieen",
      heading: "Cookiecategorieën",
      body: [
        { type: "subheading", text: "Essentieel" },
        "Noodzakelijk om de website te laten werken. Ze onthouden bijvoorbeeld uw cookievoorkeuren of houden u ingelogd. Deze kunnen niet worden uitgeschakeld via onze cookiebanner.",
        { type: "subheading", text: "Analytisch" },
        "Helpen ons begrijpen hoe bezoekers met de website omgaan door informatie anoniem te verzamelen. Wij gebruiken dit om content en gebruikservaring te verbeteren.",
        { type: "subheading", text: "Marketing" },
        "Worden gebruikt om de effectiviteit van campagnes te meten en, waar toegestaan, relevante content op andere websites te tonen. Deze worden alleen geplaatst met uw uitdrukkelijke toestemming.",
      ],
    },
    {
      id: "derde-partijen",
      heading: "Cookies van derden",
      body: [
        "Sommige cookies worden geplaatst door derden waar wij mee samenwerken, zoals analytics- of embedded content-aanbieders. Wij hebben geen invloed op deze cookies en raden u aan de privacyverklaringen van de betreffende partijen te raadplegen.",
      ],
    },
    {
      id: "beheren",
      heading: "Uw voorkeuren beheren",
      body: [
        "U kunt niet-essentiële cookies op elk moment beheren via de cookiebanner. U kunt cookies ook in uw browser beheren — de meeste browsers laten u cookies blokkeren of verwijderen, maar dat kan invloed hebben op hoe delen van de website werken.",
        {
          type: "list",
          items: [
            "Chrome: Instellingen → Privacy en beveiliging → Cookies en andere sitegegevens.",
            "Safari: Voorkeuren → Privacy.",
            "Firefox: Instellingen → Privacy & beveiliging → Cookies en sitegegevens.",
            "Edge: Instellingen → Cookies en site-machtigingen.",
          ],
        },
      ],
    },
    {
      id: "wijzigingen",
      heading: "Wijzigingen in deze verklaring",
      body: [
        "Wij kunnen deze verklaring bijwerken als ons gebruik van cookies verandert. De datum bovenaan geeft de meest recente versie aan.",
      ],
    },
    {
      id: "contact",
      heading: "Neem contact op",
      body: [
        `Vragen over cookies? Mail naar ${CONTACT_EMAIL}.`,
      ],
    },
  ],
};

export const LEGAL_DOCUMENTS = {
  privacy: LEGAL_PRIVACY,
  terms: LEGAL_TERMS,
  cookies: LEGAL_COOKIES,
} as const;
