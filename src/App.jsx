import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../src/components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import RestrictedRoute from './components/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute';

const HomePage = lazy(() => import('../src/pages/HomePage/HomePage'));
const RegisterPage = lazy(() =>
  import('../src/pages/RegisterPage/RegisterPage'),
);
const LoginPage = lazy(() => import('../src/pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() =>
  import('../src/pages/ContactsPage/ContactsPage'),
);
const ProfilePage = lazy(() => import('../src/pages/ProfilePage/ProfilePage'));

export default function App() {
  const dispatch = useDispatch();
  const IsRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !IsRefreshing && (
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/profile"
                  component={<RegisterPage />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<LoginPage />}
                />
              }
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
            <Route
              path="/profile"
              element={<PrivateRoute component={<ProfilePage />} />}
            />
          </Routes>
        </Suspense>
      </Layout>
    )
  );
}
