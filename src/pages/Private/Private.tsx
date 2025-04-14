
import { lazy } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes } from '../../models';
import { RoutesWithNotFound } from '../../utilities';

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const Home = lazy(() => import('./Home/Home'));
const Contact = lazy(() => import('./Contact/Contact'));
const Register = lazy(() => import('./Register/Register'));
const Settings = lazy(() => import('./Settings/Settings'));
const Movies = lazy(() => import('./Movies/Movies'));


function Private() {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
      <Route path={PrivateRoutes.CONTACT} element={<Contact />} />
      <Route path={PrivateRoutes.REGISTER} element={<Register />} />
      <Route path={PrivateRoutes.SETTINGS} element={<Settings />} />
      <Route path={PrivateRoutes.MOVIES} element={<Movies />} />



    </RoutesWithNotFound>
  );
}
export default Private;