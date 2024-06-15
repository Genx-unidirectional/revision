import { Dispatch, SetStateAction, useTransition } from "react";

type Props = {
  tab: string;
  isActive: boolean;
  setTab: Dispatch<SetStateAction<string>>;
};
function Button({ tab, isActive, setTab }: Props) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      onClick={() => {
        startTransition(() => {
          setTab(tab);
        });
      }}
    >
      {tab[0].toUpperCase() + tab.slice(1)}
    </button>
  );
}
export default Button;
