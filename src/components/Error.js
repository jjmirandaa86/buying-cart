import React, { useContext } from 'react';
import { Alert } from "react-bootstrap";
import LanguageContext from "../contexts/LanguageContext";
import { Link } from "react-router-dom";

const Error = () => {

  const { texts } = useContext(LanguageContext);

  return (
    <>
      <Alert variant="success">
        <Alert.Heading>Opps.. La pagina buscada no existe.</Alert.Heading>
        <p>
          <img src="svg/Error.svg"
            width={120} height={50}
            alt={texts.header_alt_logo}></img>
        </p>
        <hr />
        <p className="mb-0">
          Favor te recomendamos acceder al siguiente link.
          <Link href="/main"></Link>
        </p>
      </Alert>
    </>
  );
};

export default Error;