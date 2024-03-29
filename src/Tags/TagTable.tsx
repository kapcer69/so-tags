import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const BASE_URL = 'https://api.stackexchange.com/2.3/tags?&site=stackoverflow';

interface TagInterfaceRequest {
    items: TagInterface[];
}

interface TagInterface {
    has_synonyms: boolean;
    is_moderator_only: boolean;
    is_required: boolean;
    count: number;
    name: string;
}

function TagTable() {
    const { data, isLoading, error } = useQuery({
        queryFn: async () => {
            const { data } = await axios.get<TagInterfaceRequest>(BASE_URL);
            const mappedData = data.items.map((tags) => tags);
            return mappedData;
        },
        queryKey: ['tags'],
    });

    return (
        <main>
            {data?.map((tag, i) => (
                <div key={i}>
                    <p>{tag.name}</p>
                    <p>{tag.count}</p>
                </div>
            ))}
        </main>
    );
}

export default TagTable;
