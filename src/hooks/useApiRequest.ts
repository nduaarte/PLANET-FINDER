import { useEffect } from 'react';
import axios from 'axios';

interface Props {
  link: string
  id?: number;
}

function useApiRequest({ link, id }: Props) {
  const api = axios;

  useEffect(() => { 
    API();
  });

  async function API() {
    try {
      const response = await api(`https://swapi.dev/api/${link}/${id}/`);
      console.log(response);

      const data = response.data.results;
    } catch (err) {
      console.log(err);
    }
  }
}

export default useApiRequest;