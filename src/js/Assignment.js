import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

const Assignment = (props) => {
	return (
		<Box my={2} style={{
			"display": "flex",
			"justify-content": "space-around",
		}}>
			<TextField placeholder="0-100" helperText="Literal Mark (0-100)" defaultValue="0" type="number" />
			<TextField placeholder="0-100%" helperText="Weighting (0-100%)" defaultValue="0" type="number" />
		</Box>
	);
};

export default Assignment;
