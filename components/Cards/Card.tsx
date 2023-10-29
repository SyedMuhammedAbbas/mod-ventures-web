export const Card = ({ children }: any) => {
  return (
    <div
      className="relative  border-[2px] border-[#000000] my-4 rounded-[20px] shadow-lg w-[200px] h-[300px]"
      style={{
        boxShadow: "0px 0px 12px rgba(0,0,0,0.8)",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
};
