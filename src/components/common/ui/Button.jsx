const skins = {
  primary:
    'bg-blue-500 inline-flex h-full text-center py-2 px-4 text-white rounded hover:bg-blue-700',
  primaryInverted:
    'border border-blue-500 text-blue-500 h-full inline-flex text-center py-2 px-4 text-white rounded hover:bg-blue-700 hover:text-white',
  danger:
    'bg-red-500 inline-flex h-full text-center py-2 px-4 text-white rounded hover:bg-white hover:text-red-900',
};

export const Button = ({
  element = 'button',
  skin = 'primary',
  children,
  className = '',
  ...props
}) => {
  const Element = element;

  return (
    <Element {...props} className={`${skins[skin]} ${className}`}>
      {children}
    </Element>
  );
};
