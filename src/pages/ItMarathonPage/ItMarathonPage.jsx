import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { toggleHeader } from "store/app/actions";
import { Button } from "components/";

import translations from "./ItMarathonPage.constants";

const strings = translations.ua;

const ItMarathonPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleHeader());
    }, [dispatch]);

    return (
        <article>
            <section className="pt-6 mb-5">
                <div className="container">
                    <h1 className="h2 font-weight-bold mb-2">{strings.heading}</h1>
                    <h2 className="font-small">{strings.description}</h2>
                </div>
            </section>
            <section className="container">
                <h2 className="regular">На 3-ох денному марафоні ми розкажемо:</h2>
                <ul>
                    <li>
                        <h3>Презентація себе</h3>
                    </li>
                </ul>
            </section>
            <Button color="submit">
                Зареєструватися 
            </Button>
        </article>
    );
};

export default ItMarathonPage;
