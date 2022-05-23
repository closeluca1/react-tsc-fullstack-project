import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./views/Home";
import { Hint } from "./views/Hint";
import { NotFoundView } from "./views/NotFoundView";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FuncService } from './SeriviceContext';


export function App() {

  return (
    <BrowserRouter>
      <Header />

      <FuncService>
        <main className='grid justify-items-center min-h-[90vh] bg-blue-400'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='hint' element={<Hint />} />

            {/* <Route path='*'>
            <NotFoundView/>
          </Route> */}
          </Routes>
        </main>
      </FuncService>


      <Footer />


    </BrowserRouter>
  )
}

export default App
