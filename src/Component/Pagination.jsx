import React from 'react';
import { Users } from '../assets/UserData';

const dataRender =({data})=>{
data.map((user)=>)
}

const Pagination = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		setData(Users);
	}, []);

	return(
       <dataRender data={data}/>
    );
};

export default Pagination;
