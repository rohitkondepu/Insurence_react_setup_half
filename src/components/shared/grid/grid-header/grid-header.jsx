import { Box, Grid } from "@mui/material"

export const GridHeader = () => {
    let headers = ["Id1", "Name", "Email", "Phone Number"]
    return(
        <Grid container>
            {
                headers && headers.map((value, index, arr) =>HeaderCell(value))

            }
        </Grid>
    )
}

function HeaderCell(value){
    return (
        <Grid item xs ={3}>{value}</Grid>
    )
}