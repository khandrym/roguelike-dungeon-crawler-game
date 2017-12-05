export default interface Theme {
  colorPrimary: string;
  colorMap: string;
  colorEnemy: string;
  colorWeapon: string;
  colorMedicine: string;
  colorGate: string;
  fontSizeTitle: string;
  fontSizeItemName: string;
}

export const theme: Theme = {
  colorPrimary: 'rgb(0,200,0)',
  colorMap: 'rgb(50,50,50)',
  colorEnemy: 'red',
  colorWeapon: 'orange',
  colorMedicine: 'blud',
  colorGate: 'pink',
  fontSizeTitle: '24px',
  fontSizeItemName: '18px'
};
