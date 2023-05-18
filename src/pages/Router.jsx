import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyCard from './MyCard';
import EditCard from './EditCard';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyCard />} />
        <Route path="/edit" element={<EditCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
