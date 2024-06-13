"use client";
import Accordion from "@/components/react/Accordion";
import ControlledForm from "@/components/react/ControlledForm";
import SearchAutoComplete from "@/components/react/SearchAutoComplete";
import Tabs from "@/components/react/Tabs";
import TicTacToe from "@/components/react/TicTacToe";
import { ReactElement } from "react";

function page() {
  const componentArr: ReactElement[] = [
    <ControlledForm />,
    <Accordion />,
    <TicTacToe />,
    <SearchAutoComplete />,
    <Tabs />,
  ];
  return (
    <div className="flex flex-col   overflow-hidden overflow-y-scroll">
      {componentArr.map((component, idx) => {
        return (
          <div
            id={`${idx}`}
            className="h-screen flex justify-center items-center"
            key={`${idx}yakkkuku`}
          >
            {component}
          </div>
        );
      })}
    </div>
  );
}
export default page;
