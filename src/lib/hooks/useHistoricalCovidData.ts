import axios, { AxiosResponse } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

import { HISTORICAL_COVID_DATA_URL } from '../constants';

/**
 * Define the shape of the data returned by the API
 */
type TData = Record<string, Record<string, number>>;

/**
 * Define the shape of each historical COVID data entry
 */
type TCovidData = {
  date: string;
  cases: number;
  deaths: number;
  recovered: number;
};

/**
 * Custom hook to fetch historical COVID-19 data using react-query
 */
export const useHistoricalCovidData = (): UseQueryResult<TCovidData[], Error> => {
  return useQuery<TCovidData[], Error>('historicalCovidData', async () => {
    // Make a GET request to the historical COVID data endpoint
    const response: AxiosResponse<TData> = await axios.get(HISTORICAL_COVID_DATA_URL);

    // Format the response data into an array of TCovidData
    const formattedData: TCovidData[] = [];

    for (const date in response.data.cases) {
      formattedData.push({
        date,
        cases: response.data.cases[date],
        deaths: response.data.deaths[date],
        recovered: response.data.recovered[date],
      });
    }

    // Return the formatted data
    return formattedData;
  });
};
