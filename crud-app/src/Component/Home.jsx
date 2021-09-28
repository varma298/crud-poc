import { Box, Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    }
})

const Home = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h2" >Hanna Instruments</Typography>
        </Box>
    )
}

export default Home;