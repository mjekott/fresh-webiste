"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

interface State {
  isDropdownOpen: boolean;
  setIsDropDownOpen: Dispatch<SetStateAction<boolean>>;
}

const NavbarContext = createContext<State | null>(null);

const NavbarContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);

  const values = useMemo(
    () => ({
      isDropdownOpen,
      setIsDropDownOpen,
    }),
    [isDropdownOpen],
  );

  return (
    <NavbarContext.Provider value={values}>{children}</NavbarContext.Provider>
  );
};

export default NavbarContextProvider;

export const useNavbarContext = () => useContext(NavbarContext);
