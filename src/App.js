import { Routes, Route } from 'react-router-dom';
import Layout from './routes/Layout';
import Home from './routes/Home';
import Details from './routes/Details';
import NotMatch from './routes/NotMatch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Details" element={<Details />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
