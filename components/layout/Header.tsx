const Header = () => {
  return (
    <header className="border-b border-line bg-background">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-foreground">Site de Vendas</h1>
        <span className="text-sm text-foreground/60">Catálogo</span>
      </div>
    </header>
  );
};

export default Header;
