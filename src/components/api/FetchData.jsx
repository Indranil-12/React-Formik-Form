import axios from "axios"
import { useEffect } from "react"

const FetchData = () => {

    const fetchingData = async()=>{
        try{
            let fetchData= await axios.get('http://localhost:1000/data');
            console.log(fetchData.data);
        }catch(error){
            console.log(error);    
        }
    }

    useEffect(()=>{
        fetchingData();
    },[])

  return (
    <>  

    </>    
  )
}

export default FetchData