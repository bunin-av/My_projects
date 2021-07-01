import React, {ComponentType} from "react";
import {connect, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {getIsAuthSl} from "../../redux/profile-selectors";
import {RootState} from "../../redux/redux-store";


function withAuthRedirectComponent<T>(Component: ComponentType<T>) {
    /*class AuthRedirectComponent extends React.Component<any, any> {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component {...this.props}/>
        }
    }*/
    // return connect(mapState)(AuthRedirectComponent)

    return (
      function AuthRedirectComponent(props: T) {
          const state = useSelector(getIsAuthSl)
          if (!state) return <Redirect to={'/login'}/>
          return <Component {...props}/>
      }
    )


}

/*let mapState = (state: { auth: { isAuth: boolean } }) => {
    return {
        isAuth: state.auth.isAuth
    }
}*/

export default withAuthRedirectComponent