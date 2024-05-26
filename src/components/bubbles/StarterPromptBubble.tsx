type Props = {
  prompt: string;
  onPromptClick?: () => void;
};

export const StarterPromptBubble = (props: Props) => (
  <>
    <div
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
      className="flex justify-start items-start animate-fade-in host-container hover:brightness-90 active:brightness-75"
      onClick={() => props.onPromptClick?.()}
    >
      <span
        className="px-2 py-1 ml-1 whitespace-pre-wrap max-w-full chatbot-host-bubble"
        data-testid="host-bubble"
        style={{
          width: 'max-content',
          fontSize: '15px',
          borderRadius: '0.5em',
          cursor: 'pointer',
          border: '2px solid purple',
          padding: '0.5em',
          background: 'linear-gradient(to right, violet, red)', // Added gradient background color
          color: 'white' // Added text color for better readability
        }}
      >
        {props.prompt}
      </span>
    </div>
  </>
);