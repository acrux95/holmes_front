import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
// import Login from '../containers/Login';
// import Register from '../containers/Register';
// import NotFound from '../containers/NotFound';
// import Layout from '../components/Layout';
// import Player from '../containers/Player'


const App = () => ( 
    <BrowserRouter>
    {/* <Layout> */}
        <Switch>
            <Route exact path="/" component = {Home} />
            {/* <Route exact path="/login" component = {Login} />
            <Route exact path="/register" component = {Register} />
            <Route exact path="/player/:id" component = {Player} />
            <Route component = {NotFound} /> */}
        </Switch>
    {/* </Layout> */}


    </BrowserRouter>
)

export default App;


//Atributos para los Route Objectos:

// path: la ruta en la que se renderizará el componente en forma de cadena de texto
// exact: un booleano para definir si queremos que la ruta tiene o no que ser exacta para renderizar un componente. Eg: /index !== /index/all.
// strict: un booleano para definir si queremos que el último slash sea tomado en cuenta para renderizar un componente. Eg: /index !== /index/.
// sensitive: un booleano para definir si queremos distinguir entre minúsculas y mayúsculas, y tomar esto en cuenta para renderizar un componente. Eg: /index !== /Index
// component: recibe un componente a renderizar. Crea un nuevo elemento de React cada vez. Esto causa que el componente se monte y desmonte cada vez (no actualiza).
// render: recibe un método que retorna un componente. A diferencia de component no remonta el componente.