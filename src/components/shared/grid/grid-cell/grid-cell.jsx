import { Box } from "@mui/material";

export function GridCell ({data}) {
    const boxStyle ={border:"1px solid grey"}
    return (
        <Box sx={boxStyle}>
            {data}
        </Box>
    )
}