import styled from 'styled-components';
import { Box, IconButton } from "@material-ui/core";

export const StyledReset = styled(IconButton)``;

export const SearchBox = styled(Box)`
    position: relative;
    padding-right: 16px;
    ${StyledReset} {
        position: absolute;
        top: 0;
        right: 0;
    }
`;