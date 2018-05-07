import {faFacebookF, faYoutube, faLinkedinIn} from '@fortawesome/fontawesome-free-brands';
import {React, Component} from '../../';
import Icon from '../FontAwesomeIconCircular';
import Nav from '../Nav';

import styled from 'styled-components';



const StyledNav = styled(Nav)`
  font-size: 2em;
`
const StyledCopy = styled.span`
  font-size: 0.5em;
  color: var(--color-fg-light);
`

export default class extends Component {
  render = () => (
    <footer>
      <StyledNav>
        <a href="https://fb.me/fulcrumspeedworks/"><Icon icon={faFacebookF} color="black" /></a>
        <a href="https://youtu.be/user/CaptainWPeachfuzz/"><Icon icon={faYoutube} color="black" /></a>
        <a href="https://linkedin.com/in/david-clark-05561b97/"><Icon icon={faLinkedinIn} color="black" /></a>
      </StyledNav>
      <StyledCopy>© </StyledCopy>
    </footer>
  )
}
