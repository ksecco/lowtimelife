import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Genesis() {
  const bitcoinIs: Array<string> = [
    // "Bitcoin is",
    "A globally decentralized energy network",
    "Whereby its trade value is reliably measured against its recurrently verified fixed scarcity",
    "And its precise divisibility freely exchanged in near-immediate final settlement",
    "Is irreversibly recorded on a public ledger",
    "Distributed amongst sovereign individuals",
    "Who by trustless transparent majority vote",
    "Are collectively incentivized to fortify the eternal anti-fragility",
    "Of experience’s known least frictional foundational protocol",
    "Designed to promote, produce, and preserve",
    "Abundance, Truth, and Love.",
  ];

  const [showDefinition, setshowDefinition] = useState(false);
  const [didShowDefinition, setDidShowDefinitionModal] = useState(false);
  const [showReferral, setshowReferral] = useState(false);
  const [currentModalCategory, setCurrentModalCategory] = useState("btc");

  async function closeDefinitionModal() {
    setshowDefinition(false);
    setDidShowDefinitionModal(true);
  }

  function openDefinitionModal() {
    setCurrentModalCategory("btc");
    setshowDefinition(true);
  }

  function closeReferralModal() {
    setshowReferral(false);
  }

  function openReferralModal() {
    setCurrentModalCategory("swan");
    setshowReferral(true);
  }

  function navigateToSwan() {
    window.open("https://www.swanbitcoin.com/dcabtc/");
  }

  function getGenesisBlock() {
    return bitcoinIs.map((premise, i) => (
      <p key={i} className="text-md text-gray-500">
        {premise}
      </p>
    ));
  }

  function getReferralBonus() {
    const referral = [
      [
        "Here persists one's first step toward self-sovereignty",
        "Metempsychotic the right of passage should one brave the change",
        "For though this Bitcoin yet awaits free in fiat terms",
        "Its cost in education is nothing short of reformation.",
      ],
      [
        "All in time",
        "One will come to embody a low time preference lifestyle",
        "But today",
        "Simply begin:",
      ],
    ];

    return (
      <>
        {referral.map((section, i) => (
          <div key={i} className="pt-2 pb-2">
            {section.map((line, j) => (
              <p key={j} className="text-md text-gray-500">
                {line}
              </p>
            ))}
          </div>
        ))}
        <p className="text-md text-gray-500 pt-2 pb-2">
          Enter your email at{" "}
          <a
            className="font-medium text-blue-900 hover:text-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={closeReferralModal}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.swanbitcoin.com/dcabtc/"
          >
            swan.com/dcabtc
          </a>
        </p>
      </>
    );
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <button
          type="button"
          onClick={openDefinitionModal}
          className={
            !didShowDefinition
              ? "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              : "inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-blue-900 hover:text-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          }
        >
          What is Bitcoin?
        </button>
        {didShowDefinition && (
          <button
            type="button"
            onClick={openReferralModal}
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ml-2"
          >
            Where does one begin?
          </button>
        )}
      </div>

      <Transition appear show={showDefinition || showReferral} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-orange-200" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {currentModalCategory === "btc"
                      ? "Bitcoin is"
                      : "$10 of Free Bitcoin"}
                  </Dialog.Title>
                  <div className="mt-2">
                    {currentModalCategory === "btc"
                      ? getGenesisBlock()
                      : getReferralBonus()}
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={
                        currentModalCategory === "btc"
                          ? closeDefinitionModal
                          : () => {
                              closeReferralModal();
                              navigateToSwan();
                            }
                      }
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      {currentModalCategory === "btc"
                        ? "I'm beginning to understand..."
                        : "I accept"}
                    </button>
                    {currentModalCategory === "swan" && (
                      <button
                        type="button"
                        onClick={closeReferralModal}
                        className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ml-2"
                      >
                        I do not value my time
                      </button>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
