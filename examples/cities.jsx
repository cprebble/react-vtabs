
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
		description: "Moab is the capital of mountain biking."
	}
];

const TAB_WIDTH = 200;
const tabLabelStyle = {
	paddingRight: 8,
	width: TAB_WIDTH,
	lineHeight: '64px',
	textAlign: 'right',
	fontFamily: 'Roboto, Helvetica Neue, Arial, sans-serif',
	fontSize: 18,
	fontWeight: 'bold',
	background: 'linear-gradient(-170deg, white, lightgray)'
}
export default class Cities extends React.Component {
	render () {
		return (
			<VTabs
				inkBarStyle={{ width: 6, backgroundColor: 'cornflowerblue' }}
				tabLabelStyle={tabLabelStyle}
				tabContainerStyle={{ width: `calc(90% - ${TAB_WIDTH}px)`, height: '100%' }}
				style={{ margin: 10, padding: 24, height: '60vh', backgroundColor: 'lightgray' }}
				value={0}
			>
				{citiesOfCulture.map((edge, ii) => {
					return (
						<VTab key={edge.id} value={ii} label={edge.name}>
							<div style={{ margin: 12, display: 'flex', justifyContent: 'center' }}>
								{edge.description}
							</div>
						</VTab>
					);
				})}
			</VTabs>
		);
	}
}