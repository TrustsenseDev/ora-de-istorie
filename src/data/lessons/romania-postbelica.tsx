import { LessonData } from '../types';

export const romaniaPostbelica: LessonData = {
  id: 'romania-postbelica',
  sections: [
    {
      id: 'instaurarea-comunismului',
      type: 'timeline',
      title: '01. Instaurarea comunismului în România (1944-1947)',
      items: [
        { year: '23 august 1944', title: 'Întoarcerea armelor', description: 'Regele Mihai I îl arestează pe Ion Antonescu. România iese din alianța cu Axa și se alătură Națiunilor Unite. Armata Roșie intră în țară, favorizând ascensiunea comuniștilor.', icon: 'flag' },
        { year: '6 martie 1945', title: 'Guvernul Petru Groza', description: 'Sub presiunea sovietică (A. Vîșinski), Regele Mihai este forțat să accepte primul guvern dominat de comuniști, condus de Petru Groza.', icon: 'landmark' },
        { year: '1945-1946', title: 'Greva Regală', description: 'Regele Mihai refuză să semneze actele guvernului Groza, cerând demisia acestuia. Guvernul ignoră refuzul și continuă să conducă ilegal.', icon: 'shield' },
        { year: 'Noiembrie 1946', title: 'Alegerile falsificate', description: 'Comuniștii (Blocul Partidelor Democratice) falsifică masiv rezultatele alegerilor parlamentare, preluând controlul total asupra puterii legislative.', icon: 'alert-triangle' },
        { year: '30 decembrie 1947', title: 'Abdicarea Regelui', description: 'Regele Mihai I este forțat să abdice. Este proclamată Republica Populară Română (RPR), marcând instaurarea deplină a regimului totalitar comunist.', icon: 'crown' }
      ]
    },
    {
      id: 'regimul-stalinist',
      type: 'text',
      title: '02. Regimul stalinist în România (Gheorghe Gheorghiu-Dej)',
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <p>Perioada stalinistă (1948-1965) a fost condusă de <strong>Gheorghe Gheorghiu-Dej</strong> și s-a caracterizat prin copierea fidelă a modelului sovietic în toate domeniile societății.</p>
          <h3 className="text-xl font-bold text-white mt-6 mb-2">Practici politice și economice totalitare:</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Monopolul politic:</strong> Partidul Muncitoresc Român (PMR) devine partid unic. Constituțiile din 1948 și 1952 legitimează dictatura proletariatului.</li>
            <li><strong>Teroarea și represiunea:</strong> În 1948 este înființată <strong>Securitatea</strong> (poliția politică). Elitele politice, intelectuale și religioase sunt exterminate în închisori (Sighet, Aiud, Pitești - "Experimentul Pitești") sau trimise la muncă forțată (Canalul Dunăre-Marea Neagră).</li>
            <li><strong>Naționalizarea (1948):</strong> Trecerea în proprietatea statului a fabricilor, băncilor și minelor, desființând proprietatea privată în industrie.</li>
            <li><strong>Colectivizarea agriculturii (1949-1962):</strong> Țăranii au fost forțați, adesea prin violență, să își cedeze pământurile Gospodăriilor Agricole Colective (GAC).</li>
            <li><strong>Sovietizarea culturii:</strong> Cenzură strictă, rescrierea istoriei (Mihail Roller), suprimarea valorilor naționale și promovarea culturii sovietice.</li>
          </ul>
          <p className="mt-4 text-amber-400"><strong>Distanțarea de Moscova:</strong> După moartea lui Stalin (1953), Dej începe treptat o politică de independență față de URSS. În 1958, trupele sovietice se retrag din România. În 1964, "Declarația din aprilie" afirmă independența PMR în cadrul blocului comunist.</p>
        </div>
      )
    },
    {
      id: 'national-comunismul',
      type: 'cards',
      title: '03. Regimul național-comunist (Nicolae Ceaușescu)',
      items: [
        { title: 'Consolidarea puterii (1965)', description: 'Nicolae Ceaușescu preia conducerea. PMR redevine PCR (Partidul Comunist Român). Adoptă Constituția din 1965: statul devine Republica Socialistă România (RSR).', icon: 'flag' },
        { title: 'Momentul 1968', description: 'Ceaușescu refuză să participe la invadarea Cehoslovaciei de către trupele Pactului de la Varșovia. Câștigă o imensă popularitate internă și sprijin din partea Occidentului.', icon: 'globe' },
        { title: 'Tezele din iulie (1971)', description: 'După vizite în China și Coreea de Nord, Ceaușescu lansează o "mini-revoluție culturală". Reintroduce cenzura strictă și controlul ideologic total asupra culturii și educației.', icon: 'book' },
        { title: 'Cultul personalității', description: 'Ceaușescu concentrează toată puterea în mâinile sale și ale soției sale, Elena. Este glorificat prin propagandă masivă ("Geniul Carpaților", "Cârmaciul").', icon: 'users' },
        { title: 'Criza anilor \'80', description: 'Pentru a plăti datoria externă a țării, Ceaușescu decide exportul masiv al produselor de bază. Populația suferă de frig, foame și raționalizarea alimentelor.', icon: 'alert-triangle' },
        { title: 'Sistematizarea', description: 'Un plan distructiv de demolare a satelor și a cartierelor istorice din orașe (inclusiv București) pentru a construi blocuri și edificii gigantice (Casa Poporului).', icon: 'landmark' }
      ]
    },
    {
      id: 'disidenta-anticomunista',
      type: 'text',
      title: '04. Disidența anticomunistă',
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <p>Spre deosebire de alte state comuniste (Polonia, Cehoslovacia), în România nu s-a format o mișcare de disidență organizată la nivel național, din cauza controlului strict al Securității. Totuși, au existat numeroase forme de rezistență:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Rezistența armată din munți (1945-1960):</strong> Grupuri de partizani (foști ofițeri, studenți, țărani) s-au ascuns în Munții Făgăraș, Banat, Bucovina, sperând într-o intervenție americană. Au fost eliminați treptat de Securitate.</li>
            <li><strong>Mișcări muncitorești:</strong>
              <ul className="list-circle list-inside ml-8 mt-2 space-y-1">
                <li><em>Greva minerilor din Valea Jiului (1977):</em> Peste 30.000 de mineri au protestat împotriva condițiilor grele de muncă.</li>
                <li><em>Revolta muncitorilor de la Brașov (15 noiembrie 1987):</em> Muncitorii de la uzina "Steagul Roșu" au ieșit în stradă scandând "Jos Ceaușescu!", protestând împotriva sărăciei.</li>
              </ul>
            </li>
            <li><strong>Disidența intelectuală:</strong> Personalități precum Paul Goma (care a inițiat o mișcare pentru drepturile omului în 1977), Doina Cornea, Mircea Dinescu, Ana Blandiana au criticat regimul prin scrisori deschise trimise la postul de radio <em>Europa Liberă</em>.</li>
            <li><strong>Scrisoarea celor șase (martie 1989):</strong> Șase foști lideri comuniști (printre care Gheorghe Apostol, Silviu Brucan) au criticat politica lui Ceaușescu într-o scrisoare difuzată la BBC.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'revolutia-si-democratia',
      type: 'text',
      title: '05. Revoluția din 1989 și construcția democrației postdecembriste',
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <p>Prăbușirea comunismului în Europa de Est în toamna anului 1989 a izolat complet regimul Ceaușescu. România a fost singura țară în care schimbarea regimului s-a făcut prin violență.</p>
          <h3 className="text-xl font-bold text-white mt-6 mb-2">Revoluția din decembrie 1989:</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Timișoara (16-20 decembrie):</strong> Revolta a început ca un protest împotriva evacuării pastorului Laszlo Tokes și s-a transformat într-o mișcare anticomunistă. Armata a tras în manifestanți, dar pe 20 decembrie Timișoara a devenit primul oraș liber de comunism.</li>
            <li><strong>București (21-22 decembrie):</strong> Mitingul convocat de Ceaușescu s-a transformat în revoltă. Pe 22 decembrie, armata a trecut de partea poporului, iar soții Ceaușescu au fugit, fiind ulterior prinși, judecați sumar și executați (25 decembrie).</li>
            <li>Puterea a fost preluată de <strong>Frontul Salvării Naționale (FSN)</strong>, condus de Ion Iliescu.</li>
          </ul>
          <h3 className="text-xl font-bold text-white mt-6 mb-2">Construcția democrației postdecembriste:</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Revenirea la pluralism (1990):</strong> Au fost reînființate partidele istorice (PNL, PNȚCD) și au apărut partide noi.</li>
            <li><strong>Alegerile din mai 1990:</strong> Primele alegeri libere, câștigate detașat de FSN și Ion Iliescu. Perioada a fost marcată de tensiuni sociale (Mineriadele).</li>
            <li><strong>Constituția din 1991:</strong> A consfințit revenirea la democrație, statul de drept, separarea puterilor, pluralismul politic și economia de piață. A stabilit forma de guvernământ ca republică.</li>
            <li><strong>Integrarea euro-atlantică:</strong> Obiectivul major al României postdecembriste a fost aderarea la structurile occidentale. România a aderat la <strong>NATO în 2004</strong> și la <strong>Uniunea Europeană în 2007</strong>.</li>
          </ul>
        </div>
      )
    }
  ],
  quiz: [
    { question: "Când a fost forțat Regele Mihai I să abdice?", options: ["23 august 1944", "6 martie 1945", "30 decembrie 1947", "1948"], correctAnswer: 2, explanation: "Regele Mihai I a fost forțat să abdice pe 30 decembrie 1947, moment în care a fost proclamată Republica Populară Română." },
    { question: "Cine a condus primul guvern dominat de comuniști, instaurat la 6 martie 1945?", options: ["Gheorghe Gheorghiu-Dej", "Petru Groza", "Nicolae Ceaușescu", "Ion Antonescu"], correctAnswer: 1, explanation: "Guvernul instaurat la 6 martie 1945, sub presiune sovietică, a fost condus de Petru Groza." },
    { question: "Cum s-a numit poliția politică înființată în 1948 în România?", options: ["Gestapo", "NKVD", "Securitatea", "KGB"], correctAnswer: 2, explanation: "Securitatea a fost înființată în 1948 ca instrument principal de teroare și represiune al regimului comunist." },
    { question: "Ce proces economic a vizat trecerea fabricilor și băncilor în proprietatea statului în 1948?", options: ["Colectivizarea", "Naționalizarea", "Privatizarea", "Sistematizarea"], correctAnswer: 1, explanation: "Naționalizarea din 1948 a desființat proprietatea privată în industrie și sectorul bancar." },
    { question: "Cine a fost liderul regimului stalinist în România?", options: ["Nicolae Ceaușescu", "Ion Iliescu", "Gheorghe Gheorghiu-Dej", "Lucrețiu Pătrășcanu"], correctAnswer: 2, explanation: "Gheorghe Gheorghiu-Dej a condus regimul comunist din România în perioada stalinistă." },
    { question: "Ce a marcat 'Declarația din aprilie' (1964)?", options: ["Aderarea la NATO", "Independența PMR față de URSS", "Revoluția din 1989", "Colectivizarea"], correctAnswer: 1, explanation: "Declarația din aprilie 1964 a afirmat independența PMR în cadrul blocului comunist." },
    { question: "Ce atitudine a avut România față de invadarea Cehoslovaciei în 1968?", options: ["A participat", "A refuzat să participe", "A sprijinit URSS", "A fost neutră"], correctAnswer: 1, explanation: "Ceaușescu a refuzat să participe la invadarea Cehoslovaciei, câștigând popularitate." },
    { question: "Cine a inițiat o mișcare de disidență pentru drepturile omului în 1977?", options: ["Doina Cornea", "Mircea Dinescu", "Paul Goma", "Gheorghe Apostol"], correctAnswer: 2, explanation: "Scriitorul Paul Goma a inițiat în 1977 o mișcare de solidaritate cu Charta 77 din Cehoslovacia." },
    { question: "În ce oraș a început Revoluția din decembrie 1989?", options: ["București", "Cluj", "Brașov", "Timișoara"], correctAnswer: 3, explanation: "Revoluția a început la Timișoara pe 16 decembrie 1989." },
    { question: "Ce organism politic a preluat puterea după fuga lui Nicolae Ceaușescu?", options: ["Partidul Național Liberal", "Frontul Salvării Naționale (FSN)", "Convenția Democrată", "Partidul Comunist"], correctAnswer: 1, explanation: "Frontul Salvării Naționale (FSN), condus de Ion Iliescu, a preluat puterea pe 22 decembrie 1989." },
    { question: "Ce lege fundamentală a consfințit revenirea României la democrație?", options: ["Constituția din 1965", "Constituția din 1991", "Proclamația de la Timișoara", "Constituția din 1923"], correctAnswer: 1, explanation: "Constituția din 1991 a restabilit statul de drept, pluralismul și separarea puterilor." },
    { question: "În ce an a aderat România la NATO?", options: ["1991", "1995", "2004", "2007"], correctAnswer: 2, explanation: "România a devenit membră a Alianței Nord-Atlantice (NATO) în anul 2004." },
    { question: "În ce an a aderat România la Uniunea Europeană?", options: ["2004", "2007", "2010", "2012"], correctAnswer: 1, explanation: "România a devenit stat membru al Uniunii Europene la 1 ianuarie 2007." },
    { question: "Ce a reprezentat 'Sistematizarea' în perioada lui Ceaușescu?", options: ["Reforma educației", "Planul de demolare a satelor și cartierelor istorice", "Plata datoriei externe", "Organizarea armatei"], correctAnswer: 1, explanation: "Sistematizarea a fost un plan distructiv de demolare a localităților pentru a construi blocuri și centre civice gigantice." }
  ]
};
