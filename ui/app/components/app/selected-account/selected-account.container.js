import { connect } from 'react-redux'
import SelectedAccount from './selected-account.component'

import { getCurrentNetworkId, getSelectedIdentity } from '../../../selectors'

const mapStateToProps = (state) => {
  return {
    selectedIdentity: getSelectedIdentity(state),
    currentNetworkId: getCurrentNetworkId(state),
  }
}

export default connect(mapStateToProps)(SelectedAccount)
