//import { createStore } from 'vuex'
import axios from 'axios'

export default ({
  state: {      //stores the data in the app, in this case, we'll move the counter function here
    counter: 0, 
    user_selections: "",
    
    //add a state property to hold color code
    colorCode: 'magenta'
  },
  mutations: {    //methods change data in  state, in this case the addCounter and the subtract counter. //commit (trigger) mutations. no async
    addCounter(state, randomNumber)  {   //pass state as a parameter so as to access the data in state

       //receive the payload in this mutation
     
     // state.counter++  
     console.log('randomNumber: ', randomNumber); //test if the random number is fetched

     //replace the counter with the random number
     state.counter += randomNumber;

        },

        
        subtractCounter(state, randomNumber) { 
          //replace the counter with random number
          //state.counter--
          state.counter -= randomNumber;
        },

        //create the setcolorcode mutation

        setColorCode(state, newColor) {
          state.colorCode = newColor

        }
  },
  actions: {  //API calls, methods which cannot change data in state but conly access. Dispatching (trigger) {
     
    addCounter( {commit}) {
      console.log('increased counter(actions)');
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(response => {
        console.log('response', response);
        //send the random number as a payload to mutations which will add it to the current counter
        //commit a mutation from an action
        commit('addCounter', response.data)



      })

    },
    subtractCounter({commit})   {
      console.log('decreased counter (actions)');
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new')
      .then(response => {
        console.log('response', response);
         //send the random number as a payload to mutations which will add it to the current counter
        //commit a mutation from an action
        commit('subtractCounter', response.data)

      })
    },

    setColorCode({commit}, newColor) {
      //send the new color as a payload to mutations which will add it to the current counter
        //commit a mutation from an action
      commit('setColorCode', newColor)
    }
    
  },
  getters: { //allows getting data from state
    counterSquared( state) {
      return state.counter * state.counter
    },
    GetUserSelections (state) {
        return state.user_selections
    }

  },
  modules: {
  }
})
