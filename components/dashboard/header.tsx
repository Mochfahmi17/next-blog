type HeaderProps = {
  name: string | null | undefined;
  role: string;
};

const Header = ({ name, role }: HeaderProps) => {
  return (
    <div className="max-w-64 space-y-1">
      <h1 className="line-clamp-2 text-xl font-semibold">{name}</h1>
      <p className="text-sm text-slate-500">{role}</p>
    </div>
  );
};

export default Header;
