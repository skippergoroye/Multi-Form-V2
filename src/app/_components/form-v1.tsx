"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import UseMultiStep from "@/hooks/use-multi-step";

// const formSchema = z.object({
//   name: z.string().min(2, { message: "Name must be at least 2 characters." }),
//   lastName: z
//     .string()
//     .min(2, { message: "Last name must be at least 2 characters." }),
//   phone: z.string().min(10, { message: "Please enter a valid phone number." }),
//   email: z.string().email({ message: "Please enter a valid email address." }),
//   gender: z.string({ required_error: "Please select a gender." }).min(1, {message: "Gender is required."}),
//   passport: z
//     .string()
//     .min(6, { message: "Passport number must be at least 6 characters." }),
// });

export default function MultiStepForm() {
  // const [step, setStep] = useState(1);
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     name: "",
  //     lastName: "",
  //     phone: "",
  //     email: "",
  //     gender: "",
  //     passport: "",
  //   },
  // });

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   console.log(values);
  //   // Here you would typically send the data to your backend
  //   alert("Form submitted successfully!");
  // }


  // const handlePrevStep = () => {
  //   if (step > 1) setStep(step - 1);
  // };

  // const handleNextStep = () => {
  //   if (step < 3) setStep(step + 1);
  // };


  const viewModel = UseMultiStep()

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-50">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Personal Information Form</CardTitle>
          <CardDescription>
            Please fill in all the required information below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...viewModel.form}>
            <form onSubmit={viewModel.form.handleSubmit(viewModel.onSubmit)} className="space-y-6">
              {viewModel.step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={viewModel.form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your first name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={viewModel.form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your last name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {viewModel.step === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={viewModel.form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your phone number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={viewModel.form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email address"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {viewModel.step === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={viewModel.form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not-to-say">
                              Prefer not to say
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={viewModel.form.control}
                    name="passport"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Passport Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your passport number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              <CardFooter className="gap-5 justify-end flex">
                <Button type="button" onClick={viewModel.handlePrevStep}>
                  Back
                </Button>
                {viewModel.step < 3 && (
                  <Button type="button" onClick={viewModel.handleNextStep}>
                    Next
                  </Button>
                )}
                {viewModel.step === 3 && <Button type="submit">Submit</Button>}
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
