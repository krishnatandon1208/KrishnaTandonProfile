import React from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { yellow, blue } from '../Colors';
import KrishnaTandon from '../images/KT2.png';
import { siteHeadingTitle } from '../Common';

const useStyles = makeStyles({
	aboutSection: {
		padding: '100px 0'
	},
	abouttext: siteHeadingTitle,
	ktImg: {
		width: '500px',
		height: '500px',
		boxShadow: `20px 20px 0 0 ${yellow}, -20px -20px 0 0 ${blue}`,
		transition: '0.5s',
		'&:hover': {
			boxShadow: `-20px -20px 0 0 ${yellow}, 20px 20px 0 0 ${blue}`
		}
	}
});

export default function About() {
	const classes = useStyles();

	return (
		<div className={classes.aboutSection}>
			<Container>
				<Grid container>
					<Grid item xs={6} className={classes.abouttext}>
						<Typography variant={'h4'}>About</Typography>
					</Grid>
					<Grid item xs={6}>
						<Box display="flex" justifyContent="center">
							<img src={KrishnaTandon} className={classes.ktImg} alt="Krishna Tandon" />
						</Box>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
