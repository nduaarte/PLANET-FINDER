import { useDispatch } from 'react-redux';
import axios from 'axios';

function useApiRequest() {
  const dispatch = useDispatch();
  const api = axios;
  let data;

  return (
    async function API() {
      try {
        const response = await api(`https://swapi.dev/api/planets/`);
        console.log(response);
  
        data = response.data.results;
        dispatch({ type: 'UPDATE_PLANET_NAME', value: data.name });
        dispatch({ type: 'UPDATE_CLIMATE', value: data.climate });
        dispatch({ type: 'UPDATE_POPULATION', value: data.population });
        dispatch({ type: 'UPDATE_DIAMETER', value: data.diameter });
      } catch (err) {
        console.log(err);
      }
    }
  );
}

export default useApiRequest;