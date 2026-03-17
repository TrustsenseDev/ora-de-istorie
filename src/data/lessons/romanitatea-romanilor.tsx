import { LessonData } from '../types';

export const romanitateaRomanilor: LessonData = {
  id: 'romanitatea-romanilor',
  sections: [
    {
      id: 'introducere',
      type: 'text',
      title: '01. Introducere — Ce este romanitatea?',
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <p><strong>Romanitatea</strong> = ansamblul caracteristicilor moștenite de la romani: limbă latină, instituții, cultură, civilizație.</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Românii sunt singurul popor romanic din Europa de Est.</li>
            <li>Dezbaterea privind originea românilor a fost una <strong>politică</strong>, nu doar academică — implicând revendicări teritoriale (Transilvania).</li>
            <li><strong>Teoria continuității</strong> (românii sunt urmașii daco-romanilor) vs. <strong>teoria imigraționistă</strong> (românii au migrat din sudul Dunării).</li>
          </ul>
        </div>
      )
    },
    {
      id: 'etnogeneza',
      type: 'timeline',
      title: '02. Etnogeneza românilor',
      items: [
        { year: '101-102 d.Hr.', title: 'Primul război dacic', description: 'Traian cucerește o parte din Dacia.', icon: 'sword' },
        { year: '105-106 d.Hr.', title: 'Al doilea război dacic', description: 'Dacia devine provincie romană. Sarmizegetusa distrusă.', icon: 'flag' },
        { year: '106–271 d.Hr.', title: 'Provincia Dacia Romană', description: '~165 de ani de romanizare intensă.', icon: 'landmark' },
        { year: '271–275 d.Hr.', title: 'Retragerea aureliană', description: 'Aurelian retrage armata și administrația la sudul Dunării.', icon: 'arrow-right' },
        { year: 'sec. IV–VII', title: 'Migrațiile popoarelor', description: 'Goți, huni, avari, slavi. Populația daco-romană supraviețuiește.', icon: 'users' },
        { year: 'sec. VII–IX', title: 'Formarea poporului român', description: 'Sinteza completă daco-romano-slavă.', icon: 'check-circle' }
      ]
    },
    {
      id: 'continuitate',
      type: 'text',
      title: '03. Teoria Continuității',
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <p>Susține că românii s-au format la nord de Dunăre și au continuat să trăiască acolo neîntrerupt.</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Populația daco-romană a rămas la nord de Dunăre după retragerea aureliană (271-275).</li>
            <li>Romanizarea a fost atât de profundă încât nici migrațiile nu au putut distruge identitatea latinofonă.</li>
            <li>Continuitatea dovedită de: limbă, toponomastică, arheologie, izvoare scrise.</li>
            <li>Creștinismul în limba latină — dovadă că românii nu au trecut prin slavizare lingvistică totală.</li>
          </ul>
          <p className="text-emerald-400 mt-4"><strong>Susținători:</strong> B.P. Hasdeu, A.D. Xenopol, N. Iorga, V. Pârvan, C.C. Giurescu, I.A. Pop.</p>
        </div>
      )
    },
    {
      id: 'imigratie',
      type: 'text',
      title: '04. Teoria Imigraționistă (Roeslerianismul)',
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <p>Susține că românii ar fi migrat din sudul Dunării în Evul Mediu — teorie cu motivații politice.</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Formulată de <strong>Robert Roesler</strong> (1871) în lucrarea <em>Romänische Studien</em>.</li>
            <li>Susținea că românii s-au format la sudul Dunării și au migrat spre nord în sec. XII-XIII.</li>
            <li>Argumente: absența documentelor despre români în Transilvania înainte de sec. XIII; influența slavă în limbă.</li>
            <li><strong>Context politic:</strong> servea intereselor Austro-Ungariei de a nega drepturile românilor asupra Transilvaniei.</li>
          </ul>
          <p className="text-red-400 mt-4"><strong>Susținători:</strong> Franz Joseph Sulzer, Johann Christian von Engel, Jakob Philipp Fallmerayer.</p>
        </div>
      )
    },
    {
      id: 'surse-antice',
      type: 'cards',
      title: '05. Surse Antice despre daci și romani',
      items: [
        { title: 'Columna lui Traian (113 d.Hr.)', description: 'Ridicată în Roma, comemorând războaiele dacice. Conține 155 de scene reprezentând luptele, ritualurile, populația dacică.', icon: 'landmark' },
        { title: 'Dio Cassius — Historia Romana', description: 'sec. II–III d.Hr. Menționează că Traian a colonizat Dacia cu oameni „din toată lumea romană”. Relatează sinuciderea lui Decebal.', icon: 'book' },
        { title: 'Eutropius — Breviarium', description: 'sec. IV d.Hr. Menționează că Traian a dus o „mulțime infinită de oameni” pentru colonizarea Daciei.', icon: 'scroll' },
        { title: 'Vopiscus — Historia Augusta', description: 'sec. IV d.Hr. Descrie retragerea lui Aurelian: a evacuat armata și provincialii (nu toată populația).', icon: 'file-text' }
      ]
    },
    {
      id: 'istorici-romani',
      type: 'timeline',
      title: '06. Istorici Români despre Romanitate',
      items: [
        { year: 'sec. XVII', title: 'Grigore Ureche', description: 'Letopisețul Țării Moldovei — „Rumânii... de la Râm se trag.” Prima afirmare a originii romane de către un cronicar moldovean.', icon: 'book' },
        { year: '1686', title: 'Miron Costin', description: 'De neamul moldovenilor — demonstrează sistematic originea romană; afirmă că numele „român” vine de la „roman”.', icon: 'book' },
        { year: 'sec. XVII-XVIII', title: 'Stolnicul Constantin Cantacuzino', description: 'Istoria Țării Românești — susține originea romană, recunoaște și componenta dacică.', icon: 'book' },
        { year: '1673-1723', title: 'Dimitrie Cantemir', description: 'Hronicul vechimei a romano-moldo-vlahilor — operă monumentală; susține originea romană și continuitatea.', icon: 'book' },
        { year: '1791', title: 'Școala Ardeleană', description: 'S. Micu, Gh. Șincai, P. Maior — „Supplex Libellus Valachorum”; susțin originea pur romană (negând componenta dacică).', icon: 'scroll' },
        { year: '1838-1907', title: 'B.P. Hasdeu', description: 'Istoria critică a românilor — reabilitează componenta dacică; susține teoria continuității.', icon: 'book' },
        { year: '1884', title: 'A.D. Xenopol', description: 'Teoria lui Roesler — răspuns direct teoriei imigraționiste; demontează punct cu punct argumentele lui Roesler.', icon: 'shield' },
        { year: '1926', title: 'Vasile Pârvan', description: 'Getica — studiu monumental al civilizației geto-dacice.', icon: 'book' },
        { year: '1871-1940', title: 'Nicolae Iorga', description: 'Cea mai prolifică figură a istoriografiei române; demonstrează prezența românilor în izvoarele medievale.', icon: 'book' }
      ]
    },
    {
      id: 'istorici-straini',
      type: 'cards',
      title: '07. Istorici Străini despre Romanitate',
      items: [
        { title: 'Pro-continuitate', description: 'Aeneas Sylvius Piccolomini (Papa Pius II, sec. XV) — menționează originea romană. Antonio Bonfini (sec. XV–XVI) — recunoaște latinitatea limbii. Charles Upson Clark.', icon: 'check-circle' },
        { title: 'Anti-continuitate', description: 'Robert Roesler (1871) — teoria migrației din sud. Franz Joseph Sulzer (sec. XVIII) — neagă prezența românilor în Transilvania. J.C. von Engel, J.P. Fallmerayer.', icon: 'x-circle' },
        { title: 'Recunoașterea internațională', description: 'Cronicile medievale bizantine (Kekaumenos, sec. XI), bulgare și sârbești menționează „vlahii” în teritoriile nord-dunărene din sec. X–XI.', icon: 'globe' }
      ]
    },
    {
      id: 'limba',
      type: 'text',
      title: '08. Argumente Lingvistice',
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>~75%</strong> din vocabularul de bază are origine latină.</li>
            <li>Gramatica este fundamental latină: declinări, conjugări, structura frazei.</li>
            <li>Elementele slave (~15%) sunt împrumuturi ulterioare, nu structura de bază.</li>
            <li>Există <strong>~150-160 de cuvinte de origine dacică</strong> (vatră, mazăre, balaur, brad, copil, mal, groapă).</li>
          </ul>
          <p className="text-amber-400 mt-4"><strong>Creștinismul latin:</strong> Terminologia creștinismului de bază este latină: <em>Dumnezeu</em> (Dominus Deus), <em>înger</em> (angelus), <em>biserică</em> (basilica), <em>cruce</em> (crux), <em>Paști</em> (Pascha). Demonstrează că românii au adoptat creștinismul în perioada romană, în limba latină.</p>
        </div>
      )
    },
    {
      id: 'arheologie',
      type: 'cards',
      title: '09. Argumente Arheologice și Toponomastice',
      items: [
        { title: 'Cultura Dridu', description: 'sec. VIII–X — continuitate materială a populației daco-romane la nord de Dunăre.', icon: 'map-pin' },
        { title: 'Descoperiri creștine', description: 'Obiecte cu inscripții latine (ex. Donariul de la Biertan) și morminte cu ritual romano-creștin (sec. IV–VII).', icon: 'cross' },
        { title: 'Tezaure monetare', description: 'Tezaure de monede romane (sec. III–IV) — dovedesc circulația monetară și prezența populației.', icon: 'coins' },
        { title: 'Toponimie și Hidronimie', description: 'Hidronime de origine latină sau dacică (Mureș, Olt, Someș). Localități cu rădăcini latine: Turda (Potaissa), Cluj (Napoca), Alba Iulia (Apulum).', icon: 'map' }
      ]
    },
    {
      id: 'concluzii',
      type: 'text',
      title: '10. Concluzii',
      content: (
        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <p><strong>Teoria continuității</strong> (românii s-au format la nord de Dunăre) este susținută de argumente solide: limbă latină, creștinism latin, toponomastică, arheologie.</p>
          <p><strong>Teoria imigraționistă</strong> (Roesler, 1871) a avut o motivație politică austro-ungară pentru a nega drepturile românilor în Transilvania.</p>
        </div>
      )
    }
  ],
  quiz: [
    { question: "Ce înseamnă 'romanitate'?", options: ["Originea dacică","Ansamblul caracteristicilor moștenite de la romani","Migrația din sudul Dunării","Influența slavă"], correctAnswer: 1, explanation: "Romanitatea reprezintă ansamblul caracteristicilor moștenite de la romani (limbă, cultură, instituții)." },
    { question: "Cine a formulat teoria imigraționistă în 1871?", options: ["Alexandru Xenopol","Nicolae Iorga","Robert Roesler","Vasile Pârvan"], correctAnswer: 2, explanation: "Robert Roesler a formulat teoria imigraționistă în lucrarea 'Romänische Studien' (1871)." },
    { question: "În ce ani a cucerit Traian Dacia (al doilea război dacic)?", options: ["101-102 d.Hr.","105-106 d.Hr.","117-118 d.Hr.","85-86 d.Hr."], correctAnswer: 1, explanation: "Al doilea război dacic, în urma căruia Dacia a devenit provincie romană, a avut loc în anii 105-106 d.Hr." },
    { question: "Cine a scris 'De neamul moldovenilor' (1686)?", options: ["Grigore Ureche","Stolnicul Cantacuzino","Miron Costin","Dimitrie Cantemir"], correctAnswer: 2, explanation: "Miron Costin a scris 'De neamul moldovenilor' în 1686." },
    { question: "Ce a cerut 'Supplex Libellus Valachorum' (1791)?", options: ["Independența față de otomani","Drepturi pentru românii din Transilvania","Unirea principatelor","Desființarea iobăgiei"], correctAnswer: 1, explanation: "A fost o petiție a Școlii Ardelene cerând drepturi politice pentru românii din Transilvania." },
    { question: "Câte cuvinte de origine dacică există în română?", options: ["Aproximativ 30","Aproximativ 80","Aproximativ 150-160","Aproximativ 400"], correctAnswer: 2, explanation: "Se estimează că în limba română s-au păstrat aproximativ 150-160 de cuvinte de origine dacică." },
    { question: "Ce dovedește terminologia creștină latină (Dumnezeu, înger, cruce)?", options: ["Că românii sunt catolici","Că românii au adoptat creștinismul în epoca romană, în latină","Că românii provin din Roma","Că românii au migrat din Bizanț"], correctAnswer: 1, explanation: "Terminologia latină dovedește adoptarea creștinismului în perioada romană, la nord de Dunăre." },
    { question: "Cine a răspuns teoriei lui Roesler cu lucrarea 'Teoria lui Roesler' (1884)?", options: ["Nicolae Iorga","Vasile Pârvan","Alexandru Xenopol","Bogdan Petriceicu Hasdeu"], correctAnswer: 2, explanation: "Alexandru Xenopol a demontat argumentele lui Roesler în lucrarea sa din 1884." },
    { question: "Ce este cultura Dridu?", options: ["O cultură dacică pre-romană","O cultură din sec. VIII-X dovedind continuitatea la nord de Dunăre","O cultură slavă medievală","O cultură romană clasică"], correctAnswer: 1, explanation: "Cultura Dridu (sec. VIII-X) este o dovadă arheologică a continuității populației daco-romane." },
    { question: "Cine menționează 'Rumânii...de la Râm se trag'?", options: ["Miron Costin","Grigore Ureche","Dimitrie Cantemir","Petru Maior"], correctAnswer: 1, explanation: "Grigore Ureche a afirmat acest lucru în Letopisețul Țării Moldovei." },
    { question: "Ce procent din vocabularul de bază este de origine latină?", options: ["~30%","~50%","~75%","~95%"], correctAnswer: 2, explanation: "Aproximativ 75% din vocabularul de bază al limbii române este de origine latină." },
    { question: "Care era contextul politic al teoriei imigraționiste?", options: ["Servea Rusiei","Servea Austro-Ungariei","Servea Franței","Nu era politică"], correctAnswer: 1, explanation: "Teoria servea intereselor Austro-Ungariei de a nega drepturile românilor asupra Transilvaniei." },
    { question: "Cine a scris 'Getica' (1926)?", options: ["Nicolae Iorga","Alexandru Xenopol","Vasile Pârvan","B.P. Hasdeu"], correctAnswer: 2, explanation: "Vasile Pârvan a scris 'Getica', un studiu monumental al civilizației geto-dacice." },
    { question: "Columna lui Traian a fost ridicată în ce an?", options: ["106 d.Hr.","113 d.Hr.","275 d.Hr.","101 d.Hr."], correctAnswer: 1, explanation: "Columna lui Traian a fost inaugurată la Roma în anul 113 d.Hr." },
    { question: "Care dintre Școlile Ardelene susțineau originea pur romană (exagerând)?", options: ["Xenopol, Iorga, Pârvan","Micu, Șincai, Maior","Ureche, Costin, Cantemir","Hasdeu, Xenopol, Iorga"], correctAnswer: 1, explanation: "Samuil Micu, Gheorghe Șincai și Petru Maior (Școala Ardeleană) au susținut originea pur romană." }
  ]
};
