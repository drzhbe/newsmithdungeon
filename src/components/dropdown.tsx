import { useRef, useState } from "react";
import ReactDOM from "react-dom";

export type DropdownItem = {
  value: string;
  label: string;
  icon?: string;
};

export const Dropdown = ({
  items,
  selectedValue,
  button,
}: {
  items: DropdownItem[];
  selectedValue: DropdownItem["value"];
  button?: React.ReactNode;
}) => {
  const portalRef = useRef<HTMLDivElement>();
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    const root = document.getElementById("root") as HTMLElement;
    const portal = document.createElement("div");
    root.appendChild(portal);
    portalRef.current = portal;
    setIsOpen(true);
    ReactDOM.createPortal(
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item.label}</li>
        ))}
      </ul>,
      portal
    );
  };
  const close = () => {
    if (!portalRef.current) return;
    portalRef.current.remove();
    portalRef.current = undefined;
  };
  const selectedItem = items.find((item) => item.value === selectedValue);
  return (
    <button onClick={open} className="cursor-pointer">
      {selectedItem?.label}
    </button>
  );
};
