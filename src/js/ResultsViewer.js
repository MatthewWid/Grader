import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
	gridItem: {
		display: "flex",
		alignItems: "stretch",
		"& > div": {
			flex: 1
		}
	}
});

const ResultsViewer = (props) => {
	const {totalMark, grade} = props;
	const classes = useStyles();

	return (
		<Box m={2} px={6}>
			<Grid container spacing={2} justify="center" align="stretch">
				<Grid className={classes.gridItem} item xs={6}>
					<Card>
						<CardContent>
							<Typography variant="h3" align="center" style={{
								fontWeight: "bold",
							}}>{totalMark}%</Typography>
							<Typography variant="subtitle1" align="center">Total Mark</Typography>
							{
								grade.name !== "HD" &&
								<Typography variant="subtitle2" align="center">{Math.round((85 - totalMark) * 100) / 100}% more for HD</Typography>
							}
						</CardContent>
					</Card>
				</Grid>
				<Grid className={classes.gridItem} item xs={6}>
					<Card>
						<CardContent>
							<Typography variant="h3" align="center" style={{
								fontWeight: "bold",
								color: grade.colour,
							}}>{grade.name}</Typography>
							<Typography variant="subtitle1" align="center">Grade</Typography>
							<Typography variant="subtitle2" align="center">{grade.flavour}</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ResultsViewer;
