import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { nanoid } from 'nanoid';
import { useTags } from '../../hooks/useTags';
import ProgressSpinner from '../ProgressSpinner/ProgressSpinner';
import Wrapper from '../Wrapper/Wrapper';
import './TagTable.css';

function TagTable() {
    const { data, isLoading, isError, error } = useTags();

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Tag name', width: 130 },
        { field: 'count', headerName: 'Count', width: 130 },
    ];

    if (isLoading) {
        return (
            <Wrapper>
                <ProgressSpinner />
            </Wrapper>
        );
    }

    if (isError) {
        return (
            <Wrapper>
                <h2>{error.message}</h2>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <Box sx={{ height: 400, width: '100%' }}>
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
                    disableRowSelectionOnClick
                />
            </Box>
        </Wrapper>
    );
}

export default TagTable;
