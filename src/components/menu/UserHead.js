import React, { useContext } from 'react';
import LanguageContext from "../../contexts/LanguageContext";

const UserHead = () => {

  const { texts } = useContext(LanguageContext);

  return (
    <>
      <img src="svg/user.svg"
        width={30} height={30}
        alt={texts.header_alt_user} />
    </>
  );
};

export default UserHead;