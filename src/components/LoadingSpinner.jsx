import { Spinner, ThemeProvider } from "flowbite-react";

const LoadingSpinner = () => {
  const customTheme = {
    spinner: {
      base: "inline animate-spin text-gray-200",
      color: {
        default: "fill-primary-600",
        failure: "fill-red-600",
        gray: "fill-gray-600",
        info: "fill-cyan-600",
        pink: "fill-pink-600",
        purple: "fill-purple-600",
        success: "fill-green-500",
        warning: "fill-yellow-400",
      },
      light: {
        off: {
          base: "dark:text-gray-600",
          color: {
            default: "",
            failure: "",
            gray: "dark:fill-gray-300",
            info: "",
            pink: "",
            purple: "",
            success: "",
            warning: "",
          },
        },
        on: {
          base: "",
          color: {
            default: "",
            failure: "",
            gray: "",
            info: "",
            pink: "",
            purple: "",
            success: "",
            warning: "",
          },
        },
      },
      size: {
        xs: "h-3 w-3",
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-13 w-13",
      },
    },
  };

  return (
    <ThemeProvider theme={customTheme}>
      <div className="text-center">
        <Spinner size="xl" color="gray" />
      </div>
    </ThemeProvider>
  );
};

export default LoadingSpinner;
