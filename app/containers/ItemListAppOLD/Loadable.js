/**
 *
 * Asynchronously loads the component for ItemListApp
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
