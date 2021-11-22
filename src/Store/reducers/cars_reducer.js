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

const initialState = {
    allCars: null,
    allBrands: null,
    allModels: null,
    allColors: null,
    allBodyTypes: null,
    allGearTypes: null,
    allFuelTypes: null,
    singleCarData: null
};

export default function cars_reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_CARS:
            return {
                ...state,
                allCars: action.payload.data
            }
        case GET_ALL_BRANDS:
            return {
                ...state,
                allBrands: action.payload.data
            }
        case GET_ALL_MODELS:
            return {
                ...state,
                allModels: action.payload.data
            }
        case GET_ALL_COLORS:
            return {
                ...state,
                allColors: action.payload.data
            }
        case GET_ALL_BODY_TYPES:
            return {
                ...state,
                allBodyTypes: action.payload.data
            }
        case GET_ALL_GEAR_TYPES:
            return {
                ...state,
                allGearTypes: action.payload.data
            }
        case GET_ALL_FUEL_TYPES:
            return {
                ...state,
                allFuelTypes: action.payload.data
            }
        case GET_SINGLE_CAR:
            return {
                ...state,
                singleCarData: action.payload.data
            }
        default:
            return state;
    }
}