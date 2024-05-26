type Props = {
  prompt: string;
  onPromptClick?: () => void;
};

export const StarterPromptBubble = (props: Props) => (
  <div
    data-modal-target="defaultModal"
    data-modal-toggle="defaultModal"
    className="flex justify-start items-start animate-fade-in host-container hover:brightness-90 active:brightness-75"
    onClick={() => props.onPromptClick?.()}
    style={{
      display: 'inline-block',
      position: 'relative',
      background: 'white', // Background for inner content
      borderRadius: '12px', 
      padding: '8px', 
      cursor: 'pointer',
    }}
  >
    <span
      className="px-2 py-1 ml-1 whitespace-pre-wrap max-w-full chatbot-host-bubble"
      data-testid="host-bubble"
      style={{
        display: 'inline-block',
        fontSize: '15px',
        backgroundImage: 'linear-gradient(to right, violet, red)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        padding: '6px 12px', // Adjust padding as needed
        borderRadius: '12px',
        border: '2px solid transparent',
        backgroundClip: 'padding-box',
      }}
    >
      {props.prompt}
    </span>
    <div
      style={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        borderRadius: '12px',
        border: '2px solid',
        borderImageSlice: 1,
        borderImageSource: 'linear-gradient(to right, violet, red)',
        pointerEvents: 'none',
      }}
    />
  </div>
);