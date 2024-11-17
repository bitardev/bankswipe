/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { statesOfCanada, statesOfUnitedStates } from "@/lib/constants";

const formSchema = authFormSchema("sign-up");

interface CustomStatesSelect {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  list: stateProps[];
}

const CustomStatesSelect = ({
  control,
  name,
  label,
  placeholder,
  list,
}: CustomStatesSelect) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="form-item bg-white">
              {list.map(({ state, abbreviation }) => (
                <SelectItem value={abbreviation} key={abbreviation}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormDescription className="text-slate-500">
            List of available states supported by Dwolla
          </FormDescription>
          <FormMessage />
        </div>
      )}
    />
  );
};

export default CustomStatesSelect;
