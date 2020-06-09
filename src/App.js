import React from 'react';

import Dinner from './dinner' // it is best practice
// import Dinner from './dinner.js' // extension  .js its working but it is not necessary ok?


// you dont see to mention the extension of component file i.e .js etc

function App() {
  return (
    <div className="App">
      {/* <Dinner /> */}
      <Dinner dishName="chicken karhai" sweetDish="kheer"></Dinner>
      <Dinner dishName="chicken biryani" sweetDish="Rabri"></Dinner>
      <Dinner dishName="chicken biryani" sweetDish="gajar halwa"></Dinner>
      <Dinner dishName="chicken biryani" sweetDish="jalleebi"></Dinner>
    </div>
  );
}

export default App;

