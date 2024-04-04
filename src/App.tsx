import { CssBaseline } from '@mui/material';
import { blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import TagTable from './components/Tags/TagTable';

const queryClient = new QueryClient();
export const BASE_URL =
    'https://api.stackexchange.com/2.3/tags?&site=stackoverflow';

const theme = createTheme({
    palette: {
        primary: {
            main: blue[300],
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <TagTable />
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
