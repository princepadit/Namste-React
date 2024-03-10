{/* <div id="parent">
  <div id="child">
    <div id="child2">
    </div>
  </div>
</div> */}

const parent=React.createElement("div",{id :"parent"},[
    React.createElement("div",{id :"child"},[
        React.createElement("h1",{},"i'm an tag1"),
    ]),
    React.createElement("div",{id :"child2"},[
    React.createElement("h1",{},"i'm an tag1"),
    React.createElement("h1",{},"i'm an tag2"),
]),
]);






//const heading=React.createElement("h1",{},"Hello bro i'm first react");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);