import styled from "styled-components";

export const Container = styled.div`
    width: 10vw;
    height: 40px;
    text-align: center;
    border-radius: 20px;

    display: flex;
    align-items: center;  
    justify-content: center; 

    background: ${({ type }) => {
        switch (type) {
            case 'Normal': return 'linear-gradient(to right, #A8A77A, #C6C6A7)';
            case 'Fire': return 'linear-gradient(to right, #EE8130, #FF1A00)';
            case 'Water': return 'linear-gradient(to right, #6390F0, #20D0FC)';
            case 'Electric': return 'linear-gradient(to right, #F7D02C, #FFEA70)';
            case 'Grass': return 'linear-gradient(to right, #37F81A, #D0FC20)';
            case 'Ice': return 'linear-gradient(to right, #96D9D6, #C2FFFF)';
            case 'Fighting': return 'linear-gradient(to right, #C22E28, #FF6F6F)';
            case 'Poison': return 'linear-gradient(to right, #A33EA1, #C261CF)';
            case 'Ground': return 'linear-gradient(to right, #E2BF65, #F4E7DA)';
            case 'Flying': return 'linear-gradient(to right, #A98FF3, #C5C5FF)';
            case 'Psychic': return 'linear-gradient(to right, #F95587, #FF85B5)';
            case 'Bug': return 'linear-gradient(to right, #A6B91A, #CDEB47)';
            case 'Rock': return 'linear-gradient(to right, #B6A136, #D6C774)';
            case 'Ghost': return 'linear-gradient(to right, #735797, #A890F0)';
            case 'Dragon': return 'linear-gradient(to right, #6F35FC, #A27DFA)';
            case 'Dark': return 'linear-gradient(to right, #705746, #A29288)';
            case 'Steel': return 'linear-gradient(to right, #B7B7CE, #D8D8E0)';
            case 'Fairy': return 'linear-gradient(to right, #D685AD, #F4BDC9)';
            default: return 'gray';
        }
    }};
`;