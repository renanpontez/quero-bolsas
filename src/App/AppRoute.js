import React from "react"
import { Route } from "react-router-dom"


export class AppRoute extends React.Component {
  render() {
    const { component: Component, layout: Layout, ...rest } = this.props;
    return (
        <Route {...rest} render={props => (
          <Layout>
            <Component {...props}/>
          </Layout>
        )} />
    );
  }
}

export default AppRoute;