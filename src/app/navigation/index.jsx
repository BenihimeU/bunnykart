import { useRoutes } from "react-router-dom";
import { authRoutes } from "./auth-routes";

const Navigator = () => {
    const authRouter = useRoutes(authRoutes);


    const render = () => {
        return authRouter;
    };

    return (
        <>
            {render()}
        </>
    );
};

export default Navigator;
