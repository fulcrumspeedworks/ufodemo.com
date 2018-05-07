import {React, Component, FontAwesomeIcon} from '../../';

import {faCircle} from '@fortawesome/fontawesome-free-solid';

export default class extends Component {
  render = () => (
    <span className="fa-layers fa-fw" style={this.props.style}>
      <FontAwesomeIcon
        icon={faCircle}
        className={this.props.className}

      />
      <FontAwesomeIcon {...this.props} transform="shrink-8" />
    </span>
  )
}
