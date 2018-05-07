

import { React, Component } from '../../';

import {
  Header,
  Footer
} from '../../';

import './index.css';
import '../Stylesheet';

export default class extends Component {
  render = () => [
    <Header />,
    this.props.children,
    <Footer />
  ]
}
