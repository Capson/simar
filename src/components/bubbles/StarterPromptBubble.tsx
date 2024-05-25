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
        className="bubble-container px-2 py-1 ml-1 whitespace-pre-wrap max-w-full chatbot-host-bubble"
        data-testid="host-bubble"
        style={{
          display: 'inline-block',
          borderRadius: '10px', 
          padding: '3px', 
          background: 'linear-gradient(to bottom right, #00338D 50%, transparent 50%), linear-gradient(to top left, transparent 50%, #6D2077 50%)', // Specified gradient colors for top-left and bottom-right
          backgroundPosition: '0 0, 100% 100%',
          backgroundSize: '50% 50%',
          backgroundRepeat: 'no-repeat',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
          position: 'relative',
          cursor: 'pointer',
        }}
      >
        <span
          className="content"
          style={{
            display: 'block',
            borderRadius: '10px', // Match the outer border radius
            padding: '10px 20px', // Reduced padding for height
            background: '#ffffff', // Background of the content area
            width: 'max-content',
            fontSize: '15px',
            color: 'black', // Set font color to black
          }}
        >
          {props.prompt}
        </span>
      </span>
    </div>
    <style jsx>{`
      .bubble-container {
        position: relative;
        overflow: hidden;
      }
      .bubble-container::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(to bottom right, #00338D 50%, transparent 50%), linear-gradient(to top left, transparent 50%, #6D2077 50%); // Specified gradient colors for top-left and bottom-right
        backgroundPosition: '0 0, 100% 100%',
        backgroundSize: '50% 50%',
        backgroundRepeat: 'no-repeat',
        z-index: -1;
        transition: transform 0.5s;
        transform: rotate(0deg);
      }
      .bubble-container:hover::before {
        transform: rotate(180deg);
      }
    `}</style>
  </>
);