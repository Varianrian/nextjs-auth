const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle,rgba(255,255,255,0.1),rgba(0,0,0,0.9))] font-sans antialiased">
      {children}
    </div>
  );
};

export default AuthLayout;
