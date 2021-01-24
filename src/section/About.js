import React from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { lightblue, blue } from '../Colors';
import KrishnaTandon from '../images/KT2.png';
import { siteHeadingTitle } from '../Common';

const useStyles = makeStyles({
	aboutSection: {
		padding: '100px 0'
	},
	abouttext: siteHeadingTitle,
	aboutdetails: {
		margin: '70px auto 0',
		color: `${blue}`
	},
	description: {
		background: '#e1f5fe1A',
		padding: '40px 20px',
		boxShadow: '-40px 20px 20px #e1f5fe4d'
	},
	ktImg: {
		width: '350px',
		height: '350px',
		boxShadow: `20px 20px 0 0 ${blue}, -20px -20px 0 0 ${lightblue}`,
		transition: '1s',
		'&:hover': {
			boxShadow: `10px 10px 0 0 ${blue}, -10px -10px 0 0 ${lightblue}`
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
							ABOUT
						</Typography>
					</Grid>
					<Grid item xs={12} md={6} className={classes.aboutdetails}>
						<div className={classes.description}>
							<Typography variant={'h5'} style={{ margin: '10px 0' }}>
								Hi, I am Krishna, web developer with 5+ years of experience. Currently, working as a UI
								Technical Lead at TCS, India.
							</Typography>
							<Typography variant={'h5'}>
								I design wireframes, write clean and well documented frontend code.
							</Typography>
						</div>
					</Grid>
					<Box component={Grid} md={6} display={{ xs: 'none', md: 'block' }}>
						<img src={KrishnaTandon} className={classes.ktImg} alt="Krishna Tandon" />
					</Box>
				</Grid>
			</Container>
		</div>
	);
}
