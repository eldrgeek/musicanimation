import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer, { renderToStaticMarkup } from "react-dom/server";
import "./styles.css";

const combine = (style1, style2) => ({ ...style1, ...style2 });

const styles = {
  circle: {
    width: 100,
    height: 100,

    background: "white",
    borderRadius: "50%"
  },
  title: {
    fontFamily: "stencil-std, sans-serif",
    fontStyle: "normal",
    letterSpacing: ".2rem",
    textIndent: ".7rem",
    fontSize: 40,
    color: "white",
    whiteSpace: "nowrap"
  },
  rev1x1: {
    fontFamily: "stencil-std, sans-serif",
    fontStyle: "normal",
    letterSpacing: ".2rem",
    textIndent: ".7rem",
    fontSize: 20,
    color: "white",
    whiteSpace: "nowrap"
  },
  small: {
    fontSize: 20,
    position: "relative",
    top: "-5px",
    marginBottom: "20px"
  },
  App: {
    backgroundColor: "black",
    height: "100vh",
    width: "100hw"
  },
  mistral: {
    fontFamily: "Mistral",
    fontSize: "60px"
  },
  red: {
    textAlign: "left",
    color: "#FA39FC"
  },
  white: {
    textAlign: "left",
    color: "white"
  },

  ["@font-face"]: {
    fontFamily: "Mistral",
    src: 'url("MISTRAL.woff") format("woff")'
  }
};

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
const Circle = ({ loc }) => {
  return <div style={combine(styles.circle, loc)} />;
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
  const style = combine(loc, styles.title);
  return (
    <div style={combine(style, { display: "inline", letterSpacing: 0 })}>
      <span> 1</span>
      <span style={styles.small}>x</span>
      <span>1</span>
    </div>
  );
};

const RevolutionTitle = ({ loc }) => {
  return <div style={combine(loc, styles.title)}>Revolution</div>;
};

const WhoAreYou = ({ loc = {} }) => {
  return (
    <React.Fragment>
      <div style={styles.mistral}>
        <span style={styles.red}>Who</span>{" "}
        <span style={styles.white}>are you?</span>
      </div>
    </React.Fragment>
  );
};

const WhoAreWe = ({ loc = {} }) => {
  return (
    <React.Fragment>
      <div style={combine(loc, styles.mistral)}>
        <span style={styles.white}>..who are</span>{" "}
        <span style={styles.red}>we?</span>
      </div>
    </React.Fragment>
  );
};

const loc = loc => ({ position: "absolute", ...loc });
console.log(loc(100, 100));
function App() {
  return (
    <div style={styles.App}>
      <RevolutionTitle loc={loc({ top: 100, left: 100 })} />
      <Circle loc={loc({ top: "1vh", left: "4vw" })} />
      <Circle loc={loc({ bottom: "1vh", left: "4vw" })} />
      <Circle loc={loc({ bottom: "1vh", right: "2vw" })} />
      <RevolutionURL loc={loc({ bottom: "5vh" })} />
      <WhoAreYou loc={loc({ bottom: "4vh", right: "4vw" })} />
      <WhoAreWe loc={loc({ bottom: "4vh", right: "4vw" })} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
