import clsx from "clsx";

interface InputCustomProps {
  placeholder?: string;
  width?: string;
  height?: string;
  type?: "input" | "textarea";
}
function InputCustom({
  placeholder,
  width = "w-[574px]",
  height = "h-[60px]",
  type = "input",
}: InputCustomProps) {
  if (type === "textarea") {
    return (
      <div className={clsx("border border-white w-full h-full", width, height)}>
        <textarea
          placeholder={placeholder}
          className="h-full w-full focus-within:outline-none placeholder:text-[#AAAAAA] p-4 resize-none text-white"
        />
      </div>
    );
  }
  return (
    <div className={clsx("border border-white w-full h-full", width, height)}>
      <input
        placeholder={placeholder}
        className="h-full w-full focus-within:outline-none placeholder:text-[#AAAAAA] p-4 text-white"
      />
    </div>
  );
}

export default InputCustom;
