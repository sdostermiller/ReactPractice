import NormalCompoent from './ChildComponents/NormalComponent';
import CreateElementComponent from './ChildComponents/CreateElementComponent';

const JSX = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <h1>JSX</h1>
                <p>
                    JSX is a JavaScript extensionsyntax used in React to easily write HTML and JavaScript together.
                </p>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>JSX is a syntax extension of JavaScript, and is used to describe what the UI (User interface) looks like. JSX produces React "elements".</dd>
                    <dt>Not required</dt>
                    <dd>Although not required by React, JSX is the widespread de facto go-to for most React developers - as JSX acts as a helpful visual aid when working with UI in JavaScript code.</dd>
                </dl>
                <hr />
                <NormalCompoent />
                <br />
                <CreateElementComponent />
            </div>
        </div>
    );
};

export default JSX;