import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useAppContext } from "@/contexts/appContext";
// import themes from "@/styles/themes";

export default function ToggleSwitch({}) {
  const [enabled, setEnabled] = useState(false);
  const { mode, setMode } = useAppContext();
  // const { bg } = themes[mode as keyof typeof themes];

  function updateToggleState() {
    const toggledValue = !enabled;

    setMode(toggledValue ? "dark" : "light");
    setEnabled(toggledValue);

    // https://tailwindcss.com/docs/dark-mode
    toggledValue
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }

  return (
    <div>
      <Switch
        checked={enabled}
        onChange={updateToggleState}
        className={`bg-orange-200 dark:bg-orange-500 relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span
          className={`${enabled ? "translate-x-9" : "translate-x-0"}
              pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-blue-900 dark:bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
