import { CarDetailsProps } from "../_interfaces";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const CarDetails = ({isOpen, closeModal, car}:CarDetailsProps) => {
    return <Transition show={isOpen} as={Fragment} appear>
        <Dialog as="div" onClose={() => closeModal} className="relative z-10">
            {/* Backdrop transition */}
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-gray-700/40" />
            </Transition.Child>

            {/* Content transition */}
            <div className='fixed inset-0 overflow-y-auto'>
                <div className='flex min-h-full items-center justify-center p-4 text-center'>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-300"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-all text-left shadow-xl transition-all flex flex-col gap-5'>
                            <button
                            type="button" 
                            className="absolute top-3 right-6 z-10 w-fit bg-white rounded-full cursor-pointer hover:bg-blue-50"
                            onClick={closeModal}>
                                <Image 
                                src="/close.svg"
                                alt="close"
                                width={20}
                                height={20}
                                className="object-contain"/>
                            </button>
                            <div className="flex flex-1 flex-col gap-3">
                                <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg top-4'>
                                    <Image 
                                        src="/hero.png"
                                        fill
                                        priority
                                        alt="car"
                                        className="object-contain"
                                    />
                                </div>

                                <div className="flex gap-3">
                                    <div className="flex-1 relative w-full h-30 bg-primary-blue-100 rounded-lg top-4">
                                        <Image 
                                            src="/hero.png"
                                            fill
                                            priority
                                            alt="car"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-1 relative w-full h-30 bg-primary-blue-100 rounded-lg top-4">
                                        <Image 
                                            src="/hero.png"
                                            fill
                                            priority
                                            alt="car"
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-1 relative w-full h-30 bg-primary-blue-100 rounded-lg top-4">
                                        <Image 
                                            src="/hero.png"
                                            fill
                                            priority
                                            alt="car"
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col gap-2">
                                <h2 className="font-semibold text-xl capitalize text-center bg-blue-50 rounded-4xl">
                                    {car.make} {car.model}
                                </h2>

                                <div className="mt-3 flex flex-wrap gap-4">
                                    {Object.entries(car).map(([key, value]) => (
                                        <div 
                                        key={key}
                                        className="flex justify-between gap-5 w-full text-right">
                                            <h4 className="text-gray-600 capitalize">
                                                {key.replace("_", " ")}
                                            </h4>
                                            <p className="text-gray-600 font-semibold">
                                                {value}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
}  

export default CarDetails;