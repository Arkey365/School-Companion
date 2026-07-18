"use client";
import Link from "next/link";
import Card from "@/components/ui/Card";
import ActionButton from "@/components/ui/ActionButton";
import { ArrowLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-10">
      <Card className="max-w-md mx-auto bg-zinc-950/95">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-white/5 text-zinc-100 shadow-inner shadow-black/30">
            <AlertCircle className="h-8 w-8" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Page not found</p>
            <h1 className="mt-3 text-3xl font-semibold text-zinc-100">Oops! This page went missing.</h1>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
            </p>
          </div>
          <Link href="/" className="w-full sm:w-auto">
            <ActionButton
              href="/"
              label="Return Home"
              icon={<ArrowLeft className="w-5 h-5" />}
              variant="primary"
            />
          </Link>
        </div>
      </Card>
    </div>
  );
}
