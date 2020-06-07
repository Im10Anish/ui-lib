import React, { useContext, useState } from 'react'
import { Hide, View, Search } from 'grommet-icons'
import styled from 'styled-components'
import { TextInput, Button, ThemeContext } from 'grommet'

import { Box } from 'ui-lib/utils/Box'

const Wrapper = styled(Box)(p => ({
	borderWidth: '1px',
	borderStyle: 'solid',
	backgroundColor: p.theme.color.white,
	borderColor: p.error ? p.theme.color.error : p.theme.color.primary,
	borderImage: 'initial',
	padding: 0,
	borderRadius: '4px',
	...(p.label && {
		border: 'none',
		borderRadius: 'initial',
		borderBottom: `1px solid ${
			p.error ? p.theme.color.error : p.theme.color.primary
		}`,
	}),
	...(p.focus && {
		outlineColor: p.theme.color.accent,
		boxShadow: `0 0 2px 2px ${p.theme.color.accent}`,
		borderColor: p.error ? p.theme.color.error : p.theme.color.accent,
	}),
}))

type Props = {
	placeholder: string,
}

const Input = ({ placeholder }: Props) => {
	const theme = useContext(ThemeContext)

	return (
		<TextInput
			plain
			placeholder={placeholder}
			style={{
				background: 'white',
				border: `1px solid ${theme.color.primary}`,
			}}
		/>
	)
}

const SearchInput = ({ placeholder }: Props) => {
	const theme = useContext(ThemeContext)

	return (
		<TextInput
			plain
			placeholder={placeholder}
			icon={<Search />}
			reverse
			style={{
				background: 'white',
				border: `1px solid ${theme.color.primary}`,
			}}
		/>
	)
}

const PasswordInput = ({ placeholder }: Props) => {
	const [value, setValue] = useState('')
	const [reveal, setReveal] = useState(false)

	return (
		<Box overflow width="inherit">
			<Wrapper row center>
				<TextInput
					plain
					placeholder={placeholder}
					type={reveal ? 'text' : 'password'}
					value={value}
					onChange={event => setValue(event.target.value)}
				/>
				<Button
					icon={
						reveal ? <View size="medium" /> : <Hide size="medium" />
					}
					onClick={() => setReveal(!reveal)}
				/>
			</Wrapper>
		</Box>
	)
}

const HelloWorld = () => {
	return <div>Hello</div>
}

export { Input, PasswordInput, SearchInput, HelloWorld }
