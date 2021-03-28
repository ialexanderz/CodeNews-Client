import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function JumboTextTwo() {
    const [user, setUser] = useState({});

    useEffect(() =>{
        const getUser = async() => {
            const getUser = await axios.get(`${process.env.REACT_APP_SERVER_URL}/`);
            console.log(getUser);
        }
    }, [])

    return (
        <div className="jumbotronnewstwo">
            
        </div>
    )
}
