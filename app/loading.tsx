import LoadingSpinner from "@/components/loading-spinner";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-40 flex min-h-screen items-center justify-center bg-white">
      <LoadingSpinner />
    </div>
  );
}
