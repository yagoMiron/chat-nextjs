type Props = {
  userName: string;
  message: string;
};

const ChatMessageRow = ({ userName, message }: Props) => {
  return (
    <div className="py-2">
      <span className="">
        <strong>{userName}: </strong>
        {message}
      </span>
    </div>
  );
};

export default ChatMessageRow;
