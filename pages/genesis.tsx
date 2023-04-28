import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

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
    ]

    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    function getGenesisBlock() {
        return bitcoinIs.map((premise, i) => (<p key={i} className="text-md text-gray-500">
            {premise}
        </p>))
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-white">
                <button
                    type="button"
                    onClick={openModal}
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                    What is Bitcoin?
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                                        Bitcoin is
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        {getGenesisBlock()}
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        >
                                            {"I'm beginning to understand..."}
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
