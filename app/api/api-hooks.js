import { useEffect, useState } from 'react';
import { getNormalizedGamesDataByCategory } from '@/app/api/api-utils';
import { isResponseOk } from '@/app/api/api-utils';

export const useGetDataByCategory = (endpoint, category) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getNormalizedGamesDataByCategory(endpoint, category);
      if (isResponseOk(data)) {
        setData(data);
      } else {
        setData(null);
      }
    }
    fetchData();
  }, [endpoint, category]);

  return data;
};
