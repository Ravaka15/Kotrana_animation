// // import React from 'react';
// // import Index from './pages/movies/Index';
// // import "./App.css"
// // import Navbar from './pages/lyaout/Navbar/Navbar';
// // import Home from './pages/accueil/Home';
// // import Animation from './pages/animation/Animation';

// // function App() {
// //   return (
// //     <div className='App'>
// //       <Navbar/>
// //       <div className='container'>
// //         <Home/>
// //         <Index />
// //         <Animation/>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
// // import React from 'react';
// // import "./App.css";
// // import Hooks from './pages/hooks/Hooks';
// // function App()  {
// //   return (
// //     <div className='App'>
// //       <Hooks/>
// //     </div>
// //   );
// // };

// // export default App;

// // import React, { useEffect, useRef } from 'react';

// // const App: React.FC = () => {
// //   const containerRef = document.getElementById("menu");
// //   const yellowDivRef = useRef<HTMLDivElement | null>(null);

// //   useEffect(() => {
// //     const container = containerRef.current;
// //     const yellowDiv = yellowDivRef.current;

// //     if (!container || !yellowDiv) return;

// //     const handleScroll = () => {
// //       const rectContainer = container.getBoundingClientRect();
// //       const rectYellowDiv = yellowDiv.getBoundingClientRect();

// //       for (let i = 1; i <= 4; i++) {
// //         const paragraph = document.getElementById(`paragraphe${i}`);

// //         if (!paragraph) continue;

// //         const rectParagraph = paragraph.getBoundingClientRect();

// //         if (
// //           rectParagraph.bottom <= rectYellowDiv.bottom &&
// //           rectParagraph.top >= rectYellowDiv.top
// //         ) {
// //           paragraph.style.color = 'red';
// //         } else {
// //           paragraph.style.color = 'blue';
// //         }
// //       }
// //     };

// //     window.addEventListener('scroll', handleScroll);

// //     return () => {
// //       window.removeEventListener('scroll', handleScroll);
// //     };
// //   }, []);

// //   return (
// //     <div>
// //       <div ref={containerRef} id="menu" style={{ height: '200px', position: 'fixed', backgroundColor:"red" }}>
// //         <p className="paragraphe" id="paragraphe1">
// //           Paragraphe 1
// //         </p>
// //         <p className="paragraphe" id="paragraphe2">
// //           Paragraphe 2
// //         </p>
// //         <p className="paragraphe" id="paragraphe3">
// //           Paragraphe 3
// //         </p>
// //         <p className="paragraphe" id="paragraphe4">
// //           Paragraphe 4
// //         </p>
// //       </div>
// //       <div style={{ height: '1000px', backgroundColor: 'black' }}>dd</div>
// //       <div style={{ height: '1000px', backgroundColor: 'white' }}>dd</div>
// //       <div ref={yellowDivRef} style={{ height: '1000px', backgroundColor: 'yellow' }}>
// //         dd
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;


// import React, { useEffect } from 'react';

// const App: React.FC = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const container = document.getElementById('container');
//       const blueDiv = document.getElementById('blueDiv'); 

//       if (!container || !blueDiv) return;

//       const rectContainer = container.getBoundingClientRect();
//       const rectBlueDiv = blueDiv.getBoundingClientRect(); 

//       for (let i = 1; i <= 4; i++) {
//         const paragraph = document.getElementById(`paragraphe${i}`);

//         if (!paragraph) continue;

//         const rectParagraph = paragraph.getBoundingClientRect();

//         if (
//           rectParagraph.bottom <= rectBlueDiv.bottom && 
//           rectParagraph.top >= rectBlueDiv.top 
//         ) {
//           paragraph.style.color = 'white';
//         } else {
//           paragraph.style.color = 'red';
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       <div id="container" style={{ height: '200px', position: 'fixed' }}>
//         <p className="paragraphe" id="paragraphe1">
//           Paragraphe 1
//         </p>
//         <p className="paragraphe" id="paragraphe2">
//           Paragraphe 2
//         </p>
//         <p className="paragraphe" id="paragraphe3">
//           Paragraphe 3
//         </p>
//         <p className="paragraphe" id="paragraphe4">
//           Paragraphe 4
//         </p>
//       </div>
//       <div id="blueDivone" style={{ height: '1000px', backgroundColor: 'blue' }}>dd</div>
//       <div style={{ height: '1000px', backgroundColor: 'white' }}>dd</div>
//       <div id="blueDivtwo" style={{ height: '1000px', backgroundColor: 'blue' }}>
//         dd
//       </div>
//     </div>
//   );
// };

// export default App;


import React, { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('container');
      const blueDivOne = document.getElementById('blueDivone');
      const blueDivTwo = document.getElementById('blueDivtwo');

      if (!container || !blueDivOne || !blueDivTwo) return;

      const rectContainer = container.getBoundingClientRect();
      const rectBlueDivOne = blueDivOne.getBoundingClientRect();
      const rectBlueDivTwo = blueDivTwo.getBoundingClientRect();

      for (let i = 1; i <= 4; i++) {
        const paragraph = document.getElementById(`paragraphe${i}`);

        if (!paragraph) continue;

        const rectParagraph = paragraph.getBoundingClientRect();

        if (
          (rectParagraph.bottom <= rectBlueDivOne.bottom && rectParagraph.top >= rectBlueDivOne.top) ||
          (rectParagraph.bottom <= rectBlueDivTwo.bottom && rectParagraph.top >= rectBlueDivTwo.top)
        ) {
          paragraph.style.color = 'white';
        } else {
          paragraph.style.color = 'red';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div id="container" style={{ height: '200px', position: 'fixed' }}>
        <p className="paragraphe" id="paragraphe1">
          Paragraphe 1
        </p>
        <p className="paragraphe" id="paragraphe2">
          Paragraphe 2
        </p>
        <p className="paragraphe" id="paragraphe3">
          Paragraphe 3
        </p>
        <p className="paragraphe" id="paragraphe4">
          Paragraphe 4
        </p>
      </div>
      <div style={{ height: '1000px', backgroundColor: 'white' }}>dd</div>
      <div id="blueDivone" style={{ height: '1000px', backgroundColor: 'blue' }}>dd</div>
      <div style={{ height: '1000px', backgroundColor: 'white' }}>dd</div>
      <div id="blueDivtwo" style={{ height: '1000px', backgroundColor: 'blue' }}>
        dd
      </div>
      <div style={{ height: '1000px', backgroundColor: 'white' }}>dd</div>
    </div>
  );
};

export default App;
