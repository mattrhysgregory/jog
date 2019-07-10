import styled from 'styled-components';
import style from '../../style';
export const AddMsgForm = styled.div`
    text-align: center;
    width: 500px;
    max-width: 100%;
    padding: 1rem;
    margin: auto;

    h3 {
        font-weight: 300;
        margin-bottom: 1em;
        text-transform: uppercase;
    }

    form {
        display: flex;
    }

    input {
        all: unset;
        background-color: transparent;
        display: block;
        flex: 1;
        padding: 1em;
        border: solid 2px white;
        text-align: left;
        color: white;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;

        ::placeholder {
            color: white;
        }
    }

    

    button {
        all: unset;
        cursor: pointer;
        background-color: white;
        color: ${style.COLOUR_BACKGROUND};
        padding: 1em;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }
`;