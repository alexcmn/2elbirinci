import React from "react";
import Footer from "Components/Footer";
// import ModalSystem from 'Components/ModalSystem'
import Sidebar from "Components/Sidebar";
import { useLocation } from "react-router-dom";
import LangBtn from "Components/LangBtn";
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  setLanguage
} from "react-switch-lang";
import en from "Assets/translations/en.json";
import tr from "Assets/translations/tur.json";
import ModalSystem from "Components/ModalSystem";

export default function Layout(props) {
  const location = useLocation();
  setTranslations({ en, tr });
  setDefaultLanguage("tr");
  setLanguageCookie();

  const changeLanguage = (key) => setLanguage(key);

  return (
    <>
      <Sidebar />
      {props.children}
      {location.pathname === "/cars" ? null : <Footer />}
      <LangBtn changeLanguage={(key) => changeLanguage(key)} />
      <ModalSystem />
    </>
  );
}
