
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  gender: z.string({ required_error: "Please select a gender." }).min(6, { message: "Gender is required" }),
  passport: z
    .string()
    .min(6, { message: "Passport number must be at least 6 characters." }),
});


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
  
  
  
    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log("Form values:", values);
      alert("Form submitted successfully! Check console for values.");
    }
  
    const handlePrevStep = () => {
      if (step > 1) setStep(step - 1);
    };
  
    const handleNextStep = () => {
      if (step < 3) setStep(step + 1);
    };
  


    return {
        step,
        form,
        onSubmit,
        handlePrevStep,
        handleNextStep

    }
}

export default  UseMultiStep
