type HeaderProps = {
  title: string;
  subTitle: string;
};

const Header = ({ title, subTitle }: HeaderProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4 text-center">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-muted-foreground text-sm">{subTitle}</p>
    </div>
  );
};

export default Header;
