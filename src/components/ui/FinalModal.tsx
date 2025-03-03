import React, { useState } from "react";

interface FinalModalProps {
  isOpen: boolean;
  onClose: () => void;
  submittedData: {
    name: string;
    email: string;
    fone: string;
    message: string;
  } | null;
}

const FinalModal: React.FC<FinalModalProps> = ({
  isOpen,
  onClose,
  submittedData,
}) => {
  const [closeFinal, setCloseFinal] = useState(true);

  if (!isOpen || !submittedData) return null;

  return (
    <>
      {closeFinal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={onClose}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-md max-w-md w-full"
            onClick={(e) => e.stopPropagation()} // Evita fechamento ao clicar dentro
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Agendamento Confirmado
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-medium">Nome:</span> {submittedData.name}
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                {submittedData.email}
              </p>
              <p>
                <span className="font-medium">Telefone:</span>{" "}
                {submittedData.fone}
              </p>
              <p>
                <span className="font-medium">Mensagem:</span>{" "}
                {submittedData.message}
              </p>
            </div>
            <button
              onClick={() => setCloseFinal(!closeFinal)}
              className="mt-4 bg-[#9e4638] text-white py-2 px-4 rounded hover:bg-[#7c3228] transition"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FinalModal;
