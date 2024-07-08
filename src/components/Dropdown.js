import { useEffect, useState, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divElement = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divElement.current) {
        //Esto se hace en caso de que no se tenga el elemento en pantalla
        //Entonces no se llama nunca al handler.
        return;
      }
      if (!divElement.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    //Called automatically whenever the Dropdown component is about
    // to be removed from the screen
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divElement} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}{" "}
        <GoChevronDown className="text-lg"></GoChevronDown>
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full "> {renderedOptions}</Panel>
      )}
    </div>
  );
}

export default Dropdown;
