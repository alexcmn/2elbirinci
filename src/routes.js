import { lazy } from 'react'

const Home = lazy(() => import('Pages/Home'));
const About = lazy(() => import('Pages/About'));

const Routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/about', exact: true, name: 'About', component: About },
]

export default Routes;