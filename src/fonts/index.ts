import localFont from 'next/font/local';

export const operatorMono = localFont({
  src: [
    {
      path: '../fonts/OperatorMonoLig-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/OperatorMonoLig-BookItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/OperatorMonoLig-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/OperatorMonoLig-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
  ],
  variable: '--myfont-mono',
});
