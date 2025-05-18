"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useMemo, useCallback } from "react";
import { StepObjectType } from "@/app/_components/stepObject";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  gender: z
    .string({ required_error: "Please select a gender." })
    .min(6, { message: "Gender is required" }),
  passport: z
    .string()
    .min(6, { message: "Passport number must be at least 6 characters." }),
});

const stepObject: StepObjectType[] = [
  {
    id: 1,
    title: "Personal iNformation",
    description: "Enter your personal Information ",
  },
  {
    id: 2,
    title: "Account iNformation",
    description: "Enter your account Information ",
  },
  {
    id: 3,
    title: "Passport Information",
    description: "Enter your passport  Information ",
  }
];

const UseMultiStep = () => {
  const [step, setStep] = useState(1);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastName: "",
      phone: "",
      email: "",
      gender: "",
      passport: "",
    },
  });

  const onSubmit = useCallback((values: z.infer<typeof formSchema>) => {
    console.log("Form values:", values);
    alert("Form submitted successfully! Check console for values.");
  }, []);

  const handlePrevStep = useCallback(() => {
    if (step > 1) setStep(step - 1);
  }, [step]);

  const handleNextStep = useCallback(() => {
    if (step < 3) setStep(step + 1);
  }, [step]);

  // return {
  //     step,
  //     form,
  //     onSubmit,
  //     handlePrevStep,
  //     handleNextStep

  // }

  return useMemo(
    () => ({ step, form, onSubmit, handlePrevStep, handleNextStep, stepObject }),
    [step, form, onSubmit, handlePrevStep, handleNextStep]
  );
};

export default UseMultiStep;
