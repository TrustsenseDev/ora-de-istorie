import { LessonData } from '../../types';
import { autonomiiLocaleSiInstitutiiCentrale } from './autonomii-locale-si-institutii-centrale';
import { statulRomanModern } from './statul-roman-modern';
import { romanitateaRomanilor } from './romanitatea-romanilor';
import { constitutiileRomaniei } from './constitutiile-romaniei';
import { secolulXxDemocratieTotalitarism } from './secolul-xx-democratie-totalitarism';
import { romaniaPostbelica } from './romania-postbelica';
import { romaniaConcertulEuropean } from './romania-concertul-european';
import { romaniaRazboiulRece } from './romania-razboiul-rece';

export const lessons: Record<string, LessonData> = {
  'autonomii-locale-si-institutii-centrale': autonomiiLocaleSiInstitutiiCentrale,
  'statul-roman-modern': statulRomanModern,
  'romanitatea-romanilor': romanitateaRomanilor,
  'constitutiile-romaniei': constitutiileRomaniei,
  'secolul-xx-democratie-totalitarism': secolulXxDemocratieTotalitarism,
  'romania-postbelica': romaniaPostbelica,
  'romania-concertul-european': romaniaConcertulEuropean,
  'romania-razboiul-rece': romaniaRazboiulRece,
};
