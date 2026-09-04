import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface ActionProposalProps {
  title: string;
  type: "reminder" | "task" | "goal";
  details: Record<string, string>;
  onApprove: () => void;
  onReject: () => void;
}

export function ActionProposal({ title, type, details, onApprove, onReject }: ActionProposalProps) {
  const typeColors = {
    reminder: "bg-orange-50 border-orange-200 text-orange-900",
    task: "bg-emerald-50 border-emerald-200 text-emerald-900",
    goal: "bg-indigo-50 border-indigo-200 text-indigo-900"
  };

  const badgeColor = typeColors[type] || "bg-slate-50 border-slate-200 text-slate-900";

  return (
    <div className="my-4 max-w-md w-full border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
      <div className={`px-4 py-2 border-b text-xs font-semibold uppercase tracking-wider ${badgeColor}`}>
        Action Proposal: Create {type}
      </div>
      <div className="p-4 space-y-4">
        <h4 className="font-semibold text-slate-800 text-lg">{title}</h4>
        
        <div className="space-y-2">
          {Object.entries(details).map(([key, value]) => (
            <div key={key} className="flex text-sm">
              <span className="w-24 text-slate-500 capitalize">{key}:</span>
              <span className="font-medium text-slate-700">{value}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" onClick={onReject} className="flex-1 text-slate-600 border-slate-300">
            <X className="w-4 h-4 mr-2" /> Cancel
          </Button>
          <Button size="sm" onClick={onApprove} className="flex-1 bg-blue-600 hover:bg-blue-700">
            <Check className="w-4 h-4 mr-2" /> Approve
          </Button>
        </div>
      </div>
    </div>
  );
}
