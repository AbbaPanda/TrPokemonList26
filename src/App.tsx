import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import { routes } from './components/routes';
import MainLayout from './components/layout/MainLayout';
function App() {
  return (
    <MainLayout>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Routes>
    </MainLayout>
  );
}

export default App;
