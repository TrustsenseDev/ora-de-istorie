import { LessonData } from '../types';

export const secolulXxDemocratieTotalitarism: LessonData = {
  id: 'secolul-xx-democratie-totalitarism',
  sections: [
    {
      id: 'introducere-secolul-xx',
      type: 'text',
      title: '01. Secolul XX – Între democrație și totalitarism',
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <p>Secolul al XX-lea a fost marcat de confruntarea dintre regimurile democratice și cele totalitare. După Primul Război Mondial, deși democrația părea să triumfe, dificultățile economice și sociale au favorizat apariția și ascensiunea mișcărilor extremiste.</p>
          <p><strong>Regimul politic</strong> reprezintă ansamblul metodelor și mijloacelor prin care este condusă o societate. În secolul XX, s-au confruntat două tipuri majore de regimuri:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Regimurile democratice:</strong> bazate pe suveranitatea poporului, pluripartidism, separarea puterilor în stat și respectarea drepturilor omului (ex: Marea Britanie, Franța, SUA, România interbelică).</li>
            <li><strong>Regimurile totalitare:</strong> bazate pe controlul absolut al statului asupra societății, partid unic, teroare, poliție politică și cenzură (ex: URSS, Germania Nazistă, Italia Fascistă).</li>
          </ul>
        </div>
      )
    },
    {
      id: 'democratia-in-europa',
      type: 'cards',
      title: '02. Democrația în Europa: Trăsături și Ideologii',
      items: [
        { title: 'Separarea Puterilor', description: 'Puterea legislativă (Parlamentul), executivă (Guvernul) și judecătorească (Instanțele) funcționează independent și se controlează reciproc.', icon: 'landmark' },
        { title: 'Pluralismul Politic', description: 'Existența mai multor partide politice care concurează liber pentru obținerea puterii prin alegeri periodice și corecte.', icon: 'users' },
        { title: 'Drepturi și Libertăți', description: 'Garantarea libertății de exprimare, a presei, a asocierii, dreptul la proprietate privată și egalitatea în fața legii.', icon: 'shield' },
        { title: 'Liberalismul', description: 'Ideologie democratică ce pune accent pe libertatea individuală, economia de piață, inițiativa privată și limitarea intervenției statului.', icon: 'book' },
        { title: 'Conservatorismul', description: 'Ideologie care susține păstrarea tradițiilor, a ordinii sociale, a familiei și a religiei, acceptând schimbările doar treptat.', icon: 'scroll' },
        { title: 'Social-Democrația', description: 'Promovează intervenția statului în economie pentru a asigura protecția socială, reducerea inegalităților și "statul bunăstării".', icon: 'globe' }
      ]
    },
    {
      id: 'totalitarismul-in-europa',
      type: 'text',
      title: '03. Totalitarismul în Europa',
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <p>Regimurile totalitare au apărut în contextul crizelor de după Primul Război Mondial (criza economică, nemulțumirile legate de tratatele de pace, teama de comunism). Ele se caracterizează prin anularea oricărei limite între stat și societate.</p>
          <h3 className="text-xl font-bold text-white mt-6 mb-2">Trăsăturile generale ale totalitarismului:</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Monopolul politic:</strong> Existența unui singur partid politic, condus de un lider suprem (Führer, Duce, Tătuc).</li>
            <li><strong>Teroarea și represiunea:</strong> Folosirea poliției politice (Gestapo în Germania, OVRA în Italia, NKVD/KGB în URSS, Securitatea în România) pentru eliminarea opoziției.</li>
            <li><strong>Controlul ideologic:</strong> Cenzura strictă, propagandă masivă și monopolul statului asupra mijloacelor de informare în masă.</li>
            <li><strong>Controlul economic:</strong> Statul dirijează economia (în comunism prin desființarea proprietății private, în fascism/nazism prin controlul strict al producției).</li>
            <li><strong>Cultul personalității:</strong> Liderul este glorificat și prezentat ca un salvator al națiunii.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'regimuri-totalitare-exemple',
      type: 'cards',
      title: '04. Principalele Regimuri Totalitare',
      items: [
        { title: 'Fascismul (Italia)', description: 'Instaurat de Benito Mussolini în 1922 (Marșul asupra Romei). Ideologie de extremă dreapta. Promova naționalismul extrem, statul corporatist și militarismul. Deviza: "Totul în stat, nimic în afara statului, nimic împotriva statului".', icon: 'flag' },
        { title: 'Nazismul (Germania)', description: 'Instaurat de Adolf Hitler în 1933. Extremă dreapta. Se baza pe rasism (mitul rasei ariene superioare), antisemitism extrem (care a dus la Holocaust), teoria "spațiului vital" (Lebensraum) și revizuirea Tratatului de la Versailles.', icon: 'alert-triangle' },
        { title: 'Comunismul (URSS)', description: 'Instaurat de V.I. Lenin în 1917 (Revoluția Bolșevică) și consolidat de Iosif Stalin. Extremă stânga. Se baza pe marxism-leninism, lupta de clasă, desființarea proprietății private (colectivizare, naționalizare) și dictatura proletariatului.', icon: 'users' }
      ]
    },
    {
      id: 'democratia-in-romania',
      type: 'text',
      title: '05. Democrația în România Interbelică',
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <p>După realizarea Marii Uniri (1918), România a cunoscut o perioadă de consolidare democratică, bazată pe reforme majore și pe o nouă lege fundamentală.</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Reforma agrară (1921):</strong> A dus la exproprierea marilor moșii și împroprietărirea țăranilor, consolidând baza socială a statului.</li>
            <li><strong>Votul universal (1918):</strong> A fost introdus pentru toți bărbații de peste 21 de ani, lărgind masiv participarea la viața politică.</li>
            <li><strong>Constituția din 1923:</strong> A fost una dintre cele mai avansate din Europa. A consacrat principiul separării puterilor în stat, drepturile și libertățile cetățenești (inclusiv pentru minorități) și caracterul național, unitar și indivizibil al statului.</li>
          </ul>
          <h3 className="text-xl font-bold text-white mt-6 mb-2">Principalele partide politice democratice:</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Partidul Național Liberal (PNL):</strong> Condus de familia Brătianu (Ion I.C. Brătianu). Promova doctrina neoliberală <em>"Prin noi înșine"</em>, susținând dezvoltarea industriei naționale și a capitalului autohton.</li>
            <li><strong>Partidul Național Țărănesc (PNȚ):</strong> Înființat în 1926 prin fuziunea Partidului Național Român (Iuliu Maniu) cu Partidul Țărănesc (Ion Mihalache). Promova doctrina <em>"Porților deschise"</em>, punând accent pe agricultură și atragerea capitalului străin.</li>
          </ul>
          <p className="mt-4 text-amber-400"><strong>Criza democrației:</strong> În anii '30, pe fondul Marii Crize Economice (1929-1933) și a instabilității guvernamentale, au apărut mișcări extremiste, cea mai importantă fiind <strong>Garda de Fier</strong> (Mișcarea Legionară), condusă de Corneliu Zelea Codreanu (extremă dreapta, antisemită, naționalistă).</p>
        </div>
      )
    },
    {
      id: 'regimuri-autoritare-romania',
      type: 'timeline',
      title: '06. Regimurile Autoritare și Dictatoriale în România',
      items: [
        { year: '1938-1940', title: 'Dictatura Regală (Carol al II-lea)', description: 'Regele Carol al II-lea instaurează un regim autoritar. Constituția din 1938 anulează separarea puterilor (regele concentrează puterea). Partidele politice sunt dizolvate și se înființează un partid unic: Frontul Renașterii Naționale (FRN).', icon: 'crown' },
        { year: '1940-1941', title: 'Statul Național-Legionar', description: 'După pierderile teritoriale din 1940, Carol al II-lea abdică. Puterea este preluată de generalul Ion Antonescu, care guvernează împreună cu Mișcarea Legionară (Horia Sima). Perioadă marcată de violențe și asasinate politice.', icon: 'alert-triangle' },
        { year: '1941-1944', title: 'Dictatura Militară a lui Ion Antonescu', description: 'După Rebeliunea legionară (ianuarie 1941), Antonescu înlătură legionarii și instaurează o dictatură militară. România intră în Al Doilea Război Mondial alături de Germania Nazistă. Regimul participă la Holocaustul împotriva evreilor și romilor.', icon: 'sword' }
      ]
    },
    {
      id: 'regimul-comunist-romania',
      type: 'text',
      title: '07. Regimul Comunist în România',
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <p>Regimul comunist (totalitar de extremă stânga) a fost impus în România cu sprijinul Armatei Roșii sovietice, după actul de la 23 august 1944.</p>
          <h3 className="text-xl font-bold text-white mt-6 mb-2">Etapele instaurării (1944-1947):</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>6 martie 1945:</strong> Impunerea guvernului pro-comunist condus de Petru Groza.</li>
            <li><strong>Noiembrie 1946:</strong> Falsificarea alegerilor parlamentare, câștigate în mod fraudulos de comuniști (BPD).</li>
            <li><strong>30 decembrie 1947:</strong> Forțarea abdicării Regelui Mihai I și proclamarea Republicii Populare Române (RPR).</li>
          </ul>
          <h3 className="text-xl font-bold text-white mt-6 mb-2">Perioada stalinistă (Gheorghe Gheorghiu-Dej):</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Copierea modelului sovietic în toate domeniile.</li>
            <li><strong>Economie:</strong> Naționalizarea principalelor mijloace de producție (1948) și colectivizarea forțată a agriculturii (1949-1962).</li>
            <li><strong>Represiune:</strong> Înființarea Securității (1948). Zeci de mii de deținuți politici au fost trimiși în închisori (Sighet, Aiud, Pitești) sau la muncă forțată (Canalul Dunăre-Marea Neagră).</li>
          </ul>
          <h3 className="text-xl font-bold text-white mt-6 mb-2">Perioada național-comunistă (Nicolae Ceaușescu, 1965-1989):</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Distanțarea față de Moscova (refuzul de a participa la invadarea Cehoslovaciei în 1968).</li>
            <li>Adoptarea Constituției din 1965 (statul devine Republica Socialistă România - RSR).</li>
            <li>După 1971 ("Tezele din iulie"), se instaurează un <strong>cult exacerbat al personalității</strong> și o dictatură personală severă.</li>
            <li>Anii '80 sunt marcați de o criză economică profundă, raționalizarea alimentelor și frig în locuințe, din dorința de a plăti datoria externă.</li>
          </ul>
          <p className="mt-4 text-emerald-400"><strong>Revenirea la democrație:</strong> Regimul comunist a fost înlăturat prin Revoluția din decembrie 1989. În 1991 a fost adoptată o nouă Constituție democratică.</p>
        </div>
      )
    }
  ],
  quiz: [
    { question: "Care este principiul fundamental al democrației?", options: ["Concentrarea puterii", "Separarea puterilor în stat", "Partidul unic", "Cenzura presei"], correctAnswer: 1, explanation: "Separarea puterilor în stat (legislativă, executivă, judecătorească) este un principiu de bază al democrației." },
    { question: "Ce ideologie democratică promovează intervenția statului pentru protecția socială?", options: ["Liberalismul", "Conservatorismul", "Social-democrația", "Fascismul"], correctAnswer: 2, explanation: "Social-democrația susține statul bunăstării și reducerea inegalităților sociale." },
    { question: "Care dintre următoarele este o trăsătură a totalitarismului?", options: ["Pluralismul politic", "Alegerile libere", "Poliția politică și teroarea", "Respectarea drepturilor omului"], correctAnswer: 2, explanation: "Regimurile totalitare folosesc poliția politică (Gestapo, Securitatea) și teroarea pentru a controla populația." },
    { question: "Cine a instaurat regimul fascist în Italia?", options: ["Adolf Hitler", "Benito Mussolini", "V.I. Lenin", "Iosif Stalin"], correctAnswer: 1, explanation: "Benito Mussolini a instaurat fascismul în Italia în 1922, după Marșul asupra Romei." },
    { question: "Pe ce se baza ideologia nazistă?", options: ["Lupta de clasă", "Rasism și antisemitism", "Economia de piață", "Statul corporatist"], correctAnswer: 1, explanation: "Nazismul se baza pe mitul rasei ariene, antisemitism și teoria spațiului vital." },
    { question: "Care a fost principala caracteristică economică a comunismului?", options: ["Proprietatea privată", "Piața liberă", "Desființarea proprietății private (naționalizare, colectivizare)", "Încurajarea investițiilor străine"], correctAnswer: 2, explanation: "Comunismul a impus proprietatea de stat prin naționalizarea industriei și colectivizarea agriculturii." },
    { question: "Ce constituție a consolidat democrația în România interbelică?", options: ["Constituția din 1866", "Constituția din 1923", "Constituția din 1938", "Constituția din 1948"], correctAnswer: 1, explanation: "Constituția din 1923 a fost una dintre cele mai democratice din Europa, consacrând votul universal și drepturile cetățenești." },
    { question: "Care era doctrina Partidului Național Liberal (PNL) în perioada interbelică?", options: ["Porților deschise", "Prin noi înșine", "Lupta de clasă", "Spațiul vital"], correctAnswer: 1, explanation: "Doctrina 'Prin noi înșine' a PNL susținea dezvoltarea industriei naționale prin forțe proprii." },
    { question: "Ce partid a fost format în 1926 prin unirea PNR cu PȚ?", options: ["Partidul Național Liberal", "Partidul Comunist Român", "Partidul Național Țărănesc", "Garda de Fier"], correctAnswer: 2, explanation: "Partidul Național Țărănesc (PNȚ) a fost format în 1926 și condus de Iuliu Maniu." },
    { question: "Cine a instaurat dictatura regală în România în 1938?", options: ["Ferdinand I", "Carol al II-lea", "Mihai I", "Ion Antonescu"], correctAnswer: 1, explanation: "Carol al II-lea a instaurat dictatura regală în 1938, anulând Constituția din 1923." },
    { question: "Cum se numea partidul unic înființat de Carol al II-lea?", options: ["Partidul Comunist Român", "Garda de Fier", "Frontul Renașterii Naționale", "Partidul Național Creștin"], correctAnswer: 2, explanation: "Frontul Renașterii Naționale a fost partidul unic creat de Carol al II-lea în timpul dictaturii sale." },
    { question: "Ce regim a condus Ion Antonescu între 1940 și 1944?", options: ["Democratic", "Comunist", "Autoritar/Dictatorial militar", "Monarhie constituțională"], correctAnswer: 2, explanation: "Ion Antonescu a condus un regim autoritar, inițial aliat cu Garda de Fier, apoi ca dictatură militară." },
    { question: "Cine a fost primul lider comunist al României (model stalinist)?", options: ["Nicolae Ceaușescu", "Ion Iliescu", "Gheorghe Gheorghiu-Dej", "Lucrețiu Pătrășcanu"], correctAnswer: 2, explanation: "Gheorghe Gheorghiu-Dej a condus regimul comunist din România în perioada stalinistă." },
    { question: "Ce a caracterizat regimul lui Nicolae Ceaușescu în anii '70-'80?", options: ["Liberalizarea presei", "Pluralismul politic", "Național-comunismul și cultul personalității", "Revenirea la democrație"], correctAnswer: 2, explanation: "Regimul lui Ceaușescu s-a remarcat prin național-comunism, independență față de Moscova și un exacerbat cult al personalității." },
    { question: "În ce an a fost înlăturat regimul comunist din România?", options: ["1944", "1965", "1989", "1991"], correctAnswer: 2, explanation: "Regimul comunist a fost înlăturat în urma Revoluției din decembrie 1989." }
  ]
};
