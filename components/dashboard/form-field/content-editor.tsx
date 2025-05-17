import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { blogSchema } from "@/schemas";
import { Editor } from "@tinymce/tinymce-react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

type ContentEditorProps = {
  form: UseFormReturn<z.infer<typeof blogSchema>>;
};

const ContentEditor = ({ form }: ContentEditorProps) => {
  return (
    <FormField
      control={form.control}
      name="content"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Content</FormLabel>
          <FormControl>
            <Editor
              apiKey="la85jq1ho86he2bti8lik9bfxncq4s0qvhpxtlef4ryx2ojh"
              value={field.value}
              onEditorChange={(content) => field.onChange(content)}
              init={{
                height: 300,
                menubar: false,
                plugins: [
                  "link",
                  "image",
                  "code",
                  "lists",
                  "preview",
                  "visualblocks",
                ],
                toolbar:
                  "undo redo | | blocks | formatselect | bold italic underline | " +
                  "alignleft aligncenter alignright | bullist numlist | link image | code preview",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }",
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ContentEditor;
