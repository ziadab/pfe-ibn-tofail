export const Container = ({ children }: ContainerProps) => {
  return (
    <div
      className={"mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 lg:py-8 w-full"}
    >
      {children}
    </div>
  );
};

export interface ContainerProps {
  children: React.ReactNode;
}
