import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialListLanguage = [
  { id: "en", name: "English", flag: "EN.svg" },
  { id: "es", name: "Español", flag: "ES.svg" }
];

const translations = {
  es: {
    header_label_news: "Novedades",
    header_label_offers: "Ofertas",
    header_label_combos: "Combos",
    header_button_search: "Buscar",
    header_alt_logo: "Logo empresa",
    header_alt_user: "Usuario",
    header_alt_cart: "Carrito",
    header_alt_language: "Lenguaje",
    header_alt_theme: "Tema",



    header_button_cart: "Carrito",
    header_button_products: "Seguir comprando",
    shopping_cart_title: "Carrito de compras",
    shopping_cart_table_title_product: "Producto",
    shopping_cart_table_title_quantity: "Cantidad",
    shopping_cart_table_title_price: "Precio",
    shopping_cart_table_title_sTotal: "Sub-Total",
    shopping_cart_table_title_total: "Total",

    titleProducts: "Productos",
  },
  en: {
    header_label_news: "News",
    header_label_offers: "Offers",
    header_label_combos: "Combos",
    header_button_search: "Search",
    header_alt_logo: "Brand Company",
    header_alt_user: "User",
    header_alt_cart: "Cart",
    header_alt_language: "Lenguage",
    header_alt_theme: "Theme",



    header_button_cart: "Cart",
    header_button_products: "Continue buying",
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