import { ReactNode } from "react";

export interface ModalProps {
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export function Modal({ title, children }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-brightness-50">
      <div className="bg-white p-2 rounded-lg shadow-lg w-140">
        <div className="flex justify-between items-center ">
          <h2 className="p-4 text-xl font-semibold">{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
}
