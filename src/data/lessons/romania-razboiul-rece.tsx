import { LessonData } from '../types';

export const romaniaRazboiulRece: LessonData = {
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
};
