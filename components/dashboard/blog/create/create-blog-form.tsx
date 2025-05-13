"use client";
import { Form } from "@/components/ui/form";
import { blogSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTransition } from "react";
import { createBlog } from "@/lib/actions/blog";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import TitleField from "@/components/dashboard/form-field/title-field";
import CategorySelect from "@/components/dashboard/form-field/category-select";
import StatusSelect from "@/components/dashboard/form-field/status-select";
import SubmitButton from "@/components/dashboard/form-field/submit-button";
import { Category } from "@prisma/client";
import ContentEditor from "../../form-field/content-editor";
import ImageUploader from "../../form-field/image-uploader";

const CreateBlogForm = ({
  categories,
}: {
  categories: Category[] | undefined;
}) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof blogSchema>>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      image: "",
      image_public_id: "",
      content: "",
      categoryId: "",
      status: "Draft",
    },
  });

  const onSubmit = (values: z.infer<typeof blogSchema>) => {
    startTransition(async () => {
      try {
        const data = await createBlog(values);

        if (!data.success) {
          toast.error(data.message);
        }

        toast.success(data?.message);
        router.push("/dashboard");
      } catch (error) {
        console.error("Error uploading image: ", error);
        if (error instanceof Error) {
          form.setError("image", {
            message: "Failed to upload image. Please try again.",
          });
          toast.error(error.message);
        }
        toast.error("Something went wrong. Please try again.");
      }
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid items-center gap-5 md:grid-cols-12 md:items-start">
          <div className="rounded-md bg-white px-4 py-8 shadow md:col-span-8">
            <div className="space-y-6">
              <TitleField form={form} isPending={isPending} />
              <ContentEditor form={form} />
              <CategorySelect
                form={form}
                isPending={isPending}
                categories={categories}
              />
            </div>
          </div>
          <div className="rounded-md bg-white px-4 py-8 shadow md:col-span-4">
            <div className="space-y-6">
              <ImageUploader form={form} isPending={isPending} />
              <StatusSelect form={form} isPending={isPending} />
              <SubmitButton isPending={isPending}>
                {isPending ? "Creating blog post..." : "Create blog"}
              </SubmitButton>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default CreateBlogForm;
