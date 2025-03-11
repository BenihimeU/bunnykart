import { BrowserRouter, HashRouter } from 'react-router-dom';
import Navigator from './navigation';

function App() {
  return (
    <HashRouter>
      <Navigator />
    </HashRouter>
  );
}

export default App;
