/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "/", current: true },
  // { name: "Services", href: "service", current: false },
  { name: "Projects", href: "projects", current: false },
  { name: "Developer", href: "developer", current: false },
  { name: "Tech_News", href: "news", current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="min-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-white border-b border-gray-50">
            <div className="relative flex items-center justify-between h-16 md:mx-20 mx-0">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center ">
                  <h1 className="font-semibold text-xl cursor-pointer ">
                    <a href='/'>
                      <span className="text-orange-500">M. Santhosh</span><span className="text-violet-500"> Naik</span>
                    </a>
                  </h1>
                </div>
                <div className="hidden sm:block sm:ml-6 md:ml-60">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-violet-500 shadow-lg text-white"
                            : "text-gray-600 hover:shadow-lg hover:bg-violet-500 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto">
                <button className="px-3 py-2 rounded-md text-sm font-medium border border-violet-400 text-violet-600 hover:bg-violet-500 hover:shadow-lg  hover:text-white">
                  <a href='/contact'>
                    Get In Touch
                  </a>
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-violet-500 shadow-lg text-white"
                      : "text-gray-700 hover:bg-violet-500 hover:shadow-lg hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
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
  );
}
