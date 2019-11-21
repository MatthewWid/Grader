import React, {useState, Fragment} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import AssignmentList from "./AssignmentList.js";

const App = () => {
	const [assignments, setAssignments] = useState([
		{
			mark: 0,
			weight: 0,
		},
	]);

	const addAssignment = () => {
		const newAssignments = [...assignments];

		newAssignments.push({
			mark: 0,
			weight: 0,
		});

		setAssignments(newAssignments);
	};

	const updateAssignment = (index, key, value) => {
		const newAssignments = [...assignments];

		newAssignments[index][key] = value;

		setAssignments(newAssignments);
	};

	const removeAssignment = (index) => {
		const newAssignments = [...assignments].filter((_, i) => i !== index);

		setAssignments(newAssignments);
	};

	return (
		<Fragment>
			<CssBaseline />
			<Container maxWidth="sm">
				<Typography variant="h1" gutterBottom align="center">Grader</Typography>
				<Box p={1}>
					<Typography variant="body1" paragraph>Enter your assignment marks and their relative weightings.</Typography>
					<Typography variant="body1" paragraph>Your total mark will be automatically calculated based on the inputted values.</Typography>
					<Divider />
					<AssignmentList
						assignments={assignments}
						updateAssignment={updateAssignment}
						removeAssignment={removeAssignment}
					/>
					<Box m={2} style={{
						"textAlign": "center"
					}}>
						<Button variant="contained" color="primary" onClick={addAssignment}>Add Assignment</Button>
					</Box>
					<Divider />
				</Box>
			</Container>
		</Fragment>
	);
};

export default App;
