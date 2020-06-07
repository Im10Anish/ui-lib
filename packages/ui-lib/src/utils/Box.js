/* @flow */
import React from 'react'
import styled from 'styled-components'

type BoxProps = {
	padding?: number | string,
	margin?: number | string,
	border?: string,
	borderWidth?: number | string,
	overflow?: boolean,
	width?: number | string,
	height?: number | string,
	grow?: boolean | number,
	shrink?: number,
	basis?: number | string,
	flex?: boolean | number,
	justifyContent?: string,
	center?: boolean,
	alignContent?: string,
	alignItems?: string,
	alignSelf?: string,
	order?: number,
	inline?: boolean,
	row?: boolean,
	wrap?: boolean,
	wrapReverse?: boolean,
	reverse?: boolean,
	styles?: any,
}

const Box = styled(
	React.forwardRef((
		/* eslint-disable no-unused-vars */
		{
			padding,
			margin,
			border,
			noBorder,
			borderWidth,
			overflow,
			width,
			height,
			grow,
			shrink,
			basis,
			flex,
			justifyContent,
			center,
			alignContent,
			alignItems,
			alignSelf,
			order,
			inline,
			row,
			wrap,
			wrapReverse,
			reverse,
			isExpanded,
			error,
			label,
			...props
		},
		/* eslint-enable no-unused-vars */
		ref
	) => <div ref={ref} {...props} />)
)((props: BoxProps) => ({
	// container
	padding: props.padding,
	margin: props.margin,
	border: props.border,
	borderWidth: props.borderWidth,
	overflow: props.overflow ? 'visible' : 'hidden',
	width: props.width,
	height: props.height,
	maxWidth: '100%',
	// flex props
	flexGrow: props.grow === true ? 1 : props.grow,
	flexShrink: props.shrink || 0,
	flexBasis: props.basis || 'auto',
	flex: props.flex === true ? 1 : props.flex,
	justifyContent: props.justifyContent || (props.center && 'center'),
	alignItems: props.alignItems || (props.center && 'center'),
	alignContent: props.alignContent || 'flex-start',
	alignSelf: props.alignSelf || 'safe',
	order: props.order,
	// shorthands
	display: `${props.inline ? 'inline-' : ''}flex`,
	flexWrap:
		(props.wrap && 'wrap') ||
		(props.wrapReverse && 'wrap-reverse') ||
		'nowrap',
	flexDirection:
		(props.row ? 'row' : 'column') + (props.reverse ? '-reverse' : ''),
}))

export { Box }
