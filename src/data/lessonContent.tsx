import { ReactNode } from 'react';

export type SectionType = 'text' | 'timeline' | 'cards';

export interface LessonData {
  id: string;
  sections: {
    id: string;
    type: SectionType;
    title: string;
    content?: ReactNode;
    items?: any[];
  }[];
  quiz: {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
}

export const lessonContent: Record<string, LessonData> = {
  'autonomii-locale-si-institutii-centrale': {
    id: 'autonomii-locale-si-institutii-centrale',
    sections: [
      {
        id: 'autonomii-locale',
        type: 'text',
        title: '01. Autonomii Locale',
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
            <p><strong>Autonomiile locale</strong> reprezintă forme de organizare teritorial-politică, specifice Evului Mediu, prin care o comunitate se guvernează singură, având propriile legi și instituții, dar recunoscând adesea suzeranitatea unui stat mai puternic.</p>
            <h3 className="text-xl font-bold text-white mt-6 mb-2">Cauzele apariției autonomiilor locale:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Creșterea demografică:</strong> sporirea populației a dus la necesitatea unei organizări mai complexe.</li>
              <li><strong>Dezvoltarea economică:</strong> apariția unor noi îndeletniciri, dezvoltarea comerțului și a meșteșugurilor.</li>
              <li><strong>Pericolul extern:</strong> necesitatea apărării în fața invaziilor migratorilor (maghiari, pecenegi, cumani, tătari).</li>
            </ul>
            <h3 className="text-xl font-bold text-white mt-6 mb-2">Tipuri de autonomii locale:</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Obștea sătească:</strong> cea mai veche formă de organizare, bazată pe proprietatea comună asupra pământului (păduri, pășuni, ape) și proprietatea privată asupra casei și lotului de pământ cultivat. Era condusă de un <strong>jude</strong> (sau cneaz) și un sfat al oamenilor buni și bătrâni.</li>
              <li><strong>Cnezatele:</strong> uniuni de obști sătești, conduse de un cneaz, cu atribuții militare, judecătorești și administrative.</li>
              <li><strong>Voievodatele:</strong> uniuni de cnezate, conduse de un voievod, având o organizare superioară, cu caracter militar mai pronunțat.</li>
              <li><strong>Țările (Terrae):</strong> regiuni mai întinse, cu o identitate geografică și istorică distinctă (ex: Țara Făgărașului, Țara Maramureșului, Țara Hațegului).</li>
              <li><strong>Codrii și câmpurile:</strong> forme de organizare specifice anumitor zone geografice (ex: Codrii Cosminului, Câmpul lui Dragoș).</li>
            </ul>
          </div>
        ),
      },
      {
        id: 'constituirea-statelor',
        type: 'text',
        title: '02. Constituirea Statelor Medievale Românești',
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
            <h3 className="text-xl font-bold text-white mt-6 mb-2">Întemeierea Transilvaniei</h3>
            <p>S-a realizat treptat, prin cucerirea și organizarea teritoriului de către regatul maghiar (secolele XI-XIII). Etapele cuceririi:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Secolul XI:</strong> maghiarii pătrund în nord-vestul și centrul Transilvaniei, învingându-i pe conducătorii locali (Gelu, Glad, Menumorut - atestați de <em>Gesta Hungarorum</em>).</li>
              <li><strong>Secolul XII:</strong> cucerirea se extinde spre est și sud. Pentru a consolida stăpânirea și a apăra granițele, regii maghiari colonizează <strong>sași</strong> (populație de origine germană, meșteșugari și negustori) și <strong>secui</strong> (populație de origine turcică, cu rol militar).</li>
              <li><strong>Secolul XIII:</strong> cucerirea este finalizată. Sunt aduși <strong>Cavalerii Teutoni</strong> în Țara Bârsei (1211-1225) pentru a apăra granița de est și a răspândi catolicismul, dar sunt expulzați deoarece au încercat să-și creeze un stat independent.</li>
            </ul>
            <p><strong>Organizarea:</strong> Transilvania a fost organizată ca <strong>voievodat</strong>, vasal coroanei maghiare. Primul voievod atestat documentar este <strong>Leustachius</strong> (1176). Românii, treptat, sunt excluși din viața politică, mai ales după 1366 (diplomele regelui Ludovic I de Anjou condiționau calitatea de nobil de apartenența la catolicism).</p>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">Întemeierea Țării Românești</h3>
            <p>S-a realizat prin unificarea formațiunilor politice prestatale de la sud de Carpați (Cnezatele lui Ioan și Farcaș, Voievodatele lui Litovoi și Seneslau - atestate de <em>Diploma Cavalerilor Ioaniți</em> din 1247).</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Tradiția istorică:</strong> vorbește despre "descălecatul" lui Radu Negru din Făgăraș la Câmpulung (1290).</li>
              <li><strong>Etapele formării:</strong>
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li><strong>Basarab I (c. 1310-1352):</strong> unifică formațiunile, devine vasal regelui maghiar Carol Robert de Anjou. În urma conflictului cu acesta, Basarab obține independența Țării Românești prin victoria de la <strong>Posada (1330)</strong>.</li>
                  <li><strong>Nicolae Alexandru (1352-1364):</strong> consolidează statul, înființează Mitropolia Țării Românești la Curtea de Argeș (1359), recunoscută de Patriarhia de la Constantinopol.</li>
                  <li><strong>Vladislav Vlaicu (1364-1377):</strong> bate primele monede, respinge primele atacuri otomane, înființează a doua mitropolie (la Severin).</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">Constituirea Moldovei</h3>
            <p>S-a realizat la est de Carpați, în contextul luptei împotriva tătarilor.</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Etapa I (Marca de apărare):</strong> Regele maghiar înființează o marcă de apărare împotriva tătarilor, condusă de <strong>Dragoș</strong>, voievod din Maramureș (c. 1352-1353). Aceasta era dependentă de Ungaria.</li>
              <li><strong>Etapa II (Independența):</strong> <strong>Bogdan</strong>, un alt voievod din Maramureș, aflat în conflict cu regele maghiar, trece munții în Moldova (1359), îi înlătură pe urmașii lui Dragoș și obține independența noului stat, respingând atacurile maghiare (1364-1365).</li>
              <li><strong>Consolidarea:</strong>
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li><strong>Lațcu (1365-1373):</strong> acceptă catolicismul și înființează o episcopie catolică la Siret pentru a obține protecție papală împotriva Ungariei și Poloniei.</li>
                  <li><strong>Petru Mușat (1375-1391):</strong> bate primele monede, depune jurământ de vasalitate regelui Poloniei (pentru a contracara pretențiile Ungariei), înființează Mitropolia Moldovei la Suceava (recunoscută mai târziu).</li>
                  <li><strong>Roman I (1391-1394):</strong> desăvârșește unificarea teritorială, numindu-se "domn de la munte până la mare".</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">Constituirea Dobrogei</h3>
            <p>S-a format prin unificarea formațiunilor locale dintre Dunăre și Marea Neagră. Nucleul a fost "Țara Cărvunei".</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Balica (c. 1346-1354):</strong> intervine în luptele pentru tronul Imperiului Bizantin.</li>
              <li><strong>Dobrotici (1354-1386):</strong> obține titlul de despot, unifică teritoriul, statul devenind independent.</li>
              <li><strong>Ivanco (1386-1388):</strong> bate monedă proprie, se confruntă cu atacurile otomane. În 1388, Dobrogea este alipită Țării Românești de către Mircea cel Bătrân, pentru a o proteja de otomani.</li>
            </ul>
          </div>
        ),
      },
      {
        id: 'institutii-centrale',
        type: 'text',
        title: '03. Instituții Centrale',
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
            <h3 className="text-xl font-bold text-white mt-6 mb-2">Domnia</h3>
            <p>Instituția centrală supremă în Țara Românească și Moldova. Titlul oficial era de "mare voievod și domn".</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Voievod:</strong> comandantul suprem al armatei (lider militar).</li>
              <li><strong>Domn (Dominus):</strong> stăpânul absolut al țării (lider politic și administrativ).</li>
              <li><strong>Originea puterii:</strong> de drept divin ("din mila lui Dumnezeu").</li>
              <li><strong>Succesiunea:</strong> sistemul ereditar-electiv (putea fi ales orice membru al familiei domnitoare - os domnesc - de către boieri). Acest sistem a generat numeroase lupte pentru tron.</li>
              <li><strong>Atribuții:</strong>
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li><em>Politice:</em> conducea politica internă și externă, încheia tratate, declara război și pace.</li>
                  <li><em>Administrative:</em> numea și revoca dregătorii.</li>
                  <li><em>Legislative:</em> emitea acte cu putere de lege (hrisoave).</li>
                  <li><em>Judecătorești:</em> instanța supremă de judecată (putea pronunța pedeapsa cu moartea).</li>
                  <li><em>Economice:</em> bătea monedă, stabilea impozitele, era proprietarul întregului pământ al țării (dominium eminens).</li>
                </ul>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">Sfatul Domnesc</h3>
            <p>Organism consultativ, format din cei mai importanți boieri (marii dregători). Asista domnul în luarea deciziilor importante (război, pace, tratate, judecăți). În timp, influența sa a crescut, uneori limitând puterea domnului.</p>
            <p>Principalele dregătorii:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Banul Olteniei:</strong> cel mai important dregător în Țara Românească, locțiitorul domnului în Oltenia.</li>
              <li><strong>Portarul Sucevei:</strong> dregător important în Moldova, cu atribuții militare.</li>
              <li><strong>Vornicul:</strong> șeful curții domnești, cu atribuții judecătorești.</li>
              <li><strong>Logofătul:</strong> șeful cancelariei domnești (redacta actele).</li>
              <li><strong>Vistiernicul:</strong> responsabil cu finanțele țării.</li>
              <li><strong>Spătarul:</strong> comandantul armatei (când domnul nu era prezent).</li>
              <li><strong>Paharnicul, Stolnicul, Postelnicul:</strong> dregătorii de curte.</li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">Adunarea Țării (Stările Generale)</h3>
            <p>Instituție reprezentativă, convocată ocazional de domn pentru probleme excepționale (alegerea domnului, schimbarea religiei, tratate importante). Era formată din reprezentanții stărilor privilegiate: boierimea, clerul înalt și, uneori, orășenii și țăranii liberi. În Transilvania se numea <strong>Congregația Generală</strong> (ulterior Dieta), din care românii au fost excluși după 1437 (Unio Trium Nationum).</p>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">Biserica</h3>
            <p>Instituție fundamentală, strâns legată de domnie. Domnul era protectorul bisericii, iar biserica legitima puterea domnului (prin ungerea cu mir). Mitropolitul era al doilea om în stat, membru de drept al Sfatului domnesc și locțiitor al domnului în caz de vacanță a tronului.</p>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">Armata</h3>
            <p>Era formată din:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Oastea cea mică:</strong> armata permanentă, formată din garda domnului, cetele boierilor și curteni. Intervenea rapid în caz de atac.</li>
              <li><strong>Oastea cea mare:</strong> convocată doar în caz de pericol major, formată din toți bărbații capabili să poarte arme (inclusiv țărani).</li>
            </ul>

            <h3 className="text-xl font-bold text-white mt-6 mb-2">Administrația și Justiția</h3>
            <p>Țara Românească era împărțită în <strong>județe</strong> (conduse de județi), iar Moldova în <strong>ținuturi</strong> (conduse de pârcălabi). Justiția se baza pe <strong>obiceiul pământului</strong> (dreptul cutumiar - <em>Jus Valachicum</em>) și, ulterior, pe legi scrise (pravile).</p>
          </div>
        ),
      },
    ],
    quiz: [
      {
        question: "Care a fost principala cauză a apariției autonomiilor locale în spațiul românesc?",
        options: [
          "Dorința de a crea imperii",
          "Necesitatea apărării în fața invaziilor migratorilor, creșterea demografică și dezvoltarea economică",
          "Influența culturii occidentale",
          "Adoptarea catolicismului"
        ],
        correctAnswer: 1,
        explanation: "Autonomiile locale au apărut din nevoi practice: apărarea împotriva migratorilor, gestionarea unei populații în creștere și organizarea noilor activități economice."
      },
      {
        question: "Ce instituție reprezenta cea mai veche formă de organizare a românilor?",
        options: [
          "Voievodatul",
          "Sfatul Domnesc",
          "Obștea sătească",
          "Dieta"
        ],
        correctAnswer: 2,
        explanation: "Obștea sătească a fost forma de bază și cea mai veche de organizare, bazată pe proprietatea comună a pământului (păduri, ape) și condusă de un jude."
      },
      {
        question: "Cine a fost primul voievod atestat documentar în Transilvania (1176)?",
        options: [
          "Gelu",
          "Leustachius",
          "Glad",
          "Menumorut"
        ],
        correctAnswer: 1,
        explanation: "Leustachius este primul voievod al Transilvaniei atestat documentar în anul 1176, Transilvania fiind organizată ca voievodat vasal coroanei maghiare."
      },
      {
        question: "Ce populații au fost colonizate de regii maghiari în Transilvania pentru a apăra granițele?",
        options: [
          "Cumani și pecenegi",
          "Sași și secui",
          "Slavi și bulgari",
          "Tătari și avari"
        ],
        correctAnswer: 1,
        explanation: "Regii maghiari au colonizat sași (meșteșugari și negustori germani) și secui (populație turcică cu rol militar) pentru a consolida stăpânirea și a apăra granițele."
      },
      {
        question: "Prin ce bătălie a obținut Basarab I independența Țării Românești?",
        options: [
          "Bătălia de la Rovine (1395)",
          "Bătălia de la Podul Înalt (1475)",
          "Bătălia de la Posada (1330)",
          "Bătălia de la Călugăreni (1595)"
        ],
        correctAnswer: 2,
        explanation: "Basarab I a obținut independența Țării Românești învingându-l pe regele maghiar Carol Robert de Anjou în bătălia de la Posada (1330)."
      },
      {
        question: "Cum s-a realizat constituirea Moldovei în a doua etapă (obținerea independenței)?",
        options: [
          "Prin descălecatul lui Radu Negru",
          "Prin trecerea munților de către Bogdan din Maramureș și înlăturarea urmașilor lui Dragoș (1359)",
          "Prin unificarea cu Țara Românească",
          "Prin cucerirea de către Imperiul Otoman"
        ],
        correctAnswer: 1,
        explanation: "Bogdan, voievod din Maramureș, a trecut în Moldova, i-a înlăturat pe urmașii lui Dragoș (reprezentanții suzeranității maghiare) și a obținut independența statului."
      },
      {
        question: "Cine a unificat teritoriul Dobrogei, obținând titlul de despot?",
        options: [
          "Balica",
          "Ivanco",
          "Mircea cel Bătrân",
          "Dobrotici"
        ],
        correctAnswer: 3,
        explanation: "Dobrotici (1354-1386) a unificat formațiunile din Dobrogea, a obținut titlul de despot, iar statul a devenit independent."
      },
      {
        question: "Care era titlul oficial al conducătorului în Țara Românească și Moldova?",
        options: [
          "Rege și Împărat",
          "Mare voievod și domn",
          "Principe și Duce",
          "Cneaz și Jude"
        ],
        correctAnswer: 1,
        explanation: "Titlul oficial era 'mare voievod' (comandant suprem al armatei) și 'domn' (stăpân absolut al țării, din latinescul dominus)."
      },
      {
        question: "Ce sistem de succesiune la tron exista în Țara Românească și Moldova?",
        options: [
          "Ereditar absolut (primul născut)",
          "Electiv pur (ales de popor)",
          "Ereditar-electiv (ales de boieri din rândul familiei domnitoare)",
          "Numit direct de Patriarh"
        ],
        correctAnswer: 2,
        explanation: "Sistemul ereditar-electiv permitea oricărui membru al familiei domnitoare ('os domnesc') să fie ales de către boieri, ceea ce a generat multe lupte pentru tron."
      },
      {
        question: "Care era rolul Sfatului Domnesc?",
        options: [
          "Să aleagă țăranii liberi",
          "Să conducă armata în mod exclusiv",
          "Organism consultativ format din marii boieri, care asista domnul în decizii",
          "Să redacteze legile fără acordul domnului"
        ],
        correctAnswer: 2,
        explanation: "Sfatul Domnesc era format din marii dregători și avea rol consultativ, asistând domnul în luarea deciziilor importante (război, pace, judecăți)."
      },
      {
        question: "Ce dregător era șeful cancelariei domnești și redacta actele?",
        options: [
          "Vornicul",
          "Logofătul",
          "Vistiernicul",
          "Spătarul"
        ],
        correctAnswer: 1,
        explanation: "Logofătul era șeful cancelariei domnești, responsabil cu redactarea actelelor oficiale (hrisoavelor) emise de domn."
      },
      {
        question: "Ce era Adunarea Țării (Stările Generale)?",
        options: [
          "O armată permanentă",
          "O instanță de judecată pentru țărani",
          "Instituție reprezentativă convocată ocazional pentru probleme excepționale",
          "Sfatul zilnic al domnului"
        ],
        correctAnswer: 2,
        explanation: "Adunarea Țării era convocată doar în situații excepționale (alegerea domnului, tratate) și era formată din boieri, cler și uneori orășeni/țărani liberi."
      },
      {
        question: "Din ce era formată 'Oastea cea mare'?",
        options: [
          "Doar din mercenari străini",
          "Din garda personală a domnului",
          "Din toți bărbații capabili să poarte arme, convocată în caz de pericol major",
          "Doar din marii boieri"
        ],
        correctAnswer: 2,
        explanation: "Oastea cea mare reprezenta mobilizarea generală a tuturor bărbaților apți de luptă (inclusiv țăranii) și era convocată doar în situații de extremă necesitate."
      },
      {
        question: "Cum se numea dreptul cutumiar (obiceiul pământului) pe care se baza justiția?",
        options: [
          "Jus Valachicum",
          "Lex Romana",
          "Codul lui Iustinian",
          "Magna Charta"
        ],
        correctAnswer: 0,
        explanation: "Justiția în țările române se baza inițial pe 'obiceiul pământului', un drept cutumiar nescris, cunoscut în documente ca Jus Valachicum."
      },
      {
        question: "Cine a înființat prima Mitropolie a Țării Românești la Curtea de Argeș (1359)?",
        options: [
          "Basarab I",
          "Nicolae Alexandru",
          "Vladislav Vlaicu",
          "Mircea cel Bătrân"
        ],
        correctAnswer: 1,
        explanation: "Nicolae Alexandru (1352-1364) a consolidat statul și a înființat Mitropolia Țării Românești la Curtea de Argeș în 1359, recunoscută de Constantinopol."
      }
    ]
  },
  'statul-roman-modern': {
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
  },
  'romanitatea-romanilor': {
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
  },
  'constitutiile-romaniei': {
    id: 'constitutiile-romaniei',
    sections: [
      {
        id: 'democratice',
        type: 'text',
        title: '01. Constituții Democratice',
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
            <p>Legile fundamentale care au garantat drepturile cetățenești. Principii generale:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Separarea puterilor în stat:</strong> legislativă, executivă, judecătorească.</li>
              <li><strong>Suveranitatea națională:</strong> întreaga putere emană de la națiune.</li>
              <li><strong>Drepturi și libertăți:</strong> garantate prin lege fundamentală.</li>
              <li><strong>Pluralism politic:</strong> existența mai multor centre de putere și partide.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'c1866',
        type: 'cards',
        title: '02. Constituția din 1866',
        items: [
          { title: 'Context', description: 'Promulgată la 1 iulie 1866, după venirea lui Carol I. Model: Constituția Belgiană din 1831. Elaborată fără concursul puterilor străine — act de suveranitate. Face abstracție de suzeranitatea otomană.', icon: 'scroll' },
          { title: 'Prevederi Cheie', description: 'Nume oficial: România. Monarhie constituțională ereditară. Vot cenzitar (alegătorii împărțiți în colegii după avere). Proprietatea privată: sacră și inviolabilă.', icon: 'crown' }
        ]
      },
      {
        id: 'c1923',
        type: 'cards',
        title: '03. Constituția din 1923',
        items: [
          { title: 'Context', description: 'Necesitate: unificarea legislativă după Marea Unire din 1918. Adoptată sub guvernul PNL (Ion I.C. Brătianu). Menține modelul din 1866, dar îl adaptează.', icon: 'map' },
          { title: 'Prevederi', description: 'Stat național, unitar și indivizibil. Vot universal (doar bărbații peste 21 ani). Protecția minorităților. Proprietatea are o funcție socială (poate fi expropriată pentru utilitate publică).', icon: 'users' }
        ]
      },
      {
        id: 'c1991',
        type: 'cards',
        title: '04. Constituția din 1991',
        items: [
          { title: 'Context', description: 'Urmare a Revoluției din 1989 și prăbușirii comunismului. Pluralism politic și economie de piață. Revizuită în 2003 pentru aderarea la NATO și UE.', icon: 'flag' },
          { title: 'Prevederi', description: 'Forma de guvernământ: Republică. Președintele ales prin vot universal (mandat de 5 ani din 2003). Curtea Constituțională — garantul respectării legii fundamentale. Curtea de Conturi și Avocatul Poporului.', icon: 'landmark' }
        ]
      },
      {
        id: 'autoritare',
        type: 'cards',
        title: '05. Constituții Autoritare (1938)',
        items: [
          { title: 'Constituția din 1938', description: 'Instaurată de Carol al II-lea (dictatura regală). Regele devine factorul politic central („Regele domnește și guvernează”). Parlamentul capătă un rol decorativ. Femeile primesc drept de vot (doar formal). Vârsta de vot urcă la 30 de ani.', icon: 'alert-circle' }
        ]
      },
      {
        id: 'totalitare',
        type: 'timeline',
        title: '06. Constituții Totalitare',
        items: [
          { year: '1948', title: 'Constituția din 1948', description: 'Prima constituție comunistă. Numele devine Republica Populară Română (RPR). Inspirată de modelul sovietic din 1936.', icon: 'file-text' },
          { year: '1952', title: 'Constituția din 1952', description: 'Accentuează subordonarea față de URSS. Menționează rolul conducător al partidului și lupta împotriva „exploatatorilor”.', icon: 'file-text' },
          { year: '1965', title: 'Constituția din 1965', description: 'Sub Nicolae Ceaușescu. Numele devine Republica Socialistă România (RSR). PCR este declarat forța politică conducătoare.', icon: 'file-text' }
        ]
      },
      {
        id: 'totalitare-trasaturi',
        type: 'text',
        title: 'Trăsături Comune (Totalitare)',
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Negarea separării puterilor: <strong>Marea Adunare Națională</strong> este organul suprem.</li>
              <li>Proprietatea socialistă (de stat sau cooperatistă) devine baza economiei.</li>
              <li>Drepturile cetățenești sunt înscrise dar <strong>nu sunt respectate</strong>.</li>
              <li>Partidul Comunist controlează toate instituțiile statului.</li>
            </ul>
          </div>
        )
      }
    ],
    quiz: [
      { question: "Care a fost prima constituție internă a României?", options: ["Constituția din 1866", "Constituția din 1923", "Constituția din 1938", "Statutul Dezvoltător"], correctAnswer: 0, explanation: "Constituția din 1866 a fost prima constituție internă a României moderne." },
      { question: "Ce constituție a avut la bază modelul belgian din 1831?", options: ["1923", "1866", "1991", "1938"], correctAnswer: 1, explanation: "Constituția din 1866 a fost modelată după Constituția Belgiei din 1831." },
      { question: "Constituția din 1923 introducea:", options: ["Votul cenzitar", "Votul universal (bărbați)", "Votul prin bresle", "Votul femeilor"], correctAnswer: 1, explanation: "Constituția din 1923 a introdus votul universal pentru bărbații de peste 21 de ani." },
      { question: "Care constituție definea proprietatea ca având o 'funcție socială'?", options: ["1866", "1923", "1991", "1948"], correctAnswer: 1, explanation: "În 1923, proprietatea a primit o funcție socială, permițând exproprierea pentru utilitate publică." },
      { question: "Dictatura regală a lui Carol al II-lea a fost legitimată de:", options: ["Constituția din 1923", "Constituția din 1938", "Legea agrară", "Reforma electorală"], correctAnswer: 1, explanation: "Constituția din 1938 a legitimat dictatura regală a lui Carol al II-lea." },
      { question: "În ce an a fost revizuită actuala Constituție a României?", options: ["2000", "2003", "2007", "2012"], correctAnswer: 1, explanation: "Constituția din 1991 a fost revizuită în anul 2003 pentru aderarea la NATO și UE." },
      { question: "Constituția din 1948 a fost inspirată de modelul:", options: ["Francez", "American", "Sovietic (1936)", "Belgian"], correctAnswer: 2, explanation: "Prima constituție comunistă (1948) a fost inspirată de Constituția URSS din 1936." },
      { question: "Câți ani are mandatul Președintelui României conform revizuirii din 2003?", options: ["4 ani", "5 ani", "6 ani", "7 ani"], correctAnswer: 1, explanation: "Revizuirea din 2003 a prelungit mandatul prezidențial de la 4 la 5 ani." },
      { question: "Republica Socialistă România a fost denumirea adoptată prin:", options: ["Constituția din 1948", "Constituția din 1952", "Constituția din 1965", "Constituția din 1938"], correctAnswer: 2, explanation: "Numele statului a devenit RSR prin Constituția din 1965." },
      { question: "Care constituție a menționat pentru prima dată 'rolul conducător al PCR'?", options: ["1952", "1965", "1948", "1938"], correctAnswer: 1, explanation: "Constituția din 1965 a consacrat oficial PCR ca forță politică conducătoare." },
      { question: "Femeile au primit drept de vot (chiar dacă simbolic) prin:", options: ["Constituția din 1923", "Constituția din 1938", "Constituția din 1866", "Constituția din 1991"], correctAnswer: 1, explanation: "Constituția din 1938 a acordat formal drept de vot femeilor, deși alegerile nu mai erau libere." },
      { question: "Separarea puterilor în stat era negată în perioada totalitară prin instituția:", options: ["Prezidiul", "Guvernul", "Marea Adunare Națională", "Tribunalul Suprem"], correctAnswer: 2, explanation: "Marea Adunare Națională era considerată organul suprem al puterii de stat, anulând separarea puterilor." },
      { question: "În Constituția din 1866, proprietatea era:", options: ["Funcție socială", "Proprietate de stat", "Sacră și inviolabilă", "Bun public"], correctAnswer: 2, explanation: "În 1866, proprietatea privată era declarată sacră și inviolabilă." },
      { question: "Constituția din 1991 a stabilit ca formă de guvernământ:", options: ["Monarhia", "Republica", "Dictatura", "Autocrația"], correctAnswer: 1, explanation: "Constituția din 1991 a stabilit forma de guvernământ ca Republică." },
      { question: "Vârsta de vot în Constituția autoritară din 1938 era de:", options: ["18 ani", "21 ani", "25 ani", "30 ani"], correctAnswer: 3, explanation: "Constituția din 1938 a ridicat vârsta de vot la 30 de ani." }
    ]
  },
  'secolul-xx-democratie-totalitarism': {
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
      { question: "Cine a fost primul lider comunist al României (model stalinist)?", options: ["Nicolae Ceaușescu", "Gheorghe Gheorghiu-Dej", "Ion Iliescu", "Lucrețiu Pătrășcanu"], correctAnswer: 1, explanation: "Gheorghe Gheorghiu-Dej a condus regimul comunist din România în perioada stalinistă." },
      { question: "Ce a caracterizat regimul lui Nicolae Ceaușescu în anii '70-'80?", options: ["Liberalizarea presei", "Pluralismul politic", "Național-comunismul și cultul personalității", "Revenirea la democrație"], correctAnswer: 2, explanation: "Regimul lui Ceaușescu s-a remarcat prin național-comunism, independență față de Moscova și un exacerbat cult al personalității." },
      { question: "În ce an a fost înlăturat regimul comunist din România?", options: ["1944", "1965", "1989", "1991"], correctAnswer: 2, explanation: "Regimul comunist a fost înlăturat în urma Revoluției din decembrie 1989." }
    ]
  },
  'romania-postbelica': {
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
      { question: "Cine a fost liderul regimului stalinist în România?", options: ["Nicolae Ceaușescu", "Ion Iliescu", "Gheorghe Gheorghiu-Dej", "Lucrețiu Pătrășcanu"], correctAnswer: 2, explanation: "Gheorghe Gheorghiu-Dej a condus România în perioada stalinistă, până la moartea sa în 1965." },
      { question: "Ce eveniment a marcat începutul 'mini-revoluției culturale' a lui Nicolae Ceaușescu?", options: ["Constituția din 1965", "Refuzul invadării Cehoslovaciei (1968)", "Tezele din iulie (1971)", "Greva minerilor (1977)"], correctAnswer: 2, explanation: "Tezele din iulie 1971 au marcat reintroducerea controlului ideologic strict și începutul cultului personalității." },
      { question: "Care a fost principalul motiv al crizei economice severe din anii '80 în România?", options: ["Războiul Rece", "Plata datoriei externe", "Colectivizarea", "Seceta"], correctAnswer: 1, explanation: "Ceaușescu a decis exportul masiv al produselor pentru a plăti anticipat datoria externă, provocând lipsuri grave populației." },
      { question: "Unde a avut loc o revoltă majoră a muncitorilor în noiembrie 1987?", options: ["Timișoara", "București", "Brașov", "Valea Jiului"], correctAnswer: 2, explanation: "Muncitorii de la uzina 'Steagul Roșu' din Brașov s-au revoltat pe 15 noiembrie 1987 împotriva regimului." },
      { question: "Cine a inițiat o mișcare de disidență pentru drepturile omului în 1977?", options: ["Doina Cornea", "Mircea Dinescu", "Paul Goma", "Gheorghe Apostol"], correctAnswer: 2, explanation: "Scriitorul Paul Goma a inițiat în 1977 o mișcare de solidaritate cu Charta 77 din Cehoslovacia." },
      { question: "În ce oraș a început Revoluția din decembrie 1989?", options: ["București", "Cluj", "Brașov", "Timișoara"], correctAnswer: 3, explanation: "Revoluția a început la Timișoara pe 16 decembrie 1989." },
      { question: "Ce organism politic a preluat puterea după fuga lui Nicolae Ceaușescu?", options: ["Partidul Național Liberal", "Frontul Salvării Naționale (FSN)", "Convenția Democrată", "Partidul Comunist"], correctAnswer: 1, explanation: "Frontul Salvării Naționale (FSN), condus de Ion Iliescu, a preluat puterea pe 22 decembrie 1989." },
      { question: "Ce lege fundamentală a consfințit revenirea României la democrație?", options: ["Constituția din 1965", "Constituția din 1991", "Proclamația de la Timișoara", "Constituția din 1923"], correctAnswer: 1, explanation: "Constituția din 1991 a restabilit statul de drept, pluralismul și separarea puterilor." },
      { question: "În ce an a aderat România la NATO?", options: ["1990", "1995", "2004", "2007"], correctAnswer: 2, explanation: "România a devenit membră a Alianței Nord-Atlantice (NATO) în anul 2004." },
      { question: "În ce an a aderat România la Uniunea Europeană?", options: ["2000", "2004", "2007", "2012"], correctAnswer: 2, explanation: "România a devenit stat membru al Uniunii Europene la 1 ianuarie 2007." },
      { question: "Ce a reprezentat 'Sistematizarea' în perioada lui Ceaușescu?", options: ["Reforma educației", "Planul de demolare a satelor și cartierelor istorice", "Plata datoriei externe", "Organizarea armatei"], correctAnswer: 1, explanation: "Sistematizarea a fost un plan distructiv de demolare a localităților pentru a construi blocuri și centre civice gigantice." }
    ]
  },
  'romania-concertul-european': {
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
  },
  'romania-razboiul-rece': {
    id: 'romania-razboiul-rece',
    sections: [
      {
        id: 'razboiul-rece-context',
        type: 'text',
        title: '01. Războiul Rece (1945-1991)',
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
            <p><strong>Războiul Rece</strong> a fost o stare de tensiune geopolitică, ideologică și militară între cele două superputeri: <strong>SUA</strong> (liderul blocului capitalist/democratic) și <strong>URSS</strong> (liderul blocului comunist).</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Forme de manifestare:</strong> Cursa înarmărilor, cursa spațială, spionaj, propagandă, conflicte locale ("proxy wars" - Coreea, Vietnam, Afganistan).</li>
              <li><strong>Divizarea Europei:</strong> "Cortina de fier" a separat Europa în două blocuri.</li>
              <li><strong>Alianțe militare:</strong> NATO (1949) pentru blocul occidental, Pactul de la Varșovia (1955) pentru blocul comunist.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'romania-stalinista',
        type: 'text',
        title: '02. România și Războiul Rece (Perioada stalinistă)',
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
            <p>În primii ani ai Războiului Rece, România a fost un satelit fidel al URSS, sub conducerea lui Gheorghe Gheorghiu-Dej.</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Sovietizarea:</strong> Adoptarea modelului sovietic în economie (naționalizare, colectivizare), politică și cultură.</li>
              <li><strong>Pactul de la Varșovia:</strong> România a devenit membru fondator (1955), consolidând integrarea militară în blocul sovietic.</li>
              <li><strong>Represiunea:</strong> Securitatea, cu sprijinul consilierilor sovietici, a eliminat orice formă de opoziție.</li>
            </ul>
          </div>
        )
      },
      {
        id: 'romania-national-comunism',
        type: 'text',
        title: '03. România și Războiul Rece (Național-comunismul)',
        content: (
          <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
            <p>După 1964, România a început o politică de distanțare față de URSS, menținând însă regimul totalitar.</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Independența politicii externe:</strong> Relații diplomatice cu state occidentale, refuzul de a participa la invadarea Cehoslovaciei (1968).</li>
              <li><strong>Relații cu Occidentul:</strong> Vizite ale liderilor occidentali (ex: Richard Nixon) în România.</li>
              <li><strong>Național-comunismul:</strong> Combinarea ideologiei comuniste cu un naționalism exacerbat, glorificarea trecutului istoric românesc.</li>
              <li><strong>Izolarea:</strong> În anii '80, politica lui Ceaușescu a dus la izolarea internațională a României din cauza încălcării drepturilor omului.</li>
            </ul>
          </div>
        )
      }
    ],
    quiz: [
      { question: "Care au fost cele două superputeri ale Războiului Rece?", options: ["SUA și Marea Britanie", "SUA și URSS", "Germania și Japonia", "Franța și URSS"], correctAnswer: 1, explanation: "Războiul Rece a fost confruntarea dintre SUA și URSS." },
      { question: "Ce alianță militară a condus URSS?", options: ["NATO", "Pactul de la Varșovia", "Uniunea Europeană", "ONU"], correctAnswer: 1, explanation: "Pactul de la Varșovia a fost alianța militară a statelor comuniste." },
      { question: "Când a devenit România membră a Pactului de la Varșovia?", options: ["1949", "1955", "1960", "1968"], correctAnswer: 1, explanation: "România a devenit membră a Pactului de la Varșovia în 1955." },
      { question: "Ce a marcat 'Declarația din aprilie' (1964)?", options: ["Aderarea la NATO", "Independența PMR față de URSS", "Revoluția din 1989", "Colectivizarea"], correctAnswer: 1, explanation: "Declarația din aprilie 1964 a afirmat independența PMR în cadrul blocului comunist." },
      { question: "Ce atitudine a avut România față de invadarea Cehoslovaciei în 1968?", options: ["A participat", "A refuzat să participe", "A sprijinit URSS", "A fost neutră"], correctAnswer: 1, explanation: "Ceaușescu a refuzat să participe la invadarea Cehoslovaciei, câștigând popularitate." },
      { question: "Ce a fost 'Cortina de fier'?", options: ["Un zid fizic", "O diviziune ideologică și politică a Europei", "O alianță economică", "Un tratat de pace"], correctAnswer: 1, explanation: "Cortina de fier a fost diviziunea Europei între blocul comunist și cel capitalist." },
      { question: "Ce înseamnă 'proxy wars'?", options: ["Războaie directe între SUA și URSS", "Conflicte locale susținute de superputeri", "Tratate comerciale", "Alianțe culturale"], correctAnswer: 1, explanation: "Proxy wars au fost conflicte locale în care superputerile s-au confruntat indirect." },
      { question: "Ce a caracterizat perioada stalinistă în România?", options: ["Democrație", "Sovietizarea totală", "Libertatea presei", "Economie de piață"], correctAnswer: 1, explanation: "Perioada stalinistă a fost marcată de copierea fidelă a modelului sovietic." },
      { question: "Cine a condus România în perioada stalinistă?", options: ["Nicolae Ceaușescu", "Ion Iliescu", "Gheorghe Gheorghiu-Dej", "Petru Groza"], correctAnswer: 2, explanation: "Gheorghe Gheorghiu-Dej a condus România în perioada stalinistă." },
      { question: "Ce a dus la izolarea României în anii '80?", options: ["Aderarea la NATO", "Încălcarea drepturilor omului", "Relațiile cu SUA", "Democratizarea"], correctAnswer: 1, explanation: "Politica lui Ceaușescu și încălcarea drepturilor omului au dus la izolarea internațională." }
    ]
  }
};
