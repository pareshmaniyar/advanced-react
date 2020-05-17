import { connect } from "react-redux";
import { changeName } from '../actions/index';
import PresentationalComponents from '../components/presentationalComponent';

const mapStateToProps = (state, ownProps) => {
    return {
        localName: state.name
    }
}

const dispatchStateToProps = (dispatch) => {
    return {
        localchangeName: (name) => dispatch(changeName(name))
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(PresentationalComponents);