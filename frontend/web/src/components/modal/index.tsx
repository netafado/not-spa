import * as React from 'react';
import { Dialog } from 'radix-ui';
import { X } from 'lucide-react';

type DialogProps = {
  content: React.ReactNode;
  title: string;
  trigger: React.ReactNode;
};

const DialogDemo = ({ title, content, trigger }: DialogProps) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed blur-sm inset-0 bg-gray-900/50 data-[state=open]:animate-overlayShow" />
      <Dialog.Content className="fixed  bg-gray-900 left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow border border-gray-800">
        <Dialog.Title className="text-gray-300 m-0 text-[17px] font-medium text-mauve12">
          {title}
        </Dialog.Title>
        {content}
        <Dialog.Close asChild>
          <button
            className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
            aria-label="Close"
          >
            <X className="text-lime-500" />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;
