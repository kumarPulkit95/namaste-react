import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
	React.createElement("div", { id: "child-1" }, [
		React.createElement("h1", { id: "h1" }, "Chandrayan - 3 🚀"),
		React.createElement("h2", { id: "h2" }, "I'm h2 tag"),
		React.createElement("h3", { id: "h3" }, "I'm h3 tag"),
	]),
	React.createElement("div", { id: "child-2" }, [
		React.createElement("h1", { id: "h1" }, "I'm h1 tag"),
		React.createElement("h2", { id: "h2" }, "I'm h2 tag"),
		React.createElement("h3", { id: "h3" }, "I'm h3 tag"),
	]),
]);

console.log(parent);
//creating the HTML element using react methods "createElement"
// taking 3 args <tag> , props, content
const heading = React.createElement(
	"h1",
	{ id: "heading" },
	"Hello world in React !"
);

console.log(heading);
// now we need to create a root where we will put out h1 tag
// so we create a root node using createRoot method which is a ReactDOM method.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Using render method to render the h1 element inside root.
root.render(parent);
