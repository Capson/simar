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
      position: 'relative',
      display: 'inline-block',
      borderRadius: '12px', 
      padding: '2px',
      background: 'linear-gradient(to right, violet, red)',
    }}
  >
    <div
      className="px-2 py-1 whitespace-pre-wrap max-w-full"
      data-testid="host-bubble"
      style={{
          display: 'inline-block',
          width: 'max-content',
          fontSize: '15px',
          borderRadius: '12px', 
          cursor: 'pointer',
          backgroundColor: 'white', // Background for inner content
          padding: '0.5em', // Inner padding for content
          color: 'black', // Text color
      }}
    >
      {props.prompt}
    </div>
  </div>
);