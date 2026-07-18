import { CalendarDays } from "lucide-react";
import EmptyState from "@/components/ui/EmptyState";

export default function SchedulePage() {
  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-zinc-100">Schedule</h1>
        <p className="text-sm text-zinc-400 mt-2">Schedule information will appear here once loaded.</p>
      </div>
      <EmptyState
        icon={<CalendarDays className="w-6 h-6" />}
        title="No schedule loaded yet."
        description="Your current timetable will appear in this space once the schedule is available."
      />
    </div>
  );
}
