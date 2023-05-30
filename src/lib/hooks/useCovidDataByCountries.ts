import axios, { AxiosResponse } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

import { COVID_DATA_BY_COUNTRIES_URL } from '../constants';

/**
 * Define the shape of the country data
 */
type CountryData = {
  active: number;
  recovered: number;
  deaths: number;
  countryInfo: {
    lat: number;
    long: number;
    _id: number;
  };
  country: string;
}

/**
 * Custom hook to fetch COVID-19 data by countries using react-query
 */
export const useCovidDataByCountries = (): UseQueryResult<CountryData[], Error> => {
  return useQuery<CountryData[], Error>('covidDataByCountries', async () => {
    // Make a GET request to the COVID data endpoint
    const response: AxiosResponse<CountryData[]> = await axios.get(COVID_DATA_BY_COUNTRIES_URL);

    // Return the data from the response
    return response.data;
  });
};
