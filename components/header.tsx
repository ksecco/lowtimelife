import ToggleSwitch from "@/components/toggleSwitch";

export default function Header() {
  return (
    <div className="w-full flex justify-end fixed top-12 right-12">
      <ToggleSwitch />
    </div>
  );
}
