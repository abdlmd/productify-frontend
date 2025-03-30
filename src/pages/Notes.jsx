import React, {useEffect, useState} from 'react';

function Notes() {
    const [data,setData] = useState([])
    useEffect(() => {
        async function fetchData(){
            const res = await fetch("http://localhost:8080/api/note")
            const result = await res.json();
            setData(result)



        }
        fetchData()
    }, []);

    console.log(data)
    return (
        <div><h1>WELCOME TO NOTES PAGE</h1></div>
    );
}

export default Notes;