import { LessonData } from '../types';

export const romaniaConcertulEuropean: LessonData = {
  id: 'romania-concertul-european',
  sections: [
    {
      id: 'criza-orientala',
      type: 'text',
      title: '01. Criza orientală și independența (1877-1878)',
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <p><strong>Criza orientală</strong> a reprezentat un moment crucial în istoria României, ducând la obținerea independenței de stat.</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Context:</strong> Slăbirea Imperiului Otoman și lupta Marilor Puteri pentru influență în Balcani.</li>
            <li><strong>Acțiuni diplomatice:</strong> România a semnat o convenție cu Rusia (aprilie 1877) pentru tranzitul trupelor ruse.</li>
            <li><strong>Independența:</strong> Proclamată de Mihail Kogălniceanu în Parlament la 9 mai 1877.</li>
            <li><strong>Războiul:</strong> Armata română a participat activ la luptele de la Plevna, Grivița, Rahova și Vidin.</li>
            <li><strong>Tratate:</strong> Independența a fost recunoscută prin Tratatul de la San Stefano și Tratatul de la Berlin (1878). România a primit Dobrogea, dar a cedat sudul Basarabiei către Rusia.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'relatii-antebelice',
      type: 'text',
      title: '02. România în relațiile internaționale antebelice',
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <p>După 1878, România a căutat securitate și recunoaștere internațională.</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Regatul României (1881):</strong> Carol I a fost încoronat rege, consolidând prestigiul țării.</li>
            <li><strong>Alianța secretă cu Puterile Centrale (1883):</strong> România a aderat la Tripla Alianță (Germania, Austro-Ungaria, Italia) pentru a se proteja de Rusia.</li>
            <li><strong>Problema Transilvaniei:</strong> Politica de maghiarizare a dus la tensiuni cu Austro-Ungaria, slăbind alianța.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'primul-razboi-mondial',
      type: 'text',
      title: '03. România și Primul Război Mondial (1914-1918)',
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <p>România a intrat în război în 1916 de partea Antantei pentru a elibera Transilvania.</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Neutralitatea (1914-1916):</strong> România a rămas neutră inițial.</li>
            <li><strong>Intrarea în război (1916):</strong> Tratatul cu Antanta (Franța, Anglia, Rusia, Italia) promitea Transilvania, Bucovina și Banatul.</li>
            <li><strong>Campania militară:</strong> Înfrângeri grele în 1916, retragerea în Moldova.</li>
            <li><strong>Rezistența (1917):</strong> Victoriile de la Mărăști, Mărășești și Oituz au oprit ofensiva germană.</li>
            <li><strong>Pacea de la București (1918):</strong> România a fost forțată să semneze o pace umilitoare, dar nu a fost ratificată de rege.</li>
            <li><strong>Finalul războiului:</strong> România a reintrat în război în noiembrie 1918, fiind de partea învingătorilor.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'interbelic',
      type: 'text',
      title: '04. România în relațiile internaționale interbelice (1919-1939)',
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <p>România a promovat o politică de menținere a statu-quo-ului teritorial stabilit prin tratatele de pace.</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Mica Înțelegere (1921):</strong> Alianță cu Cehoslovacia și Iugoslavia împotriva revizionismului maghiar.</li>
            <li><strong>Înțelegerea Balcanică (1934):</strong> Alianță cu Grecia, Turcia și Iugoslavia.</li>
            <li><strong>Liga Națiunilor:</strong> România a fost un susținător activ al securității colective.</li>
            <li><strong>Tensiuni:</strong> Ascensiunea Germaniei naziste și a URSS a pus în pericol securitatea României.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'al-doilea-razboi-mondial',
      type: 'text',
      title: '05. România și Al Doilea Război Mondial (1939-1945)',
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <p>România a fost victima revizionismului și a fost antrenată în conflict.</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Pierderi teritoriale (1940):</strong> Pactul Ribbentrop-Molotov (Basarabia, Bucovina de Nord), Dictatul de la Viena (Transilvania de Nord), Tratatul de la Craiova (Cadrilaterul).</li>
            <li><strong>Intrarea în război (1941):</strong> Alături de Germania pentru recuperarea Basarabiei și Bucovinei.</li>
            <li><strong>23 august 1944:</strong> Lovitura de stat a regelui Mihai I, România întoarce armele împotriva Germaniei.</li>
            <li><strong>Urmări:</strong> România a contribuit la înfrângerea Germaniei, dar a căzut sub influența sovietică.</li>
          </ul>
        </div>
      )
    }
  ],
  quiz: [
    { question: "Când a proclamat România independența de stat?", options: ["1859", "1877", "1881", "1918"], correctAnswer: 1, explanation: "Independența a fost proclamată la 9 mai 1877." },
    { question: "Ce teritoriu a primit România după 1878?", options: ["Basarabia", "Transilvania", "Dobrogea", "Bucovina"], correctAnswer: 2, explanation: "România a primit Dobrogea în urma Tratatului de la Berlin (1878)." },
    { question: "Cu cine a încheiat România o alianță secretă în 1883?", options: ["Antanta", "Puterile Centrale", "Rusia", "Franța"], correctAnswer: 1, explanation: "România a aderat la Tripla Alianță (Puterile Centrale) în 1883." },
    { question: "În ce an a intrat România în Primul Război Mondial?", options: ["1914", "1916", "1917", "1918"], correctAnswer: 1, explanation: "România a intrat în Primul Război Mondial în 1916." },
    { question: "Care au fost victoriile românești din 1917?", options: ["Mărăști, Mărășești, Oituz", "Plevna, Grivița", "Posada, Rovine", "Călugăreni, Șelimbăr"], correctAnswer: 0, explanation: "Victoriile de la Mărăști, Mărășești și Oituz au oprit ofensiva germană în 1917." },
    { question: "Ce alianță a format România în 1921?", options: ["Mica Înțelegere", "Înțelegerea Balcanică", "Tripla Alianță", "Antanta"], correctAnswer: 0, explanation: "Mica Înțelegere a fost formată în 1921 cu Cehoslovacia și Iugoslavia." },
    { question: "Ce teritoriu a pierdut România prin Dictatul de la Viena (1940)?", options: ["Basarabia", "Bucovina de Nord", "Transilvania de Nord", "Cadrilaterul"], correctAnswer: 2, explanation: "Transilvania de Nord a fost cedată Ungariei prin Dictatul de la Viena." },
    { question: "Când a întors România armele împotriva Germaniei?", options: ["22 iunie 1941", "23 august 1944", "1 decembrie 1918", "9 mai 1877"], correctAnswer: 1, explanation: "România a întors armele împotriva Germaniei la 23 august 1944." },
    { question: "Ce teritoriu a cedat România Rusiei în 1878?", options: ["Dobrogea", "Sudul Basarabiei", "Bucovina", "Transilvania"], correctAnswer: 1, explanation: "România a cedat sudul Basarabiei către Rusia în 1878." },
    { question: "Care a fost scopul intrării României în Primul Război Mondial?", options: ["Cucerirea Bulgariei", "Eliberarea Transilvaniei", "Sprijinirea Rusiei", "Controlul Dunării"], correctAnswer: 1, explanation: "Scopul principal a fost eliberarea Transilvaniei." },
    { question: "Ce a fost Pactul Ribbentrop-Molotov?", options: ["Tratat de pace", "Pact de neagresiune între Germania și URSS", "Alianță cu România", "Acord comercial"], correctAnswer: 1, explanation: "Pactul Ribbentrop-Molotov a fost un pact de neagresiune care a inclus protocoale secrete de împărțire a sferelor de influență." },
    { question: "Când a aderat România la NATO?", options: ["1991", "2004", "2007", "2010"], correctAnswer: 1, explanation: "România a aderat la NATO în 2004." },
    { question: "Când a aderat România la Uniunea Europeană?", options: ["2004", "2007", "2010", "2012"], correctAnswer: 1, explanation: "România a aderat la Uniunii Europeană în 2007." },
    { question: "Ce a fost Mica Înțelegere?", options: ["Alianță cu Cehoslovacia și Iugoslavia", "Alianță cu Germania", "Alianță cu Rusia", "Alianță cu Grecia"], correctAnswer: 0, explanation: "Mica Înțelegere a fost o alianță cu Cehoslovacia și Iugoslavia." },
    { question: "Ce a fost Tratatul de la Craiova (1940)?", options: ["Cedarea Basarabiei", "Cedarea Cadrilaterului", "Cedarea Transilvaniei", "Cedarea Bucovinei"], correctAnswer: 1, explanation: "Tratatul de la Craiova a dus la cedarea Cadrilaterului către Bulgaria." }
  ]
};
