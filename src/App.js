import React from 'react'
import './App.css';
import {Provider} from 'react-redux'
import PersistedStore from '../src/store/PersistedStore'
import CustomDataTable from "./dataTable/DataTable";
import {Route,Redirect,Switch,BrowserRouter} from "react-router-dom";
import InputForm from "./inputForm/InputForm";

const store = PersistedStore.getDefaultStore().store

function App(props) {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Switch>
                    <Route path="/" exact render={props =>  <CustomDataTable {...props}/>}/>
                    <Route path="/newItem" exact render={props => <InputForm {...props} />}/>
                    <Route path="/items" exact render={props => <CustomDataTable {...props} />}/>
                    <Redirect to='/'/>
                </Switch>

            </Provider>
        </BrowserRouter>
    );
}

export default App;
