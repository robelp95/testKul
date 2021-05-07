import * as _ from "lodash";

const NEW_LINE = "\n";
export function generateWhatsappMsg({values, order}) {

    const clientPhoneNumber = "569" + order.user.phoneNumber;
    const shippingCost = order.total >= order.user.minDelivery  ? "Gratis" : order.user.coin+''+order.user.deliveryCharge;
    let newMessage = "🛒 *Nuevo pedido via Kulko.App* 🛒" + NEW_LINE + NEW_LINE;
    newMessage += "*Pedido* #" + order.orderNumber + NEW_LINE + NEW_LINE;
    for (let [key, value] of Object.entries(order.orderProducts)) {
        newMessage+= ('*' + value.quantity + 'x ' + value.name + '* - $' + value.price);
        newMessage+=NEW_LINE;
    }
    newMessage+= NEW_LINE + "*Total:* $" + order.total + NEW_LINE;
    newMessage+= "*Forma de pago:* " + order.user.paymentInstructions + NEW_LINE;
    newMessage+= "*Tipo de entrega:* " + values.deliveryType + NEW_LINE + NEW_LINE;
    newMessage+= "*Datos del cliente:* " + values.firstName + " " + values.lastName + NEW_LINE;
    newMessage+= "*Contacto:* " + "+56 9 " + values.phoneNumber + NEW_LINE + NEW_LINE;
    if(values.deliveryType === "delivery"){
        newMessage+= "*Informacion de envio:* " + NEW_LINE + values.address1 + (values.address2 ? " / " + values.address2 : '') + NEW_LINE;
        newMessage+= "*Costo de envio:* " + shippingCost + NEW_LINE;

    }
    if (values.comment !== ""){
        newMessage+= NEW_LINE + "*Comentario:* " + values.comment + NEW_LINE;
    }
    let wspmsg = encodeURIComponent(newMessage);
    let message = "https://api.whatsapp.com/send?phone=" + clientPhoneNumber + "&text=" + wspmsg;
    return message;
}


export function getCategoriesFromProducts(products) {
    let cat = _.map(products, p=>{return p.category});
    return _.uniqWith(cat,_.isEqual);
}