export type ThemeColorProps = {
	[key: string]: string;
};
export type ThemeArrayProps = Array<number>;

const colors: ThemeColorProps = {
	white: '#FFFFFF',
	whiteBlue: '#EBF0FC',
	black: '#000000',
	orange500: '#FFBA00',

	// blue300: '#4864E4', 어두운 컬러
	// blue500: '#0040D2',
	// blue700: '#0029BB',

	//좀더 밝은 컬러
	blue300: '#7184FF',
	blue500: '#0047FF',
	blue700: '#0033E6',
	gray100: '#F2F2F2',
	gray300: '#D9D9D9',
	gray500: '#959595',
	gray800: '#3B3B3B',

	steelBlue: '#577A98',
	lightSteelBlue: '#8AA2B7',
	darkSteelBlue: '#3D556A',

	green: '#00C569',
	lightGreen: '#4DD796',
	darkGreen: '#008A49',

	orange: '#FFA200',
	lightOrange: '#FFBE4D',
	darkOrange: '#B27100',

	red: '#FF4646',
	lightRed: '#FF7E7E',
	darkRed: '#B23131',

	gray: '#D9D9D9',
	lightGray: '#F2F2F2',
	darkGray: '#959595',

	brightRed: '#F26F7B',
	brightOrange: '#F2BB16',
	brightBlue: '#3084F2',
	brightCyan: '#2EB8E1',
	brightGreen: '#0CD484',
	brightPurple: '#6151F5',

	excelGreen: '#499C6D',
	shadow: 'rgba(0,0,0,0.15)',
	transparent: 'rgba(0, 0, 0, 0)',
	whiteTransparent: 'rgba(255,255,255,0.9)',
};

const space: ThemeArrayProps = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40];
const fontSizes: ThemeArrayProps = [10, 12, 14, 16, 18, 24, 32, 64];
const radii: ThemeArrayProps = [4, 8, 12, 16];

const theme = {
	colors,
	space,
	fontSizes,
	radii,
};

export default theme;
