import React from 'react'
import './app.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
const App = () => {
    return (
        <div>
            <div className="bg-image img1"></div>
            <div className="bg-image img2"></div>
            <div className="bg-image img3"></div>
            <div className="bg-image img4"></div>
            <div className="bg-image img5"></div>
            <div className="bg-image img6"></div>

            <div className="bg-text">TEXT</div>
        </div>
    )
}

export default App


// import React, { useState, useEffect } from "react";
// import "./App1.css";

// function App() {
//   const [offsetY, setOffsetY] = useState(0);
//   const handleScroll = () => setOffsetY(window.pageYOffset);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const renderContent = () => (
//     <>
//       <div classNameName="Parallax__content__heading">
//         <h1 classNameName="Parallax__content__heading__text">Closure</h1>
//         <h2 classNameName="Parallax__content__heading__caption">
//           Your one-stop source of Web Development tricks
//         </h2>
//       </div>
//       <div classNameName="Parallax__content__cta">
//         <p>
//           <b>1. Like the video.</b> Because it helps me and my channel
//         </p>
//         <p>
//           <b>2. Like the video.</b> To see more content like that!
//         </p>
//         <p>
//           <b>3. Follow the Github link.</b> And play with this code yourself!
//         </p>
//       </div>
//     </>
//   );

//   return (
//     <section classNameName="Parallax">
//       <div
//         classNameName="Parallax__background"
//         style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
//       />
//       <div
//         classNameName="Parallax__background-triangles"
//         style={{ transform: `translateY(${offsetY * 0.8}px)` }}
//       />
//       <div classNameName="Parallax__content">{renderContent()}</div>
//     </section>
//   );
// }

// export default App;
