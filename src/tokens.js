export const colors = {
  primary: '#222222',
  secondary: '#838383',
  muted: '#A3A3A3',
  white: '#FFFFFF',
  background: '#FCFCFC',
  surface: '#F7F7F8',
  surfaceHover: '#F7F7F8',
  surfacePressed: '#F1F1F1',
  disabled: '#E7E7E7',
  divider: '#E7E7E7',
  dividerSubtle: '#D9D9D9',
  dividerDisabled: '#C3C3C3',

  purple100: '#F8F1FF',
  purpleTint: '#F5EBFF',
  purple: '#A852FF',
  purpleHover: '#9E46F7',
  purplePressed: '#983FF2',
  purple200: '#BB92F0',
  purple700: '#5E06CE',
  purpleOverlay: 'rgba(168, 82, 255, 0.1)',

  blue: '#7DD9E8',
  blue100: '#F8FEFF',
  blue200: '#D8F4F8',
  darkBlue: '#2F35E8',
  mdsBlue: '#5567B2',

  green100: '#F2FCF1',
  green300: '#E7F9E5',
  green: '#11BE68',

  yellow100: '#FFFCF1',
  yellow: '#FFD549',

  error100: '#FFF8F8',
  error200: '#FFF2F2',
  error: '#FD6C6C',
}

export const fonts = {
  montserrat: '"Montserrat", sans-serif',
  inter: '"Inter", sans-serif',
}

export const fontSizes = {
  xxxs: '8px',
  xxs: '10px',
  xs: '12px',
  sm: '14px',
  base: '16px',
  lg: '20px',
  xl2: '24px',
  xl3: '40px',
}

export const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
}

export const lineHeights = {
  tight: '14px',
  xs: '15px',
  sm: '18px',
  base: '21px',
  md: '22px',
}

export const radii = {
  icon: '3px',
  boxSm: '4px',
  box: '10px',
  rounded: '100px',
}

export const textStyles = {
  body8Regular:            { fontFamily: fonts.montserrat, fontSize: fontSizes.xxxs, fontWeight: fontWeights.regular,  lineHeight: 'normal' },
  body8Medium:             { fontFamily: fonts.montserrat, fontSize: fontSizes.xxxs, fontWeight: fontWeights.medium,   lineHeight: 'normal' },
  body8SB:                 { fontFamily: fonts.montserrat, fontSize: fontSizes.xxxs, fontWeight: fontWeights.semibold, lineHeight: 'normal' },
  body10Medium:            { fontFamily: fonts.montserrat, fontSize: fontSizes.xxs,  fontWeight: fontWeights.medium,   lineHeight: lineHeights.tight },
  body12Regular:           { fontFamily: fonts.montserrat, fontSize: fontSizes.xs,   fontWeight: fontWeights.regular,  lineHeight: lineHeights.sm },
  body12Italic:            { fontFamily: fonts.montserrat, fontSize: fontSizes.xs,   fontWeight: fontWeights.regular,  fontStyle: 'italic', lineHeight: lineHeights.base },
  body12SBItalic:          { fontFamily: fonts.montserrat, fontSize: fontSizes.xs,   fontWeight: fontWeights.semibold, fontStyle: 'italic', lineHeight: lineHeights.base },
  heading12SB:             { fontFamily: fonts.montserrat, fontSize: fontSizes.xs,   fontWeight: fontWeights.semibold, lineHeight: lineHeights.md },
  body14Regular:           { fontFamily: fonts.montserrat, fontSize: fontSizes.sm,   fontWeight: fontWeights.regular,  lineHeight: lineHeights.base },
  body14RegularUnderline:  { fontFamily: fonts.montserrat, fontSize: fontSizes.sm,   fontWeight: fontWeights.regular,  lineHeight: lineHeights.base, textDecoration: 'underline' },
  body14Medium:            { fontFamily: fonts.montserrat, fontSize: fontSizes.sm,   fontWeight: fontWeights.medium,   lineHeight: 'normal' },
  body14SB:                { fontFamily: fonts.montserrat, fontSize: fontSizes.sm,   fontWeight: fontWeights.semibold, lineHeight: 'normal' },
  body14Bold:              { fontFamily: fonts.montserrat, fontSize: fontSizes.sm,   fontWeight: fontWeights.bold,     lineHeight: 'normal' },
  body16Medium:            { fontFamily: fonts.montserrat, fontSize: fontSizes.base, fontWeight: fontWeights.medium,   lineHeight: 'normal' },
  body16SB:                { fontFamily: fonts.montserrat, fontSize: fontSizes.base, fontWeight: fontWeights.semibold, lineHeight: 'normal' },
  heading16SBUnderline:    { fontFamily: fonts.montserrat, fontSize: fontSizes.base, fontWeight: fontWeights.semibold, lineHeight: 'normal', textDecoration: 'underline' },
  heading20SB:             { fontFamily: fonts.montserrat, fontSize: fontSizes.lg,   fontWeight: fontWeights.semibold, lineHeight: 'normal' },
  body24BoldCaps:          { fontFamily: fonts.montserrat, fontSize: fontSizes.xl2,  fontWeight: fontWeights.bold,     lineHeight: 'normal' },
  heading24SB:             { fontFamily: fonts.montserrat, fontSize: fontSizes.xl2,  fontWeight: fontWeights.semibold, lineHeight: 'normal' },
  heading40Medium:         { fontFamily: fonts.montserrat, fontSize: fontSizes.xl3,  fontWeight: fontWeights.medium,   lineHeight: 'normal' },
}
