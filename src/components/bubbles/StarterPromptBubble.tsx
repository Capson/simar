type Props = {
  prompt: string;
  onPromptClick?: () => void;
};

export const StarterPromptBubble = (props: Props) => (
  <>
    <div
      data-modal-target="defaultModal"
      data-modal-toggle="defaultModal"
      class="flex justify-start items-start animate-fade-in host-container hover:brightness-90 active:brightness-75"
      onClick={() => props.onPromptClick?.()}
    >
      <span
        class="bubble-container px-2 py-1 ml-1 whitespace-pre-wrap max-w-full chatbot-host-bubble"
        data-testid="host-bubble"
        style={{
          display: 'inline-block',
          'border-radius': '10px', // Adjust as needed
          //padding: '3px', // Space for the border
          background: 'linear-gradient(45deg, #00338D, blue, #005EB8, #470A68)', // Gradient colors
          '-webkit-mask': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          '-webkit-mask-composite': 'destination-out',
          'mask-composite': 'exclude',
          position: 'relative',
          cursor: 'pointer',
        }}
      >
        <span
          class="content"
          style={{
            display: 'block',
            'border-radius': '10px', // Match the outer border radius
            //padding: '10px', // Adjust as needed
            background: '#ffffff', // Background of the content area
            width: 'max-content',
            'font-size': '15px',
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
        background: linear-gradient(45deg, violet, purple, #e6e6fa, green);
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
