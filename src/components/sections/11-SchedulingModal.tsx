"use client";
import React, { useState } from "react";
import { X, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { type LeadResponseOrUndefined, postLead } from "@/api/Leads";

interface SchedulingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  fone: string;
  date: string;
  time: string;
  message: string;
  privacyPolicy: boolean;
}

interface WeekDay {
  dayName: string;
  date: number;
  fullDate: Date;
}

const FormSchema = z.object({
  name: z.string().min(3, "Nome tem que possuir pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  fone: z.string().regex(/^\+?[0-9]{10,15}$/, "Telefone inválido"),
  date: z.string().min(1, "Selecione uma data"),
  time: z.string().min(1, "Selecione um horário"),
});

const SchedulingModal: React.FC<SchedulingModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<"form" | "date" | "time">("form");
  const [readPolicy, setReadPolicy] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar o carregamento

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      fone: "",
      date: "",
      time: "",
    },
  });

  // Generate week days starting from current date
  const generateWeekDays = (): WeekDay[] => {
    const days: WeekDay[] = [];
    const dayNames = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

    const today = new Date(currentMonth);

    // Start from current day and get next 5 days
    for (let i = 0; i < 5; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);

      days.push({
        dayName: dayNames[date.getDay()],
        date: date.getDate(),
        fullDate: new Date(date),
      });
    }

    return days;
  };

  const weekDays = generateWeekDays();

  // Available time slots
  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setValue("date", date.toISOString().split("T")[0], {
      shouldValidate: true,
    });
    setStep("time");
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setValue("time", time, { shouldValidate: true });
    setStep("form");
  };

  const processSubmit = async (data: FormData) => {
    setIsLoading(true); // Ativa o estado de carregamento
    try {
      const formattedDate = selectedDate
        ? selectedDate.toLocaleDateString("pt-BR")
        : "";

      const agendamentoMessage = `AGENDAMENTO: Data: ${formattedDate}, Horário: ${data.time}`;

      const response: LeadResponseOrUndefined = await postLead({
        name: data.name,
        email: data.email,
        fone: data.fone,
        message: agendamentoMessage,
      });

      if (response) {
        toast.success(response.message);
        onSubmit({
          ...data,
          message: agendamentoMessage,
          privacyPolicy: readPolicy,
        });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Não foi possível enviar dados");
      }
    } finally {
      setIsLoading(false); // Desativa o estado de carregamento
    }
  };

  const navigateWeek = (direction: "prev" | "next") => {
    const newDate = new Date(currentMonth);
    if (direction === "prev") {
      newDate.setDate(newDate.getDate() - 5);
    } else {
      newDate.setDate(newDate.getDate() + 5);
    }
    setCurrentMonth(newDate);
  };

  const formatMonth = (date: Date): string => {
    return date.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="fixed z-0 w-full h-full bg-transparent" onClick={onClose}>
        {" "}
      </div>

      <div className="z-10 bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
          <h2 className="text-xl font-semibold text-gray-800">
            {step === "form"
              ? "Agendar Consulta"
              : step === "date"
              ? "Selecione uma Data"
              : "Selecione um Horário"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {step === "form" && (
          <form onSubmit={handleSubmit(processSubmit)} className="p-6">
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  {...register("name")}
                  placeholder="NOME *"
                  className="w-full p-2 border-b-2 border-red-800 focus:border-red-900 outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="EMAIL *"
                  className="w-full p-2 border-b-2 border-red-800 focus:border-red-900 outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  {...register("fone")}
                  placeholder="TELEFONE *"
                  className="w-full p-2 border-b-2 border-red-800 focus:border-red-900 outline-none"
                />
                {errors.fone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.fone.message}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setStep("date")}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800 transition-colors"
                >
                  <Calendar size={18} />
                  {selectedDate
                    ? selectedDate.toLocaleDateString("pt-BR")
                    : "Selecionar data"}
                </button>

                <button
                  type="button"
                  onClick={() =>
                    selectedDate ? setStep("time") : setStep("date")
                  }
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-gray-800 transition-colors"
                  disabled={!selectedDate}
                >
                  <Clock size={18} />
                  {selectedTime || "Selecionar horário"}
                </button>
              </div>

              {(errors.date || errors.time) && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.date?.message || errors.time?.message}
                </p>
              )}

              <div className="flex items-start gap-2 mt-2">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  checked={readPolicy}
                  onChange={(e) => setReadPolicy(e.target.checked)}
                  required
                  className="mt-1"
                />
                <label
                  htmlFor="privacyPolicy"
                  className="text-sm text-gray-700"
                >
                  LI E CONCORDO COM AS POLÍTICAS DE PRIVACIDADE
                </label>
              </div>

              <button
                type="submit"
                disabled={!selectedDate || !selectedTime || !readPolicy || isLoading}
                className="w-full py-3 mt-4 bg-red-800 text-white font-medium rounded-md hover:bg-red-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Carregando..." : "ENVIAR"}
              </button>
            </div>
          </form>
        )}

        {step === "date" && (
          <div className="p-6">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={() => navigateWeek("prev")}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <ChevronLeft size={20} />
                </button>
                <h3 className="text-lg font-medium text-gray-800">
                  {formatMonth(currentMonth)}
                </h3>
                <button
                  onClick={() => navigateWeek("next")}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {weekDays.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(day.fullDate)}
                    className={`flex flex-col items-center justify-center p-3 rounded-full transition-colors ${
                      selectedDate &&
                      selectedDate.toDateString() ===
                        day.fullDate.toDateString()
                        ? "bg-red-800 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-xs font-medium">{day.dayName}</span>
                    <span className="text-lg font-bold">{day.date}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep("form")}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Voltar
              </button>

              <button
                onClick={() => selectedDate && setStep("time")}
                disabled={!selectedDate}
                className="px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {step === "time" && (
          <div className="p-6">
            <p className="text-center text-sm text-gray-500 mb-4">
              Selecione um horário disponível para{" "}
              {selectedDate?.toLocaleDateString("pt-BR")}
            </p>

            <div className="grid grid-cols-4 gap-2 mb-6">
              {timeSlots.map((time, index) => (
                <button
                  key={index}
                  onClick={() => handleTimeSelect(time)}
                  className={`py-2 px-3 rounded-md text-center transition-colors ${
                    selectedTime === time
                      ? "bg-red-800 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>

            <div className="text-center text-red-600 text-sm mb-4">
              * Escolha um horário para prosseguir
            </div>

            <div className="flex justify-between">
              <button
                onClick={() => setStep("date")}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Voltar
              </button>

              <button
                onClick={() => selectedTime && setStep("form")}
                disabled={!selectedTime}
                className="px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirmar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchedulingModal;