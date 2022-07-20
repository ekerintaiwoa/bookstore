

//import action we want to dispatch

/*

console.log('initialstae', store.getState());


const unsubscribe =  store.subscribe(()=>{

  console.log("updated state",store.getState())

})

*/

import React, {useState} from 'react';
import {useDispatch , useSelector} from "react-redux";

const Book = () => {

    let dispatch = useDispatch();

    // get data from Redux Store

    let bookState = useSelector((state) => {
        return state["numberOfBooks"]; 
    });

    let {bookNumber} = bookState;



    return ( 

            <div>

                    {bookNumber}

            </div>



     );
}
 
export default Book;