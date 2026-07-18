import { FileText } from "lucide-react";
import EmptyState from "@/components/ui/EmptyState";

export default function GoogleDocsPage() {
  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-zinc-100">Google Docs</h1>
        <p className="text-sm text-zinc-400 mt-2">Documents integration will be available soon.</p>
      </div>
      <EmptyState
        icon={<FileText className="w-6 h-6" />}
        title="Google Docs integration coming soon."
        description="Once linked, your school documents and shared files will appear here for quick access."
      />
    </div>
  );
}
