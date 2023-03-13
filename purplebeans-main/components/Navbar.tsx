import { useState, useEffect, useCallback } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Link } from "react-scroll";

let navigation = [
  { name: "Tokenomics", href: "#tokenomics", id: "tokenomics", current: true },
  { name: "Roadmap", href: "#roadmap", id: "roadmap", current: false },
  { name: "Ecosystem", href: "#ecosystem", id: "ecosystem", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 100);

    const sections = document.querySelectorAll("section[id]");
    let current: string = "home";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY - 30;
      const sectionBottom = rect.bottom + window.scrollY;

      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        current = section.id;
      }
    });

    setCurrentSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    const newNavigation = navigation.map((item) => ({
      ...item,
      current: item.id === currentSection,
    }));

    navigation = newNavigation;
  }, [currentSection]);

  return (
    <header
      className={`fixed w-full ${
        scrolled ? "bg-white drop-shadow-md" : ""
      }  top-0 left-0 right-0 z-30 transition-all ease duration-150 flex`}
    >
      <Disclosure as="nav" className="w-full">
        {({ open }) => (
          <>
            <div className="px-2 mx-auto sm:px-6 lg:px-16">
              <div className="relative flex items-center justify-between h-16">
                <div className="flex items-center justify-between min-w-full">
                  <div className="flex items-center flex-shrink-0">
                    <Link activeClass="active" smooth spy to="home">
                      <Image
                        src={"/pb-logo-text.webp"}
                        alt={""}
                        width="200"
                        height="0"
                        className="h-auto cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="hidden sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          activeClass="active"
                          smooth
                          spy
                          to={item.id}
                          key={item.name}
                          className={classNames(
                            item.current
                              ? "text-black"
                              : "text-black hover:text-pink",
                            "cursor-pointer rounded-md px-3 py-2 text-sm lg:text-lg font-medium group text-black transition duration-300 capitalize"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-black rounded-full hover:bg-pink hover:border-black hover:border hover:text-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="border-black border-y sm:hidden drop-shadow-xl bg-fur">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? "text-pink" : "text-black hover:text-pink",
                      "block px-3 py-2 rounded-md text-base font-medium text-black transition duration-300 capitalize"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Navbar;
