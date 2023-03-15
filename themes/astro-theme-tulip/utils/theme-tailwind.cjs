module.exports = {
  borderWidth: {
    0: '0',
    2: '2px',
    4: '4px',
    8: '8px',
    px: '1px',
  },
  boxShadow: {
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    none: 'none',
  },
  fontFamily: {
    heading: 'inherit',
    metropolis: 'Inter, Metropolis, Georgia, Cambria, "Times New Roman", Times, serif',
    sans: 'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    serif: 'Georgia,Cambria,"Times New Roman",Times,serif',
    mono: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    body: 'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    monospace: 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    inter:
      'Inter, Roboto, "Helvetica Neue", Arial, "Noto Sans", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },
  fontSize: {
    super: '5.5rem', // 88
    h1: '4rem', // 64
    h2: '3rem', // 48
    h3: '2.5rem', // 40,
    h4: '2rem', // 32
    h5: '1.5rem', // 24
    h6: '1.25rem', // 20
    h7: '1rem', // 16
    h8: '0.75rem', // 12
    bodyArticle: '1.25rem', // 20
    bodyArticleSmall: '1rem', // 16
    bodyArticleLarge: '1.5rem', // 24
    bodySmall: '0.875rem', // 14
    bodyExtraSmall: '0.675rem', // 12
    bodyLarge: '1.25rem',
    body: '1rem', // 16
    accent: '1rem', // 16
    uppercase: '0.75rem', // 12
  },
  fontWeight: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
    body: '400',
    heading: '700',
  },
  colors: {
    textPrimary: '#2d3748', // gray8
    textSecondary: '#718096', // gray 6
    textLinkPrimary: '#3B82F6', // blue5
    textLinkHoverPrimary: '#ea364a', // brand
    textDark: '#1a202c', // gray9
    bgPrimary: '#EDF2F7', // gray2
    bgTag: '#3b82f6', // blue5
    borderTag: '#3b82f6', // blue5
    textTag: '#fff', // white
    bgTagHover: '#fff', // white
    textTagHover: '#3b82f6', // blue5
    bgLight: '#fff',
    textLight: '#fff',
    bgDark: '#1e1e1e',
    textFooterDark: '#bcbcbc',
    borderPrimary: '#edf2f7', // gray2

    socialFacebook: '#3b5998',
    socialTwitter: '#1da1f2',
    socialWhatsapp: '#25d366',
    socialInstagram: '#fff',
    socialLinkedin: '#fff',

    transparent: 'transparent',
    citrus: '#8EB307',
    black: '#000',
    white: '#fff',
    Ytblue: '#065fd4',
    lightBlue: 'rgb(57,140,249)',
    grayDark: '#2d3748',
    text: '#2d3748',
    background: '#fff',
    primary: '#ea364a',
    primaryHover: '#2c5282',
    secondary: '#718096',
    muted: '#e2e8f0',
    success: '#9ae6b4',
    info: '#63b3ed',
    warning: '#faf089',
    danger: '#feb2b2',
    light: '#f7fafc',
    dark: '#2d3748',
    textMuted: '#718096',
    blue: {
      50: '#EFF6FF',
      100: '#DBEAFE',
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA',
      500: '#3B82F6',
      600: '#2563EB',
      700: '#1D4ED8',
      800: '#1E40AF',
      900: '#1E3A8A',
    },
    gray: {
      50: '#f7f7fc',
      100: '#f7fafc',
      200: '#edf2f7',
      300: '#e2e8f0',
      400: '#cbd5e0',
      500: '#a0aec0',
      600: '#718096',
      700: '#4a5568',
      800: '#2d3748',
      900: '#1a202c',
    },
  },
  spacing: {
    spacing1: '0.125rem', // 2
    spacing2: '0.25rem', // 4
    spacing3: '0.5rem', // 8
    spacing4: '0.75rem', // 12
    spacing5: '1rem', // 16
    spacing6: '1.5rem', // 24
    spacing7: '2rem', // 32
    spacing8: '2.5rem', // 40
    spacing9: '3rem', // 48
    layout1: '1rem', // 16
    layout2: '1.5rem', // 24
    layout3: '2rem', // 32
    layout4: '3rem', // 48
    layout5: '4rem', // 64
    layout6: '6rem', // 96
    layout7: '10rem', // 160
    // 0: '0',
    // 1: '0.25rem',
    // 2: '0.5rem',
    // 3: '0.75rem',
    // 4: '1rem',
    // 5: '1.25rem',
    // 6: '1.5rem',
    // 8: '2rem',
    // 10: '2.5rem',
    // 12: '3rem',
    // 16: '4rem',
    // 20: '5rem',
    // 24: '6rem',
    // 32: '8rem',
    // 40: '10rem',
    // 48: '12rem',
    // 56: '14rem',
    // 64: '16rem',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    body: '1.625',
    heading: '1.25',
  },
  borderRadius: {
    default: '0.25rem',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  opacity: {
    0: '0',
    25: '0.25',
    50: '0.5',
    75: '0.75',
    100: '1',
  },
  zIndex: {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    auto: 'auto',
  },
  transformOrigin: {
    center: 'center',
    top: 'top',
    'top-right': 'top right',
    right: 'right',
    'bottom-right': 'bottom right',
    bottom: 'bottom',
    'bottom-left': 'bottom left',
    left: 'left',
    'top-left': 'top left',
  },
  translate: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
    px: '1px',
    '-full': '-100%',
    '-1/2': '-50%',
    '1/2': '50%',
    full: '100%',
  },
  scale: {
    0: '0',
    50: '.5',
    75: '.75',
    90: '.9',
    95: '.95',
    100: '1',
    105: '1.05',
    110: '1.1',
    125: '1.25',
    150: '1.5',
  },
  rotate: {
    0: '0',
    45: '45deg',
    90: '90deg',
    180: '180deg',
    '-180': '-180deg',
    '-90': '-90deg',
    '-45': '-45deg',
  },
  skew: {
    0: '0',
    3: '3deg',
    6: '6deg',
    12: '12deg',
    '-12': '-12deg',
    '-6': '-6deg',
    '-3': '-3deg',
  },
  transitionTimingFunction: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  transitionDuration: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms',
  },
};
