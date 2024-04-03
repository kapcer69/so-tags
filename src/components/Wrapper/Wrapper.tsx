import { StyledEngineProvider } from '@mui/material';
import { Container } from '@mui/system';
import { PropsWithChildren } from 'react';

function Wrapper({ children }: PropsWithChildren) {
    return (
        <StyledEngineProvider injectFirst>
            <Container>{children}</Container>
        </StyledEngineProvider>
    );
}

export default Wrapper;
