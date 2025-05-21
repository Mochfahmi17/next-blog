"use client";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { deleteImage } from "@/lib/actions/delete-image";
import { uploadImage } from "@/lib/actions/upload-image-cloudinary";
import { blogSchema } from "@/schemas";
import clsx from "clsx";
import { ImagePlus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { UseFormReturn, useWatch } from "react-hook-form";
import { BarLoader } from "react-spinners";
import { toast } from "sonner";
import { z } from "zod";

type ImageUploaderProps = {
  form: UseFormReturn<z.infer<typeof blogSchema>>;
  isPending: boolean;
};

type UploadResult = {
  secure_url: string;
  public_id: string;
};

const ImageUploader = ({ form, isPending }: ImageUploaderProps) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const imageValue = useWatch({ control: form.control, name: "image" });
  const publicId = useWatch({ control: form.control, name: "image_public_id" });

  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsUploading(true);
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      form.setError("image", {
        message: "Image size must be less than 2MB.",
      });
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const result = (await uploadImage(formData)) as UploadResult;

      form.setValue("image", result.secure_url);
      form.setValue("image_public_id", result.public_id);

      setIsUploading(false);
    } catch (error) {
      console.error("Failed to upload image", error);
      toast.error("Failed to upload image.");
    }
  };

  const handleDeleteImage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!publicId) return toast.error("image not found!");

    try {
      await deleteImage(publicId);
      form.setValue("image", "");
      form.setValue("image_public_id", "");
    } catch (error) {
      console.error("Failed to delete image fron cloudinary", error);
      toast.error("failed to delete image.");
    }
  };
  return (
    <FormField
      control={form.control}
      name="image"
      render={() => (
        <FormItem>
          <FormLabel
            className={clsx(
              "relative flex aspect-video w-[370px] cursor-pointer flex-col items-center justify-center place-self-center rounded-md border-2 border-dashed border-gray-300 bg-gray-50 md:w-full",
              {
                "cursor-default": imageValue,
              },
            )}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6 text-gray-500">
              {imageValue ? (
                <Button
                  type="button"
                  size="icon"
                  onClick={(e) => handleDeleteImage(e)}
                  className="absolute top-1 right-1 z-10 cursor-pointer bg-red-500 text-white hover:bg-red-600"
                >
                  <Trash2 className="size-4" />
                </Button>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  {isUploading ? (
                    <BarLoader className="z-10" />
                  ) : (
                    <>
                      <ImagePlus className="size-8" />
                      <p className="mb-2 text-sm font-bold">Add Image</p>
                      <p className="text-xs">JPG, JPEG, PNG, Webp (max: 2MB)</p>
                    </>
                  )}
                </div>
              )}
            </div>
            {imageValue ? (
              <Image
                src={imageValue}
                alt="blog image upload"
                width={640}
                height={360}
                className="absolute aspect-video rounded-md object-cover"
              />
            ) : (
              <>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleChangeImage(e)}
                    disabled={isPending || isUploading}
                    className="hidden"
                  />
                </FormControl>
                <FormMessage />
              </>
            )}
          </FormLabel>
        </FormItem>
      )}
    />
  );
};

export default ImageUploader;
