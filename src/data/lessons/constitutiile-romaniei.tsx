import { LessonData } from '../types';

export const constitutiileRomaniei: LessonData = {
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
};
