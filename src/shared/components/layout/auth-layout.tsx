const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-muted/40 flex h-screen w-full items-center justify-center px-4">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
};

export default AuthLayout;
