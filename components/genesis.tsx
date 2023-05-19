import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useAppContext } from "@/contexts/appContext";
// import themes from "@/styles/themes";

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
    "Of experience’s greatest known least frictional foundational protocol",
    "Designed to promote, produce, and preserve",
    "Abundance, Truth, and Love.",
  ];

  const [showReferral, setShowReferral] = useState(false);
  const [currentModalType, setCurrentModalType] = useState("btc");
  const { didDefine, setDidDefine, showDefinition, setShowDefinition } =
    useAppContext();
  // const { bg, link, text } = themes[mode as keyof typeof themes];

  async function closeDefinitionModal() {
    setShowDefinition(false);
    setDidDefine(true);
  }

  function openDefinitionModal() {
    setCurrentModalType("btc");
    setShowDefinition(true);
  }

  function closeReferralModal() {
    setShowReferral(false);
    // allow for transition before switching modal types
    new Promise(() => setTimeout(() => setCurrentModalType("btc"), 200));
  }

  function openReferralModal() {
    setCurrentModalType("swan");
    setShowReferral(true);
  }

  function navigateToSwan() {
    window.open("https://www.swanbitcoin.com/dcabtc/");
  }

  function getGenesisBlock() {
    return (
      <div className="pt-2 pb-2">
        {bitcoinIs.map((premise, i) => (
          <p key={i} className={`text-md text-gray-500 dark:text-gray-300`}>
            {premise}
          </p>
        ))}
      </div>
    );
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
              <p key={j} className={`text-md text-gray-500 dark:text-gray-300`}>
                {line}
              </p>
            ))}
          </div>
        ))}
        <p className={`text-md text-gray-500 dark:text-gray-300 pt-2 pb-2`}>
          Enter your email at{" "}
          <a
            className={`font-medium text-blue-900 dark:text-orange-500 hover:text-orange-500 hover:dark:text-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`}
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
      <div className="flex-1 flex items-center justify-center">
        <button
          type="button"
          onClick={openDefinitionModal}
          className={
            !didDefine
              ? "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              : `inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-blue-900 dark:text-orange-200 hover:text-orange-500 hover:dark:text-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2`
          }
        >
          What is Bitcoin?
        </button>
        {didDefine && (
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
            <div className={`fixed inset-0 bg-orange-200 dark:bg-orange-500`} />
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
                <Dialog.Panel
                  className={`transform overflow-hidden rounded-2xl bg-white dark:bg-black p-6 text-left align-middle shadow-xl transition-all`}
                >
                  <Dialog.Title
                    as="h3"
                    className={`text-lg font-medium leading-6 text-gray-900 dark:text-white`}
                  >
                    {currentModalType === "btc"
                      ? "Bitcoin is..."
                      : "$10 of Free Bitcoin"}
                  </Dialog.Title>
                  <div className="mt-2">
                    {currentModalType === "btc"
                      ? getGenesisBlock()
                      : getReferralBonus()}
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={
                        currentModalType === "btc"
                          ? closeDefinitionModal
                          : () => {
                              closeReferralModal();
                              navigateToSwan();
                            }
                      }
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 hover:dark:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      {currentModalType === "btc"
                        ? "I'm beginning to understand..."
                        : "I accept"}
                    </button>
                    {currentModalType === "swan" && (
                      <button
                        type="button"
                        onClick={closeReferralModal}
                        className={`inline-flex justify-center rounded-md border border-transparent bg-gray-100 dark:bg-gray-900
                         px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-200 hover:dark:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ml-2`}
                      >
                        Status quo says no
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
