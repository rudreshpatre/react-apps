import React from 'react'



const App = () => {
  const name = "Rudresh";
  var x = 10;
  var y = 20;
  var names = ['Brad','Chad','Nate','Kate'];
  var loggedIn = false;
  return (
    <div>
        <div className="text-5xl"> App</div>
        <p style={{color:'red', fontSize:'24px'}}>Hello {name}</p>
        <p>Sum of {x} and {y} is {x+y}</p>
        <ul>
          {names.map((name)=>(
            <li>{name}</li>
          ))}
        </ul>
        {loggedIn && <h1>Hello Member!</h1>}
    </div>
  );   
};

export default App;