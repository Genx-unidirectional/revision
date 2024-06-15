import { ElementRef, forwardRef, useImperativeHandle, useRef } from "react";
type RefType = {
  focus: () => void;
};
type Props = {};
const ControlOutside = forwardRef<RefType, Props>((props, ref) => {
  const refContainer = useRef<ElementRef<"input">>(null);
  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        refContainer.current?.focus();
      },
    };
  });
  return (
    <input className="border border-black" type="text" ref={refContainer} />
  );
});
export default ControlOutside;
