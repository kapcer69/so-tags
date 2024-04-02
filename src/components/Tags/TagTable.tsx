import { Box, Container } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { nanoid } from 'nanoid';
import { useTags } from '../../hooks/useTags';
import ProgressSpinner from '../ProgressSpinner/ProgressSpinner';
import './TagTable.css';

function TagTable() {
    const { data, isLoading, isError, error } = useTags();

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Tag name', width: 130 },
        { field: 'count', headerName: 'Count', width: 130 },
    ];

    if (isLoading) {
        return (
            <StyledEngineProvider injectFirst>
                <Container>
                    <ProgressSpinner />
                </Container>
            </StyledEngineProvider>
        );
    }

    if (isError) {
        return (
            <StyledEngineProvider injectFirst>
                <Container>
                    <h2>{error.message}</h2>
                </Container>
            </StyledEngineProvider>
        );
    }

    return (
        <StyledEngineProvider injectFirst>
            <Container>
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
            </Container>
        </StyledEngineProvider>
    );
}

export default TagTable;
