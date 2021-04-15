import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import * as _ from "lodash";
import ProductCategory from "./ProductCategory";
import {getCategoriesFromProducts} from "../utils/utils";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}


export default function ScrollableTabsButtonAuto(props) {
    const {
        products,
        onAddToCart,
        onRemoveFromCart,
        submitting,
        onRemoveItemFromCart,
        onToggleDisableItem,
        editMode,
        editProduct,
        setProductById,
        setOpen,
        setEditting
    } = props;

    const categories = getCategoriesFromProducts(products);

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable caterogy tabs"
                    variant={"scrollable"}
                    scrollButtons={"desktop"}
                >
                    {categories.map( (cat, index) => (
                        <Tab key={index} label={cat} {...a11yProps(index)} />
                    ))}
                </Tabs>
            </AppBar>
            {
                categories.map( (category, index2) => (
                (
                    <div key={index2}>
                        <TabPanel value={value} index={index2}>
                            <ProductCategory
                                products ={_.filter(products, (p) => p["category"] == category)}
                                onAddToCart={onAddToCart}
                                onRemoveFromCart={onRemoveFromCart}
                                submitting={submitting}
                                onRemoveItemFromCart={onRemoveItemFromCart}
                                onToggleDisableItem={onToggleDisableItem}
                                editMode={editMode}
                                handleProductAction={editProduct}
                                setProductById={setProductById}
                                setOpen={setOpen}
                                setEditting={setEditting}
                            />
                        </TabPanel>
                    </div>
                )))
            }
        </div>
    );
}

