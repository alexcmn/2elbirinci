import {
    GET_ALL_CARS,
    GET_SINGLE_CAR,
    GET_ALL_BRANDS,
    GET_ALL_MODELS,
    GET_ALL_COLORS,
    GET_ALL_BODY_TYPES,
    GET_ALL_GEAR_TYPES,
    GET_ALL_FUEL_TYPES,
} from 'Store/types';
import { CAR_SERVER, BRANDS_SERVER, MODELS_SERVER, BODY_TYPE_SERVER, FUEL_TYPE_SERVER, GEAR_TYPE_SERVER, COLORS_SERVER } from 'Store/misc';
import instance from 'Store/api_config';

export function getAllCars() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            instance.get(`${CAR_SERVER}`)
                .then(response => {
                    dispatch({
                        type: GET_ALL_CARS,
                        payload: response.data
                    })
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}

export function getAllBrands() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            instance.get(`${BRANDS_SERVER}`)
                .then(response => {
                    dispatch({
                        type: GET_ALL_BRANDS,
                        payload: response.data
                    })
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}

export function getAllModels() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            instance.get(`${MODELS_SERVER}`)
                .then(response => {
                    dispatch({
                        type: GET_ALL_MODELS,
                        payload: response.data
                    })
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}

export function getAllBodyTypes() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            instance.get(`${BODY_TYPE_SERVER}`)
                .then(response => {
                    dispatch({
                        type: GET_ALL_BODY_TYPES,
                        payload: response.data
                    })
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}

export function getAllFuelTypes() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            instance.get(`${FUEL_TYPE_SERVER}`)
                .then(response => {
                    dispatch({
                        type: GET_ALL_FUEL_TYPES,
                        payload: response.data
                    })
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}

export function getAllGearTypes() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            instance.get(`${GEAR_TYPE_SERVER}`)
                .then(response => {
                    dispatch({
                        type: GET_ALL_GEAR_TYPES,
                        payload: response.data
                    })
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}

export function getAllColors() {
    return dispatch => {
        return new Promise((resolve, reject) => {
            instance.get(`${COLORS_SERVER}`)
                .then(response => {
                    dispatch({
                        type: GET_ALL_COLORS,
                        payload: response.data
                    })
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}

export function getSingleCar(id) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            instance.get(`${CAR_SERVER}/${id}`)
                .then(response => {
                    dispatch({
                        type: GET_SINGLE_CAR,
                        payload: response.data
                    })
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}