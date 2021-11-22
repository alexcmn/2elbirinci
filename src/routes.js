import { lazy } from 'react'

const Home = lazy(() => import('Pages/Home'));
const About = lazy(() => import('Pages/About'));
const Service = lazy(() => import('Pages/Service'));
const Contact = lazy(() => import('Pages/Contact'));
const AllCars = lazy(() => import('Pages/AllCars'));
const SingleCar = lazy(() => import('Pages/SingleCar'));

const Routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/about', exact: true, name: 'About', component: About },
    { path: '/service', exact: true, name: 'Service', component: Service },
    { path: '/contact', exact: true, name: 'Contact', component: Contact },
    { path: '/cars', exact: true, name: 'AllCars', component: AllCars },
    { path: '/car/:id', exact: true, name: 'SingleCar', component: SingleCar },
]

export default Routes;