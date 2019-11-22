import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const ResultsViewer = (props) => {
	const {totalMark, grade} = props;

	return (
		<Box m={2}>
			<Grid container spacing={2} justify="center">
				<Grid item>
					<Card>
						<CardContent>
							<Typography variant="h2" align="center" style={{
								fontWeight: "bold"
							}}>{totalMark}%</Typography>
							<Typography variant="subtitle1" align="center">Total Mark</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item>
					<Card>
						<CardContent>
							<Typography variant="h2" align="center" style={{
								fontWeight: "bold",
								color: grade.colour
							}}>{grade.name}</Typography>
							<Typography variant="subtitle1" align="center">Grade</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ResultsViewer;
