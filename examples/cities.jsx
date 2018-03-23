
import React from 'react';
import { VTabs, VTab } from '../src/index';

const citiesOfCulture = [
	{
		id: "london",
		name: "London",
		description: "London is the capital of England."
	},
	{
		id: "paris",
		name: "Paris",
		description: "Paris is the capital of France."
	},
	{
		id: "rome",
		name: "Rome",
		description: "Rome is the capital of Italy."
	},
	{
		id: "tokyo",
		name: "Tokyo",
		description: "Tokyo is the capital of Japan."
	},
	{
		id: "moab",
		name: "Moab",
		description: "Moab is the capital of mountain biking.",
		tabLabelStyle: {
			fontSize: 24,
			fontStyle: 'normal'
		},
		tabContainerStyle: {
			width: 100,
			paddingLeft: 50,
			fontFamily: 'Verdana',
			fontSize: '1.5em',
			fontWeight: 'bold',
			color: 'teal',
			fontStyle: 'italic'
		}
	}
];

const tabLabelStyle = {
	paddingRight: 8,
	width: 200,
	lineHeight: '64px',
	textAlign: 'right',
	fontFamily: 'Roboto, Helvetica Neue, Arial, sans-serif',
	fontSize: 18,
	fontWeight: 'bold',
	fontStyle: 'italic',
	background: 'linear-gradient(-170deg, white, #f5f7fb)',
	borderRadius: 6,
	borderBottomRightRadius: 1,
	borderTopRightRadius: 1,
	borderRight: 'none'
}
export default class Cities extends React.Component {
	render () {
		return (
			<VTabs
				inkBarStyle={{ borderWidth: 6, borderColor: 'teal' }}
				tabLabelStyle={tabLabelStyle}
				style={{ margin: 10, padding: 24, height: '60vh', width: '60vw' }}
				value={0}
			>
				{citiesOfCulture.map((edge, ii) => {
					const { id, name, description, ...extraProps } = edge;
					return (
						<VTab key={id} value={ii} label={name} {...extraProps}>
							<div style={{ margin: 12, display: 'flex', justifyContent: 'center' }}>
								{description}
							</div>
						</VTab>
					);
				})}
			</VTabs>
		);
	}
}