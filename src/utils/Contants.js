export const GET_USER_BY_MAIL_ENDPOINT = 'http://localhost/api/v1/users/';
export const CREATE_USER_ENDPOINT = 'http://localhost/api/v1/users';
export const UPDATE_USER_MENU_ENDPOINT = 'http://localhost/api/v1/users/';
export const UPDATE_USER_DATA_ENDPOINT = 'http://localhost/api/v1/users/';;

export const NEW_USER = {
    "address": "Ingrese una direccion",
    "brandName": "menumenu",
    "categoryId": 1,
    "description": "Ingrese una description",
    "phoneNumber": 44444444,
    "minDelivery": 0,
    "deliveryCharge": 0,
    "name": "Ingrese un nombre",
    "open": "false",
    "opening": "Ingrese horario de atencion",
    "paymentInstructions": "Ingrese instrucciones de pago",
    "apiToken": "1234",
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
