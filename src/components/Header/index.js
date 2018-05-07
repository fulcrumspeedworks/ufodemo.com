
import styled from 'styled-components';
import { React, Component, Link } from '../../';


const LogoLink =  styled(Link)`

 & strong {
    transition: background-color .2s ease-in-out,color .2s ease-in-out;
    background-color: #fff;
    color: #242943;
    display: inline-block;
    line-height: 1.65em;
    margin-right: .325em;
    padding: 0 .125em;
    text-decoration: none;
}

  & {
    padding: 0 1.5em;
    text-decoration: none;

  }
`;

const Wrapper =  styled.div`
cursor: default;
font-weight: 600;
height: 3.25em;
left: 0;
letter-spacing: .25em;
line-height: 3.25em;
margin: 0;
text-transform: uppercase;
top: 0;
width: 100%;
z-index: 10000;
display: flex;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
animation: none;
background-color: transparent;
box-shadow: none;
position: absolute;
box-sizing: border-box;
`;

export default class extends Component {
  render = () => (
    <Wrapper>
      <LogoLink to="/"><strong>UFO</strong> by Fulcrum Speedworks</LogoLink>
    </Wrapper>
  )
}
