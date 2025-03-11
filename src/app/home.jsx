import React from "react";
import constant from "./helper/constant";
import { useNavigate, useNavigation } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const render = () => {
        return (
            <>
                <h1>{constant.appName}</h1>
            </>
        )
    }
    return render();
}

export default Home
