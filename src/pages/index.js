import { React, Component, Link, styled } from '../';
import Layout from '../components/Layout'
//import Banner from '../../components/Banner'
import logo from '../assets/images/logo.svg'
import banner_img from '../assets/images/banner.jpg'



const StyledBanner = styled.section`

width: 50vw;
margin: 0 auto;
font-size: 0.5em;
padding-top: 6em;
padding-bottom: 2em;
& :before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  width:100vw;
  height:50vh;

  background:
    linear-gradient(rgba(36,41,67,0.8),rgba(36,41,67,0.8)),
    url(${banner_img});
  background-attachment: scroll;
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: cover;
}

& * {
  position: relative;
  background-color: transparent;
  color: rgb(255, 255, 255);
}
`
const Banner = (props) => (
  <StyledBanner>
  <header><img src={logo} alt="" /></header>
  <div>
    <p>“Perhaps the most exciting thing in singlehanded sailing since, well, the first foiling moth”<br /><cite>— Alan Block, Senior Editor, Sailing Anarchy</cite></p>
  </div>
  </StyledBanner>
)


export default class extends Component {
  render = () => (
    <Layout>
      <Banner />
    </Layout>
  )
}
