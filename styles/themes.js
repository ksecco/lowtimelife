// styles not available after `npm run build` though classes are present in HTML,
// integrating via Tailwind "dark" class styling rather than via AppContext for now...

export const themes = {
  dark: {
    bg: {
      button: "",
      orange: "bg-orange-500",
      primary: "bg-black",
      toggle: "bg-white"
    },
    link: {
      primary: "text-orange-500",
      hover: "text-blue-100",
    },
    text: {
      gray: "text-gray-300",
      header: "text-white",
    },
  },
  light: {
    bg: {
      button: "bg-gray-100",
      orange: "bg-orange-200",
      primary: "bg-white",
      toggle: "bg-blue-900"
    },
    link: {
      primary: "text-blue-900",
      hover: "text-orange-500",
    },
    text: {
      gray: "text-gray-500",
      header: "text-gray-900",
    },
  },
};

export default themes;
