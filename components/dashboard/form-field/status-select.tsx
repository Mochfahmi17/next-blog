import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { blogSchema } from "@/schemas";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

type StatusSelectProps = {
  form: UseFormReturn<z.infer<typeof blogSchema>>;
  isPending?: boolean;
};

const StatusSelect = ({ form, isPending }: StatusSelectProps) => {
  return (
    <FormField
      control={form.control}
      name="status"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Status</FormLabel>
          <Select
            onValueChange={field.onChange}
            value={field.value}
            disabled={isPending}
          >
            <FormControl>
              <SelectTrigger className="w-full focus-visible:ring-2 focus-visible:ring-black">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="Draft">Draft</SelectItem>
              <SelectItem value="Publish">Publish</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default StatusSelect;
