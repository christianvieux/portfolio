// sections/NavSection.js
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Modal,
  ModalContent,
  ModalBody,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import Switch from "../components/DarkModeSwitch";
const NavSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      // Check localStorage first
      const stored = localStorage.getItem("darkMode");
      if (stored !== null) {
        return JSON.parse(stored);
      }
      // Fall back to system preference
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true; // Default for SSR
  });
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const LinkItem = ({ href, label }) => (
    <a
      href={href}
      className="text-foreground hover:text-primary-hover transition-colors"
    >
      {label}
    </a>
  );

  const menuItems = [
    {
      component: (
        <Switch
          className="mr-7"
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
      ),
    },
    { component: <LinkItem href="#" label="Home" /> },
    { component: <LinkItem href="#projects" label="Projects" /> },
    { component: <LinkItem href="#gamedev" label="Game Dev" /> },
    { component: <LinkItem href="#about" label="About" /> },
    { component: <LinkItem href="#focus" label="Focus" /> },
    { component: <LinkItem href="#contact" label="Contact" /> },
    {
      component: (
        <button
          onClick={handleOpenModal}
          className="cursor-pointer text-foreground hover:text-primary-hover transition-colors"
        >
          Resume
        </button>
      ),
    },
  ];
  return (
    <>
      <Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
        <NavbarBrand>
          <span className="mr-12 text-xl font-bold text-foreground">
            Christian Vieux
          </span>
        </NavbarBrand>
        <NavbarContent className="hidden nav:flex gap-4" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>{item.component}</NavbarItem>
          ))}
        </NavbarContent>

        {/* Menu Toggle */}
        <NavbarContent justify="end" className="nav:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="cursor-pointer w-auto"
            icon={isMenuOpen ? "Close Menu" : "Open Menu"}
          ></NavbarMenuToggle>
        </NavbarContent>

        {/* Menu Items*/}
        {isMenuOpen &&
          ((
            <NavbarMenu>
              {/* Items */}
              {menuItems.map((item, index) => (
                <NavbarMenuItem key={index}>{item.component}</NavbarMenuItem>
              ))}
            </NavbarMenu>
          ) || <></>)}
      </Navbar>

      {/* Resume Modal */}
      <Modal
        isOpen={isModalOpen}
        onOpenChange={handleCloseModal}
        size="4xl"
        classNames={{
          base: "bg-background",
          closeButton: "hover:bg-secondary text-secondary-foreground",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <ModalBody className="p-0">
              <iframe
                src="/resume.pdf"
                className="w-full h-[calc(100vh-8rem)]"
                title="Resume"
              />
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default NavSection;
