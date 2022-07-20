import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import TopGames from "./TopGames";
import Search from "./Search";
import Nav from "./Nav";
import GameDetail from "./GameDetails";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './index.css';
import Footer from './pages/Footer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
     <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route exact path='/topgames' component={TopGames} />
          <Route exact path='/search' component={Search} />
          <Route path='/game/:name' component={GameDetail} />
        </Switch>
        < Footer />
      </div>
    </Router>
    
    </ApolloProvider>
  );
}

export default App;
