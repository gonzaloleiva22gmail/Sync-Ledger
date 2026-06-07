import { useEffect, useState } from 'react';
import { en } from './content/en';
import { nl } from './content/nl';
import LandingPage from './pages/LandingPage';

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const content = currentPath.startsWith('/nl') ? nl : en;

  return <LandingPage content={content} onNavigate={navigate} />;
};

export default App;
