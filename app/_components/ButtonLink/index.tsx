type Props = {
  href: string;
  children: React.ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
  return (
    <a
      href={href}
      className="inline-block px-6 py-3 text-white bg-blue-500 rounded-lg shadow-lg"
    >
      {children}
    </a>
  );
}
