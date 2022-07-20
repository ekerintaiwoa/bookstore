import   {createSlice} from '@reduxjs/toolkit' 


// we specificy the initial state of the bookSlice
const initialState = {

   numberOfBooks : 300 


}


// we create a slice ,it takes nameof slice , initial state and reducer

const  bookSlice = createSlice({

    name : "book" ,

    initialState : initialState ,

    reducers : {

         // case 
         ordered : (state,action)=>{

             // state.numberOfBooks - 3

             state.numberOfBooks--

         }  ,

         // case restock store 

        restocked : (state,action)=>{

           state.numberOfBooks += action.payload

        }




    }




})

