import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function Modal({ children, show = false, maxWidth = '2xl', closeable = true, onClose = () => { } }) {
    const close = () => {
        if (closeable) {
            onClose();
        }
    };

    const maxWidthClass = {
        sm: 'sm:tw-max-w-sm',
        md: 'sm:tw-max-w-md',
        lg: 'sm:tw-max-w-lg',
        xl: 'sm:tw-max-w-xl',
        '2xl': 'sm:tw-max-w-2xl',
    }[maxWidth];

    return (
        <Transition show={show} as={Fragment} leave="tw-duration-200">
            <Dialog
                as="div"
                id="modal"
                className="tw-fixed tw-inset-0 tw-flex tw-overflow-y-auto tw-px-4 tw-py-6 sm:tw-px-0 tw-items-center tw-z-50 tw-transform tw-transition-all"
                onClose={close}
            >
                <Transition.Child
                    as={Fragment}
                    enter="tw-ease-out tw-duration-300"
                    enterFrom="tw-opacity-0"
                    enterTo="tw-opacity-100"
                    leave="tw-ease-in tw-duration-200"
                    leaveFrom="tw-opacity-100"
                    leaveTo="tw-opacity-0"
                >
                    <div className="tw-absolute tw-inset-0 tw-bg-gray-500/75" />
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="tw-ease-out tw-duration-300"
                    enterFrom="tw-opacity-0 tw-translate-y-4 sm:tw-translate-y-0 sm:tw-scale-95"
                    enterTo="tw-opacity-100 tw-translate-y-0 sm:tw-scale-100"
                    leave="tw-ease-in tw-duration-200"
                    leaveFrom="tw-opacity-100 tw-translate-y-0 sm:tw-scale-100"
                    leaveTo="tw-opacity-0 tw-translate-y-4 sm:tw-translate-y-0 sm:tw-scale-95"
                >
                    <Dialog.Panel
                        className={`mb-6 tw-bg-white tw-rounded-lg tw-overflow-hidden tw-shadow-xl tw-transform tw-transition-all sm:tw-w-full sm:tw-mx-auto ${maxWidthClass}`}
                    >
                        {children}
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    );
}
