import React from 'react';

type TabsProps = {
	style: Object;
	tabContainerStyle: Object;
	tabLabelStyle: Object;
	inkBarStyle: Object;
	children: Array;
	value: number;
};

const DEFAULT_WIDTH = 100;
class VTabs extends React.Component<TabsProps> {
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
		const borderColor = (inkBarStyle && inkBarStyle.backgroundColor) || 'gray';
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
		return (
			<div >
				{children.map((child, ii) => {
					return this.renderTabLabel(child, ii);
				})}
			</div>
		);
	}

	renderContent = () => {
		const { tabLabelStyle, tabContainerStyle, children } = this.props;
		const { selected } = this.state;
		const contentLeft = (tabLabelStyle && tabLabelStyle.width) || DEFAULT_WIDTH;

		const comboStyle = {
			...tabContainerStyle,
			...{
				position: 'absolute',
				alignSelf: 'flex-end',
				left: contentLeft
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

type TabProps = {
	style: Object;
	children: Array;
}
function VTab (props: TabProps) {
	const { style } = props;
	return (
		<div style={style}>
			{props.children}
		</div>
	);
}

export { VTabs, VTab };

