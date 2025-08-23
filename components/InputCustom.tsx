import clsx from "clsx";

interface InputCustomProps {
  placeholder?: string;
  width?: string; // ví dụ "w-[574px]"
  height?: string; // ví dụ "h-[60px]"
  type?: "input" | "textarea";
}

function InputCustom({
  placeholder,
  width,
  height,
  type = "input",
}: InputCustomProps) {
  // Nếu không có width/height thì fallback về full
  const sizeClasses = clsx(width ?? "w-full", height ?? "h-full");

  if (type === "textarea") {
    return (
      <div className={clsx("border border-white", sizeClasses)}>
        <textarea
          placeholder={placeholder}
          className="h-full w-full focus-within:outline-none placeholder:text-[#AAAAAA] p-4 resize-none text-white"
        />
      </div>
    );
  }

  return (
    <div className={clsx("border border-white", sizeClasses)}>
      <input
        placeholder={placeholder}
        className="h-full w-full focus-within:outline-none placeholder:text-[#AAAAAA] p-4 text-white"
      />
    </div>
  );
}

export default InputCustom;
