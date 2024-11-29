type Props = {
  date: string;
};

export default function Date({ date }: Props) {
  return <span className="flex items-center space-x-2">{date}</span>;
}
