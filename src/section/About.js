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
	aboutdetails: {
		margin: '70px auto 0',
		display: 'flex',
		justifyContent: 'center',
		color: `${blue}`,
		'& > Typography': {
			fontWeight: 'bold'
		}
	},
	ktImg: {
		width: '350px',
		height: '350px',
		boxShadow: `20px 20px 0 0 ${yellow}, -20px -20px 0 0 ${blue}`,
		transition: '0.5s',
		'&:hover': {
			boxShadow: `-20px -20px 0 0 ${yellow}, 20px 20px 0 0 ${blue}`
		},
		margin: '70px auto 0',
		display: 'flex',
		justifyContent: 'center'
	}
});

export default function About() {
	const classes = useStyles();

	return (
		<div className={classes.aboutSection}>
			<Container>
				<Grid container>
					<Grid item xs={12} className={classes.abouttext}>
						<Typography variant={'h4'} align="center">
							About
						</Typography>
					</Grid>
					<Grid item xs={6} className={classes.aboutdetails}>
						<Typography variant={'h5'} align="center" fontWeight="fontWeightBold">
							Hi, I am Krishna. Web developer with 5+ years of experience. Currently, I am UI Technical
							Lead at TCS, India.
						</Typography>
					</Grid>
					<Box component={Grid} md={6} display={{ xs: 'none', md: 'block' }}>
						<img src={KrishnaTandon} className={classes.ktImg} alt="Krishna Tandon" />
					</Box>
				</Grid>
			</Container>
		</div>
	);
}
