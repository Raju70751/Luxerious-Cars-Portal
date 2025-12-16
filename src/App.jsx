import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react'
import Home from './components/Home';
import SaveList from './components/SaveList';
import Orders from './components/Orders';
import Login from './components/LoginPage/Login';
import Register from './components/Registration';
import ProtectedRoute from './components/ProtectedRoute'
import ContextProvider from './context/Context'
import './App.css';

function App() {
  const [savedList, setSaveList] = useState([])

  const addSaveList = (car) => {
    const alreadtSaved = savedList.some(each => each._id === car._id)
    if (alreadtSaved) {
      alert('already in saved List')
      return
    }
    else {
      setSaveList(prev => [...prev, car])

    }
  }


  return (
    <div className="App">
      <ContextProvider.Provider value={{ savedList, addSaveList: addSaveList }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/save-list" component={SaveList} />
            <ProtectedRoute exact path="/orders" component={Orders} />
          </Switch>
        </BrowserRouter>
      </ContextProvider.Provider>
    </div>
  );
}

export default App;