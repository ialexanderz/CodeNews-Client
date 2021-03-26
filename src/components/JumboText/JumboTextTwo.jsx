import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function JumboTextTwo() {

    const [user, setUser] = useState({});

    useEffect(() =>{
        const getUser = async() => {
            const getUser = await axios.get("http://localhost:4000/users/");

            console.log(getUser);
        }

    }, [])

    

    return (
        <div className="jumbotronnewstwo">

            `Hello "getUser"`
            
        </div>
    )
}
