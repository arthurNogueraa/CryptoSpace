
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Twitter from './Pages/Twitter';
import Cryptos from './Pages/Cryptos';
import Feed from './Pages/Feed';
function App() {
  
  return (

    
     
      
        <BrowserRouter>
          <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/Cryptos" exact component={Cryptos} />
            <Route path="/Feed" exact component={Feed} />
            <Route path="/Twitter" exact component={Twitter} />

          </Switch>
        </BrowserRouter>



    
 
  );
}

export default App;
