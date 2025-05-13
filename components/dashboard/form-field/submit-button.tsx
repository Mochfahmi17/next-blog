import { Button } from "@/components/ui/button";

const SubmitButton = ({
  isPending,
  children,
}: {
  isPending: boolean;
  children: React.ReactNode;
}) => {
  return (
    <Button
      type="submit"
      size="lg"
      disabled={isPending}
      className="w-full cursor-pointer"
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
