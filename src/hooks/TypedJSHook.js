import React from "react";
import Typed from 'typed.js';
const TypedJSHook = () => {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                'Hi I\'m a software developer,',
                'Hi I\'m a web developer,',
                'Hi I\'m an F1 Fan,',
                'Hi I\'m an F1 Fan,',
                'Hi I\'m a Student,',
                'Hi I\'m Zak',

            ],
            typeSpeed: 75,
            backSpeed: 25,
        };

        typed.current = new Typed(el.current, options);

        return () => {

            typed.current.destroy();
        }
    }, [])

    return (
        <div className="wrap">

            <h1 className="type-wrap">
                <span style={{ whiteSpace: 'pre' }} ref={el} />
            </h1>

        </div>
    );
}

export default TypedJSHook;