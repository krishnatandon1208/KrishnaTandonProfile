import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	nameblock: {
		display: 'flex',
		justifyContent: 'center',
		height: '100vh'
	},
	text: {
		fontSize: '80px',
		color: '#FFFFFF',
		margin: 0,
		display: 'flex',
		alignSelf: 'center',
		padding: '0 30px',
		textAlign: 'center'
	}
});

export default function Name() {
	const classes = useStyles();

	return (
		<div className={classes.nameblock}>
			<h1 className={classes.text} id={'nameText'}>
				KRISHNA TANDON
			</h1>
		</div>
	);
}
