export const GET_USER_BY_MAIL_ENDPOINT = 'api/users/';
export const GET_MENU_BY_BRANDNAME_ENDPOINT = 'api/menu/';
export const CREATE_USER_ENDPOINT = 'api/users';
export const UPDATE_USER_MENU_ENDPOINT = 'api/users/';
export const UPDATE_USER_DATA_ENDPOINT = 'api/users/';

export const NEW_USER = {
    "address": "Ingrese una direccion",
    "brandName": "menumenu",
    "categoryId": 1,
    "deliveryCharge": 0,
    "description": "Ingrese una description",
    "minDelivery": 0,
    "name": "Ingrese un nombre",
    "open": "false",
    "opening": "Ingrese horario de atencion",
    "paymentInstructions": "Ingrese instrucciones de pago",
    "phoneNumber": 44444444,
    "base64Image": null
}

export const USER_DATA = {
    "address": null,
    "brandName": null,
    "categoryId": null,
    "description": null,
    "deliveryCharge": null,
    "minDelivery": null,
    "email": null,
    "name": null,
    "open": null,
    "opening": null,
    "paymentInstructions": null,
    "phoneNumber": null,
    "username": null,
    "orderViaId": null,
    "base64Image": null
}
export const API_HEADERS ={
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
}
