import MainFeaturedPost from "../MainFeaturedPost";
import {CheckoutForm} from "./CheckoutForm";
import React from "react";

const initialClient = {
    firstName : '',
    lastName: '',
    phoneNumber: null,
    deliveryType: '',
    address1: '',
    address2: '',
    comment: ''
};

export default function Menu() {

    // const [state, setState] = useState({
    //     products: {},
    //     client: initialClient
    // })

    return (
        <>
            <MainFeaturedPost post={{
                title: 'Titulo del catalogo de productos',
                description:
                    "Descripción del catálogo de productos",
                image: 'https://source.unsplash.com/random',
                imgText: 'main image description'
            }} />
            <CheckoutForm initialClient={{
                firstName : '',
                lastName: '',
                phoneNumber: '',
                deliveryType: '',
                address1: '',
                address2: '',
                comment: ''
            }} />
        </>
    );
}