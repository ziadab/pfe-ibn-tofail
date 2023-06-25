export const LicenseTab = ({ children }: LicenseTabProps) => {
  return (
    <div className="w-full grid md:grid-cols-3 md:gap-3 grid-cols-1">
      {children}
    </div>
  );
};

export interface LicenseTabProps {
  children?: React.ReactNode;
}
