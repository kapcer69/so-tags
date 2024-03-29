import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import TagTable from './Tags/TagTable';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <TagTable />
        </QueryClientProvider>
    );
}

export default App;
