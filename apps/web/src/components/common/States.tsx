import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  icon: string | ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ icon, title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white border border-slate-200 rounded-xl shadow-sm">
      <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center text-3xl mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 max-w-md mb-6 leading-relaxed">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button onClick={onAction}>{actionLabel}</Button>
      )}
    </div>
  );
}

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({ title = "Something went wrong", message = "We encountered an unexpected error. Please try again.", onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white border border-red-100 rounded-xl shadow-sm">
      <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-xl mb-4">
        !
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 max-w-md mb-6 leading-relaxed">
        {message}
      </p>
      {onRetry && (
        <Button variant="outline" onClick={onRetry} className="text-slate-700">Try Again</Button>
      )}
    </div>
  );
}
