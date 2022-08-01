import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Escolhafilme from './Escolhafilme';
import Escolhasessao from './Escolhasessao';
import Topo from './Topo';
import Escolhaassento from './Escolhaassento';
import TelaSucesso from './TelaSucesso';

export default function App(){
return (
 <BrowserRouter>
 <Topo/>
 <Routes>
 <Route path="/" element={<Escolhafilme />} />
 <Route path="/sessoes/:idFilme" element={<Escolhasessao />} />
 <Route path="/assentos/:idSessao" element={<Escolhaassento />} />
 <Route path='/sucesso' element={<TelaSucesso />} />
 </Routes>
 </BrowserRouter>
);

}