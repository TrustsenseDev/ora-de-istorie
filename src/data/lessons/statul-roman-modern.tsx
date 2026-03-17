import { LessonData } from '../lessonContent';

export const statulRomanModern: LessonData = {
    id: 'statul-roman-modern',
    sections: [
      {
        id: 'fanariot',
        type: 'text',
        title: '01. Regimul Fanariot (1711/1716 – 1822)',
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
            <p>Instaurat în Moldova (1711) și Țara Românească (1716), până în 1822. Ultimii domni pământeni au fost <strong>Dimitrie Cantemir</strong> (Moldova) și <strong>Ștefan Cantacuzino</strong> (Țara Românească).</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Domnii erau numiți de Poartă, din familii grecești din Fanar (Constantinopol).</li>
              <li>Domnia era cumpărată — domnii = funcționari ai Porții, domnie scurtă.</li>
              <li>Armata a fost desființată, dregătoriile vândute.</li>
              <li>Obligații financiare crescute: tribut, peșcheș, mucarer.</li>
              <li>Războaiele ruso-austro-turce au afectat grav spațiul românesc.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'reformism-domnesc',
        type: 'timeline',
        title: '02. Reformismul Domnesc',
        items: [
          { year: '1746', title: 'Desființarea șerbiei (Țara Românească)', description: 'Constantin Mavrocordat desființează șerbia în Țara Românească → țăranii devin clăcași (liberi, dar fără pământ).', icon: 'scroll' },
          { year: '1749', title: 'Desființarea șerbiei (Moldova)', description: 'Constantin Mavrocordat desființează șerbia în Moldova.', icon: 'scroll' },
          { year: '1777', title: 'Ratio Educationis', description: 'Transilvania → învățământul elementar devine gratuit și obligatoriu.', icon: 'book' },
          { year: '1780', title: 'Pravilniceasca Condică', description: 'Alexandru Ipsilanti promulgă primul cod de legi din Țara Românească → reorganizarea justiției.', icon: 'scale' },
          { year: '1785', title: 'Desființarea șerbiei (Transilvania)', description: 'Iosif al II-lea desființează șerbia în Transilvania (anulată după moartea sa).', icon: 'users' },
          { year: '1817', title: 'Codul Callimachi', description: 'În Moldova → întărește proprietatea privată.', icon: 'file-text' },
          { year: '1818', title: 'Legiuirea Caragea', description: 'În Țara Românească → noi taxe pentru țărani.', icon: 'file-text' }
        ]
      },
      {
        id: 'reformism-boieresc',
        type: 'timeline',
        title: '03. Reformismul Boieresc',
        items: [
          { year: '1769', title: 'Proiectul de republică', description: 'Proiectul marii boierimi (Moldova) – 12 mari boieri în fruntea statului.', icon: 'users' },
          { year: '1772', title: 'Memoriul de la Focșani', description: 'Partida Națională cere unirea și independența principatelor, sub garanția Rusiei, Austriei și Prusiei.', icon: 'flag' },
          { year: '1821', title: 'Revoluția lui Tudor Vladimirescu', description: 'Cererile norodului românesc: dregătorii pe merit, libertatea comerțului, armata națională. Tudor asasinat de Eteria.', icon: 'sword' },
          { year: '1822', title: 'Revenirea la domnii pământene', description: 'Constituția Cărvunarilor (Ionică Tăutu).', icon: 'crown' },
          { year: '1826', title: 'Convenția de la Akkerman', description: 'Domni pe 7 ani, libertatea comerțului.', icon: 'handshake' },
          { year: '1829', title: 'Tratatul de la Adrianopol', description: 'Protectoratul rusesc, raialele revin, granița pe Dunăre.', icon: 'map' },
          { year: '1838', title: 'Proiectele lui Ion Câmpineanu', description: 'Actul de unire și independență + Osăbitul act (monarhie constituțională).', icon: 'file-text' }
        ]
      },
      {
        id: 'regulamente',
        type: 'text',
        title: '04. Regulamentele Organice (1831–1832)',
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
            <p>Primul act cu caracter constituțional, redactat sub guvernarea rusă (Pavel Kiseleff).</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Separarea puterilor în stat:</strong> executivă (domn + Sfat administrativ), legislativă (Adunarea Obștească), judecătorească (Înaltul Divan Domnesc).</li>
              <li>Reorganizarea învățământului și reînființarea armatei.</li>
              <li>Unificarea impozitelor, desființarea vămilor interne.</li>
              <li>Înființarea arhivelor de stat.</li>
              <li>Se mențin privilegiile boierilor și clerului și claca.</li>
            </ul>
            <p className="text-amber-400 mt-4"><strong>Primii domni regulamentari:</strong> Alexandru Ghica (Țara Românească) și Mihail Sturdza (Moldova) — numiți de Poartă și Rusia, deși Regulamentele prevedeau alegerea lor.</p>
          </div>
        )
      },
      {
        id: 'rev1848',
        type: 'cards',
        title: '05. Revoluția de la 1848',
        items: [
          { title: 'Context & Cauze', description: 'Revoluții în Europa (emancipare socială și națională). Încălcarea autonomiei de către Rusia. Politica de maghiarizare (Transilvania) și germanizare (Bucovina, Banat). Necesitatea modernizării.', icon: 'flame' },
          { title: 'Obiective Politice', description: 'Constituții, drepturi, regimuri reprezentative.', icon: 'landmark' },
          { title: 'Obiective Naționale', description: 'Autonomie, stat național, înlăturarea dominației străine.', icon: 'flag' },
          { title: 'Obiective Sociale', description: 'Desființarea privilegiilor, eliberarea și împroprietărirea țăranilor.', icon: 'users' }
        ]
      },
      {
        id: 'programe',
        type: 'cards',
        title: '06. Programele Pașoptiste',
        items: [
          { title: 'Moldova – Petițiune-Proclamație (Iași)', description: 'Martie 1848. Vasile Alecsandri, Al.I. Cuza. Prevederi: Respectarea Regulamentului Organic, reforma învățământului, îmbunătățirea stării sătenilor. Program respins, revoluționari arestați.', icon: 'file-text' },
          { title: 'Transilvania – Petiția Națională (Blaj)', description: 'Mai 1848. Simion Bărnuțiu, Al.I. Cuza. Prevederi: Oficializarea limbii române, reprezentare proporțională, independența bisericii, desființarea iobăgiei. Dieta de la Cluj votează anexarea la Ungaria.', icon: 'file-text' },
          { title: 'Transilvania – Prințipurile noastre... (Brașov)', description: 'Mai 1848. Prevederi: Desființarea clăcășiei, împroprietărire fără despăgubire, unirea Moldovei și Valahiei. Avram Iancu organizează rezistența armată.', icon: 'file-text' },
          { title: 'Țara Românească – Proclamația de la Islaz', description: 'Iunie 1848. Ion Heliade Rădulescu. Prevederi: Independență administrativă, egalitate în drepturi, domn responsabil pe 5 ani, emanciparea clăcașilor cu despăgubire. Înăbușită de otomani (Dealul Spirii).', icon: 'file-text' },
          { title: 'Banat & Bucovina', description: 'Banat (Petiția neamului românesc): Respectarea națiunii, oficializarea limbii. Bucovina (Petiția țării): Autonomia Bisericii, dietă. Dorințele partidei naționale în Moldova (Kogălniceanu): Unirea Moldovei și Țării Românești.', icon: 'file-text' }
        ]
      },
      {
        id: 'unirea',
        type: 'timeline',
        title: '07. Unirea Principatelor Române',
        items: [
          { year: '1853-1856', title: 'Războiul Crimeii', description: 'Turcii (cu englezi și francezi) îi înving pe ruși → Congresul de Pace de la Paris.', icon: 'sword' },
          { year: '1856', title: 'Congresul de la Paris', description: 'Abolirea protectoratului rusesc, garanția colectivă a 7 mari puteri, adunări ad-hoc.', icon: 'landmark' },
          { year: '1857', title: 'Adunările ad-hoc', description: 'La Iași & București – cer unirea într-un stat „România”, prinț străin, neutralitate.', icon: 'users' },
          { year: '1858', title: 'Convenția de la Paris', description: 'Principatele Unite, cu domni/guverne/adunări separate, 2 instituții comune la Focșani.', icon: 'scroll' },
          { year: '5 ian. 1859', title: 'Alegerea în Moldova', description: 'Adunarea Electivă din Moldova îl alege pe colonelul Alexandru Ioan Cuza.', icon: 'crown' },
          { year: '24 ian. 1859', title: 'Dubla alegere', description: 'Adunarea din Țara Românească îl alege tot pe Cuza → bazele statului național modern!', icon: 'flag' }
        ]
      },
      {
        id: 'cuza',
        type: 'cards',
        title: '08. Domnia lui Alexandru Ioan Cuza (1859–1866)',
        items: [
          { title: 'Consolidarea Unirii (1859–1862)', description: 'Unificarea armatei, vămilor, telegrafului. Stemă comună, capitala la București. 1861: Conferința de la Constantinopol recunoaște unirea. 1862: Primul guvern unic (Barbu Catargiu).', icon: 'shield' },
          { title: 'Legea secularizării (Dec. 1863)', description: 'Averile mănăstirilor (25% din suprafața arabilă) trec la stat.', icon: 'landmark' },
          { title: 'Statutul Dezvoltător (Mai 1864)', description: 'Rol de constituție, Parlament bicameral (Corpul Ponderator).', icon: 'scroll' },
          { title: 'Legea agrară (Aug. 1864)', description: 'Emanciparea clăcașilor, împroprietărire, răscumpărare pe 15 ani.', icon: 'users' },
          { title: 'Alte reforme (1864)', description: 'Legea instrucțiunii (învățământ primar gratuit, alfabet latin). Codul civil (libertăți, egalitate, proprietate privată).', icon: 'book' },
          { title: 'Abdicarea (Feb. 1866)', description: '2 mai 1864: lovitura de stat → domnie autoritară. „Monstruoasa coaliție” îl forțează să abdice la 11 februarie 1866.', icon: 'alert-triangle' }
        ]
      },
      {
        id: 'carol',
        type: 'cards',
        title: '09. Domnia lui Carol I (1866–1914)',
        items: [
          { title: 'Instalarea dinastiei', description: 'Tronul oferit lui Filip de Flandra (refuză), apoi lui Carol de Hohenzollern-Sigmaringen. 10 mai 1866: proclamat principe prin plebiscit.', icon: 'crown' },
          { title: 'Constituția din 1866', description: 'Prima constituție, model belgian (1831). Caracter liberal: suveranitate națională, guvernare reprezentativă, separarea puterilor.', icon: 'scroll' },
          { title: 'Independența (1877–1878)', description: '9 mai 1877: Kogălniceanu declară „Suntem independenți!”. Recunoscută prin tratatele de la San Stefano și Berlin (1878). România primește Dobrogea, cedează sudul Basarabiei.', icon: 'sword' },
          { title: 'Reforme', description: 'Politic: 1881 – Regat; 1895 – rotativă guvernamentală. Economic: 1867 – Leul; 1880 – BNR; 1887 – Legea încurajării industriei. Cultural: 1879 – Academia Română.', icon: 'trending-up' }
        ]
      },
      {
        id: 'partide',
        type: 'cards',
        title: '10. Partidele Politice',
        items: [
          { title: 'Partidul Național Liberal (PNL)', description: 'Fondat 1875. Reprezenta burghezia. Doctrină: „Prin noi înșine”. Susținea industria și lărgirea votului.', icon: 'users' },
          { title: 'Partidul Conservator (PC)', description: 'Fondat 1880. Reprezenta marii proprietari. Doctrină: „Forme fără fond”. Dezvoltare bazată pe agricultură.', icon: 'users' }
        ]
      },
      {
        id: 'romania-mare',
        type: 'cards',
        title: '11. Statul Național Unitar – România Mare',
        items: [
          { title: 'Unirea Basarabiei (27 martie 1918)', description: '1917: Sfatul Țării (Ion Inculeț). Dec. 1917: Republica Democratică Moldovenească. 27 martie 1918: Sfatul Țării votează unirea cu România.', icon: 'map' },
          { title: 'Unirea Bucovinei (28 noiembrie 1918)', description: 'Oct. 1918: Consiliul Național Român. Adunarea Constituantă (Iancu Flondor). 28 nov. 1918: Congresul General votează unirea necondiționată.', icon: 'map' },
          { title: 'Unirea Transilvaniei (1 decembrie 1918)', description: 'Oct. 1918: Consiliul Național Român Central. 1 dec. 1918: Marea Adunare Națională de la Alba Iulia (1228 delegați, 100.000+ persoane). Rezoluția Unirii.', icon: 'map' },
          { title: 'Urmări', description: 'Suprafața: 137.000 → 295.000 km². Populația s-a dublat. Unirea recunoscută la Conferința de Pace (Paris, 1919-1920). 15 oct. 1922: încoronarea la Alba Iulia.', icon: 'check-circle' }
        ]
      }
    ],
    quiz: [
      { question: "În ce an a fost desființată șerbia în Țara Românească de către Constantin Mavrocordat?", options: ["1746","1749","1785","1821"], correctAnswer: 0, explanation: "Constantin Mavrocordat a desființat șerbia în Țara Românească în anul 1746." },
      { question: "Care a fost primul cod de legi promulgat în Țara Românească (1780)?", options: ["Legiuirea Caragea","Codul Callimachi","Pravilniceasca Condică","Codul Civil"], correctAnswer: 2, explanation: "Pravilniceasca Condică a fost promulgată de Alexandru Ipsilanti în 1780." },
      { question: "Cine a redactat Memoriul de la Focșani (1772)?", options: ["Tudor Vladimirescu","Ion Câmpineanu","Partida Națională","Constantin Mavrocordat"], correctAnswer: 2, explanation: "Partida Națională a redactat Memoriul de la Focșani în 1772, cerând unirea și independența." },
      { question: "Regulamentele Organice au fost adoptate în timpul guvernării cui?", options: ["Alexandru Ghica","Pavel Kiseleff","Mihail Sturdza","Grigore Alexandru Ghica"], correctAnswer: 1, explanation: "Regulamentele Organice au fost redactate sub guvernarea militară rusă a lui Pavel Kiseleff." },
      { question: "Care a fost programul revoluționar din Țara Românească în 1848?", options: ["Petițiune-Proclamație","Petiția-Națională","Proclamația de la Islaz","Petiția țării"], correctAnswer: 2, explanation: "Proclamația de la Islaz a fost programul revoluției din Țara Românească (iunie 1848)." },
      { question: "Când a fost ales Alexandru Ioan Cuza ca domn al Moldovei?", options: ["24 ianuarie 1859","5 ianuarie 1859","10 mai 1866","9 mai 1877"], correctAnswer: 1, explanation: "Cuza a fost ales mai întâi în Moldova, la 5 ianuarie 1859." },
      { question: "Ce prevedea Legea secularizării averilor mănăstirești (1863)?", options: ["Desființarea mănăstirilor","Trecerea averilor mănăstirilor în proprietatea statului","Împărțirea pământurilor la țărani","Construirea de noi mănăstiri"], correctAnswer: 1, explanation: "Legea secularizării a trecut averile mănăstirești (25% din suprafața arabilă) în proprietatea statului." },
      { question: "Cine a fost proclamat principe al României la 10 mai 1866?", options: ["Alexandru Ioan Cuza","Ferdinand I","Carol de Hohenzollern-Sigmaringen","Filip de Flandra"], correctAnswer: 2, explanation: "Carol de Hohenzollern-Sigmaringen a fost proclamat principe la 10 mai 1866." },
      { question: "Când a declarat România independența față de Imperiul Otoman?", options: ["10 mai 1866","9 mai 1877","1 decembrie 1918","1881"], correctAnswer: 1, explanation: "Independența a fost declarată în Parlament de Mihail Kogălniceanu la 9 mai 1877." },
      { question: "Când a avut loc Marea Adunare Națională de la Alba Iulia?", options: ["27 martie 1918","15 noiembrie 1918","1 decembrie 1918","24 ianuarie 1859"], correctAnswer: 2, explanation: "Marea Adunare Națională de la Alba Iulia a avut loc la 1 decembrie 1918." },
      { question: "Care era moneda națională adoptată în 1867?", options: ["Ducatul","Leul","Coroana","Tallerul"], correctAnswer: 1, explanation: "Leul a fost adoptat ca monedă națională a României în anul 1867." },
      { question: "Unirea Basarabiei cu România a fost votată de Sfatul Țării la:", options: ["1 decembrie 1918","15 noiembrie 1918","27 martie 1918","9 aprilie 1918"], correctAnswer: 2, explanation: "Sfatul Țării a votat unirea Basarabiei cu România la 27 martie 1918." },
      { question: "Constituția din 1866 a fost inspirată după modelul:", options: ["francez","german","belgian","englez"], correctAnswer: 2, explanation: "Constituția din 1866 a avut ca model Constituția Belgiei din 1831." },
      { question: "Cine a organizat rezistența armată în Munții Apuseni în 1848?", options: ["Simion Bărnuțiu","Nicolae Bălcescu","Avram Iancu","Tudor Vladimirescu"], correctAnswer: 2, explanation: "Avram Iancu a organizat rezistența armată a românilor în Munții Apuseni." },
      { question: "Suprafața României Mari a ajuns la:", options: ["137.000 km²","200.000 km²","295.000 km²","350.000 km²"], correctAnswer: 2, explanation: "După Marea Unire, suprafața României a crescut de la 137.000 la 295.000 km²." }
    ]
};
