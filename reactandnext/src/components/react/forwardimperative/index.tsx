import { ElementRef, useRef } from "react";
import ControlOutside from "./ControlOutside";
function TypeSafeInputRef() {
  const refContainer = useRef<ElementRef<"input">>(null);
  return (
    <div className="w-[300px] h-[300px] bg-white text-black">
      <div>
        <ControlOutside ref={refContainer} />
      </div>
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          veritatis quia, officia adipisci nostrum quis nesciunt. Minus
          consectetur ullam, deserunt praesentium nostrum numquam architecto
          omnis consequuntur! Corporis tempore doloribus expedita.
        </p>
      </div>
    </div>
  );
}
export default TypeSafeInputRef;
