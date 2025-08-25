interface MenuItemProps {
  type?: "view" | "price";
  label: string;
  description?: string;
  price?: number;
}
function MenuItem({ type, label, description, price }: MenuItemProps) {
  if (type === "view") {
    return (
      <div className="flex items-center gap-[32px]">
        <h4 className="text-[#DCCA87] font-semibold text-[25px]">{label}</h4>
        <div className="flex-1 border-b border-white"></div>
        <p className="uppercase text-white font-medium text-[18px]">View</p>
      </div>
    );
  }
  return <div></div>;
}

export default MenuItem;
