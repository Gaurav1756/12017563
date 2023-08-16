import axios from 'axios';
import{useState, useEffect} from 'react';
const API = "http://20.244.56.144/numbers/odd";
function Number() {
    const [myData, setData] = useState([]);
    const [isError,setIsError] = useState("")
    const apiData = async () => {
        try {
            const res = await axios.get('/post')
            setData(res.data)
        }
        catch(error) {
            setIsError(error.message);
        }
        
    }
    useEffect(() => {
        apiData(`${API}`);
        },[])
    return (
        <>
        {isError !== " " && <h2>{isError}</h2>}
        <div class = "first">
        {
            myData.map((val) => {
                return (
                    <>
                    {val}
                    </>
                )
            })
        }
        </div>
        </>
    )
}

export default Number;