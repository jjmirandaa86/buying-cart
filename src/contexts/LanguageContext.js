import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialListLanguage = [
  { id: "en", name: "English", flag: "EN.svg" },
  { id: "es", name: "Español", flag: "ES.svg" }
];

const translations = {
  es: {
    header_button_search: "Buscar",
    shopping_cart_title: "Carrito de compras",
    shopping_cart_table_title_image: "Imagen",
    shopping_cart_table_title_product: "Producto",
    shopping_cart_table_title_quantityp: "Cantidad",
    shopping_cart_table_title_total: "Total",

    titleProducts: "Productos",
  },
  en: {
    header_button_search: "Search",
    shopping_cart_title: "Shopping cart",
    shopping_cart_table_title_image: "Image",
    shopping_cart_table_title_product: "Product",
    shopping_cart_table_title_quantityp: "Quantity",
    shopping_cart_table_title_total: "Total",


    titleProducts: "Products",
  },
};

const LanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState("es");
  const [texts, setTexts] = useState(translations[language]);
  const [listLanguage, setListLanguage] = useState(initialListLanguage);

  const handleLanguage = () => {
    if (language === "en") {
      setLanguage("es");
      setTexts(translations["es"]);
    }
    else {
      setLanguage("en");
      setTexts(translations["en"]);
    }
  };

  const data = { language, handleLanguage, listLanguage, texts };

  return (
    <LanguageContext.Provider value={data}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider };

export default LanguageContext;