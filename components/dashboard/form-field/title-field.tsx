import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { blogSchema } from "@/schemas";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

type TitleFieldProps = {
  form: UseFormReturn<z.infer<typeof blogSchema>>;
  isPending?: boolean;
};

const TitleField = ({ form, isPending }: TitleFieldProps) => {
  return (
    <FormField
      control={form.control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Title Post</FormLabel>
          <FormControl>
            <Input
              disabled={isPending}
              placeholder="Title"
              {...field}
              className="focus-visible:ring-2 focus-visible:ring-slate-700"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default TitleField;
