import { Container } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { nanoid } from 'nanoid';
import ProgressSpinner from '../../ProgressSpinner/ProgressSpinner';
import { useTags } from '../../hooks/useTags';

function TagTable() {
    const { data, isLoading, error } = useTags();

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Tag name', width: 130 },
        { field: 'count', headerName: 'Count', width: 130 },
    ];

    if (isLoading) {
        return <ProgressSpinner />;
    }

    return (
        <main>
            <Container>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        getRowId={() => nanoid()}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                    />
                </div>
            </Container>
        </main>
    );
}

export default TagTable;
