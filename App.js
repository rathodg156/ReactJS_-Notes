import React from "react";
import ReactDOM  from "react-dom/client";


const parent=React.createElement("h1",{id:"parent"},["Hello World From React 🚀 🚀",React.createElement("div",{id:"child"},"Hello World From child component")])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)

// step to import or create a React Project steps are 
// 1) just add CDN Links to the project inside Body tag 
//  2) then create your code in script tag or in separate js file and import it in attribute of Script tag in index.html file 
// 3) then in script file now you have to create a element like did in java script so fro this we use React.createElement("element tag ",{object value as an attribute to that tag },"value in element tag to be view") store that into heading variable 
// 4) then we have to create root and get that element on document as root , for that we use ReactDOM library of ract 
// 5 ) const root = ReactDOM.createRoot(document.getElementById("root"))
//6) final step is just get that root to be render as heading element
// 7) root.render(heading)
