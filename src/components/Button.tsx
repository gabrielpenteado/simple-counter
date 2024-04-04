interface IButton {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const button = ({ text, onClick }: IButton) => {
  return <button onClick={onClick}>{text}</button>;
};

export default button;
