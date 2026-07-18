"use client";
import React from "react";
import Card from "@/components/ui/Card";

type SettingSectionProps = {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export default function SettingSection({ title, icon, children }: SettingSectionProps) {
  return (
    <Card title={title} icon={icon}>
      <div className="space-y-3">{children}</div>
    </Card>
  );
}
