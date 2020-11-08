import { useDispatch } from 'react-redux';
import axios from 'axios';

function useApiRequest() {
  const dispatch = useDispatch();
  const api = axios;
  request();

  async function request() {
    try {
      for(let id=1; id <= 20; id++) {
        const response = await api(`https://swapi.dev/api/planets/${id}/`);
        const planet = response.data;

        // Há um planeta na API que está sem registros.
        if(planet.name !== 'unknown') 
          dispatch({ type: 'ADD_IN_PLANET_LIST_ARR', value: planet });
      } 
  
      console.log(`API consultada com sucesso!`);
    } catch (err) {
      console.log(`Falha na consulta da API! \n ${err}`);
    }
  }
}

export default useApiRequest;