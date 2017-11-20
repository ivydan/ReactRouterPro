
import { withRouter } from 'react-router-dom';

let Branch = (WrappedComponent) => {

	WrappedComponent = withRouter(WrappedComponent);



	return WrappedComponent;
}

export default Branch;