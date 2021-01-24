import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import { blue } from '../Colors';
import { siteHeadingTitle } from '../Common';

const useStyles = makeStyles({
	contactSection: {
		backgroundColor: '#FFFFFF',
		padding: '100px 0'
	},
	contacttext: siteHeadingTitle,
	contactblock: {
		margin: '30px 0',
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap'
	},
	contactIcon: {
		fontSize: '50px',
		color: `${blue}`,
		margin: '40px 30px 0'
	}
});

export default function Skills() {
	const classes = useStyles();

	return (
		<div className={classes.contactSection}>
			<Container>
				<Grid container>
					<Grid item xs={12} className={classes.contacttext}>
						<Typography variant={'h4'} align="center">
							CONTACTS
						</Typography>
					</Grid>
					<Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
						<a href="https://www.linkedin.com/in/krishnatandon1208/" target="_blank" rel="noreferrer">
							<LinkedInIcon className={classes.contactIcon} />
						</a>

						<a href="https://twitter.com/TandonKrishna12" target="_blank" rel="noreferrer">
							<TwitterIcon className={classes.contactIcon} />
						</a>

						<a href="mailto:krishnatandon.1208@gmail.com" target="_blank" rel="noreferrer">
							<EmailIcon className={classes.contactIcon} />
						</a>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
