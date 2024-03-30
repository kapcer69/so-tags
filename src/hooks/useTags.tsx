import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BASE_URL } from '../App';

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

export function useTags() {
    return useQuery({
        queryFn: async () => {
            const { data } = await axios.get<TagInterfaceRequest>(BASE_URL);
            const mappedData = data.items.map((tags) => tags);
            return mappedData;
        },
        queryKey: ['tags'],
    });
}
