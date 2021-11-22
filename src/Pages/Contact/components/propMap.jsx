import React from 'react'
import { GoogleMap, Marker } from 'react-google-maps';

export default function PropMap() {

    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 38.625060, lng: 27.079530 }}
        >
            <Marker
                position={{ lat: 38.625060, lng: 27.079530 }}
            />
        </GoogleMap>
    )
}
