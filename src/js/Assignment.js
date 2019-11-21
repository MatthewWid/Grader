import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

const Assignment = (props) => {
	const {assignment, updateAssignment, index} = props;

	const handleChange = (type) => (
		({target: {value}}) => {
			updateAssignment(index, type, value);
		}
	);

	return (
		<Box my={2} style={{
			"display": "flex",
			"justifyContent": "space-around",
		}}>
			<TextField
				value={assignment.mark}
				type="number"
				placeholder="0-100"
				helperText="Literal Mark (0-100)"
				onChange={handleChange("mark")}
			/>
			<TextField
				value={assignment.weight}
				type="number"
				placeholder="0-100%"
				helperText="Weighting (0-100%)"
				onChange={handleChange("weight")}
			/>
		</Box>
	);
};

export default Assignment;
