"use client";
import Accordion from "@/components/react/Accordion";
import ControlledForm from "@/components/react/ControlledForm";
import ImageSlider from "@/components/react/ImageSlider";
import Modal from "@/components/react/Modal";
import SearchAutoComplete from "@/components/react/SearchAutoComplete";
import StarRating from "@/components/react/StarRating";
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
    <Modal />,
    <ImageSlider />,
    <StarRating />,
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
