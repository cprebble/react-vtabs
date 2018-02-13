import React from 'react';
import * as PropTypes from 'prop-types';

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
		
		const indicator = { borderRight: `${borderWidth}px ${borderStyle} ${borderColor}`};
		const individualTabLabelStyles = tab.props.tabLabelStyle;

		let comboStyle = {
			textAlign: 'center',
			lineHeight: lineHeight,
			...{
				borderRight: '1px solid lightgray',
				width: tabWidth,
				minWidth: 34,
				minHeight: 34
			},
			...tabLabelStyle,
			...individualTabLabelStyles
		};

		if (this.state.selected === index) {
			comboStyle = Object.assign(comboStyle, indicator);
		}

		return (
			<div id={`tabLabel${index}`}
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

	renderTabContent = () => {
		const { tabContainerStyle, children } = this.props;
		const { selected } = this.state;
		const overrideWidth = (tabContainerStyle && tabContainerStyle.width) || '80%';

		const chile = children[selected] || children;
		const individualTabContainerStyle = (chile.props && chile.props.tabContainerStyle);
		const individualTabContainerOverrideWidth = (individualTabContainerStyle && individualTabContainerStyle.width);

		const comboStyle = {
			...tabContainerStyle,
			...individualTabContainerStyle,
			...{
				position: 'absolute',
				alignSelf: 'flex-end',
				float: 'right',
				width: individualTabContainerOverrideWidth || overrideWidth
			}
		};

		return (
			<div id="visibleTabContainer"
				style={comboStyle}>
				{chile}
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
				{this.renderTabContent()}
			</div>
		);
	}
}

export default VTabs;

