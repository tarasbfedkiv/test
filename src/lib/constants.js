const CONTACT = 'contact';
const CHARTS_AND_MAPS = 'charts-and-maps';

export const ROUTES = { CONTACT, CHARTS_AND_MAPS };

export const SIDEBAR_ROUTES = {
  CONTACT: {
    title: 'Contact',
    route: CONTACT
  },
  CHARTS_AND_MAPS: {
    title: 'Charts and Maps',
    route: CHARTS_AND_MAPS
  }
};

export const HISTORICAL_COVID_DATA_URL = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all';
export const COVID_DATA_BY_COUNTRIES_URL = 'https://disease.sh/v3/covid-19/countries';
