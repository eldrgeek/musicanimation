import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer, { renderToStaticMarkup } from "react-dom/server";
import "./styles.css";
import CSSJSON from "cssjson";

const combine = (style1, style2) => ({ ...style1, ...style2 });

const About = text => {
  const split = text.split(/([~^]{2})/);
  let state = "start";
  let revised = [];
  let divs = [];
  let i = 0;
  let fragment;
  while (i < split.length) {
    fragment = split[i];
    if (fragment === "^^") {
      divs.push(<div>{split[i + 1]}</div>);
      i++;
    } else if (fragment === "~~") {
      divs.push(<div>{split[i + 1]}</div>);
      i++;
    } else {
      divs.push(<div>{split[i]}</div>);
    }
    i++;
  }
};

const left = { left: 10 };
const Circle = ({ id }) => {
  return <div id={id} className="circle" />;
};

const reCase = string =>
  string.replace(/([A-Z])/g, matches => `-${matches[0].toLowerCase()}`);

const cssRule = styles =>
  Object.entries(styles).reduce((styleString, [propName, propValue]) => {
    return `${reCase(styleString)}  ${propName}:${propValue};\n`;
  }, "");

const styleRule = styles =>
  Object.entries(styles).reduce((styleString, [propName, propValue]) => {
    return `${styleString}.${propName} {\n${cssRule(propValue)}}\n`;
  }, "");

// console.log(styleRule(styles))
const aboutText1 = `Who are We? ~~this~~ ths ^^and^^ ao rhwew ~~rhia~~`;
const aboutText = `Who are We?

^^...we're a raggle-taggle army - 'got no uniform or guns

Still we been called by coincidence so maybe we're the ones.

You’re here.

So maybe you’ve been called by coincidence, too.  
Maybe You’re one of the ones.
  
For what?


We want to start a connection revolution.  
Maybe you’d Like to Join it.

One of the original revolutionaries wrote a song about how to start such a revolution. Here’s how it goes:^^

“I'm gonna start a revolution; I'm gonna take it to the street,

I'm gonna smile at every solitary person that I meet!

I'm gonna wave at total strangers no matter where they're from.

I'm gonna start a revolution… gonna win it one by one.”

Like every revolution, this one started with an idea: that trust and community have been breaking down

^^And another:^^^ and something needed to be done about it.

^^And another: That we were the ones who needed to start doing something.^^^

~~So maybe that's two ideas. Or three. Whatever.

Then we noticed that inside the word "Revolution" there was the word love! It had always been there. We didn’t care if some folks thought it was ‘corny’. We decided to consider it meaningful--because we could.

Anyway, ~~^^more ideas followed. Because ideas are at the heart of every revolution.^^

~~So, ~~we imagined a Revolution that could spread across divides, around the world.

We imagined a Revolution where the technology that was disrupting us could be used to reconnect us.

We didn't know all the details , ^^and we still don’t,^^ but we believed we could find ways to use that technology to build and to connect

And, most of all, we believed that we were not alone.

we believed, with a little encouragement, some shared ideas and knowledge, that everyone could create and contribute their unique vision to this movement.

^^That You could.^^

We put up a website. Nothing much. Just a place to start. A cyberspace headquarters.

You’re here now.

  
^^Who are You?^^

`;
console.log(About(aboutText1));

const RevolutionURL = ({ loc = {} }) => {
  return (
    <div id="revolutionURL" className="stencil">
      <span> 1</span>
      <span id="smallx">x</span>
      <span>1</span>
    </div>
  );
};

const RevolutionTitle = ({ loc }) => {
  return (
    <div id="revolutionTitle" className="stencil">
      Revolution
    </div>
  );
};

const WhoAreYou = ({ loc = {} }) => {
  return (
    <React.Fragment>
      <div id="whoareyoutext" className="stencil">
        <span className="redscript">Who</span>{" "}
        <span className="whitescript">are you?</span>
      </div>
    </React.Fragment>
  );
};

const WhoAreWe = ({ loc = {} }) => {
  return (
    <React.Fragment>
      <div id="whoarewetext">
        <span className="whitescript">..who are</span>
        <span className="redscript">we?</span>
      </div>
    </React.Fragment>
  );
};

const clickYou = event => {};

const clickWe = event => {};

const clickVideos = event => {};

function App() {
  return (
    <div id="App">
      <RevolutionTitle />
      <Circle id="whoareyou" onClick={clickYou} />
      <Circle id="whoarewe" onClick={clickWe} />
      <Circle id="getvideos" onClick={clickVideos} />
      <RevolutionURL />
      <WhoAreYou />
      <WhoAreWe />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

const jsonObject = {
  whatever: {
    backgroundColor: "black",
    color: "red"
  }
};

var css = styles =>
  Object.keys(styles).map(key => {
    console.log("key", key);
    css = console.log(css);
  });
console.log(css(jsonObject));
