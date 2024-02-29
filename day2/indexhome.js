{/* <div>
<h1>topics covered</h1>

<p>The following is a list of all the topics we cover in the MDN learning area.</p>

<dl>
    <dt><a href="">Getting started with the web</a></dt>
    <blockquote>Provides a practical introduction to web development for complete beginners.
    </blockquote>
    <dt><a href="">HTML Structuring the web</a>
    </dt>
    <blockquote>HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.</blockquote>

    <dt><a href="">CSS-Styling the web</a></dt>
    <blockquote>CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.</blockquote>
</dl>

</div> */}

const heading = React.createElement('h1', {}, 'topics covered');
const para = React.createElement('p', {}, 'The following is a list of all the topics we cover in the MDN learning area.');

const anc = React.createElement('a', {href : ""}, 'Getting started with the web');
const dt = React.createElement('dt', {}, [anc]);
const block = React.createElement('blockquote', {}, 'Provides a practical introduction to web development for complete beginners.');

const anc2 = React.createElement('a', {href : ""}, 'HTML Structuring the web');
const dt2 = React.createElement('dt', {}, [anc2]);
const block2 = React.createElement('blockquote', {}, 'HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.');

const anc3 = React.createElement('a', {href : ""}, 'CSS-Styling the web');
const dt3 = React.createElement('dt', {}, [anc3]);
const block3 = React.createElement('blockquote', {}, 'CSS is the language that we use to control our web contents style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.');



const dl = React.createElement('dl', {}, [
dt,
block,
dt2,
block2,
dt3,
block3
]);


const div = React.createElement('div', {}, [
    heading,
    para,
    dl
]);

ReactDOM.render(div, document.querySelector('#root'));

