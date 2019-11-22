import React, {useState, useEffect, Fragment} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import AssignmentList from "./AssignmentList.js";
import ResultsViewer from "./ResultsViewer.js";

const grades = [
	{
		name: "F",
		mark: 0,
		colour: "#cc0000",
	},
	{
		name: "P",
		mark: 50,
		colour: "#14b814",
	},
	{
		name: "Cr",
		mark: 65,
		colour: "#c20ac2"
	},
	{
		name: "D",
		mark: 75,
		colour: "#5ab5e2",
	},
	{
		name: "HD",
		mark: 85,
		colour: "#0088cc",
	}
];

const defaultAssignment = {
	mark: 0,
	weight: 0,
};

const App = () => {
	const [assignments, setAssignments] = useState([{...defaultAssignment}]);
	const [totalMark, setTotalMark] = useState(0);
	const [grade, setGrade] = useState(grades[0]);

	const calculateTotals = () => {
		const newTotalMark = assignments.reduce((acc, curr) => (
			Math.round((acc + curr.mark * (curr.weight / 100)) * 100) / 100
		), 0);

		const newGrade = grades.reduce((acc, curr) => (
			totalMark >= curr.mark ? curr : acc
		), "F");

		setTotalMark(newTotalMark);
		setGrade(newGrade);
	};

	useEffect(() => {
		calculateTotals();
	}, [assignments, totalMark]);

	const getStoredAssignments = () => {
		const storedAssignments = JSON.parse(localStorage.getItem("grader-assignments"));

		if (storedAssignments && storedAssignments.length > 0) {
			setAssignments(storedAssignments);
		}
	};

	useEffect(() => {
		getStoredAssignments();
	}, []);

	const setStoredAssignments = () => {
		localStorage.setItem("grader-assignments", JSON.stringify(assignments));
	};

	useEffect(() => {
		setStoredAssignments();
	}, [assignments]);

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
					<ResultsViewer totalMark={totalMark} grade={grade} />
				</Box>
			</Container>
		</Fragment>
	);
};

export default App;
