import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Operations from './pages/Operations';
import Footer from './pages/Footer';
import PrivateRoutes from './authRoutes/privateRoutes';
import Profile from './pages/Profile';
import EditProfile from './pages/profile/editProfile';
import { useEffect, useState } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { getOps } from './actions/operationAction';


function App({operations}) {
  const Operation = useSelector((state) => state.OperationReducer);
  const [searchValue, setSearchValue] = useState("");
  const search = (inputValue) =>{
    setSearchValue(inputValue);
  }
  const [filterType, setfilterType] = useState(false) 
  const toggle=()=> {
    setfilterType(!filterType)
  }  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOps());
  }, []);
  return (
    <Router>
      <Navbar/>
      <Switch>
        <PrivateRoutes exact path='/' component={Home} />
        <PrivateRoutes exact path='/profile' component={Profile} />
        <PrivateRoutes exact path='/operations' component={() => <Operations search={search} Operation={Operation.filter((operation)=>operation.label.toLowerCase().includes(searchValue.toLowerCase().trim()))} />}/>
        <PrivateRoutes exact path='/profile/edit_profile' component={EditProfile} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
