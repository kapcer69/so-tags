import ProgressSpinner from '../ProgressSpinner/ProgressSpinner';
import { useTags } from '../hooks/useTags';

function TagTable() {
    const { data, isLoading, error } = useTags();

    if (isLoading) {
        return <ProgressSpinner />;
    }

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
