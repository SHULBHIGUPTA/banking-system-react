const reducer = (state,action) => {

  if(state === undefined){
      return {
          Amount:5000,
      };
   }
   switch (action.type) {
     case "add":
       state.Amount = state.Amount + parseInt(action.payload);
        
       break;

     case "remove":
         if(state.Amount > 5000){
            state.Amount = state.Amount - action.payload;
         }
       
       break;

     default:
       break;
   }

   return {...state};

};

export default reducer;