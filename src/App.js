import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Escolhafilme from './Escolhafilme';
import Escolhasessao from './Escolhasessao';
import Topo from './Topo';

export default function App(){
return (
 <BrowserRouter>
 <Topo/>
 <Routes>
 <Route path="/" element={<Escolhafilme />} />
 <Route path="/sessoes/:idFilme" element={<Escolhasessao />} />
 </Routes>
 </BrowserRouter>
);

}