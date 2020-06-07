import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Box } from 'ui-lib/utils/Box'
import { Input, PasswordInput, SearchInput } from './index'

storiesOf('Input', module)
	.add('simple', () => (
		<Box width={300} padding={10}>
			<Input placeholder="Enter Name" />
		</Box>
	))
	.add('password', () => (
		<Box width={300} padding={10}>
			<PasswordInput placeholder="Enter Password" />
		</Box>
	))
	.add('icon', () => (
		<Box width={300} padding={10}>
			<SearchInput placeholder="Enter Product" />
		</Box>
	))
