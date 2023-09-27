// src/containers/Home.jsx
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const Page2 = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Define the API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

        // Make a GET request using fetch
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setData(data.slice(0, 5));
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div style={{justifyContent: 'center'}}>
            <h2>Page 2</h2>
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
            <div>
                <h1>API Data</h1>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Page2;