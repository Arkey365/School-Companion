import { BookOpen } from "lucide-react";
import EmptyState from "@/components/ui/EmptyState";

export default function MashovPage() {
  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-zinc-100">Mashov</h1>
        <p className="text-sm text-zinc-400 mt-2">Mashov access will be available in a future release.</p>
      </div>
      <EmptyState
        icon={<BookOpen className="w-6 h-6" />}
        title="Mashov integration will be added in v0.2."
        description="This area will display Mashov content and links once the integration is implemented."
      />
    </div>
  );
}
