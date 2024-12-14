import axios from "axios";
import { useEffect } from "react";

const PostData = ({sendData}) => {
    // console.log(sendData);

    const postDataHandler=async()=>{
        try{
            axios.post("http://localhost:1000/data",sendData);
        }catch(err){
            console.log(err);       
        }
    }
    
    useEffect(()=>{
        postDataHandler();
    },[sendData])
    
}

export default PostData