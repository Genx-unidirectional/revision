import { type ElementRef, useRef, useState } from "react";

function Modal() {
  const refContainer = useRef<ElementRef<"dialog">>(null);

  const handleClose = () => {
    if (refContainer.current) {
      refContainer.current.close();
    }
  };
  return (
    <div>
      <button
        onClick={() => {
          refContainer.current?.showModal();
        }}
        className="text-white w-[200px] "
      >
        Open modal
      </button>

      <dialog
        className="bg-white rounded-lg border border-black p-3 text-black"
        ref={refContainer}
      >
        <form
          action=""
          className="w-full gap-4 flex font-medium flex-col items-start h-full"
          method="dialog"
        >
          <label htmlFor="modelInput" className="text-2xl ">
            Can you fix all things
          </label>
          <input
            type="text"
            id="modelInput"
            className="p-2 border w-full border-black rounded-lg"
            placeholder="give me binary answer"
          />
          <div className="w-full justify-between gap-4 flex">
            <button
              formMethod="dialog"
              type="submit"
              className="bg-black w-1/2 text-white rounded-lg p-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black w-1/2 text-white rounded-lg p-2"
            >
              Conform
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
export default Modal;
