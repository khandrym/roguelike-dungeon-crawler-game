import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

export interface Theme {
  colorPrimary: string;
  colorDarkness: string;
  colorGround: string;
  colorWall: string;
  colorBorder: string;
  colorEnemy: string;
  colorWeapon: string;
  colorMedicine: string;
  colorGate: string;
  fontSizeTitle: string;
  fontSizeItemName: string;
}

export const theme: Theme = {
  colorPrimary: 'rgb(0,200,0)',
  colorDarkness: 'rgb(20,20,20)',
  colorGround: 'rgb(50,50,50)',
  colorWall: 'rgb(70,70,70)',
  colorBorder: 'rgb(60,60,60)',
  colorEnemy: 'red',
  colorWeapon: 'orange',
  colorMedicine: 'blud',
  colorGate: 'pink',
  fontSizeTitle: '24px',
  fontSizeItemName: '18px'
};

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export { css, injectGlobal, keyframes, ThemeProvider, styled };
