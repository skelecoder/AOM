import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

export const MapComponent = (props: { bicingData: BicingData }) => {
    const position: LatLngExpression = [41.401097, 2.1933764];
    const markPoint = (bicingPoint: Feature) => {
        const markerPosition: LatLngExpression = [
            bicingPoint.geometry.coordinates[1],
            bicingPoint.geometry.coordinates[0],
        ];
        return (
            <Marker position={markerPosition}>
                <Popup> {bicingPoint.properties.name}</Popup>
            </Marker>
        );
    };
    return (
        <Map center={position} zoom={14} style={{ height: '100%', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {props.bicingData.features.map(markPoint)}
        </Map>
    );
};

export default MapComponent;
