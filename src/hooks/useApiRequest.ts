import axios from 'axios';
import { useDispatch } from 'react-redux';

async function useApiRequest() {
  const dispatch = useDispatch();
  const api = axios;

  try {
    for(let id=1; id <= 10; id++) {
      const response = await api(`https://swapi.dev/api/planets/${id}/`);
      const planets = response.data

      dispatch({ type: 'UPDATE_PLANET_LIST_ARR', value: planets });
    } 

    console.log(`API consultada com sucesso!`);
  } catch (err) {
    console.log(`Falha na consulta da API! \n ${err}`);
  }
}

export default useApiRequest;



// dispatch({ type: 'UPDATE_PLANET_NAME', value: data.name });
// dispatch({ type: 'UPDATE_CLIMATE', value: data.climate });
// dispatch({ type: 'UPDATE_POPULATION', value: data.population });
// dispatch({ type: 'UPDATE_DIAMETER', value: data.diameter });