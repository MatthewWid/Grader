import React, {Fragment} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const App = () => {
	return (
		<Fragment>
			<CssBaseline />
			<Container maxWidth="sm">
				<Typography variant="h1" gutterBottom align="center">Grader</Typography>
				<Box p={1}>
					<Typography variant="body1" paragraph>Enter your assignment marks and their relative weightings.</Typography>
					<Typography variant="body1" paragraph>Your total mark will be automatically calculated based on the inputted values.</Typography>
				</Box>
			</Container>
		</Fragment>
	);
};

export default App;
