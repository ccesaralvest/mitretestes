"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner";
import { useState } from "react";
import { type LeadResponseOrUndefined, postLead } from "@/api/Leads";

type InputForm = {
  name: string;
  email: string;
  fone: string;
  message: string;
};

const InputFormSchema = z.object({
  name: z.string().min(3, "Nome tem que possuir pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  fone: z.string().regex(/^\+?[0-9]{10,15}$/, "Telfone inválido"),
  message: z
    .string()
    .min(10, "Mensagem tem que possuir pelo menos 10 caracteres"),
});

export default function ContactForm() {
  const [readPolicy, setReadPolicy] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputForm>({
    resolver: zodResolver(InputFormSchema),
  });

  const onSubmit = async (data: InputForm) => {
    try {
      const response: LeadResponseOrUndefined = await postLead(data);
      if (response) toast.success(response.message);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Não foi possível enviar dados");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 p-3 w-full  relative z-10"
    >
      <Card className=" w-full shadow-black shadow-2xl  rounded-sm p-5 ">
        <CardContent className="space-y-5">
          <div>
            <Input
              id="name"
              {...register("name")}
              placeholder="NOME *"
              className="mt-1 rounded-none border-0 border-b-2 border-b-foreground focus:border-b-primary focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="EMAIL *"
              className="mt-1 rounded-none border-0 border-b-2 border-b-foreground focus:border-b-primary focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Input
              id="fone"
              {...register("fone")}
              placeholder="TELEFONE *"
              className="mt-1 rounded-none border-0 border-b-2 border-b-foreground focus:border-b-primary focus:outline-none"
            />
            {errors.fone && (
              <p className="text-red-500 text-xs mt-1">{errors.fone.message}</p>
            )}
          </div>

          <div>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="MENSAGEM *"
              className="mt-1 rounded-none border-0 border-b-2 border-b-foreground focus:border-b-primary focus:outline-none"
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={readPolicy}
              onCheckedChange={(checked) => setReadPolicy(Boolean(checked))}
              className="border-foreground border-2 rounded-none"
            />
            <label
              htmlFor="terms"
              className="text-[0.69rem] font-unineue font-medium  uppercase leading-none "
            >
              Li e concordo com as políticas de privacidade
            </label>
          </div>

          <Button type="submit" className="w-full" disabled={!readPolicy}>
            ENVIAR
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
