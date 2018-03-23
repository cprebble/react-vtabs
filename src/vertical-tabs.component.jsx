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
		inkBarStyle: PropTypes.object,
		onTabSelect: PropTypes.func
	};
	
	constructor (props) {
		super(props);

		this.state = { selected: props.value || 0 };
	}

	onClick = (index) => {
		this.setState({ selected: index });
		const { onTabSelect } = this.props;
		if (onTabSelect) {
			onTabSelect(index);
		}
	}

	renderTabLabel = (tab, index) => {
		const { tabLabelStyle, inkBarStyle } = this.props;
		const borderWidth = (inkBarStyle && inkBarStyle.borderWidth) || 4;
		const borderColor = (inkBarStyle && inkBarStyle.borderColor) || 'darkslategray';
		const borderStyle = (inkBarStyle && inkBarStyle.borderStyle) || 'solid';

		const tabWidth = (tabLabelStyle && tabLabelStyle.width) || DEFAULT_WIDTH;
		const lineHeight = (tabLabelStyle && tabLabelStyle.lineHeight) || '34px';

		const indicator = {...inkBarStyle, ...{ borderRight: `${borderWidth}px ${borderStyle} ${borderColor}` }};
		const individualTabLabelStyles = tab.props.tabLabelStyle;

		let comboStyle = {
			borderRight: '1px solid lightgray',
			width: tabWidth,
			textAlign: 'center',
			lineHeight: lineHeight,
			...tabLabelStyle,
			...individualTabLabelStyles,
			...{
				minWidth: 34,
				minHeight: 34
			}
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
		const { tabContainerStyle, tabLabelStyle, children } = this.props;
		const { selected } = this.state;
		const overrideWidth = (tabContainerStyle && tabContainerStyle.width) || '80%';
		const overrideMargin = (tabContainerStyle && tabContainerStyle.margin) || 12;
		const tablabelWidth = (tabLabelStyle && tabLabelStyle.width) || DEFAULT_WIDTH;

		const chile = children[selected] || children;
		const individualTabContainerStyle = (chile.props && chile.props.tabContainerStyle);
		const individualTabContainerOverrideWidth = (individualTabContainerStyle && individualTabContainerStyle.width);

		const comboStyle = {
			...tabContainerStyle,
			...individualTabContainerStyle,
			...{
				display: 'flex',
				position: 'absolute',
				width: individualTabContainerOverrideWidth || overrideWidth,
				marginLeft: (tablabelWidth + overrideMargin)
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
				display: 'flex',
				flexDirection: 'column'
			} };
		return (
			<div style={comboStyle}>
				{this.renderTabs()}
				{this.renderTabContent()}
			</div>
		);
	}
}

export default VTabs;

