
import { createCharacterAdapter } from '../../../adapters';
import { useFetchAndLoad } from '../../../hooks';
import { list } from '../../../redux/states/character';
import { AppStore } from '../../../redux/store';
import { getCharacter} from '../../../services/public.service';
import { Backdrop, CircularProgress} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
//import CardMorty from './C';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';




function Register() {
  const [page,setPage] = useState(1);
  const [pages,setPages] = useState(1);

  const { loading, callEndpoint } = useFetchAndLoad();
  const dispatch = useDispatch();
  const characterState = useSelector((store: AppStore) => store.character);

  useEffect(() => {		
    const fetchData = async () => {
      const res = await callEndpoint(getCharacter(page));
      setPages(res.data.info.pages);
      const transform = res.data.results.map((row: any)=>{
        return createCharacterAdapter(row)
      })
      console.log("datos")
      console.log(res.data)
     dispatch(list(transform));
    }
    fetchData().catch((err)=> console.log(err))    
    
		
	}, [page]);

  return( 
      <div>
        {characterState.map((row: any)=> 
          (<div>
            {row.id}
          </div>
          ))}
      </div>
  ) 
}

export default Register;