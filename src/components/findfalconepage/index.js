import React, { useEffect } from 'react';
import Header from '../common/header'
import { useSelector, useDispatch } from 'react-redux';
import {getPlanets} from "../../actions/rootActions";


function FindFalconePage(){
    const planets = useSelector(state => state.planets);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPlanets())
    },[])

    console.log(planets,"planets");
    
    return(
        <Header activeTab="findfalcone"/>
    )
}

export default FindFalconePage;