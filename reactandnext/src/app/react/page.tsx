"use client";
import Accordion from "@/components/react/Accordion";
import ControlledForm from "@/components/react/ControlledForm";
import TicTacToe from "@/components/react/TicTacToe";
import { ReactElement } from "react";

function page() {
  const componentArr: ReactElement[] = [
    <ControlledForm />,
    <Accordion />,
    <TicTacToe />,
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
