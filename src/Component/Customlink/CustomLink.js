import React from 'react';
import {
    Routes,
    Route,
    Outlet,
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";
  function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ textDecoration: match ? "underline" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {/* {match && " (active)"} */}
      </div>
    );
  }
  
//   function Layout() {
//     return (
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <CustomLink to="/">Home</CustomLink>
//             </li>
//             <li>
//               <CustomLink to="/about">About</CustomLink>
//             </li>
//           </ul>
//         </nav>
  
//         <hr />
  
//         <Outlet />
//       </div>
//     );
//   }
  
//   function Home() {
//     return (
//       <div>
//         <h1>Home</h1>
//       </div>
//     );
//   }
  
//   function About() {
//     return (
//       <div>
//         <h1>About</h1>
//       </div>
//     );
//   }
  
//   function NoMatch() {
//     return (
//       <div>
//         <h1>Nothing to see here!</h1>
//         <p>
//           <Link to="/">Go to the home page</Link>
//         </p>
//       </div>
//     );
//   }
  

export default CustomLink;