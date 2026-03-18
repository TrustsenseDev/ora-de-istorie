import { LessonData } from '../types';

export const autonomiiLocaleSiInstitutiiCentrale: LessonData = {
  id: 'autonomii-locale-si-institutii-centrale',
  sections: [
    // ─── 01. CONTEXT GENERAL ───────────────────────────────────────────
    {
      id: 'context-general',
      type: 'text',
      title: '01. Context general — Cum s-au format autonomiile locale?',
      content: (
        <div className="prose-content">
          <p>
            După retragerea romană din Dacia (271 d.Hr.), populația rămasă a trăit în sate, fără structuri statale propriu-zise. În secolele următoare, valurile succesive de migratori (goți, gepizi, avari, slavi — sec. IV–VI) și-au impus autoritatea militară, dar, din cauza numărului lor redus, au fost treptat asimilați de populația locală autohtonă.
          </p>
          <p>
            <strong>La baza întregii organizări politice stau obștile sătești</strong> — comunități de sate cu teritoriu bine delimitat și organizare socială proprie. Sec. VII–IX: la nord de Dunăre există obști sătești izolate. Sec. IX–X: obștile se grupează în <em>uniuni de obști</em>, autonomii locale pe care Nicolae Iorga le-a numit <strong>„romanii populare"</strong>. Acestea purtau denumiri variate: <strong>codri, câmpuri, ocoale, cobâle, țări</strong>.
          </p>
          <p>
            Locuitorii acestor formațiuni sunt consemnați în izvoare bizantine, ruse, maghiare, turce și armene sub denumiri diferite: <strong>vlahi, volohi, valahi, blachi, ulaki</strong> — toți desemnând aceeași populație romanică est-europeană.
          </p>
          <p>
            <strong>Cauzele formării autonomiilor:</strong>
          </p>
          <ul>
            <li>Necesitatea <strong>apărării</strong> în fața invaziilor migratorilor</li>
            <li><strong>Creșterea demografică</strong> și nevoia de organizare mai complexă</li>
            <li><strong>Dezvoltarea economică</strong> — apariția meșteșugurilor, comerțului</li>
            <li>Criteriul geografic — văile râurilor, depresiunile, zonele protejate de munți</li>
          </ul>
        </div>
      ),
    },

    // ─── 02. TIPURILE DE FORMAȚIUNI ────────────────────────────────────
    {
      id: 'tipuri-formatiuni',
      type: 'cards',
      title: '02. Tipurile de formațiuni prestatale',
      items: [
        {
          title: 'Obștea sătească',
          icon: 'users',
          description: 'Cea mai veche formă de organizare. Comunitate de sate cu proprietate comună (păduri, ape, pășuni) și proprietate privată (casa, lotul de pământ). Condusă de un jude sau cneaz și un sfat al oamenilor buni și bătrâni.',
        },
        {
          title: 'Cnezatul',
          icon: 'landmark',
          description: 'Formațiune politică alcătuită din 2+ obști sătești, de obicei pe valea unui râu. Condusă de un cneaz cu atribuții administrative, judecătorești și militare. Ex: cnezatul lui Ioan, cnezatul lui Farcaș (atestate 1247).',
        },
        {
          title: 'Voievodatul',
          icon: 'crown',
          description: 'Formațiune politică alcătuită din 2+ cnezate. Condusă de un voievod — atributul special era cel MILITAR (voievod = comandant de oaste). Ex: voievodatele lui Gelu, Menumorut, Glad (sec. IX), Gyla, Ahtum (sec. XI).',
        },
        {
          title: 'Țările (Terrae)',
          icon: 'map',
          description: 'Regiuni mai întinse cu identitate geografică distinctă. Ex: Țara Hațegului, Țara Maramureșului, Țara Făgărașului, Țara Vrancei, Codrii Cosminului, Câmpul lui Dragoș. Unele au supraviețuit chiar și după formarea statelor.',
        },
      ],
    },

    // ─── 03. FORMAȚIUNI INTRACARPATIC ───────────────────────────────────
    {
      id: 'intracarpatic',
      type: 'text',
      title: '03. Formațiunile prestatale intracarpatic (sec. IX–XI)',
      content: (
        <div className="prose-content">
          <h3>Sursa istorică: Gesta Hungarorum (cronica lui Anonymus)</h3>
          <p>
            Scrisă de notarul unui rege maghiar în jurul anului 1200, prezintă trei voievodate existente la venirea maghiarilor în Pannonia (sfârșitul sec. IX):
          </p>
          <ul>
            <li>
              <strong>Voievodatul lui Gelu</strong> — situat în centrul Transilvaniei, cetatea de scaun la <em>Dăbâca</em>. Anonymus îl numește <em>blac</em> (adică român). A luptat cu căpetenia maghiară Tuhutum și a fost înfrânt.
            </li>
            <li>
              <strong>Voievodatul lui Menumorut</strong> — situat în <em>Crișana</em>, cetatea la <em>Biharea</em>. A fost înfrânt de ducele Arpad, dar și-a menținut formațiunea prin diplomație — fiica sa s-a căsătorit cu fiul lui Arpad.
            </li>
            <li>
              <strong>Voievodatul lui Glad</strong> — situat în <em>Banat</em>, cetatea la <em>Cuvin</em>. A luptat cu ungurii și i-a învins inițial; formațiunea sa s-a menținut mai multă vreme.
            </li>
          </ul>

          <h3>Sursa istorică: Legenda Sf. Gerard (sec. XI)</h3>
          <p>
            Atestă alte două voievodate în Transilvania, intrate în conflict cu regele <strong>Ștefan I al Ungariei</strong> (care creștinase maghiarii în jurul anului 1000):
          </p>
          <ul>
            <li>
              <strong>Voievodatul lui Gyla</strong> — în Transilvania propriu-zisă, cetatea la <em>Bălgrad (Alba Iulia)</em>. Înfrânt deoarece s-a opus trecerii la catolicism.
            </li>
            <li>
              <strong>Voievodatul lui Ahtum</strong> — în <em>Banat</em>, cetatea la <em>Morisena (Cenad)</em>. Înfrânt deoarece a impus o taxă pe sarea ce tranzita formațiunea sa — un act de suveranitate economică inacceptabil pentru statul maghiar.
            </li>
          </ul>

          <p>
            <strong>Consecință:</strong> Procesul de cucerire a Transilvaniei de către Ungaria se desfășoară în secolele XI–XIII, în paralel cu colonizarea sașilor (meșteșugari și negustori germani, aduși pentru a consolida stăpânirea) și a secuilor (populație cu rol militar, plasată la granițe). În 1211 sunt aduși și <strong>Cavalerii Teutoni</strong> în Țara Bârsei, expulzați în 1225 deoarece au încercat să-și creeze un stat propriu.
          </p>
          <p>
            <strong>Organizația Transilvaniei:</strong> Structurată ca <em>voievodat</em> vasal Ungariei. Primul voievod atestat documentar este <strong>Leustachius (1176)</strong>. Treptat, românii sunt excluși din viața politică — după diplomele regelui Ludovic I (1366), calitatea de nobil era condiționată de apartenența la catolicism.
          </p>
        </div>
      ),
    },

    // ─── 04. FORMAȚIUNI EXTRACARPATIC ──────────────────────────────────
    {
      id: 'extracarpatic',
      type: 'text',
      title: '04. Formațiunile prestatale extracarpatic — Diploma Cavalerilor Ioaniți (1247)',
      content: (
        <div className="prose-content">
          <p>
            Cel mai important izvor pentru autonomiile din sudul și estul Carpaților este <strong>Diploma cavalerilor ioaniți</strong>, emisă de regele Ungariei, Bela IV, în 1247. Prin aceasta, cavalerii ioaniți erau chemați în <em>Țara Severinului</em> pentru a apăra și extinde stăpânirea maghiară la sud de Carpați.
          </p>
          <p>Diploma menționează explicit următoarele formațiuni:</p>
          <ul>
            <li>
              <strong>Voievodatul lui Litovoi</strong> — la vest de Olt, nu a recunoscut suzeranitatea maghiară. Litovoi a murit în luptă cu ungurii (1277–1279); fratele său Bărbat a fost luat prizonier și a trebuit să se răscumpere. Formațiunea a fost ulterior integrată în Țara Românească.
            </li>
            <li>
              <strong>Voievodatul lui Seneslau</strong> — la est de Olt, a recunoscut suzeranitatea maghiară.
            </li>
            <li>
              <strong>Cnezatul lui Ioan</strong> și <strong>Cnezatul lui Farcaș</strong> — situate între Jiu și Olt, redate cavalerilor ioaniți.
            </li>
            <li>
              <strong>Banatul de Severin</strong> — zonă de graniță controlată de un ban maghiar.
            </li>
          </ul>

          <h3>Formațiuni în spațiul moldovean (sec. IX–XIV)</h3>
          <p>
            Zona din estul Carpaților este mai puțin documentată. Principalele surse menționează:
          </p>
          <ul>
            <li><strong>Cronica lui Nestor</strong> (rusă) — menționează „volohi" (valahi) care i-au izgonit pe slavi din teritoriile nord-dunărene</li>
            <li><strong>Codrii Cosminului, Câmpul lui Dragoș, Țara Sipeniților</strong> — formațiuni localizate în nordul Moldovei, sec. IX–XI</li>
            <li>Autonomii ca <em>Cobâlele</em> (Neamț, Bacău, Vaslui) și <em>Ocoalele</em> (Câmpulung, Vrancea) — atestate în surse indirecte</li>
          </ul>

          <h3>Formațiuni în Dobrogea</h3>
          <p>
            <strong>Anna Comnena</strong> (Alexiada, sec. XI–XII) menționează formațiuni conduse de <em>Tatos, Seslav și Satza</em> la nordul Dunării. Ele s-au implicat în conflictele dintre Bizanț și pecenegi/cumani.
          </p>
        </div>
      ),
    },

    // ─── 05. ÎNTEMEIEREA STATELOR ────────────────────────────────────────
    {
      id: 'intemeierea-statelor',
      type: 'timeline',
      title: '05. Întemeierea statelor medievale românești',
      items: [
        {
          year: 'c. 1290',
          title: 'Tradiția „descălecatului" — Radu Negru',
          description: 'Letopisețul Cantacuzinesc consemnează că Negru Vodă din Făgăraș a trecut munții spre sud, a creat orașele Câmpulung și Argeș, iar boierii de peste Olt i s-au închinat. Nu e demonstrabil istoric, dar reflectă contribuția instituțională a Transilvaniei la crearea statului.',
          icon: 'crown',
        },
        {
          year: '1310–1352',
          title: 'Basarab I — întemeietorul Țării Românești',
          description: 'Unifică voievodatul lui Litovoi cu cel al lui Seneslau (~1300). În 1324 recunoaște suzeranitatea maghiară; i se recunosc domnia și stăpânirea asupra Olteniei, Munteniei și Basarabiei. Cucerește independența prin victoria de la Posada (1330) împotriva lui Carol Robert de Anjou.',
          icon: 'sword',
        },
        {
          year: '1352–1364',
          title: 'Nicolae Alexandru — consolidarea instituțiilor',
          description: 'Fiul lui Basarab. Întemeiază Mitropolia Țării Românești la Curtea de Argeș (1359), recunoscută de Patriarhia de la Constantinopol. Organizează Biserica ca instituție centrală.',
          icon: 'landmark',
        },
        {
          year: '1364–1377',
          title: 'Vladislav Vlaicu — primele monede și a doua Mitropolie',
          description: 'Bate primele monede ale Țării Românești. Întemeiază a doua Mitropolie la Severin (1370). Respinge primele atacuri otomane. Consolidează statul prin instituții proprii.',
          icon: 'scroll',
        },
        {
          year: '1352–1353',
          title: 'Descălecatul lui Dragoș — marca de apărare',
          description: 'Regele maghiar întemeiază o marcă de apărare împotriva tătarilor în nord-vestul Moldovei, condusă de Dragoș din Maramureș. Formațiunea era dependentă de Ungaria.',
          icon: 'flag',
        },
        {
          year: '1359',
          title: 'Bogdan din Maramureș — independența Moldovei',
          description: 'Voievod maramureșan în conflict cu regele maghiar, trece munții și îi alungă pe urmașii lui Dragoș. Obține independența Moldovei în urma confruntărilor cu Ludovic de Anjou (1364–1365). Fondatorul statului medieval Moldova.',
          icon: 'crown',
        },
        {
          year: 'c. 1346–1388',
          title: 'Dobrogea — de la Balica la Ivanco',
          description: 'Balica (c. 1346) unifică teritoriile dintre Dunăre și mare, intervenind în luptele bizantine. Dobrotici (1354–1386) obține titlul de despot și creează un stat independent. Ivanco (1386–1388) bate monedă proprie, dar este înfrânt de otomani. În 1388 Mircea cel Bătrân alipește Dobrogea la Țara Românească.',
          icon: 'map',
        },
      ],
    },

    // ─── 06. DOMNIA ──────────────────────────────────────────────────────
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
            Originea puterii era <em>de drept divin</em> — „din mila lui Dumnezeu". Investitura se realiza prin ungerea cu mir de către mitropolit (analog cu practica în statele creștine medievale).
          </p>

          <h3>Sistemul ereditar-electiv</h3>
          <p>
            Succesiunea la tron nu era strict ereditară. Orice membru al familiei domnitoare din <em>„os domnesc"</em> putea fi ales de boieri. Condiții: să fie de sex masculin și integru fizic. Acest sistem a generat frecvente lupte fratricide pentru tron.
          </p>

          <h3>Atribuțiile domnului</h3>
          <ul>
            <li><strong>Politice:</strong> conducea politica internă și externă, încheia tratate, declara război și pace</li>
            <li><strong>Administrative:</strong> numea și revoca dregătorii; împărțea țara în județe (TR) sau ținuturi (Moldova)</li>
            <li><strong>Legislative:</strong> emitea acte cu putere de lege (<em>hrisoave</em>); primele coduri de legi scrise apar în sec. XVI</li>
            <li><strong>Judecătorești:</strong> instanța supremă de judecată (Înaltul Divan); putea pronunța pedeapsa cu moartea</li>
            <li><strong>Economice:</strong> bătea monedă, stabilea impozitele, deținea <em>dominium eminens</em> — era teoretic proprietarul întregului pământ</li>
            <li><strong>Religioase:</strong> protector al Bisericii Ortodoxe, ctitor de lăcașuri de cult</li>
          </ul>

          <h3>Evoluția instituției domniei (sec. XVI–XVIII)</h3>
          <ul>
            <li><strong>Sfârșitul sec. XVI – sec. XVII:</strong> crește influența boierimii → se instituie <em>regimul boieresc (nobiliar)</em></li>
            <li><strong>Sec. XVIII:</strong> instaurarea <em>regimului fanariot</em> — Moldova (1711, ultimul domn pământean: Dimitrie Cantemir), Țara Românească (1716, ultimul domn pământean: Ștefan Cantacuzino). Domnii greci din cartierul Fanar (Constantinopol) devin simpli funcționari otomani, numiți și maziliți de sultan.</li>
          </ul>
        </div>
      ),
    },

    // ─── 07. SFATUL DOMNESC ──────────────────────────────────────────────
    {
      id: 'sfatul-domnesc',
      type: 'text',
      title: '07. Sfatul Domnesc și dregătoriile',
      content: (
        <div className="prose-content">
          <p>
            <strong>Sfatul Domnesc</strong> era organismul consultativ al domnului, format inițial din marii boieri, ulterior din boierii cu dregătorii. Membrul de drept era și <strong>mitropolitul</strong> — sfătuitorul spiritual al domnului și locțiitorul său în caz de absență.
          </p>
          <p>
            Atribuții: asista domnul la judecăți, participa la încheierea tratatelor, consiliere politică și fiscală.
          </p>

          <h3>Principalele dregătorii</h3>
          <p>Dregătoriile erau funcții administrative înalte, distincte în Țara Românească față de Moldova:</p>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, marginTop: 12 }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-strong)' }}>
                <th style={{ textAlign: 'left', padding: '8px 12px', color: 'var(--text-secondary)', fontWeight: 500 }}>Dregătorie</th>
                <th style={{ textAlign: 'left', padding: '8px 12px', color: 'var(--text-secondary)', fontWeight: 500 }}>Atribuții</th>
                <th style={{ textAlign: 'left', padding: '8px 12px', color: 'var(--text-secondary)', fontWeight: 500 }}>Obs.</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Banul', 'Cel mai important în Țara Românească; locțiitorul domnului în Oltenia', 'Nur TR'],
                ['Vornicul', 'Șeful curții domnești; atribuții judecătorești și administrative', 'TR și Moldova'],
                ['Logofătul', 'Șeful cancelariei; redacta actele și hrisoavele', 'TR și Moldova'],
                ['Vistiernicul', 'Răspundea de finanțele statului și de colectarea impozitelor', 'TR și Moldova'],
                ['Spătarul', 'Purtător de spadă; comandant militar (când domnul era absent)', 'TR'],
                ['Hatmanul', 'Comandantul armatei / al oastei', 'Moldova'],
                ['Portarul Sucevei', 'Atribuții militare și diplomatice (primirea solilor)', 'Moldova'],
                ['Paharnicul', 'Responsabil cu băuturile la curtea domnească', 'TR și Moldova'],
                ['Stolnicul', 'Responsabil cu masa și bucătăria domnească', 'TR și Moldova'],
                ['Postelnicul', 'Responsabil cu camera de dormit a domnului; relații diplomatice', 'TR și Moldova'],
                ['Comisul', 'Responsabil cu grajdurile și caii', 'TR și Moldova'],
              ].map(([d, a, o]) => (
                <tr key={d} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '8px 12px', color: 'var(--text-primary)', fontWeight: 500, fontSize: 13 }}>{d}</td>
                  <td style={{ padding: '8px 12px', color: 'var(--text-secondary)', fontSize: 12 }}>{a}</td>
                  <td style={{ padding: '8px 12px', color: 'var(--text-muted)', fontSize: 11 }}>{o}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },

    // ─── 08. ADUNAREA ȚĂRII & BISERICA ──────────────────────────────────
    {
      id: 'adunarea-tarii-si-biserica',
      type: 'cards',
      title: '08. Alte instituții centrale: Adunarea Țării și Biserica',
      items: [
        {
          title: 'Adunarea Țării (Stările Generale)',
          icon: 'users',
          description: 'Instituție reprezentativă convocată ocazional de domn pentru probleme excepționale: alegerea unui nou domn, schimbarea religiei, tratate importante, aprobarea unor impozite extraordinare. Formată din boieri, cler înalt și uneori orășeni / reprezentanți ai țăranilor liberi. Nu era un parlament în sens modern — nu se întrunea regulat.',
        },
        {
          title: 'Mitropolia Țării Românești (1359)',
          icon: 'landmark',
          description: 'Întemeiată de Nicolae Alexandru la Curtea de Argeș, recunoscută de Patriarhia de la Constantinopol. Mitropolitul: cel de-al doilea om în stat, membru de drept al Sfatului Domnesc, locțiitorul domnului. A doua Mitropolie întemeiată de Vladislav Vlaicu la Severin (1370).',
        },
        {
          title: 'Mitropolia Moldovei',
          icon: 'landmark',
          description: 'Întemeiată în timpul lui Petru Mușat (c. 1387), recunoscută de Patriarhia de la Constantinopol în 1401, în timpul lui Alexandru cel Bun. Reședința la Suceava.',
        },
        {
          title: 'Dieta (Congregația) Transilvaniei',
          icon: 'scroll',
          description: 'Echivalentul Adunării Țării în Transilvania. Din 1437, după Unio Trium Nationum, românii sunt excluși complet. Cele trei națiuni politice recunoscute erau: nobilimea maghiară, secuii și sașii — niciunul nu reprezenta românii, deși aceștia constituiau majoritatea populației.',
        },
      ],
    },

    // ─── 09. ARMATA ──────────────────────────────────────────────────────
    {
      id: 'armata',
      type: 'text',
      title: '09. Armata și sistemul de apărare',
      content: (
        <div className="prose-content">
          <h3>Oastea cea mică</h3>
          <p>
            Armata permanentă, formată din:
          </p>
          <ul>
            <li>Garda personală a domnului (curtenii)</li>
            <li>Cetele de oaste ale boierilor (obligați să lupte cu oamenii lor în schimbul pământului primit)</li>
            <li>Mercenari (secui, sași, în unele perioade)</li>
          </ul>
          <p>Intervenea rapid în caz de atac, fără mobilizare generală.</p>

          <h3>Oastea cea mare</h3>
          <p>
            Convocat în caz de pericol major. Includea toți bărbații apți de luptă — inclusiv țărani. Reprezenta <em>mobilizarea generală</em> a țării. Exemplu clasic: oastea lui Ștefan cel Mare convocată pentru apărarea Moldovei împotriva otomanilor.
          </p>

          <h3>Cetățile</h3>
          <p>
            Cetățile de interior și de graniță au jucat un rol esențial în apărare. În Țara Românească și Moldova, rețeaua de cetăți garanta rezistența în fața atacurilor. <strong>Important:</strong> instaurarea regimului fanariot a dus la dispariția oștirii proprii, deoarece principatele nu mai aveau politică externă autonomă.
          </p>

          <h3>Administrarea teritoriului</h3>
          <ul>
            <li><strong>Țara Românească</strong> — împărțită în <em>județe</em>, conduse de <em>județi</em> (funcționari numiți de domn)</li>
            <li><strong>Moldova</strong> — împărțită în <em>ținuturi</em>, conduse de <em>pârcălabi</em></li>
            <li><strong>Dreptul:</strong> bazat inițial pe <em>obiceiul pământului</em> (Jus Valachicum — drept cutumiar nescris); primele coduri de legi scrise apar în sec. XVI</li>
          </ul>
        </div>
      ),
    },
  ],

  // ─── QUIZ ────────────────────────────────────────────────────────────────
  quiz: [
    {
      question: 'Care este cel mai vechi izvor care menționează voievodatele lui Gelu, Menumorut și Glad?',
      options: ['Diploma cavalerilor ioaniți', 'Gesta Hungarorum (Anonymus)', 'Legenda Sf. Gerard', 'Alexiada Annei Comnena'],
      correctAnswer: 1,
      explanation: 'Gesta Hungarorum, scrisă de Anonymus (~1200), prezintă cele trei voievodate intracarpatic la venirea maghiarilor (sfârșitul sec. IX).',
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
      explanation: 'Diploma din 1247 menționează voievodatele lui Litovoi și Seneslau, cnezatele lui Ioan și Farcaș și Banatul de Severin — formațiunile din sudul Carpaților.',
    },
    {
      question: 'De ce a fost înfrânt voievodatul lui Ahtum de regele Ștefan I al Ungariei?',
      options: [
        'A atacat primul Ungaria',
        'A refuzat trecerea la catolicism',
        'A impus o taxă pe sarea ce tranzita formațiunea sa',
        'S-a aliat cu pecenegii',
      ],
      correctAnswer: 2,
      explanation: 'Ahtum a impus o taxă pe sarea ce tranzita Banatul — un act de suveranitate economică inacceptabil. Gyla a fost înfrânt pentru că s-a opus trecerii la catolicism.',
    },
    {
      question: 'Prin ce victorie a cucerit Basarab I independența Țării Românești față de Ungaria?',
      options: ['Bătălia de la Rovine (1394)', 'Bătălia de la Posada (1330)', 'Bătălia de la Vaslui (1475)', 'Bătălia de la Câmpia Mierlei (1389)'],
      correctAnswer: 1,
      explanation: 'Victoria de la Posada (1330) împotriva regelui Carol Robert de Anjou a consacrat independența Țării Românești.',
    },
    {
      question: 'Cine a înfăptuit descălecatul care a dus la independența Moldovei?',
      options: ['Dragoș din Maramureș', 'Alexandru cel Bun', 'Bogdan din Maramureș', 'Petru Mușat'],
      correctAnswer: 2,
      explanation: 'Bogdan din Maramureș a trecut munții în 1359, i-a alungat pe urmașii lui Dragoș și a obținut independența Moldovei față de Ungaria (1364–1365).',
    },
    {
      question: 'Ce înseamnă sistemul ereditar-electiv de succesiune la tron?',
      options: [
        'Tronul trecea obligatoriu la fiul cel mai mare',
        'Orice cetățean putea fi ales domn',
        'Orice membru din familia domnitoare (os domnesc) putea fi ales de boieri',
        'Sultanul otoman desemna direct domnul',
      ],
      correctAnswer: 2,
      explanation: 'Sistemul ereditar-electiv permitea ca orice bărbat integru fizic din familia domnitoare să fie ales de boieri. Acest sistem a generat frecvente conflicte pentru tron.',
    },
    {
      question: 'Care dregătorie era cea mai importantă în Țara Românească?',
      options: ['Logofătul', 'Vistiernicul', 'Spătarul', 'Banul'],
      correctAnswer: 3,
      explanation: 'Banul Olteniei era cel mai important dregător în Țara Românească — locțiitorul domnului în Oltenia. În Moldova, rolul similar era al Portarului Sucevei.',
    },
    {
      question: 'Ce atribuție distinctă îndeplinea logofătul?',
      options: ['Comanda armata', 'Redacta actele cancelariei domnești', 'Colecta impozitele', 'Administra grajdurile'],
      correctAnswer: 1,
      explanation: 'Logofătul era șeful cancelariei și redacta toate actele oficiale (hrisoavele) emise de domn.',
    },
    {
      question: 'Care a fost primul voievod atestat documentar al Transilvaniei?',
      options: ['Gelu', 'Glad', 'Leustachius', 'Menumorut'],
      correctAnswer: 2,
      explanation: 'Leustachius este primul voievod al Transilvaniei atestat documentar, în 1176, organizat ca voievodat vasal coroanei maghiare.',
    },
    {
      question: 'Cine a constituit cele 3 „națiuni" politice recunoscute ale Transilvaniei medievale (Unio Trium Nationum, 1437)?',
      options: [
        'Românii, ungurii și sașii',
        'Nobilimea maghiară, secuii și sașii',
        'Ungurii, românii și secuii',
        'Catolicii, ortodocșii și protestanții',
      ],
      correctAnswer: 1,
      explanation: 'Unio Trium Nationum (1437) a exclus românii din viața politică. Cele 3 națiuni recunoscute erau nobilimea maghiară, secuii și sașii.',
    },
    {
      question: 'Cine a înfăptuit unificarea politică a Dobrogei, obținând titlul de despot?',
      options: ['Balica', 'Ivanco', 'Dobrotici', 'Mircea cel Bătrân'],
      correctAnswer: 2,
      explanation: 'Dobrotici (1354–1386) a unificat formațiunile dobrogene și a obținut titlul de despot de la Bizanț, creând un stat independent.',
    },
    {
      question: 'Când a fost instaurate regimul fanariot în Moldova?',
      options: ['1699', '1711', '1716', '1821'],
      correctAnswer: 1,
      explanation: 'Regimul fanariot a fost instaurat în Moldova în 1711 (ultimul domn pământean: Dimitrie Cantemir) și în Țara Românească în 1716 (ultimul domn pământean: Ștefan Cantacuzino).',
    },
    {
      question: 'Ce este „oastea cea mare"?',
      options: [
        'Armata permanentă formată din curteni și boieri',
        'Mobilizarea generală a tuturor bărbaților apți, convocată în caz de pericol major',
        'Armata mercenară angajată de domn',
        'Cavaleria grea a boierilor',
      ],
      correctAnswer: 1,
      explanation: 'Oastea cea mare reprezenta mobilizarea generală — inclusiv a țăranilor — convocată doar în situații de pericol maxim pentru stat.',
    },
    {
      question: 'Cum era împărțit teritorial Moldova față de Țara Românească?',
      options: [
        'Moldova în județe, Țara Românească în ținuturi',
        'Moldova în ținuturi (conduse de pârcălabi), Țara Românească în județe (conduse de județi)',
        'Ambele în județe, conduse de vornici',
        'Moldova în voievodate, Țara Românească în cnezate',
      ],
      correctAnswer: 1,
      explanation: 'Țara Românească era împărțită în județe (conduse de județi), iar Moldova în ținuturi (conduse de pârcălabi).',
    },
    {
      question: 'Ce numim prin „obiceiul pământului" (Jus Valachicum)?',
      options: [
        'Primul cod de legi scris al Țării Românești',
        'Dreptul cutumiar (nescris) pe care se baza inițial justiția medievală românească',
        'Sistemul de impozitare al Imperiului Otoman',
        'Tratatul dintre Basarab și Ungaria',
      ],
      correctAnswer: 1,
      explanation: 'Obiceiul pământului (Jus Valachicum) era dreptul cutumiar, nescris, transmis oral, pe care se baza justiția medievală. Primele coduri de legi scrise apar abia în sec. XVI.',
    },
  ],
};
