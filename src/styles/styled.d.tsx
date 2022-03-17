import 'styled-components';

declare module 'styled-components' {
  export interface defaultTheme {
    light: {
      navShadow: string;
      backColor: string;
      cardBackColor: string;
      textColor: string;
      borderColor: string;
      cardPadding: string;
    };
    dark: {
      navShadow: string;
      backColor: string;
      cardBackColor: string;
      textColor: string;
      borderColor: string;
      cardPadding: string;
    };
  }
}
