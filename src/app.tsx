import { ErrorBoundary, type Component } from 'solid-js';
import { Link, useRoutes, useLocation } from '@solidjs/router';

import { routes } from './routes';

const App: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);

  return (
    <>
      <nav class="bg-gray-900 text-gray-200 px-4">
        <ul class="flex items-center">
          <li class="py-2 px-4">
            <Link href="/" class="no-underline hover:underline">
              
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <Route />
      </main>
      <footer class="bg-gray-900 text-gray-200 px-4">

      </footer>
    </>
  );
};

export default App;
