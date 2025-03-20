import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const LegalModal = ({ isOpen, onClose, type }) => {
  const content = type === 'terms' ? {
    title: 'Terms & Conditions',
    body: (
      <>
        <h3 className="font-bold text-lg mb-4">1. Acceptance of Terms</h3>
        <p className="mb-4">By accessing and using BytesBeyond's services, you accept and agree to be bound by the terms and conditions outlined here.</p>

        <h3 className="font-bold text-lg mb-4">2. Services</h3>
        <p className="mb-4">BytesBeyond provides web development, software solutions, and related technical services. We reserve the right to modify or discontinue any service without notice.</p>

        <h3 className="font-bold text-lg mb-4">3. Intellectual Property</h3>
        <p className="mb-4">All content, code, and materials created by BytesBeyond remain our exclusive property unless explicitly stated otherwise in a client agreement.</p>

        <h3 className="font-bold text-lg mb-4">4. Client Obligations</h3>
        <p className="mb-4">Clients must provide accurate information and maintain timely communication throughout project development.</p>

        <h3 className="font-bold text-lg mb-4">5. Payment Terms</h3>
        <p className="mb-4">Payment terms and schedules will be outlined in individual project agreements. All fees are non-refundable unless otherwise specified.</p>
      </>
    )
  } : {
    title: 'Privacy Policy',
    body: (
      <>
        <h3 className="font-bold text-lg mb-4">1. Information Collection</h3>
        <p className="mb-4">We collect information that you provide directly to us through forms, email communications, and other direct interactions.</p>

        <h3 className="font-bold text-lg mb-4">2. Use of Information</h3>
        <p className="mb-4">We use collected information to provide and improve our services, communicate with you, and ensure the security of our operations.</p>

        <h3 className="font-bold text-lg mb-4">3. Data Protection</h3>
        <p className="mb-4">We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.</p>

        <h3 className="font-bold text-lg mb-4">4. Information Sharing</h3>
        <p className="mb-4">We do not sell or share your personal information with third parties except as necessary to provide our services or as required by law.</p>

        <h3 className="font-bold text-lg mb-4">5. Your Rights</h3>
        <p className="mb-4">You have the right to access, correct, or delete your personal information. Contact us at support@bytesbeyond.in for such requests.</p>
      </>
    )
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
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
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 text-gray-900 dark:text-white mb-6"
                >
                  {content.title}
                </Dialog.Title>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
                <div className="mt-2 text-gray-600 dark:text-gray-300">
                  {content.body}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default LegalModal; 