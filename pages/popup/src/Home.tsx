import { withErrorBoundary, withSuspense } from '@extension/shared';
import { Link } from 'react-router';

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to={'/popup'}>Popup page</Link>
    </div>
  );
}

export default withErrorBoundary(withSuspense(Home, <div> Loading ... </div>), <div> Error Occur </div>);
