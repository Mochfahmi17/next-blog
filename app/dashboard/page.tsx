import DashboardContent from "@/components/dashboard/dashboard-content";

const getGreetings = (): string => {
  const hour = new Date().getHours();
  if (hour >= 4 && hour < 12) return "morning";
  if (hour >= 12 && hour < 15) return "afternoon";
  if (hour >= 15 && hour < 18) return "evening";
  return "night";
};

export default function DashboardPage() {
  const greeting = getGreetings();
  return (
    <div className="space-y-6 py-4 md:px-6">
      <div>
        <h1 className="text-2xl text-stone-600">Welcome Back! 👋</h1>
        <p className="text-sm text-slate-500">Good {greeting}!</p>
      </div>
      <DashboardContent />
    </div>
  );
}
