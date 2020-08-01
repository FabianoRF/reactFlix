import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import './reset.css';

import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'

//separar
const Pagina404 = ()=>( <iframe title="flappybird" src="https://mariosouto.com/flappy-bird-devsoutinho/" width="340" height="600" />);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Pagina404} exact/>

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
