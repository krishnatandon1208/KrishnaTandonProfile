import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	nameblock: {
		display: 'flex',
		justifyContent: 'center',
		height: '100vh'
	},
	text: {
		fontSize: '100px',
		color: '#FFFFFF',
		margin: 0,
		display: 'flex',
		alignSelf: 'center'
	}
});

export default function Name() {
	const classes = useStyles();

	return (
		<div className={classes.nameblock}>
			<h1 className={classes.text}>KRISHNA TANDON</h1>
		</div>
	);
}
