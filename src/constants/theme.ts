declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    primaryColor: string;
    secondaryColor: string;
    primaryFontColor: string;
    secondaryFontColor: string;
    otherFontColor: string;
    whiteColor: string;
    accentColor: string;
    invalidColor: string;
    validColor: string;
  };
  fontFamily: {
    primary: string;
  };
  // fontWeight: {
  // };
  fontSize: {
    titleFontSize: number;
    primaryFontSize: number;
  };
  padding: {
    container: number;
    authSection: number;
    mainSection: number;
  };
  containerWidth: {
    desktop: number;
  };
  borderRadius: {
    primaryBorderRadius: number;
  };
  shadows: {
    primary: string;
  };
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  colors: {
    primaryColor: '#316FEA',
    secondaryColor: '#38b6ff',
    primaryFontColor: '#1A1919',
    secondaryFontColor: '#060E1E',
    otherFontColor: '#A1ABB5',
    whiteColor: '#FFFFFF',
    accentColor: '#4d5ae5',
    invalidColor: '#FF1919',
    validColor: '#00e000',
  },
  fontFamily: {
    primary: 'Basis Grotesque Pro',
  },
  // fontWeight: {
  // };
  fontSize: {
    titleFontSize: 30,
    primaryFontSize: 16,
  },
  padding: {
    container: 16,
    authSection: 180,
    mainSection: 20,
  },
  containerWidth: {
    desktop: 1200,
  },
  borderRadius: {
    primaryBorderRadius: 4,
  },
  shadows: {
    primary: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
