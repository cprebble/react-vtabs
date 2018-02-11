import React from 'react';
import * as PropTypes from 'prop-types';
import VTab from './vertical-tab.component';

const DEFAULT_WIDTH = 100;

class VTabs extends React.Component {
	static propTypes = {
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node
		]).isRequired,
		style: PropTypes.object,
		value: PropTypes.number,
		tabContainerStyle: PropTypes.object,
		tabLabelStyle: PropTypes.object,
		inkBarStyle: PropTypes.object
	};
	
	constructor (props) {
		super(props);

		this.state = { selected: props.value || 0 };
	}

	onClick = (index) => {
		this.setState({ selected: index });
	}

	renderTabLabel = (tab, index) => {
		const { tabLabelStyle, inkBarStyle } = this.props;
		const borderWidth = (inkBarStyle && inkBarStyle.width) || 4;
		const borderColor = (inkBarStyle && inkBarStyle.backgroundColor) || 'darkslategray';
		const borderStyle = (inkBarStyle && inkBarStyle.borderStyle) || 'solid';
		const tabWidth = (tabLabelStyle && tabLabelStyle.width) || DEFAULT_WIDTH;
		const lineHeight = (tabLabelStyle && tabLabelStyle.lineHeight) || '34px';

		const comboStyle = {
			textAlign: 'center',
			lineHeight: lineHeight,
			...tabLabelStyle,
			...{
				borderRight: '1px solid lightgray',
				width: tabWidth,
				minWidth: 34,
				minHeight: 34
			}
		};
		if (this.state.selected === index) {
			comboStyle.borderRight = `${borderWidth}px ${borderStyle} ${borderColor}`;
		}

		return (
			<div
				key={index}
				style={comboStyle}
				onClick={this.onClick.bind(this, index)}>
				{tab.props.label}
			</div>
		);
	}

	renderTabs = () => {
		const { children } = this.props;
		const childrenArray = React.Children.toArray(children);
	
		return (
			<div>
				{childrenArray.map((child, ii) => {
					return this.renderTabLabel(child, ii);
				})}
			</div>
		);
	}

	renderContent = () => {
		const { tabLabelStyle, tabContainerStyle, children } = this.props;
		const { selected } = this.state;
		const overrideWidth = (tabContainerStyle && tabContainerStyle.width) || '90%';

		const comboStyle = {
			...tabContainerStyle,
			...{
				position: 'absolute',
				alignSelf: 'flex-end',
				float: 'right'
			},
			...{
				width: overrideWidth
			}
		};

		return (
			<div
				style={comboStyle}>
				{children[selected]}
			</div>
		);
	}

	render () {
		const { style } = this.props;

		const comboStyle = {
			...style,
			...{
				position: 'relative',
				display: 'flex',
				flexDirection: 'column'
			} };
		return (
			<div
				style={comboStyle}>
				{this.renderTabs()}
				{this.renderContent()}
			</div>
		);
	}
}

export default VTabs;

