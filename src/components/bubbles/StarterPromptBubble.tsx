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
      style={{
        display: 'inline-block',
        padding: '4px', // Slight padding to show the border
        borderRadius: '12px', // Same radius for outer div
        background: 'linear-gradient(to right, violet, red)', // Gradient border
      }}
    >
      {/* Inner content with solid background */}
      <span
        className="px-2 py-1 ml-1 whitespace-pre-wrap max-w-full chatbot-host-bubble"
        data-testid="host-bubble"
        style={{
          display: 'inline-block',
          width: 'max-content',
          fontSize: '15px',
          borderRadius: '10px', // Slightly smaller radius for inner span
          cursor: 'pointer',
          backgroundColor: 'white', // Background for inner content
          padding: '0.5em', // Inner padding for content
          color: 'black', // Text color
        }}
      >
        {props.prompt}
      </span>
    </div>
  </>
);