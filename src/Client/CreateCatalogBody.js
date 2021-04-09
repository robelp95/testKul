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
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setProduct({
            ...product,
            [name]:value
        });
    }

    const handleProductAction = (product) => {
        if (product.name !== "" && product.category !== "" && product.price !== "" && product.desc !== ""){
            if (!product.id) {
                product.id = nanoid();
            }
            editting ? editProduct(product) : addProduct(product);
            initialiceProduct();

        }
    }
    const handleChange = (event) => {
        product.category = event.target.value;
    };

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
                addProduct={addProduct}
                editProduct={editProduct}
                editMode={editMode}
                categories={categories}
                setCategories={setCategories}
                product={product}
                setProduct={setProduct}
                setProductById={setProductById}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setOpen={setOpen}
                setEditting={setEditting}
            />
            <ProductDialog
                categories={categories}
                handleChange={handleChange}
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