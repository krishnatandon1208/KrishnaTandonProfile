import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Card, CardContent } from '@material-ui/core';

import { blue } from '../Colors';
import { siteHeadingTitle } from '../Common';

const useStyles = makeStyles({
	skillsSection: {
		background: 'linear-gradient(to bottom, #FFFFFF, #e1f5fe1A, #FFFFFF)',
		padding: '100px 0'
	},
	skilltext: siteHeadingTitle,
	skillblock: {
		margin: '30px 0',
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap'
	},
	skillsCard: {
		boxSizing: 'border-box',
		margin: '20px',
		width: '250px',
		textAlign: 'center',
		transition: '0.5s',
		borderRadius: 0,
		//border: `5px solid transparent`,
		//boxShadow: `10px 10px 0 0 ${lightblue}, -10px -10px 0 0 ${blue}`,
		backgroundColor: `#FFFFFF`,
		border: '1px solid #e1f5fe',
		color: `${blue}`,
		boxShadow: '0px 0px 10px 0 #e1f5fe',
		'&:hover': {
			//border: `5px solid ${blue}`,
			boxShadow: `-10px -10px 0 0 ${blue}, 10px 10px 0 0 ${blue}`
			//boxShadow: '0px 0px 1px 0 #CCCCCC44'
		}
	}
});

export default function Skills() {
	const skillsList = [
		'HTML5',
		'CSS3',
		'Javascript',
		'ReactJS',
		'Flutter',
		'Dart',
		'Material Design',
		'Bootstrap',
		'Framer Motion',
		'AdobeXD'
	];

	const classes = useStyles();

	return (
		<div className={classes.skillsSection}>
			<Container>
				<Grid container>
					<Grid item xs={12} className={classes.skilltext}>
						<Typography variant={'h4'} align="center">
							SKILLS
						</Typography>
					</Grid>
					<Grid className={classes.skillblock}>
						{skillsList.map((skill) => (
							<Card className={classes.skillsCard} key={skill}>
								<CardContent className={classes.skillsCardContent}>
									<Typography variant={'h5'} align="center">
										{skill}
									</Typography>
								</CardContent>
							</Card>
						))}
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
