import React, {Fragment} from "react";
import Assignment from "./Assignment.js";

const AssignmentList = (props) => {
	const {assignments, updateAssignment} = props;

	return (
		<Fragment>
			{assignments.map((a, i) => <Assignment assignment={a} updateAssignment={updateAssignment} key={i} index={i} />)}
		</Fragment>
	);
};

export default AssignmentList;
