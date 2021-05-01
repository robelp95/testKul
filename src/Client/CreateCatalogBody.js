import CartButtonsWithDialog from "./CartButtonsWithDialog";
import React, {useState} from "react";
import ScrollableTabsButtonAuto from "../ShoppingCart/ScrollableTabsButtonAuto";
import ProductDialog from "./ProductDialog";
import {customAlphabet} from "nanoid";

const nanoid = customAlphabet('1234567890', 3)

export default function CreateCatalogBody(props) {
    const {
        products,
        addProduct,
        editProduct,
        editMode,
        categories,
        setCategories,
        product,
        setProduct,
        setProductById,
        onRemoveItemFromCart,
        onToggleDisableItem,
        open,
        setOpen,
        initialiceProduct
    } = props;

    const [editting, setEditting] = useState(null);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setProduct({
            ...product,
            [name]:value
        });
    }

    const handleProductAction = (product) => {
        if (product.name !== "" && product.category !== "" && product.price !== "" && product.description !== ""){
            if (product.id < 0) {
                product.id = nanoid();
            }
            editting ? editProduct(product) : addProduct(product);
            initialiceProduct();

        }
    }

    return (

        <>
            {products.length > 0 &&
                    (
                        <ScrollableTabsButtonAuto
                            products ={products}
                            submitting={false}
                            onRemoveItemFromCart={onRemoveItemFromCart}
                            onToggleDisableItem={onToggleDisableItem}
                            editMode={editMode}
                            editProduct={editProduct}
                            setCategories={setCategories}
                            setProductById={setProductById}
                            product={product}
                            setProduct={setProduct}
                            setOpen={setOpen}
                            setEditting={setEditting}
                        />
                    )
            }
            <CartButtonsWithDialog
                categories={categories}
                setCategories={setCategories}
                setOpen={setOpen}
                setEditting={setEditting}
            />
            <ProductDialog
                categories={categories}
                handleInputChange={handleInputChange}
                actionLabel={ editting ? "Actualizar" : "Agregar" }
                product={product}
                setProduct={setProduct}
                open={open}
                setOpen={setOpen}
                editting={editting}
                initialiceProduct={initialiceProduct}
                handleProductAction={handleProductAction}
            />
        </>

    )
}