import ToggleSwitch from "@/components/toggleSwitch";
import Nav from "@/components/nav";

export default function Header() {
  return (
    <div className="w-full flex justify-between fixed top-0 p-12">
      <Nav />
      <ToggleSwitch />
    </div>
  );
}
