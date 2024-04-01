import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import TagTable from './components/Tags/TagTable';

const queryClient = new QueryClient();
export const BASE_URL =
    'https://api.stackexchange.com/2.3/tags?&site=stackoverflow';

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <TagTable />
        </QueryClientProvider>
    );
}

export default App;
