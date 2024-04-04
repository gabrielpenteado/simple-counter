interface IButton {
  text: string;
  action: React.MouseEventHandler<HTMLButtonElement>;
}

const button = ({ text, action }: IButton) => {
  return <button onClick={action}>{text}</button>;
};

export default button;
