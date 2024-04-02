import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function ProgressSpinner() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    );
}

export default ProgressSpinner;
