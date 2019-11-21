import React, {Fragment} from "react";
import {makeStyles} from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import AssignmentList from "./AssignmentList.js";

const useStyles = makeStyles((theme) => console.log(theme) || ({
	root: {
		
	},
}));

const App = () => {
	const classes = useStyles();

	return (
		<Fragment>
			<CssBaseline />
			<Container className={classes.root} maxWidth="sm">
				<Typography variant="h1" gutterBottom align="center">Grader</Typography>
				<Box p={1}>
					<Typography variant="body1" paragraph>Enter your assignment marks and their relative weightings.</Typography>
					<Typography variant="body1" paragraph>Your total mark will be automatically calculated based on the inputted values.</Typography>
					<Divider />
					<AssignmentList />
					<Divider />
				</Box>
			</Container>
		</Fragment>
	);
};

export default App;
