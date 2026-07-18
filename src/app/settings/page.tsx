import { Bell, Layers, Moon, Smile, SunMedium } from "lucide-react";
import SettingButton from "@/components/ui/SettingButton";
import SettingRow from "@/components/ui/SettingRow";
import SettingSection from "@/components/ui/SettingSection";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Settings</h1>
        <p className="mt-2 text-sm text-zinc-400">Manage preferences for your School Companion experience.</p>
      </div>

      <div className="space-y-6">
        <SettingSection title="General" icon={<Smile className="w-5 h-5" />}>
          <SettingRow label="Selected Class" value="Class 10A" description="Current class assignment placeholder." />
          <SettingRow
            label="Change Class"
            description="Available in the next release."
            action={<SettingButton label="Coming in v0.2" hint="Soon" disabled />}
          />
        </SettingSection>

        <SettingSection title="Appearance" icon={<Layers className="w-5 h-5" />}>
          <SettingRow label="Dark Theme" value="Enabled" description="Preferred dark AMOLED theme." />
          <SettingRow
            label="Light Theme"
            value="Disabled"
            description="Light mode support is coming soon."
          />
        </SettingSection>

        <SettingSection title="Notifications" icon={<Bell className="w-5 h-5" />}>
          <SettingRow
            label="Schedule change notifications"
            value="Disabled"
            description="Notification settings are not active yet."
          />
        </SettingSection>

        <SettingSection title="About" icon={<Moon className="w-5 h-5" />}>
          <SettingRow label="Version" value="v0.1" />
          <SettingRow label="Framework" value="Next.js" />
          <SettingRow label="Built with" value="TypeScript + Tailwind CSS" />
        </SettingSection>
      </div>
    </div>
  );
}
