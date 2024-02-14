import React from "react";
import { createRoot } from "react-dom/client";
import { GifExpertApp } from './GifExpertApp';
import { AddCategory } from "./components/AddCategory";
import './styles.css'



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)
