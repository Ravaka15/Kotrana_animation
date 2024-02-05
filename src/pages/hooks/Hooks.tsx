
// USE EFFECT

// import React, { useEffect, useState } from 'react';

// const Hooks: React.FC= () => {
//     const [test,setTest] = useState(0);

//     const handleClick = () => {
//         setTest(test+1)
//     }
//     useEffect(() => {
//     document.title = `ity ${test}`
//     }, [test]);
//     return (
//         <div>
//             <button onClick={handleClick}>Ovao</button>
//            <h1>{test}</h1>
//         </div>
//     );
// };

// export default Hooks;

// const { useState, useContext, createContext } = React

// const testContext = createContext();

// const NameModifier = () => {
//   const { name, updateName } = useContext(testContext);
//   return (
//     <>
//       <label>Enter a name: </label>
//       <input type="text" value={name} onChange={updateName}/>
//     </>
//   )
// };

// const NamePrinter = () => {
//   const { name } = useContext(testContext);
//   return <div className="result">My name is {name}</div>
// };

// const App = () => {
//   const { Provider } = testContext;
//   const [name, setName] = useState("Milu");
  
//   const updateName = e => setName(e.target.value);
  
//   return (
//     <section className="box">
//       <Provider value={{ name, updateName }}>
//         <NameModifier />
//         <NamePrinter />
//       </Provider>
//     </section>
  
//   );
// };

/////////////////////////////////////////////////
import React from 'react';



const Hooks: React.FC = () => {
    
    return (
        <div>
            
        </div>
    );
};

export default Hooks;