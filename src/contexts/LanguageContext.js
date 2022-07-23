import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialListLanguage = [
  { id: "en", name: "English", flag: "EN.svg" },
  { id: "es", name: "Español", flag: "ES.svg" }
];

const translations = {
  es: {
    header_button_search: "Buscar",
    header_button_cart: "Carrito",
    shopping_cart_title: "Carrito de compras",
    shopping_cart_table_title_product: "Producto",
    shopping_cart_table_title_quantity: "Cantidad",
    shopping_cart_table_title_price: "Precio",
    shopping_cart_table_title_sTotal: "Sub-Total",
    shopping_cart_table_title_total: "Total",

    titleProducts: "Productos",
  },
  en: {
    header_button_search: "Search",
    header_button_cart: "Cart",
    shopping_cart_title: "Shopping cart",
    shopping_cart_table_title_product: "Product",
    shopping_cart_table_title_quantity: "Quantity",
    shopping_cart_table_title_price: "Price",
    shopping_cart_table_title_sTotal: "Sub-Total",
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