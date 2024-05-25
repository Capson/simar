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
          display: 'inline-block',
          borderRadius: '10px', // Adjust as needed
          padding: '5px', // Space for the border
          background: 'linear-gradient(45deg, violet, purple, #E6E6FA, green)', // Gradient colors
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        }}
      >
        <span
          className="content"
          style={{
            display: 'block',
            borderRadius: '10px', // Match the outer border radius
            padding: '20px', // Adjust as needed
            background: '#ffffff', // Background of the content area
            width: 'max-content',
            fontSize: '15px',
            cursor: 'pointer',
          }}
        >
          {props.prompt}
        </span>
      </span>
    </div>
  </>
);