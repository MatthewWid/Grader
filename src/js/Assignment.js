import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const Assignment = (props) => {
	const {assignment, index, updateAssignment, removeAssignment} = props;

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
			<IconButton onClick={() => removeAssignment(index)}>
				<DeleteIcon />
			</IconButton>
		</Box>
	);
};

export default Assignment;
