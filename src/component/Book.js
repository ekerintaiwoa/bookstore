

//import action we want to dispatch

/*

console.log('initialstae', store.getState());


const unsubscribe =  store.subscribe(()=>{

  console.log("updated state",store.getState())

})

*/

import React, {useState} from 'react';
import {useDispatch , useSelector} from "react-redux";
import {ordered,restocked} from '../redux/features/BookSlice'

const Book = () => {

    let dispatch = useDispatch();

    // get data from Redux Store

    let bookState = useSelector((state) => {
          //  name of slice
       return state["bookred"]
    });

    let  {numberOfBooks} = bookState;


    let orderABook = () => {
        dispatch(ordered());
    };



    return ( 

            <div>

                   <h1> {numberOfBooks}</h1>
                   <h2> {orderABook}</h2>


            </div>



     );
}
 
export default Book;