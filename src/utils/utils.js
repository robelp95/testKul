const NEW_LINE = "%0A";
const SPACE = "%20";
const PLUS_SYMBOL = "%2b";

function userData(values) {
    //Contacto  5645345678
    //
    // Tipo de Envío Pickup/delivery
    //
    // Dirección Calle falsa, 123
    //
    // Detalle comentario extra sobre el pedido bla bla bla, bla bla
    return "*Cliente*:" + SPACE + values.lastName + "," + SPACE
        + values.firstName + NEW_LINE + "*Contacto*:" + SPACE
        + PLUS_SYMBOL +"56" + values.phoneNumber + NEW_LINE
        + "*Dirección%201*:" + SPACE + values.address1 +
        NEW_LINE + "*Dirección%202*:" + SPACE + values.address1
        + NEW_LINE + "*Detalle*:" + SPACE + values.comment;
}
function orderData({orderNumber, products}){
    return JSON.stringify(products);
}
export function generateWhatsappMsg({values, order}) {
    console.log(values, order);

    let message = "https://api.whatsapp.com/send?phone=5491161347712&text=*Kulko.app*%0A%0A*Nuevo%20pedido%20nª%20213123*" + NEW_LINE;
    let data = userData(values);
    message += data;
    message += NEW_LINE;
    message += orderData(order);
    return message;
}


function products() {

}