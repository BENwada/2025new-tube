interface LayoutProps {
  children: React.ReactNode;
}
const layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="p-4 bg-rose-500 w-full">I am navbar!</div>
      {children}
    </div>
  );
};

export default layout;
