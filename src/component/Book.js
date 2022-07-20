import store from "../redux/Store";
import  {ordered,restocked} from '../redux/features/BookSlice'

//import action we want to dispatch



console.log('initialstae', store.getState());


const unsubscribe =  store.subscribe(()=>{

  console.log("updated state",store.getState())

})