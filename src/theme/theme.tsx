export default interface Theme {
  colorPrimary: string;
  colorMap: string;
  colorEnemy: string;
  fontSizeTitle: string;
  fontSizeInfoName: string;
}

export const theme: Theme = {
  colorPrimary: 'rgb(0,200,0)',
  colorMap: 'rgb(50,50,50)',
  colorEnemy: 'rgb(255,0,0)',
  fontSizeTitle: '24px',
  fontSizeInfoName: '18px'
};
