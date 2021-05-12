import React, {useState} from "react";
import ClientProfileCatalogs from "./ClientProfileCatalogs";
import {useCommonStyles} from "../utils/commonStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import ClientSuscriptionData from "./ClientSuscriptionData";
import ClientProfileConfig from "./ClientProfileConfig";

const ClientProfile = (props) => {
    const classes = useCommonStyles();
    const {updateUserData, setState, setNotify} = props;
    const [loading, setLoading] = useState(false);
    return (
        <div className={classes.layout}>
            {loading && (<div style={{textAlign: "center"}} className={classes.layout}><CircularProgress/></div>)}
            <ClientSuscriptionData
                setNotify={setNotify}
                setLoading={setLoading}
                loading={loading}
            />
            <ClientProfileCatalogs />
            <ClientProfileConfig
                updateUserData={updateUserData}
                setState={setState}
                loading={loading}
                setLoading={setLoading}
            />
        </div>
    )
}
export default ClientProfile;