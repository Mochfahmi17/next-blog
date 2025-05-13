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
import { Category } from "@prisma/client";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

type CategorySelectProps = {
  form: UseFormReturn<z.infer<typeof blogSchema>>;
  categories: Category[] | undefined;
  isPending?: boolean;
};

const CategorySelect = ({
  form,
  categories,
  isPending,
}: CategorySelectProps) => {
  console.log("category component re-render");
  return (
    <FormField
      control={form.control}
      name="categoryId"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Category</FormLabel>
          <Select
            onValueChange={field.onChange}
            value={field.value}
            disabled={isPending}
          >
            <FormControl>
              <SelectTrigger className="w-full focus-visible:ring-2 focus-visible:ring-black">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {categories?.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CategorySelect;
