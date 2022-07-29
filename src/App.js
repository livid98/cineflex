import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Escolhafilme from './Escolhafilme';
import Topo from './Topo';

export default function App(){
return (
 <BrowserRouter>
 <Topo/>
 <Routes>
 <Route path="/" element={<Escolhafilme />} />
 </Routes>
 </BrowserRouter>
);

}