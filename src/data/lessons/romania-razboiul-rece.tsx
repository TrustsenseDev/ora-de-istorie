import { LessonData } from '../types';

export const romaniaRazboiulRece: LessonData = {
  id: 'romania-razboiul-rece',
  sections: [

    // ─── 01. CONTEXT: RĂZBOIUL RECE ──────────────────────────────────────
    {
      id: 'razboiul-rece-context',
      type: 'text',
      title: '01. Războiul Rece (1945–1991)',
      content: (
        <div className="prose-content">
          <p>
            <strong>Războiul Rece</strong> a fost o confruntare politică, ideologică, economică și militară <strong>indirectă</strong> între tabăra democratică (condusă de <strong>SUA</strong>) și cea comunistă (condusă de <strong>URSS</strong>). Cele două superputeri nu s-au confruntat niciodată direct, dar au susținut state sau grupări în războaie civile, fiecare încercând să-și sporească influența.
          </p>

          <span className="date-block">5 martie 1946 — Discursul de la Fulton</span>
          <p>
            Winston Churchill, fostul prim-ministru al Marii Britanii, a ținut un discurs la Fulton, Missouri, unde a folosit pentru prima dată conceptul de <strong>„Cortină de Fier"</strong>, care împărțea Europa în două: <strong>Europa democratică</strong> (statele din centrul și vestul Europei) și <strong>cea comunistă</strong> (statele din centrul și estul continentului).
          </p>

          <h3>Forme de manifestare — în plan economic</h3>
          <ul>
            <li><strong>1947 — Doctrina Truman:</strong> SUA acorda asistență militară și economică Turciei și Greciei pentru stăvilirea comunismului</li>
            <li><strong>1947 — Planul Marshall:</strong> SUA acorda statelor europene un ajutor financiar pentru a se reface rapid după război — statele comuniste au refuzat acest ajutor</li>
            <li><strong>1949 — CAER:</strong> URSS a creat Consiliul de Ajutor Economic Reciproc ca replică la Planul Marshall</li>
          </ul>

          <h3>Forme de manifestare — în plan politico-militar</h3>
          <ul>
            <li><strong>1949 — NATO</strong> (Organizația Tratatului Atlanticului de Nord) = alianță defensivă ce reunea statele democratice, în frunte cu SUA</li>
            <li><strong>1955 — Tratatul de la Varșovia</strong> (sau Pactul de la Varșovia) = alianță defensivă ce reunea toate statele comuniste din Europa de Est, cu excepția Iugoslaviei și, ulterior, a Albaniei</li>
            <li><strong>Cursa înarmărilor</strong> — mai ales dezvoltarea de noi arme nucleare</li>
            <li><strong>Cursa spațială</strong> — competiție pentru dominația spațiului cosmic</li>
            <li><strong>Spionaj și propagandă</strong> — CIA vs. KGB</li>
          </ul>

          <span className="date-block">1991 — Sfârșitul Războiului Rece</span>
          <p>
            Destrămarea URSS a condus la desființarea Pactului de la Varșovia și la sfârșitul Războiului Rece.
          </p>
        </div>
      ),
    },

    // ─── 02. CRIZELE RĂZBOIULUI RECE ─────────────────────────────────────
    {
      id: 'crizele-razboiului-rece',
      type: 'timeline',
      title: '02. Crizele Războiului Rece',
      items: [
        {
          year: '1948–1949',
          title: 'Blocada Berlinului',
          description:
            'URSS a blocat toate căile de acces terestre spre Berlinul de Vest. SUA și aliații au organizat un pont aerian masiv pentru a aproviziona orașul. A fost prima criză majoră a Războiului Rece.',
          icon: 'shield',
        },
        {
          year: '1950–1953',
          title: 'Războiul din Coreea',
          description:
            'Conflictul a dus la apariția Coreei de Nord (stat comunist) și a Coreei de Sud (stat democratic). SUA au intervenit sub mandatul ONU în sprijinul Sudului.',
          icon: 'sword',
        },
        {
          year: '1956',
          title: 'Criza Canalului Suez',
          description:
            'Egiptul a naționalizat Canalul Suez, provocând intervenția militară a Franței, Marii Britanii și Israelului. SUA și URSS au cerut retragerea, demonstrând noua ordine mondială bipolară.',
          icon: 'anchor',
        },
        {
          year: '1962',
          title: 'Criza rachetelor din Cuba',
          description:
            'Cel mai dificil moment din timpul Războiului Rece. URSS a instalat rachete nucleare în Cuba, la granița SUA. Lumea a fost la un pas de un război nuclear, dar criza s-a rezolvat diplomatic.',
          icon: 'alert-triangle',
        },
        {
          year: '1955–1975',
          title: 'Războiul din Vietnam',
          description:
            'Conflict de lungă durată în care SUA au încercat să oprească expansiunea comunismului în Asia de Sud-Est. Comuniștii au câștigat, iar Vietnamul a fost reunificat sub regim comunist.',
          icon: 'flag',
        },
        {
          year: '1967',
          title: 'Războiul arabo-israelian de șase zile',
          description:
            'Israel a câștigat un conflict rapid împotriva Egiptului, Siriei și Iordaniei. URSS a sprijinit statele arabe, iar SUA au sprijinit Israelul — un exemplu clasic de „proxy war".',
          icon: 'sword',
        },
        {
          year: '1979–1989',
          title: 'Războiul din Afganistan',
          description:
            'URSS a invadat Afganistanul pentru a susține regimul comunist local. SUA au sprijinit rezistența afgană (mujahedinii). Eșecul sovietic a contribuit la slăbirea URSS.',
          icon: 'mountain',
        },
      ],
    },

    // ─── 03. CONCEPTE CHEIE ─────────────────────────────────────────────
    {
      id: 'forme-manifestare',
      type: 'cards',
      title: '03. Concepte-cheie ale Războiului Rece',
      items: [
        {
          title: 'Cortina de Fier',
          icon: 'shield',
          description:
            'Concept folosit de Winston Churchill (1946) pentru a descrie diviziunea Europei: statele democratice (Vest) și cele comuniste (Est). Nu a fost o graniță fizică, ci una ideologică și politică.',
        },
        {
          title: 'Doctrina Truman (1947)',
          icon: 'flag',
          description:
            'Politica SUA de a oferi asistență militară și economică statelor amenințate de comunism. A fost prima manifestare concretă a politicii de „containment" (îngrădire a comunismului).',
        },
        {
          title: 'Planul Marshall (1947)',
          icon: 'banknote',
          description:
            'Program american de ajutor financiar pentru reconstrucția Europei de după război. Statele comuniste, inclusiv România, au fost obligate de URSS să refuze acest ajutor.',
        },
        {
          title: 'CAER (1949)',
          icon: 'building',
          description:
            'Consiliul de Ajutor Economic Reciproc — organizație economică creată de URSS ca replică la Planul Marshall. Coordona economia planificată a statelor comuniste.',
        },
        {
          title: 'NATO (1949)',
          icon: 'shield',
          description:
            'Organizația Tratatului Atlanticului de Nord — alianță militară defensivă a statelor democratice, condusă de SUA. Contraponderea militară a Pactului de la Varșovia.',
        },
        {
          title: 'Pactul de la Varșovia (1955)',
          icon: 'sword',
          description:
            'Alianță militară defensivă a statelor comuniste din Europa de Est, condusă de URSS. Reunea toate statele comuniste europene, cu excepția Iugoslaviei și, ulterior, a Albaniei.',
        },
      ],
    },

    // ─── 04. ROMÂNIA — PERIOADA STALINISTĂ ──────────────────────────────
    {
      id: 'romania-stalinista',
      type: 'text',
      title: '04. România și Războiul Rece — perioada stalinistă',
      content: (
        <div className="prose-content">
          <p>
            În primii ani ai Războiului Rece, <strong>politica externă a României a fost subordonată Moscovei</strong>. Sub conducerea lui <strong>Gheorghe Gheorghiu-Dej</strong>, România a fost un satelit fidel al URSS.
          </p>

          <h3>Integrarea în blocul sovietic</h3>

          <span className="date-block">1947 — Refuzul Planului Marshall</span>
          <p>
            România refuză ajutorul financiar oferit de SUA prin Planul Marshall, la presiunea URSS. Acest lucru a izolat economic România de Occident.
          </p>

          <span className="date-block">1948 — Tratat cu URSS</span>
          <p>
            România a semnat <strong>Tratatul de prietenie și asistență mutuală cu URSS</strong>, consacrând dependența față de Moscova.
          </p>

          <span className="date-block">1948–1955 — Sprijin pentru URSS contra Iugoslaviei</span>
          <p>
            România a susținut URSS în conflictul cu Iugoslavia comunistă condusă de <strong>Iosip Broz Tito</strong>, care refuzase subordonarea față de Moscova.
          </p>

          <span className="date-block">1949 — Membru CAER</span>
          <p>
            România devine membră a Consiliului de Ajutor Economic Reciproc, integrându-se economic în blocul sovietic.
          </p>

          <span className="date-block">1955 — Membru ONU și Pactul de la Varșovia</span>
          <p>
            România devine membră a <strong>Organizației Națiunilor Unite</strong> și a <strong>Tratatului de la Varșovia</strong>, consolidând integrarea în structurile internaționale comuniste.
          </p>

          <h3>Începutul distanțării de Moscova</h3>

          <span className="date-block">1956 — Revoluția din Ungaria</span>
          <p>
            România participă la înfrângerea revoluției din Ungaria. Ca urmare, în <strong>1958 are loc retragerea Armatei Roșii din România</strong> — moment crucial care permite României să înceapă distanțarea de Moscova.
          </p>

          <span className="date-block">1960–1965 — Apropierea de China</span>
          <p>
            Are loc îndepărtarea României de URSS și apropierea de China comunistă, care era și ea în conflict cu Moscova.
          </p>

          <span className="date-block">1961 — Ridicarea legațiilor la rang de ambasade</span>
          <p>
            Legațiile <strong>Marii Britanii și Franței</strong> din România sunt ridicate la rang de ambasade — un semn al deschiderii diplomatice.
          </p>

          <span className="date-block">1963 — Acord româno-iugoslav</span>
          <p>
            România semnează un acord cu Iugoslavia pentru construcția <strong>Complexului hidroenergetic de la Porțile de Fier</strong>.
          </p>

          <span className="date-block">1964 — Respingerea Planului Valev</span>
          <p>
            România respinge planul Valev, prin care ar fi trebuit să devină un stat preponderent agricol în cadrul CAER.
          </p>

          <span className="date-block">Aprilie 1964 — Declarația PMR</span>
          <p>
            <strong>Declarația din aprilie 1964</strong> a fost momentul de apogeu al politicii de desovietizare. România respingea modelul unic de socialism și proclama <strong>dreptul fiecărei țări de a edifica propriul model de socialism</strong>.
          </p>
        </div>
      ),
    },

    // ─── 05. CRONOLOGIA PERIOADEI STALINISTE ────────────────────────────
    {
      id: 'cronologie-stalinista',
      type: 'timeline',
      title: '05. Cronologia: România în blocul sovietic',
      items: [
        {
          year: '1947',
          title: 'Refuzul Planului Marshall',
          description:
            'România refuză ajutorul financiar american la presiunea URSS, izolându-se economic de Occident.',
          icon: 'ban',
        },
        {
          year: '1948',
          title: 'Tratat de prietenie cu URSS',
          description:
            'Tratatul de prietenie și asistență mutuală cu URSS consacră dependența României față de Moscova.',
          icon: 'handshake',
        },
        {
          year: '1949',
          title: 'Membru CAER',
          description:
            'România se integrează economic în blocul sovietic prin aderarea la Consiliul de Ajutor Economic Reciproc.',
          icon: 'building',
        },
        {
          year: '1955',
          title: 'Membru ONU și Pactul de la Varșovia',
          description:
            'România devine membră a ONU și a alianței militare comuniste — Pactul de la Varșovia.',
          icon: 'shield',
        },
        {
          year: '1956',
          title: 'Revoluția din Ungaria',
          description:
            'România participă la înfrângerea revoluției maghiare. În 1958, Armata Roșie se retrage din România.',
          icon: 'sword',
        },
        {
          year: '1963',
          title: 'Complexul Porțile de Fier',
          description:
            'Acord româno-iugoslav pentru construcția Complexului hidroenergetic de la Porțile de Fier pe Dunăre.',
          icon: 'zap',
        },
        {
          year: '1964',
          title: 'Declarația PMR din aprilie',
          description:
            'Momentul de apogeu al desovietizării: România proclamă dreptul fiecărei țări de a edifica propriul model de socialism.',
          icon: 'scroll',
        },
      ],
    },

    // ─── 06. NAȚIONAL-COMUNISMUL ─────────────────────────────────────────
    {
      id: 'romania-national-comunism',
      type: 'text',
      title: '06. România și Războiul Rece — național-comunismul',
      content: (
        <div className="prose-content">
          <p>
            După 1964, sub conducerea lui <strong>Nicolae Ceaușescu</strong> (din 1965), România a urmat o politică externă independentă față de Moscova, menținând însă regimul totalitar intern. <strong>Politica externă a României nu a mai fost subordonată Moscovei.</strong>
          </p>

          <h3>Deschiderea diplomatică (1967–1975)</h3>

          <span className="date-block">1967 — Relații cu RFG</span>
          <p>
            România a devenit <strong>prima țară comunistă care a stabilit relații diplomatice cu Republica Federală Germania</strong> (Germania de Vest).
          </p>

          <span className="date-block">1967 — Relațiile cu Israelul</span>
          <p>
            România a <strong>păstrat relațiile diplomatice cu Israelul</strong> după „Războiul de șase zile", contrar celorlalte state comuniste care le-au rupt la presiunea URSS.
          </p>

          <span className="date-block">1968 — Refuzul invaziei Cehoslovaciei</span>
          <p>
            România a <strong>refuzat să ia parte la invazia Cehoslovaciei</strong> (Primăvara de la Praga) alături de trupele Pactului de la Varșovia. Acest gest a crescut enorm prestigiul țării pe plan internațional. În același an, România a fost vizitată de <strong>Charles de Gaulle</strong>, președintele Franței.
          </p>

          <span className="date-block">1969 — Vizita lui Nixon</span>
          <p>
            România a fost <strong>prima țară comunistă vizitată de un președinte al SUA</strong> — <strong>Richard Nixon</strong>.
          </p>

          <span className="date-block">1972 — FMI și Banca Mondială</span>
          <p>
            România a devenit membră a <strong>Fondului Monetar Internațional</strong> și a <strong>Băncii Mondiale</strong> — instituții financiare occidentale.
          </p>

          <span className="date-block">1975 — Conferința de la Helsinki</span>
          <p>
            La <strong>Conferința pentru Securitate și Cooperare în Europa (CSCE)</strong>, Ceaușescu a semnat Actul Final, angajându-se să respecte drepturile omului și libertățile fundamentale. România a fost vizitată de <strong>Gerald Ford</strong>, președintele SUA. Tot în 1975, România a primit <strong>clauza națiunii celei mai favorizate</strong> din partea SUA.
          </p>

          <span className="date-block">1978 — Vizita la regina Elisabeta a II-a</span>
          <p>
            Nicolae Ceaușescu a fost <strong>singurul lider comunist primit de regina Elisabeta a II-a</strong> a Marii Britanii.
          </p>

          <h3>Declinul și izolarea (anii &#39;80)</h3>

          <span className="date-block">1985 — Glasnost și Perestroika</span>
          <p>
            <strong>Mihail Gorbaciov</strong>, noul lider al URSS, lansează <em>glasnost</em> (politică de liberalizare/transparență) și <em>perestroika</em> (reconstrucție economică). Ceaușescu refuză aceste reforme, provocând o nouă distanțare — de data aceasta, România devenind mai conservatoare decât URSS.
          </p>

          <span className="date-block">1988 — Pierderea clauzei națiunii celei mai favorizate</span>
          <p>
            Din cauza <strong>încălcării drepturilor omului</strong> și a deteriorării relațiilor cu Occidentul, România pierde clauza națiunii celei mai favorizate acordată de SUA, marcând izolarea internațională completă.
          </p>
        </div>
      ),
    },

    // ─── 07. CRONOLOGIA NAȚIONAL-COMUNISMULUI ────────────────────────────
    {
      id: 'cronologie-national-comunism',
      type: 'timeline',
      title: '07. Cronologia: Politica externă independentă',
      items: [
        {
          year: '1967',
          title: 'Relații diplomatice cu RFG',
          description:
            'Prima țară comunistă care stabilește relații cu Germania de Vest. Păstrează și relațiile cu Israelul după Războiul de șase zile.',
          icon: 'handshake',
        },
        {
          year: '1968',
          title: 'Refuzul invaziei Cehoslovaciei',
          description:
            'România refuză să participe la invadarea Cehoslovaciei de trupele Pactului de la Varșovia. Vizita lui Charles de Gaulle.',
          icon: 'shield',
        },
        {
          year: '1969',
          title: 'Vizita lui Richard Nixon',
          description:
            'România devine prima țară comunistă vizitată de un președinte american. Marchează apogeul relațiilor româno-americane.',
          icon: 'plane',
        },
        {
          year: '1972',
          title: 'Membru FMI și Banca Mondială',
          description:
            'România se integrează în instituțiile financiare occidentale, o mișcare unică pentru o țară din blocul comunist.',
          icon: 'landmark',
        },
        {
          year: '1975',
          title: 'Helsinki și clauza națiunii celei mai favorizate',
          description:
            'Ceaușescu semnează Actul Final CSCE. România primește clauza națiunii celei mai favorizate de la SUA. Vizita lui Gerald Ford.',
          icon: 'scroll',
        },
        {
          year: '1978',
          title: 'Vizita la regina Elisabeta a II-a',
          description:
            'Ceaușescu este singurul lider comunist primit de regina Marii Britanii — apogeul recunoașterii internaționale.',
          icon: 'crown',
        },
        {
          year: '1985',
          title: 'Gorbaciov: glasnost și perestroika',
          description:
            'URSS lansează reforme de liberalizare. Ceaușescu le refuză, izolând România atât de Occident cât și de propriul bloc comunist.',
          icon: 'alert-triangle',
        },
        {
          year: '1988',
          title: 'Pierderea clauzei națiunii celei mai favorizate',
          description:
            'SUA retrage privilegiile comerciale din cauza încălcării drepturilor omului. România este izolată internațional.',
          icon: 'x-circle',
        },
      ],
    },

    // ─── 08. CONCEPTE POLITICA EXTERNĂ ──────────────────────────────────
    {
      id: 'concepte-politica-externa',
      type: 'cards',
      title: '08. Concepte-cheie: România în Războiul Rece',
      items: [
        {
          title: 'Declarația din aprilie 1964',
          icon: 'scroll',
          description:
            'Document al PMR (Partidul Muncitoresc Român) prin care România respingea modelul unic de socialism și proclama dreptul fiecărei țări de a-și construi propriul model. Apogeul desovietizării.',
        },
        {
          title: 'Planul Valev',
          icon: 'map',
          description:
            'Plan economic sovietic respins de România (1964) care prevedea transformarea țării într-un stat preponderent agricol în cadrul CAER, cu industrializarea concentrată în URSS.',
        },
        {
          title: 'Primăvara de la Praga (1968)',
          icon: 'sun',
          description:
            'Mișcare de liberalizare în Cehoslovacia, zdrobită de invazia trupelor Pactului de la Varșovia. România a refuzat să participe, câștigând respect internațional.',
        },
        {
          title: 'Clauza națiunii celei mai favorizate',
          icon: 'star',
          description:
            'Statut comercial acordat de SUA României (1975), oferind tarife preferențiale. Pierdut în 1988 din cauza încălcării drepturilor omului de regimul Ceaușescu.',
        },
        {
          title: 'Glasnost și Perestroika',
          icon: 'refresh-cw',
          description:
            'Reforme lansate de Gorbaciov (1985): glasnost = transparență/liberalizare politică; perestroika = reconstrucție economică. Ceaușescu a refuzat ambele.',
        },
        {
          title: 'CSCE / Helsinki (1975)',
          icon: 'globe',
          description:
            'Conferința pentru Securitate și Cooperare în Europa. Actul Final includea angajamente privind respectarea drepturilor omului — promisiuni pe care România le-a încălcat sistematic.',
        },
      ],
    },
  ],

  quiz: [
    {
      question: 'Care au fost cele două superputeri ale Războiului Rece?',
      options: ['SUA și Marea Britanie', 'SUA și URSS', 'Germania și Japonia', 'Franța și URSS'],
      correctAnswer: 1,
      explanation: 'Războiul Rece a fost confruntarea indirectă dintre SUA și URSS.',
    },
    {
      question: 'Cine a folosit pentru prima dată conceptul de „Cortina de Fier"?',
      options: ['Franklin Roosevelt', 'Winston Churchill', 'Harry Truman', 'Charles de Gaulle'],
      correctAnswer: 1,
      explanation: 'Winston Churchill a folosit termenul în discursul de la Fulton (1946).',
    },
    {
      question: 'Ce a fost Planul Marshall?',
      options: ['O alianță militară', 'Un plan de ajutor financiar american pentru Europa', 'Un tratat de pace', 'O organizație comunistă'],
      correctAnswer: 1,
      explanation: 'Planul Marshall a fost programul american de ajutor financiar pentru reconstrucția Europei.',
    },
    {
      question: 'Ce alianță militară a condus URSS?',
      options: ['NATO', 'Pactul de la Varșovia', 'CAER', 'ONU'],
      correctAnswer: 1,
      explanation: 'Pactul de la Varșovia (1955) a fost alianța militară a statelor comuniste.',
    },
    {
      question: 'Care a fost „cel mai dificil moment" al Războiului Rece?',
      options: ['Blocada Berlinului', 'Războiul din Coreea', 'Criza rachetelor din Cuba', 'Războiul din Vietnam'],
      correctAnswer: 2,
      explanation: 'Criza rachetelor din Cuba (1962) a adus lumea la un pas de un război nuclear.',
    },
    {
      question: 'Când a devenit România membră a Pactului de la Varșovia?',
      options: ['1949', '1955', '1960', '1968'],
      correctAnswer: 1,
      explanation: 'România a devenit membră a Pactului de la Varșovia în 1955.',
    },
    {
      question: 'Ce eveniment din 1956 a permis retragerea Armatei Roșii din România?',
      options: ['Declarația din aprilie', 'Participarea la înfrângerea revoluției din Ungaria', 'Vizita lui Nixon', 'Aderarea la ONU'],
      correctAnswer: 1,
      explanation: 'După participarea la înfrângerea revoluției din Ungaria (1956), Armata Roșie s-a retras din România în 1958.',
    },
    {
      question: 'Ce a marcat Declarația din aprilie 1964?',
      options: ['Aderarea la NATO', 'Dreptul fiecărei țări la propriul model de socialism', 'Revoluția din 1989', 'Colectivizarea'],
      correctAnswer: 1,
      explanation: 'Declarația din aprilie 1964 a proclamat dreptul fiecărei țări de a edifica propriul model de socialism.',
    },
    {
      question: 'Ce a fost Planul Valev, respins de România?',
      options: ['Un plan de industrializare', 'Un plan care prevedea transformarea României în stat agricol', 'Un tratat de pace', 'O reformă educațională'],
      correctAnswer: 1,
      explanation: 'Planul Valev prevedea transformarea României într-un stat preponderent agricol în cadrul CAER.',
    },
    {
      question: 'Ce atitudine a avut România față de invadarea Cehoslovaciei în 1968?',
      options: ['A participat', 'A refuzat să participe', 'A sprijinit URSS', 'A fost neutră'],
      correctAnswer: 1,
      explanation: 'Ceaușescu a refuzat să participe la invadarea Cehoslovaciei (Primăvara de la Praga).',
    },
    {
      question: 'Cine a fost primul președinte american care a vizitat România?',
      options: ['John F. Kennedy', 'Richard Nixon', 'Gerald Ford', 'Jimmy Carter'],
      correctAnswer: 1,
      explanation: 'Richard Nixon a vizitat România în 1969 — prima vizită a unui președinte SUA într-o țară comunistă.',
    },
    {
      question: 'Ce a fost CAER?',
      options: ['O alianță militară', 'Consiliul de Ajutor Economic Reciproc', 'O organizație culturală', 'Un tratat de pace'],
      correctAnswer: 1,
      explanation: 'CAER (1949) a fost organizația economică a statelor comuniste, creată ca replică la Planul Marshall.',
    },
    {
      question: 'Când a primit România clauza națiunii celei mai favorizate de la SUA?',
      options: ['1969', '1972', '1975', '1978'],
      correctAnswer: 2,
      explanation: 'România a primit clauza națiunii celei mai favorizate în 1975.',
    },
    {
      question: 'De ce a pierdut România clauza națiunii celei mai favorizate în 1988?',
      options: ['Din cauza relațiilor cu China', 'Din cauza încălcării drepturilor omului', 'Din cauza datoriilor externe', 'Din cauza conflictului cu Ungaria'],
      correctAnswer: 1,
      explanation: 'Încălcarea drepturilor omului a dus la pierderea clauzei în 1988.',
    },
    {
      question: 'Ce a reprezentat glasnost, lansată de Gorbaciov?',
      options: ['Reconstrucție economică', 'Politică de liberalizare/transparență', 'O alianță militară', 'Un program spațial'],
      correctAnswer: 1,
      explanation: 'Glasnost = politică de liberalizare/transparență, lansată de Gorbaciov în 1985.',
    },
  ],
};
