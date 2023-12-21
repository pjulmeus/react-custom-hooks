import React, { useState, useEffect } from "react";
import {v4 as uuid} from 'uuid';
import axios from "axios";

const useAxios = (url, option = "") => {
 const [response, setResponse] = useState(null)
 const [items , setItems] = useState([])


    const getCard = async () => {
    
            const res = await axios.get(`${url}/${option}`);
            setResponse(res.data)
            setItems(items => [...items, {...res.data, id: uuid() }])

        // }else{
        //     const res = await axios.get(`${url}/${option}/`);
        //     setResponse(res.data)
        //     setItems(items => [...items, {...res.data.cards[0], id: uuid() }])
        }
    
 return   {getCard,response, items}

}

export default useAxios