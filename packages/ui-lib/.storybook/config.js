import React from 'react'
import { Grommet } from 'grommet'
import theme from '../src/utils/base-theme'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import ReactDecorator from '@storybook/addon-console/dist/react-decorator'
import { addReadme } from 'storybook-readme'
import '../src/utils/reset-styles.css'

function loadStories() {
	const req = require.context('../src/', true, /stories\.js$/)
	req.keys().forEach(req)
}

addParameters({
	options: {
		hierarchySeparator: /\/|\./,
		hierarchyRootSeparator: /\|/,
	},
})
addDecorator(
	withInfo({
		propTablesExclude: [ReactDecorator],
	})
)
addDecorator(withKnobs)
addDecorator((storyFn, context) => withConsole()(storyFn)(context))
addDecorator(addReadme)

addDecorator(story => (
	<Grommet theme={theme} plain>
		{story()}
	</Grommet>
))

configure(loadStories, module)
