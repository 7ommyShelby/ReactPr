function head() {
    return (
        <div>
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
        </div>
    )
}

const Display = head();

ReactDOM.render(Display, document.querySelector('#root'))