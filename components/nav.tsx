import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ArrowTopRightOnSquareIcon,
  BoltIcon,
  BookOpenIcon,
  CalculatorIcon,
  ChevronDownIcon,
  CloudArrowDownIcon,
} from "@heroicons/react/20/solid";
import { useAppContext } from "@/contexts/appContext";

export default function Nav() {
  const { setDidDefine, setShowDefinition } = useAppContext();
  const iconClassName = "mr-2 h-5 w-5 text-orange-400";

  function showDefinition() {
    new Promise(() => setTimeout(() => setDidDefine(true), 200));
    setShowDefinition(true);
  }

  function getButtonClassName(active: boolean, disabled: boolean = false) {
    return `${
      active ? "bg-orange-200 text-blue-900" : "text-gray-900"
    } group flex w-full items-center rounded-md px-2 py-2 text-sm ${
      disabled && "opacity-75"
    }`;
  }

  return (
    <div>
      <Menu as="div">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2S">
            Explore
            <ChevronDownIcon
              className="ml-2 h-5 w-5 text-orange-500"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={getButtonClassName(active)}
                    onClick={showDefinition}
                  >
                    <BoltIcon className={iconClassName} />
                    What is Bitcoin?
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="https://www.swanbitcoin.com/dcabtc/" target="_blank">
                    <button className={getButtonClassName(active)}>
                      <ArrowTopRightOnSquareIcon className={iconClassName} />
                      $10 of Free Bitcoin
                    </button>
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item disabled>
                {({ active }) => (
                  <button className={getButtonClassName(active, true)}>
                    <BookOpenIcon className={iconClassName} />
                    Low Time Library
                  </button>
                )}
              </Menu.Item>
              <Menu.Item disabled>
                {({ active }) => (
                  <button className={getButtonClassName(active, true)}>
                    <CalculatorIcon className={iconClassName} />
                    Low Time Calculator
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <a href="https://bitcoin.org/bitcoin.pdf" target="_blank">
                    <button className={getButtonClassName(active)}>
                      <CloudArrowDownIcon className={iconClassName} />
                      Discover the White Paper
                    </button>
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
