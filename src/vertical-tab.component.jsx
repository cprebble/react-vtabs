import React from 'react';
import * as PropTypes from 'prop-types';

function VTab (props) {
	const { style, children } = props;
	
	return (
		<div style={style}>
			{children}
		</div>
	);
}

VTab.propTypes = {
	style: PropTypes.object,
	children: PropTypes.node.isRequired,
	label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
}

export default VTab;