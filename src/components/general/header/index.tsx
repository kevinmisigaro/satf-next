const Header = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-black">{text}</h2>
      <div className="h-1 w-20 ml-1 bg-satfDarkBlue"></div>
    </div>
  );
};

export default Header;
