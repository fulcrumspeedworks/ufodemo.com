import { React, Component, Link } from '../';

export default class extends Component {
  render = () => (
    <div>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}
