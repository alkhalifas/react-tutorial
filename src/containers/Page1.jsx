// src/containers/Home.jsx
import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const Page1 = () => {
    return (
        <div style={{justifyContent: 'center'}}>
            <h2>Page 1</h2>
            <div>
                <Link to={"/"}>
                    <Button variant="contained">
                        Home
                    </Button>
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

export default Page1;