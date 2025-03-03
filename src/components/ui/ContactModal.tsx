"use client";
import React, { useState } from "react";
import { X, Calendar, Briefcase, HardHat } from "lucide-react";
import Image from "next/image";
import SchedulingModal from "../sections/11-SchedulingModal";
import FinalModal from "./FinalModal";

interface FormData {
  name: string;
  email: string;
  fone: string;
  message: string;
  date: string;
  time: string;
  privacyPolicy: boolean;
}

const ContactModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const openExternalForm = (canal?: string): void => {
    const url = `https://leads.mitrerealty.com.br/api-leads/atendimento?id_produto=1226&utm_source=Midia${
      canal ? `&canal=${canal}` : ""
    }`;

    window.open(url, "_blank", "width=800,height=600");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (formData: FormData) => {
    console.log("Form submitted:", formData);
    setSubmittedData(formData);
    setFormSubmitted(true);
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-[18%] w-16 h-16 rounded-full bg-[#9e4638] text-white flex items-center justify-center shadow-lg hover:bg-[#8a3c30] transition-all z-50"
        aria-label="Converse com nossos corretores"
      >
        <Image
          src="/imgs/contato-balao.svg"
          alt="Balão de fala"
          width={36}
          height={36}
          className="w-8 h-8"
        />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40 md:bg-opacity-0"
          onClick={toggleModal}
        />
      )}

      <div
        className={`fixed z-50 transition-all font-unineue duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 bottom-0 right-0 md:bottom-24 md:right-6"
            : "opacity-0 bottom-0 right-[-100%] pointer-events-none"
        } w-full md:w-96 bg-white rounded-t-xl md:rounded-xl shadow-xl`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-[#9e4638] tracking-[3px]">
            Entre em contato
          </h2>
          <button
            onClick={toggleModal}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-4">
          <p className="text-gray-600 mb-4 tracking-[1px]">
            Selecione uma opção a seguir:
          </p>

          <div className="space-y-3">
            <a
              href="#contact"
              className="block"
              onClick={(e) => {
                e.preventDefault();
                openExternalForm("whatsapp");
              }}
            >
              <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition cursor-pointer">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="text-[#9e4638] tracking-[1px] font-medium text-[16px]">
                      FALE COM O CORRETOR
                    </h3>
                    <div className="border-b-2 border-[#9e4638] w-[30%] my-1"></div>
                    <p className="text-gray-600 tracking-[1px] text-sm">
                      Canal exclusivo para vendas
                    </p>
                  </div>
                  <Image
                    src="/imgs/whatsapp.png"
                    alt="whatsapp"
                    width={36}
                    height={36}
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </a>

            <div
              className="block"
              onClick={() => {
                toggleModal();
                handleOpenModal();
              }}
            >
              <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition cursor-pointer">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="text-[#9e4638] tracking-[1px] font-medium">
                      AGENDE SUA VISITA
                    </h3>
                    <div className="border-b-2 border-[#9e4638] w-[30%] my-1"></div>
                  </div>
                  <Calendar className="w-6 h-6 text-[#9e4638]" />
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="block"
              onClick={(e) => {
                e.preventDefault();
                openExternalForm();
              }}
            >
              <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition cursor-pointer">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="text-[#9e4638] tracking-[1px] font-medium">
                      CHAT ONLINE
                    </h3>
                    <div className="border-b-2 border-[#9e4638] w-[30%] my-1"></div>
                    <p className="text-gray-600 text-sm tracking-[1px]">
                      DAS 9H ÀS 22H
                    </p>
                  </div>
                  <Image
                    src="/imgs/contato-balao.png"
                    alt="contato-balao"
                    width={36}
                    height={36}
                    className="w-6 h-6"
                  />
                </div>
              </div>
            </a>

            <a
              href="https://www.mitrerealty.com.br/seja-parceiro-mitre"
              className="block w-full w-full"
              onClick={toggleModal}
            >
              <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition cursor-pointer">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="text-[#9e4638] tracking-[1px] font-medium">
                      PARCERIAS
                    </h3>
                    <div className="border-b-2 border-[#9e4638] w-[30%] my-1"></div>
                    <p className="text-gray-600 tracking-[1px] text-sm">
                      Seja um corretor ou imobiliária parceira da Mitre
                    </p>
                  </div>
                  <Briefcase className="w-6 h-6 text-[#9e4638]" />
                </div>
              </div>
            </a>

            <a
              href="https://www.mitrerealty.com.br/fornecedores"
              className="block"
              onClick={toggleModal}
            >
              <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition cursor-pointer">
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="text-[#9e4638] tracking-[1px] font-medium">
                      FORNECEDORES
                    </h3>
                    <div className="border-b-2 border-[#9e4638] w-[30%] my-1"></div>
                  </div>
                  <HardHat className="w-6 h-6 text-[#9e4638]" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {formSubmitted && submittedData && (
        <FinalModal
          isOpen={true}
          submittedData={submittedData}
          onClose={toggleModal}  
        />
      )}

      <SchedulingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ContactModal;
