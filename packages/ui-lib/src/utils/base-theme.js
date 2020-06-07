import { deepFreeze } from 'grommet/utils'

const baseColors = {
	primary: '#263b97',
	accent: '#8F9EFF',
	grey0: '#f5f5f5',
	grey1: '#ebeef3',
	grey2: '#D2D2D2',
	grey3: '#CCCCCC',
	grey4: '#808290',
	grey5: '#4c4c4c',
	error: '#cb4262',
	warn: '#dea64d',
	success: '#30b57d',
	neutral: '#005974',
	info: '#005974',
	white: '#fff',
	black: '#000',

	themeDec_AuditReport: 'rgb(48,181,125)',
	themeDec_TradeMgr: 'rgb(48,64,181)',
	themeDec_Production: 'rgb(222,166,77)',
	themeDec_Partner: 'rgb(203,66,98)',
	themeDec_Quality: 'rgb(157,123,165)',
	themeDec_Products: 'rgb(134,107,207)',
	themeDec_Weighbridge: 'rgb(213,121,80)',
	themeDec_ProdTrace: 'rgb(21,159,170)',
	themeDec_Feedback: 'rgb(213,121,80)',
	themeDec_Broadcast: 'rgb(48,64,181)',
}

const grommetTheme = {
	global: {
		active: {
			color: {
				dark: baseColors.white,
				light: baseColors.primary,
			},
		},
		focus: {
			border: {
				width: '2px',
				color: baseColors.accent,
			},
		},
		control: {
			border: {
				color: baseColors.primary,
			},
		},
		colors: {
			brand: baseColors.primary,
			accent: baseColors.accent,
			placeholder: baseColors.grey4,
			control: baseColors.primary,
		},
		input: {
			weight: 400,
			padding: '12px',
			border: {
				radius: '4px',
			},
		},
		drop: {
			extend: {
				border: '1px solid #fff',
			},
		},
		font: {
			name: 'Roboto',
			size: '16px',
			family: "'Roboto', Arial, sans-serif",
		},
	},
	text: {
		medium: {
			height: '32px',
		},
		extend: {
			fontSize: 'inherit',
		},
	},
	select: {
		icons: {
			margin: 'none',
		},
	},
	button: {
		color: {
			dark: baseColors.white,
			light: baseColors.primary,
		},
		primary: {
			color: baseColors.primary,
		},
		border: {
			radius: '4px',
			width: '1px',
		},
	},
	radioButton: {
		hover: {
			border: {
				color: baseColors.accent,
			},
		},
		extend: ({ checked }) => `
				${
					checked &&
					`box-shadow: 0 0 2px 2px ${baseColors.accent}; border-color: ${baseColors.primary}`
				}
			`,
	},
	checkBox: {
		toggle: {
			extend: ({ checked }) => `
				${checked && `border-color: ${baseColors.primary}`}
			`,
		},
		hover: {
			border: {
				color: baseColors.accent,
			},
		},
		border: {
			radius: '4px',
		},
	},
	layer: {
		border: {
			radius: '4px',
		},
	},
}

const theme = {
	orientationQueries: {
		portrait: '(orientation: portrait)',
		landscape: '(orientation: landscape)',
	},
	mediaQueries: {
		mobile: '(min-width: 320px) and (max-width: 767px)',
		tablet: '(min-width: 768px) and (max-width: 991px)',
		desktop: '(min-width: 1024px)',
	},
	color: baseColors,
	lineHeight: {
		xxl: 2,
		xl: 1.75,
		l: 1.5,
		m: 1,
		s: 0.5,
	},
	fontSize: {
		xxxxl: '30px',
		xxxl: '26px',
		xxl: '22px',
		xl: '18px',
		l: '16px',
		m: '14px',
		s: '12px',
		xs: '10px',
		xxs: '8px',
		xxxs: '6px',
	},
	fonts: {
		regular: {
			fontFamily: 'roboto',
			fontWeight: '400',
		},
		medium: {
			fontFamily: 'roboto',
			fontWeight: '500',
		},
		bold: {
			fontFamily: 'roboto',
			fontWeight: '700',
		},
	},
	letterSpacing: {
		xs: 1,
	},
	boxShadow: {
		thick: '0 0 20px 0 rgba(136,136,136,0.50)',
		thin: '0px 1px 4px #ccc',
	},
	em: '1em',
	rem: '1rem',
	border: '1px solid #ccc',
	borderRadius: '2',
	arrowSize: '5',
	bodyBackground: '#ebebeb',
	zIndex: {
		bury: -1,
		level1: 1,
		level2: 2,
		level3: 3,
		level4: 4,
		level5: 5,
		extreme: 999,
	},
	pxScale: 8,
	...grommetTheme,
}

export default deepFreeze(theme)
