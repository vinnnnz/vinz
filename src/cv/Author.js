import styled from 'styled-components';
import author_icon from '../images/authorimage.jpg'; 

const Author = styled.div`
    background-image: url(${author_icon});
    width: 30px;
    height: 30px;
    min-height: 70px;
    min-width: 70px;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    border: 5px solid #444444;
    margin: 0 auto;
    margin-top: 10px;
`;

export default Author;