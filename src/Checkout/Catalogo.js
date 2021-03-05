import MainFeaturedPost from "../MainFeaturedPost";
import {CheckoutForm} from "./CheckoutForm";
import React from "react";


export default function Menu() {

    const initialClient = {
        firstName : '',
        lastName: '',
        phoneNumber: null,
        deliveryType: '',
        address1: '',
        address2: '',
        comment: ''
    };
    const mainFeaturedPost = {
        title: 'Titulo del catalogo de productos',
        description:
            "Descripción del catálogo de productos",
        image: 'https://source.unsplash.com/random',
        imgText: 'main image description'
    };

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