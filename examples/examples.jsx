import React from 'react';
import Basic from './basic';
import Cities from './cities';
import { VTabs, VTab } from '../src/index';

export default class Examples extends React.Component {
	render () {
		return (
			<div style={{
				margin: 25,
				fontFamily: "Roboto, sans-serif"
			}}>
				<VTabs tabLabelStyle={{ width: 120, textAlign: 'right', paddingRight: 8 }}>
					<VTab label="Basic Example">
						<Basic />
					</VTab>
					<VTab label="Cities">
						<Cities />
					</VTab>
				</VTabs>
			</div>
		);
	}
}