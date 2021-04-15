import * as _ from "lodash";

const NEW_LINE = "\n";

export function generateWhatsappMsg({values, order}) {

    let newMessage = "🛒 *Nuevo pedido via Kulko.App* 🛒" + NEW_LINE + NEW_LINE;
    newMessage += "*Pedido* #" + order.orderNumber + NEW_LINE + NEW_LINE;
    for (let [key, value] of Object.entries(order.orderProducts)) {
        console.log(value);
        newMessage+= ('*' + value.quantity + 'x ' + value.name + '* - $' + value.price);
        newMessage+=NEW_LINE;
    }
    newMessage+= NEW_LINE + "*Total:* $" + order.total + NEW_LINE + NEW_LINE;
    newMessage+= "*Tipo de entrega:* " + values.deliveryType + NEW_LINE + NEW_LINE;
    newMessage+= "*Datos del cliente:* " + values.firstName + " " + values.lastName + NEW_LINE;
    newMessage+= "*Contacto:* " + "+56 9 " + values.phoneNumber + NEW_LINE;
    if(values.deliveryType === "delivery"){
        newMessage+= "*Informacion de envio:* " + NEW_LINE + values.address1 + NEW_LINE + values.address2 + NEW_LINE;
    }
    if (values.comment !== ""){
        newMessage+= "*Comentario:* " + values.comment + NEW_LINE;
    }
    let wspmsg = encodeURIComponent(newMessage);
    let message = "https://api.whatsapp.com/send?phone=5491161347712&text=" + wspmsg;
    return message;
}


export function getCategoriesFromProducts(products) {
    let cat = _.map(products, p=>{return p.category});
    return _.uniqWith(cat,_.isEqual);
}