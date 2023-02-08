type Props = {
  children: React.ReactNode;
};

// We can create predefine heading styles and use them repeatidly

export const Header = ({ children }: Props) => {
  return <div className="text-6xl font-bold text-blue-700">{children}</div>;
};

export const SubHeader = ({ children }: Props) => {
  return <div className="text-4xl font-semibold">{children}</div>;
};

export const SubSubHeader = ({ children }: Props) => {
  return <div className="text-lg font-medium italic">{children}</div>;
};


