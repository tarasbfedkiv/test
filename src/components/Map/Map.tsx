import React from 'react';
import millify from 'millify';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

import LoadingSpinner from '../LoadingSpinner';
import { centerPosition, tileLayerAttribution, tileLayerURL } from './constants';
import { useCovidDataByCountries } from '../../lib/hooks/useCovidDataByCountries';

const icon = L.icon({ iconUrl, shadowUrl, iconSize: [25, 41], iconAnchor: [25, 41] });

const Map: React.FC = () => {
  const { status, data, error } = useCovidDataByCountries();

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <MapContainer className="h-96" center={centerPosition} zoom={3}>
        <TileLayer url={tileLayerURL} attribution={tileLayerAttribution} />

        {(data ?? []).map((countryData) => {
          const { active, country, countryInfo, deaths, recovered } = countryData;
          return countryInfo._id ? (
            <Marker key={countryInfo._id} position={{ lng: countryInfo.long, lat: countryInfo.lat }} icon={icon}>
              <Popup>
                <h4 className="mb-2 p-0"><strong>{country}</strong></h4>
                <p>Active: {millify(active)}</p>
                <p>Recovered: {millify(recovered)}</p>
                <p>Deaths: {millify(deaths)}</p>
              </Popup>
            </Marker>
          ) : null;
        })}
      </MapContainer>
    </>
  );
};

export default Map;
