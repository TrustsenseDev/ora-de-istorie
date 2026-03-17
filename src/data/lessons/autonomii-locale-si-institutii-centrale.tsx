import { LessonData } from '../lessonContent';

export const autonomiiLocaleSiInstitutiiCentrale: LessonData = {
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
        explanation: "Adunarea Țării era convocată doar în situații excepționale (alegerea domnului, tratate) și era formată din boieri, cler și uneori orășeni/țăranii liberi."
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
};
