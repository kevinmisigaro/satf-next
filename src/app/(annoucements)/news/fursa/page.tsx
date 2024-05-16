"use client";

import SubPageLayout from "@/components/layouts/SubPageLayout";

function Page() {
  return (
    <SubPageLayout
      headerTitle="FURSA FURSA"
      bannerImage="/assets/banners/KIOTA-Building1-scaled.jpg"
    >
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          Je wewe ni Kijana Mnufaika wa SATF?
        </h1>
        <ul className="list-disc pl-6 mb-4">
          <li>Una umri usiopungua miaka 18 na hauzidi 35?</li>
          <li>Una ndoto za Kufanikiwa kupitia Ujasiriamali na Biashara?</li>
          <li>
            Unapenda Kupata Mbinu, Mwongozo na Nyenzo za Kufanya Biashara kwa
            Ufanisi na Tija zaidi?
          </li>
        </ul>
        <p className="mb-4">
          Shirika la Social Action Trust Fund (SATF) kupitia programu yake ya
          kukuza ujasiriamali kwa vijana (SATF-YES-I) inakupa fursa ya kupata
          Mbinu, Stadi, na Nyenzo muhimu za Kuanza na Kukuza Biashara yako. Kama
          uko tayari jisajili kushiriki semina ya maelekezo kwa kutuma jina lako
          na namba yako ya simu kwa kutuma kwenye simu No. 0757188314 au barua
          pepe: info@satf.or.tz, kabla ya tarehe 18 Mei 2024. Baada ya kushiriki
          semina, pata fomu ujaze na kuirudisha SATF kabla ya tarehe 31 Mei
          2024.
        </p>
        <h2 className="text-xl font-semibold mb-4">Kupitia:</h2>
        <ul className="list-decimal pl-6 mb-4">
          <li>
            Pakua Fomu kutoka Tovuti ya SATF (www.satf.or.tz) au tuma namba yako
            ya WhatsApp kwenda kwenye namba ya 0757188314 tukutumie fomu, au
          </li>
          <li>
            Tembelea Ofisi za SATF, Mtaa wa Sembeti, Mikocheni, Dar es Salaam,
            au
          </li>
          <li>Tembelea Washirika wa SATF Mikoani.</li>
        </ul>
        <p className="mb-8">
          Fomu iliyojazwa itumwe kwa kutumia barua pepe: info@satf.or.tz
        </p>

        <a
          className="bg-satfDarkBlue px-8 py-3 rounded-md text-white"
          href="/assets/annoucements/Application Form-SATF YES-I PROJECT.pdf"
          download
        >
          PATA FORM HAPA
        </a>
      </div>
    </SubPageLayout>
  );
}

export default Page;
