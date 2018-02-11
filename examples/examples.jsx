import React from 'react';
import ReactDOM from 'react-dom';
import Basic from './basic';
import Cities from './cities';
import { VTabs, VTab } from '../src/index';

export default class Examples extends React.Component {
	render () {
		return (
			<div style={{ margin: 25 }}>
				<VTabs>
					<VTab label="Basic">
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