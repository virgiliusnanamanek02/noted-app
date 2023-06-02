import React from "react";
import Sidebar from "../sidebar";
import Hero from "../hero";
import { notesMenu } from "@/data/notes-menu";

const HomePage: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-5">
      <Sidebar className="hidden lg:block" menus={notesMenu} />
      <Hero />
    </div>
  );
};

export default HomePage;
