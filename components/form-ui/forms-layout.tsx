interface FormsLayoutProps {
  children: React.ReactNode;
}

export const FormsLayout: React.FC<FormsLayoutProps> = ({ children }) => {
  return (
    <div className="gap-6 grid grid-cols-2 sm:grid-cols-3">{children}</div>
  );
};
