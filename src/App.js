import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

import TableMain from './TableMain';
import Profile from './components/Profile';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [character, setCharacter] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [loading,setLoading] = useState(false);
  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://www.breakingbadapi.com/api/characters`
      );
      const res2 = await axios.get(
        `https://www.breakingbadapi.com/api/quotes`
      );
      setQuotes(res2.data);
      setCharacter(res.data);
      setLoading(false);
    } catch (e) {
      console.log('my error is ' + e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return loading===false? 
  (
    <>
     <BrowserRouter>
      <Switch>
        <Route exact path='/' render={()=><TableMain data={character} />}/>
        <Route path='/:id'  render={(props) => <Profile {...props} data={character} quotes={quotes}/>}></Route>
      </Switch>
      </BrowserRouter>
      </>
  ):<LoadingScreen/>
  
  
}

export default App;
