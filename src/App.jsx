import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom';

import Loader from 'Components/Loader';
import routePaths from 'routes';
import Layout from 'hoc';
import GlobalStyle from 'GlobalStyle';
import Theme from 'hoc/theme';

export default function App() {

    const renderRoutes = () => {
        const menu = routePaths.map((route, index) => {
            return (route.component) ? (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                        <route.component {...props} />
                    )} />
            ) : (null);
        });

        return menu;
    }

    return (
        <Suspense fallback={<Loader />}>
            <Theme>
                <GlobalStyle/>
                <Switch>
                    <Layout>
                        {renderRoutes()}
                    </Layout>
                </Switch>
            </Theme>
        </Suspense>
    )
}