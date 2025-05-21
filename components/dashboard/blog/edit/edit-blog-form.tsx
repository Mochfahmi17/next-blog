"use client";
import { Form } from "@/components/ui/form";
import { blogSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Category, Post } from "@prisma/client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import TitleField from "../../form-field/title-field";
import ContentEditor from "../../form-field/content-editor";
import CategorySelect from "../../form-field/category-select";
import ImageUploader from "../../form-field/image-uploader";
import StatusSelect from "../../form-field/status-select";
import SubmitButton from "../../form-field/submit-button";
import { useTransition } from "react";
import { updateBlog } from "@/lib/actions/blog";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type EditBlogFormProps = {
  categories: Category[] | undefined;
  initialData: (Post & { category: Category }) | undefined;
};

const EditBlogForm = ({ categories, initialData }: EditBlogFormProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof blogSchema>>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: initialData?.title,
      content: initialData?.content,
      categoryId: initialData?.category.id,
      image: initialData?.image,
      image_public_id: initialData?.image_public_id,
      status: initialData?.status,
    },
  });

  const onSubmit = (values: z.infer<typeof blogSchema>) => {
    startTransition(async () => {
      if (!initialData) return;

      try {
        const data = await updateBlog(initialData.id, values);

        if (!data.success) {
          toast.error(data.message);
        }

        toast.success(data.message);
        router.push("/dashboard/blog");
      } catch (error) {
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
                {isPending ? "Updating blog post..." : "Update blog"}
              </SubmitButton>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default EditBlogForm;
