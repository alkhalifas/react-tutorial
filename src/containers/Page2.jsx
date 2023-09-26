// src/containers/Home.jsx
import React from 'react';
import {Link} from "react-router-dom";

const Page2 = () => {
    return (
        <div style={{justifyContent: 'center'}}>
            <h2>Page 2</h2>
            <div>
                <Link to={"/"}>
                    <button>
                        Home
                    </button>
                </Link>
                <Link to={"/page1"}>
                    <button>
                        Page1
                    </button>
                </Link>
                <Link to={"/page2"}>
                    <button>
                        Page2
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Page2;