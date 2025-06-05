// app/app.js
"use client";
import React from "react";
import {HeroUIProvider} from "@heroui/react";
import PortfolioLayout from "./PortfolioLayout";
export default function App() {
  return (
    <HeroUIProvider>
      <PortfolioLayout />
    </HeroUIProvider>
  );
}