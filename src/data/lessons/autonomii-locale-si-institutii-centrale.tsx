import { LessonData } from '../types';

export const autonomiiLocaleSiInstitutiiCentrale: LessonData = {
  id: 'autonomii-locale-si-institutii-centrale',
  sections: [

    // ─── 01. CONTEXT ──────────────────────────────────────────────────────
    {
      id: 'context-general',
      type: 'text',
      title: '01. Context — Cum s-au format autonomiile locale?',
      content: (
        <div className="prose-content">
          <p>
            După retragerea administrației romane din Dacia, populația rămasă a trăit în sate fără structuri statale propriu-zise. Valurile succesive de migratori (goți, gepizi, avari, slavi) și-au impus autoritatea militară, dar, datorită numărului lor redus față de populația locală, au fost treptat asimilați.
          </p>

          <span className="date-block">Sec. VII–IX</span>
          <p>La nord de Dunăre există obști sătești izolate, fără o organizare politică supralocală.</p>

          <span className="date-block">Sec. IX–X</span>
          <p>
            Obștile se grupează în <strong>uniuni de obști</strong> — autonomii locale pe care Nicolae Iorga le-a numit <em>„romanii populare"</em>. Acestea purtau denumiri variate: <strong>codri, câmpuri, ocoale, cobâle, țări</strong>.
          </p>

          <p>
            Locuitorii acestor formațiuni sunt consemnați în izvoare bizantine, ruse, maghiare și armene sub denumiri diferite: <strong>vlahi, volohi, valahi, blachi, ulaki</strong> — toți desemnând aceeași populație romanică est-europeană.
          </p>

          <h3>Cauzele formării autonomiilor</h3>
          <ul>
            <li><strong>Apărarea</strong> — necesitatea organizării militare în fața invaziilor migratorilor</li>
            <li><strong>Creșterea demografică</strong> — o populație mai mare cere o organizare mai complexă</li>
            <li><strong>Dezvoltarea economică</strong> — apariția meșteșugurilor și a comerțului local</li>
            <li><strong>Criteriul geografic</strong> — văile râurilor, depresiunile și zonele protejate de munți au favorizat gruparea comunităților</li>
          </ul>
        </div>
      ),
    },

    // ─── 02. TIPURI ───────────────────────────────────────────────────────
    {
      id: 'tipuri-formatiuni',
      type: 'cards',
      title: '02. Tipurile de formațiuni prestatale',
      items: [
        {
          title: 'Obștea sătească',
          icon: 'users',
          description:
            'Cea mai veche și de bază formă de organizare. Comunitate de sate cu proprietate comună (păduri, ape, pășuni) și proprietate privată (casa, lotul cultivat). Condusă de un jude sau cneaz și un sfat al oamenilor buni și bătrâni.',
        },
        {
          title: 'Cnezatul',
          icon: 'landmark',
          description:
            'Formațiune alcătuită din 2 sau mai multe obști sătești, de obicei pe valea unui râu. Condusă de un cneaz cu atribuții administrative, judecătorești și militare. Exemple atestate în 1247: cnezatul lui Ioan și cnezatul lui Farcaș.',
        },
        {
          title: 'Voievodatul',
          icon: 'crown',
          description:
            'Formațiune alcătuită din mai multe cnezate. Condusă de un voievod — atributul principal era cel MILITAR (voievod = comandant de oaste). Exemple: voievodatele lui Gelu, Menumorut, Glad (sec. IX); Gyla și Ahtum (sec. XI).',
        },
        {
          title: 'Țările (Terrae)',
          icon: 'map',
          description:
            'Regiuni mai întinse cu identitate geografică distinctă: Țara Hațegului, Țara Maramureșului, Țara Făgărașului, Țara Vrancei, Codrii Cosminului, Câmpul lui Dragoș. Unele au supraviețuit chiar după formarea statelor medievale.',
        },
      ],
    },

    // ─── 03. INTRACARPATIC ────────────────────────────────────────────────
    {
      id: 'intracarpatic',
      type: 'text',
      title: '03. Formațiunile prestatale intracarpatic',
      content: (
        <div className="prose-content">
          <h3>Sursa: Gesta Hungarorum (Anonymus, ~1200)</h3>
          <p>
            Cronica notarului anonim al unui rege maghiar descrie trei voievodate existente la venirea maghiarilor în Pannonia:
          </p>

          <span className="date-block">Sfârșitul sec. IX — Voievodatul lui GELU</span>
          <p>
            Situat în centrul Transilvaniei, cetatea de scaun la <strong>Dăbâca</strong>. Anonymus îl numește <em>blac</em> (român). A luptat cu căpetenia maghiară Tuhutum și a fost înfrânt în luptă.
          </p>

          <span className="date-block">Sfârșitul sec. IX — Voievodatul lui MENUMORUT</span>
          <p>
            Situat în <strong>Crișana</strong>, cetatea la <strong>Biharea</strong>. A fost înfrânt de ducele Arpad, dar și-a păstrat formațiunea prin diplomație — fiica sa s-a căsătorit cu fiul lui Arpad.
          </p>

          <span className="date-block">Sfârșitul sec. IX — Voievodatul lui GLAD</span>
          <p>
            Situat în <strong>Banat</strong>, cetatea la <strong>Cuvin</strong>. A luptat cu ungurii și i-a respins inițial; formațiunea sa s-a menținut mai multă vreme decât celelalte.
          </p>

          <h3>Sursa: Legenda Sf. Gerard (sec. XI)</h3>
          <p>
            Atestă alte două voievodate din Transilvania, intrate în conflict cu regele Ștefan I al Ungariei (care creștinase maghiarii în jurul anului 1000):
          </p>

          <span className="date-block">Sec. XI — Voievodatul lui GYLA</span>
          <p>
            Situat în Transilvania propriu-zisă, cetatea la <strong>Bălgrad (Alba Iulia)</strong>. A fost înfrânt deoarece <strong>s-a opus trecerii la catolicism</strong>.
          </p>

          <span className="date-block">Sec. XI — Voievodatul lui AHTUM</span>
          <p>
            Situat în <strong>Banat</strong>, cetatea la <strong>Morisena (Cenad)</strong>. A fost înfrânt deoarece <strong>a impus o taxă pe sarea</strong> ce tranzita formațiunea sa — un act de suveranitate economică inacceptabil pentru statul maghiar.
          </p>

          <h3>Cucerirea Transilvaniei de Ungaria</h3>
          <span className="date-block">Sec. XI–XIII</span>
          <p>
            Procesul de cucerire se desfășoară treptat. Pentru a consolida stăpânirea, regii maghiari colonizează:
          </p>
          <ul>
            <li><strong>Sașii</strong> — meșteșugari și negustori de origine germană, aduși pentru a popula și organiza economic zona</li>
            <li><strong>Secuii</strong> — populație cu rol militar, plasată la granițele estice și sudice</li>
          </ul>

          <span className="date-block">1211–1225 — Cavalerii Teutoni în Țara Bârsei</span>
          <p>
            Aduși pentru a apăra granița de est și a răspândi catolicismul. Expulzați în 1225 deoarece au încercat să-și creeze un stat propriu, independent de Ungaria.
          </p>

          <span className="date-block">1176 — Primul voievod atestat al Transilvaniei</span>
          <p>
            <strong>Leustachius</strong> este primul voievod documentat al Transilvaniei, organizată ca voievodat vasal al coroanei maghiare. Treptat, românii sunt excluși din viața politică — după 1366, calitatea de nobil era condiționată de apartenența la catolicism.
          </p>
        </div>
      ),
    },

    // ─── 04. EXTRACARPATIC ────────────────────────────────────────────────
    {
      id: 'extracarpatic',
      type: 'text',
      title: '04. Formațiunile prestatale extracarpatic — Diploma Ioaniților (1247)',
      content: (
        <div className="prose-content">
          <p>
            Cel mai important izvor pentru autonomiile din sudul Carpaților este <strong>Diploma cavalerilor ioaniți</strong>, emisă de regele Ungariei Bela IV. Prin aceasta, cavalerii ioaniți erau chemați în <em>Țara Severinului</em> pentru a apăra și extinde stăpânirea maghiară.
          </p>

          <h3>Formațiunile menționate în Diplomă</h3>

          <span className="date-block">Atestat 1247 — Voievodatul lui LITOVOI (vest de Olt)</span>
          <p>
            <strong>Nu a recunoscut suzeranitatea maghiară.</strong> Litovoi a murit în luptă cu ungurii. Fratele său Bărbat a fost luat prizonier și a trebuit să se răscumpere. Formațiunea a fost ulterior integrată în Țara Românească.
          </p>

          <span className="date-block">Atestat 1247 — Voievodatul lui SENESLAU (est de Olt)</span>
          <p>
            A recunoscut suzeranitatea maghiară, menținându-și astfel autonomia internă pentru o perioadă mai lungă.
          </p>

          <span className="date-block">Atestat 1247 — Cnezatul lui IOAN și Cnezatul lui FARCAȘ</span>
          <p>
            Situate între Jiu și Olt, redate direct cavalerilor ioaniți spre administrare. De dimensiuni mai mici decât voievodatele.
          </p>

          <h3>Formațiuni în spațiul moldovean</h3>

          <span className="date-block">Sec. IX–X — Atestare în Cronica lui Nestor (sursă rusă)</span>
          <p>
            Menționează „volohi" (valahi) care i-au izgonit pe slavi din teritoriile nord-dunărene. Primele informații despre prezența românilor în spațiul moldovean.
          </p>

          <span className="date-block">Sec. IX–XIV — Formațiuni locale</span>
          <p>
            <strong>Codrii Cosminului, Câmpul lui Dragoș, Țara Sipeniților</strong> — formațiuni localizate în nordul Moldovei. <strong>Cobâlele</strong> (în zona Neamț, Bacău, Vaslui) și <strong>Ocoalele</strong> (Câmpulung, Vrancea) — atestate indirect în izvoare medievale.
          </p>

          <h3>Formațiuni în Dobrogea</h3>

          <span className="date-block">Sec. XI–XII — Alexiada Annei Comnena</span>
          <p>
            Menționează formațiunile conduse de <strong>Tatos, Seslav și Satza</strong> la nordul Dunării, implicate în conflictele dintre Bizanț și pecenegi/cumani.
          </p>
        </div>
      ),
    },

    // ─── 05. ÎNTEMEIEREA STATELOR ─────────────────────────────────────────
    {
      id: 'intemeierea-statelor',
      type: 'timeline',
      title: '05. Întemeierea statelor medievale românești',
      items: [
        {
          year: 'c. 1290',
          title: 'Tradiția descălecatului — Radu Negru',
          description:
            'Letopisețul Cantacuzinesc consemnează că Negru Vodă din Făgăraș a trecut munții, a ctitorit Câmpulungul și Argeșul, iar boierii de peste Olt i s-au închinat. Reflectă contribuția instituțională a Transilvaniei la crearea statului, chiar dacă nu e demonstrabilă istoric.',
          icon: 'crown',
        },
        {
          year: '1310–1352',
          title: 'Basarab I — întemeierea Țării Românești',
          description:
            'Unifică voievodatul lui Litovoi cu cel al lui Seneslau (~1300). În 1324 recunoaște formal suzeranitatea maghiară. Cucerește independența prin victoria de la Posada (1330) împotriva regelui Carol Robert de Anjou al Ungariei.',
          icon: 'sword',
        },
        {
          year: '1352–1364',
          title: 'Nicolae Alexandru — prima Mitropolie',
          description:
            'Fiul lui Basarab. Întemeiază Mitropolia Țării Românești la Curtea de Argeș (1359), recunoscută de Patriarhia de la Constantinopol. Organizează Biserica ca instituție centrală a statului.',
          icon: 'landmark',
        },
        {
          year: '1364–1377',
          title: 'Vladislav Vlaicu — primele monede',
          description:
            'Bate primele monede ale Țării Românești. Întemeiază a doua Mitropolie la Severin (1370). Respinge primele atacuri otomane. Consolidează statul prin instituții proprii.',
          icon: 'scroll',
        },
        {
          year: '1352–1353',
          title: 'Dragoș din Maramureș — marca de apărare',
          description:
            'Regele maghiar întemeiază o marcă de apărare împotriva tătarilor în nord-vestul Moldovei, condusă de Dragoș. Formațiunea era vasală Ungariei — nu reprezintă independența Moldovei.',
          icon: 'flag',
        },
        {
          year: '1359',
          title: 'Bogdan din Maramureș — independența Moldovei',
          description:
            'Voievod maramureșan în conflict cu regele maghiar, trece munții și îi alungă pe urmașii lui Dragoș. Obține independența Moldovei în urma confruntărilor cu Ungaria (1364–1365). Este fondatorul statului medieval Moldova.',
          icon: 'crown',
        },
        {
          year: '1346–1388',
          title: 'Dobrogea — de la Balica la Ivanco',
          description:
            'Balica (c. 1346) unifică teritoriile dintre Dunăre și Mare. Dobrotici (1354–1386) obține titlul de despot și creează un stat independent. Ivanco (1386–1388) bate monedă proprie, dar este înfrânt de otomani. În 1388 Mircea cel Bătrân alipește Dobrogea la Țara Românească.',
          icon: 'map',
        },
      ],
    },

    // ─── 06. DOMNIA ───────────────────────────────────────────────────────
    {
      id: 'domnia',
      type: 'text',
      title: '06. Instituția Domniei',
      content: (
        <div className="prose-content">
          <p>
            <strong>Domnia</strong> a fost instituția centrală supremă în Țara Românească și Moldova. Titlul oficial era <em>„mare voievod și domn"</em>:
          </p>
          <ul>
            <li><strong>Voievod</strong> (de origine slavă) = comandant suprem al armatei</li>
            <li><strong>Domn</strong> (din latinescul <em>dominus</em>) = stăpânul absolut al țării și al supușilor</li>
          </ul>

          <h3>Legitimitatea puterii</h3>
          <p>
            Originea puterii era <em>de drept divin</em> — „din mila lui Dumnezeu". Investitura se realiza prin ungerea cu mir de către mitropolit, analog practicii din statele creștine medievale.
          </p>

          <h3>Sistemul ereditar-electiv</h3>
          <p>
            Succesiunea la tron nu era strict ereditară. Orice bărbat integru fizic din familia domnitoare — din <em>„os domnesc"</em> — putea fi ales de boieri. Condiție: să fie de sex masculin și fără deficiențe fizice. Acest sistem a generat frecvente lupte fratricide pentru tron.
          </p>

          <h3>Atribuțiile domnului</h3>
          <ul>
            <li><strong>Politice:</strong> conducea politica internă și externă, încheia tratate, declara război și pace</li>
            <li><strong>Administrative:</strong> numea și revoca dregătorii; împărțea țara în județe (Țara Românească) sau ținuturi (Moldova)</li>
            <li><strong>Legislative:</strong> emitea acte cu putere de lege (<em>hrisoave</em>)</li>
            <li><strong>Judecătorești:</strong> instanța supremă de judecată (Înaltul Divan); putea pronunța pedeapsa cu moartea</li>
            <li><strong>Economice:</strong> bătea monedă, stabilea impozitele, deținea <em>dominium eminens</em> — era teoretic proprietarul întregului pământ</li>
            <li><strong>Religioase:</strong> protector al Bisericii Ortodoxe, ctitor de mănăstiri și biserici</li>
          </ul>

          <h3>Evoluția instituției: regimul fanariot</h3>

          <span className="date-block">1711 — Moldova</span>
          <p>
            Ultimul domn pământean a fost <strong>Dimitrie Cantemir</strong>. Din 1711, moldovenii au domni din cartierul Fanar al Constantinopolului — simpli funcționari otomani, numiți și maziliți de sultan.
          </p>

          <span className="date-block">1716 — Țara Românească</span>
          <p>
            Ultimul domn pământean a fost <strong>Ștefan Cantacuzino</strong>. Același regim fanariot se instaurează și în sudul Carpaților. Regimul fanariot a durat până în <strong>1821–1822</strong>.
          </p>
        </div>
      ),
    },

    // ─── 07. SFATUL DOMNESC ───────────────────────────────────────────────
    {
      id: 'sfatul-domnesc',
      type: 'text',
      title: '07. Sfatul Domnesc și dregătoriile',
      content: (
        <div className="prose-content">
          <p>
            <strong>Sfatul Domnesc</strong> era organismul consultativ al domnului, format inițial din marii boieri, ulterior din boierii cu dregătorii. Membre de drept era și <strong>mitropolitul</strong> — sfătuitorul spiritual al domnului și locțiitorul său.
          </p>
          <p>
            Atribuții: asista domnul la judecăți, participa la încheierea tratatelor, oferea consultanță politică și fiscală. Nu putea lua decizii fără acordul domnului.
          </p>

          <h3>Principalele dregătorii</h3>

          <table className="prose-table">
            <thead>
              <tr>
                <th>Dregătorie</th>
                <th>Atribuții principale</th>
                <th>Prezent în</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Banul', 'Cel mai important în Țara Românească; locțiitorul domnului în Oltenia', 'Doar TR'],
                ['Vornicul', 'Șeful curții domnești; atribuții judecătorești și administrative', 'TR și Moldova'],
                ['Logofătul', 'Șeful cancelariei; redacta hrisoavele și actele oficiale', 'TR și Moldova'],
                ['Vistiernicul', 'Responsabil cu finanțele și colectarea impozitelor', 'TR și Moldova'],
                ['Spătarul', 'Purtătorul de spadă al domnului; comandant militar în absența sa', 'TR'],
                ['Hatmanul', 'Comandantul suprem al oastei', 'Doar Moldova'],
                ['Portarul Sucevei', 'Atribuții militare și diplomatice; primea solii străini', 'Doar Moldova'],
                ['Paharnicul', 'Responsabil cu băuturile la curtea domnească', 'TR și Moldova'],
                ['Stolnicul', 'Responsabil cu masa și bucătăria', 'TR și Moldova'],
                ['Postelnicul', 'Camera de dormit a domnului; relații diplomatice', 'TR și Moldova'],
                ['Comisul', 'Responsabil cu grajdurile și caii', 'TR și Moldova'],
              ].map(([d, a, o]) => (
                <tr key={d}>
                  <td>{d}</td>
                  <td>{a}</td>
                  <td style={{ color: 'var(--text-muted)', fontSize: 12 }}>{o}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },

    // ─── 08. ALTE INSTITUȚII ──────────────────────────────────────────────
    {
      id: 'alte-institutii',
      type: 'cards',
      title: '08. Alte instituții centrale',
      items: [
        {
          title: 'Adunarea Țării',
          icon: 'users',
          description:
            'Instituție reprezentativă convocată ocazional pentru probleme excepționale: alegerea unui domn, tratate importante, impozite extraordinare. Formată din boieri, cler înalt și uneori orășeni. Nu era un parlament permanent — nu se întrunea regulat.',
        },
        {
          title: 'Mitropolia Țării Românești',
          icon: 'landmark',
          description:
            'Întemeiată în 1359 de Nicolae Alexandru la Curtea de Argeș, recunoscută de Patriarhia de la Constantinopol. A doua Mitropolie întemeiată de Vladislav Vlaicu la Severin (1370). Mitropolitul: al doilea om în stat, locțiitorul domnului.',
        },
        {
          title: 'Mitropolia Moldovei',
          icon: 'landmark',
          description:
            'Întemeiată în timpul lui Petru Mușat (c. 1387), recunoscută de Patriarhia de la Constantinopol în 1401, în timpul lui Alexandru cel Bun. Reședința la Suceava.',
        },
        {
          title: 'Dieta Transilvaniei',
          icon: 'scroll',
          description:
            'Echivalentul Adunării Țării în Transilvania. Din 1437 (Unio Trium Nationum), românii sunt excluși complet. Cele trei națiuni politice recunoscute: nobilimea maghiară, secuii și sașii — fără niciun reprezentant al românilor, deși aceștia formau majoritatea populației.',
        },
      ],
    },

    // ─── 09. ARMATA & ADMINISTRAȚIE ──────────────────────────────────────
    {
      id: 'armata-si-administratie',
      type: 'text',
      title: '09. Armata și administrarea teritoriului',
      content: (
        <div className="prose-content">
          <h3>Oastea cea mică — armata permanentă</h3>
          <p>Formată din:</p>
          <ul>
            <li>Garda personală a domnului (<em>curtenii</em>)</li>
            <li>Cetele de oaste ale boierilor — obligați să lupte cu oamenii lor în schimbul pământului primit</li>
            <li>Mercenari (secui, sași, în anumite perioade)</li>
          </ul>
          <p>Intervenea rapid în caz de atac, fără mobilizare generală.</p>

          <h3>Oastea cea mare — mobilizarea generală</h3>
          <p>
            Convocată doar în caz de pericol major, incluzând toți bărbații apți de luptă — inclusiv țărani. Exemplu: oastea lui Ștefan cel Mare în apărarea Moldovei față de otomani.
          </p>

          <span className="date-block">Sec. XVIII — Consecința regimului fanariot</span>
          <p>
            Instaurarea regimului fanariot a dus la <strong>dispariția oștirii proprii</strong> — principatele nu mai aveau politică externă autonomă și nu mai puteau întreține o armată independentă.
          </p>

          <h3>Administrarea teritoriului</h3>
          <ul>
            <li>
              <strong>Țara Românească</strong> — împărțită în <em>județe</em>, conduse de <em>județi</em> numiți de domn
            </li>
            <li>
              <strong>Moldova</strong> — împărțită în <em>ținuturi</em>, conduse de <em>pârcălabi</em>
            </li>
          </ul>

          <h3>Sistemul juridic</h3>
          <p>
            Justiția se baza inițial pe <strong>obiceiul pământului</strong> (<em>Jus Valachicum</em>) — drept cutumiar nescris, transmis oral din generație în generație.
          </p>
          <span className="date-block">Sec. XVI — Primele coduri de legi scrise</span>
          <p>
            Apar primele pravile (coduri de legi), influențate de dreptul bizantin. Marchează trecerea de la dreptul cutumiar la dreptul scris.
          </p>
        </div>
      ),
    },
  ],

  quiz: [
    {
      question: 'Care este cel mai vechi izvor care menționează voievodatele lui Gelu, Menumorut și Glad?',
      options: [
        'Diploma cavalerilor ioaniți (1247)',
        'Gesta Hungarorum (Anonymus, ~1200)',
        'Legenda Sf. Gerard (sec. XI)',
        'Alexiada Annei Comnena (sec. XI–XII)',
      ],
      correctAnswer: 1,
      explanation:
        'Gesta Hungarorum, scrisă de notarul anonim (Anonymus) al unui rege maghiar în jurul anului 1200, descrie cele trei voievodate intracarpatic la venirea maghiarilor.',
    },
    {
      question: 'Ce formațiuni sunt atestate în Diploma cavalerilor ioaniți (1247)?',
      options: [
        'Voievodatele lui Gelu, Menumorut și Glad',
        'Voievodatele lui Gyla și Ahtum',
        'Voievodatele lui Litovoi și Seneslau, cnezatele lui Ioan și Farcaș',
        'Voievodatele lui Dragoș și Bogdan',
      ],
      correctAnswer: 2,
      explanation:
        'Diploma din 1247 menționează voievodatele lui Litovoi și Seneslau, cnezatele lui Ioan și Farcaș și Banatul de Severin — formațiunile din sudul Carpaților.',
    },
    {
      question: 'De ce a fost înfrânt voievodatul lui Ahtum de regele Ștefan I al Ungariei?',
      options: [
        'A atacat primul Ungaria',
        'A refuzat trecerea la catolicism',
        'A impus o taxă pe sarea care tranzita formațiunea sa',
        'S-a aliat cu pecenegii împotriva Ungariei',
      ],
      correctAnswer: 2,
      explanation:
        'Ahtum a impus o taxă pe sarea ce tranzita Banatul — act de suveranitate economică inacceptabil. Gyla, în schimb, a fost înfrânt pentru că s-a opus trecerii la catolicism.',
    },
    {
      question: 'Prin ce victorie a obținut Basarab I independența Țării Românești față de Ungaria?',
      options: [
        'Bătălia de la Rovine (1394)',
        'Bătălia de la Posada (1330)',
        'Bătălia de la Vaslui (1475)',
        'Bătălia de la Câmpia Mierlei (1389)',
      ],
      correctAnswer: 1,
      explanation:
        'Victoria de la Posada (1330) împotriva regelui Carol Robert de Anjou al Ungariei a consacrat independența Țării Românești.',
    },
    {
      question: 'Cine a obținut independența Moldovei față de Ungaria?',
      options: [
        'Dragoș din Maramureș',
        'Alexandru cel Bun',
        'Bogdan din Maramureș',
        'Petru Mușat',
      ],
      correctAnswer: 2,
      explanation:
        'Bogdan din Maramureș a trecut munții în 1359, i-a alungat pe urmașii lui Dragoș și a obținut independența Moldovei în urma confruntărilor cu Ungaria (1364–1365). Dragoș crease doar o marcă de apărare vasală Ungariei.',
    },
    {
      question: 'Ce înseamnă sistemul ereditar-electiv de succesiune la tron?',
      options: [
        'Tronul trecea obligatoriu la fiul cel mai mare',
        'Orice cetățean putea fi ales domn prin vot popular',
        'Orice bărbat din familia domnitoare (os domnesc) putea fi ales de boieri',
        'Sultanul otoman desemna direct noul domn',
      ],
      correctAnswer: 2,
      explanation:
        'Sistemul ereditar-electiv permitea ca orice bărbat integru fizic din familia domnitoare să fie ales de boieri. A generat frecvente conflicte pentru tron.',
    },
    {
      question: 'Care dregătorie era cea mai importantă în Țara Românească?',
      options: ['Logofătul', 'Vistiernicul', 'Banul', 'Spătarul'],
      correctAnswer: 2,
      explanation:
        'Banul Olteniei era cel mai important dregător în Țara Românească — locțiitorul domnului în Oltenia. În Moldova, un rol similar îl avea Portarul Sucevei.',
    },
    {
      question: 'Ce atribuție îndeplinea logofătul?',
      options: [
        'Comanda armata în absența domnului',
        'Redacta actele cancelariei domnești (hrisoavele)',
        'Colecta impozitele din județe',
        'Administra grajdurile și caii',
      ],
      correctAnswer: 1,
      explanation:
        'Logofătul era șeful cancelariei și redacta toate actele oficiale emise de domn.',
    },
    {
      question: 'Care a fost primul voievod atestat documentar al Transilvaniei?',
      options: ['Gelu', 'Glad', 'Leustachius', 'Menumorut'],
      correctAnswer: 2,
      explanation:
        'Leustachius este primul voievod al Transilvaniei atestat documentar, în 1176, organizat ca voievodat vasal al coroanei maghiare.',
    },
    {
      question: 'Cine a constituit cele 3 „națiuni" politice ale Transilvaniei medievale (Unio Trium Nationum, 1437)?',
      options: [
        'Românii, ungurii și sașii',
        'Nobilimea maghiară, secuii și sașii',
        'Ungurii, românii și secuii',
        'Catolicii, ortodocșii și protestanții',
      ],
      correctAnswer: 1,
      explanation:
        'Unio Trium Nationum (1437) a exclus românii din viața politică. Cele trei națiuni recunoscute erau nobilimea maghiară, secuii și sașii — deși românii formau majoritatea.',
    },
    {
      question: 'Cine a obținut titlul de despot și a creat un stat independent în Dobrogea?',
      options: ['Balica', 'Ivanco', 'Dobrotici', 'Mircea cel Bătrân'],
      correctAnswer: 2,
      explanation:
        'Dobrotici (1354–1386) a unificat formațiunile dobrogene și a obținut titlul de despot de la Bizanț, creând un stat independent.',
    },
    {
      question: 'Când a fost instaurat regimul fanariot în Moldova și care a fost ultimul domn pământean?',
      options: [
        '1699 — Ștefan Cantacuzino',
        '1711 — Dimitrie Cantemir',
        '1716 — Constantin Brâncoveanu',
        '1821 — Tudor Vladimirescu',
      ],
      correctAnswer: 1,
      explanation:
        'Regimul fanariot a fost instaurat în Moldova în 1711. Ultimul domn pământean a fost Dimitrie Cantemir. În Țara Românească s-a instaurat în 1716, ultimul domn pământean fiind Ștefan Cantacuzino.',
    },
    {
      question: 'Ce este „oastea cea mare"?',
      options: [
        'Armata permanentă formată din curteni și boieri',
        'Mobilizarea generală a tuturor bărbaților apți, convocată în caz de pericol major',
        'Armata mercenară angajată de domn',
        'Cavaleria grea a marilor boieri',
      ],
      correctAnswer: 1,
      explanation:
        'Oastea cea mare reprezenta mobilizarea generală — inclusiv a țăranilor — convocată doar în situații de pericol maxim pentru stat.',
    },
    {
      question: 'Cum era organizat teritoriul Moldovei față de Țara Românească?',
      options: [
        'Moldova în județe (județi), Țara Românească în ținuturi (pârcălabi)',
        'Moldova în ținuturi (pârcălabi), Țara Românească în județe (județi)',
        'Ambele în județe, conduse de vornici',
        'Moldova în voievodate, Țara Românească în cnezate',
      ],
      correctAnswer: 1,
      explanation:
        'Țara Românească era împărțită în județe conduse de județi, iar Moldova în ținuturi conduse de pârcălabi.',
    },
    {
      question: 'Ce numim prin „obiceiul pământului" (Jus Valachicum)?',
      options: [
        'Primul cod de legi scris al Țării Românești din sec. XVI',
        'Dreptul cutumiar (nescris) pe care se baza inițial justiția medievală românească',
        'Sistemul de impozitare al Imperiului Otoman aplicat Țărilor Române',
        'Tratatul de pace dintre Basarab I și Ungaria',
      ],
      correctAnswer: 1,
      explanation:
        'Obiceiul pământului (Jus Valachicum) era dreptul cutumiar, nescris, transmis oral. Primele coduri de legi scrise (pravile) apar abia în secolul al XVI-lea.',
    },
  ],
};
