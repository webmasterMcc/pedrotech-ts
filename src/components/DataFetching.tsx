import React, { useEffect, useState } from 'react';
import axios from 'axios';

 

function DataFetching() {

    const [data, setData] = useState<string|number|boolean[]>([]);

    useEffect(() => {
        function fetchData(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
             setData(response.data)
              console.log(response.data);
            })
            .catch(error => {
              console.log(error);
            });
        }

        return (
            fetchData() 
        )
       
    },[]);


  return (
    <>
      <div>Data Fetching</div>
      {Array.isArray(data) && data.map(item => (
        <p key={item.id}>{item.title}</p> 
      ))}
    </>
  )
}

export default DataFetching