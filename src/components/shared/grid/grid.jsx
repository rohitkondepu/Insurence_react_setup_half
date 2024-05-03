import { Box, Grid, } from "@mui/material";
import { GridCell } from "./grid-cell/grid-cell";
import { GridHeader } from "./grid-header/grid-header";

export function GridComponent() {
    return (
        <Box>
            <Grid container>
            <GridHeader></GridHeader>
            <Grid container>
                <Grid item xs={3}>
                    <GridCell data={"Id"}></GridCell>
                </Grid>
                <Grid item xs={3}>
                    <GridCell data={"Name"}></GridCell>
                </Grid>
                <Grid item xs={3}>
                    <GridCell data ={"Email"}></GridCell>
                </Grid>
                <Grid item xs={3}>
                    <GridCell data={"phone number"}></GridCell>
                </Grid>
            </Grid>
            </Grid>
               
        </Box>
    )
}