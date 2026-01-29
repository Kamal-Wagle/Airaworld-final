// Import the React library, which is necessary to create React components
import React from 'react';

// Import the AnimatedCursor component from the react-animated-cursor package
import AnimatedCursor from 'react-animated-cursor';

// Define a functional component called AnimateCursor
const AnimateCursor = () => {
  // The component returns the following JSX
  return (
    <>
      {/* 
        Use the AnimatedCursor component to create a custom animated cursor 
        with the following properties:
        - innerSize: The diameter of the inner cursor in pixels (Recommended: 4 - 40)
        - outerSize: The diameter of the outer cursor in pixels (Recommended: 4 - 80)
        - color: The RGB color of the cursor (values should be in "R, G, B" format)
        - outerAlpha: The transparency level of the outer cursor (0 is fully transparent, 1 is fully opaque) (Recommended: 0.1 - 1)
        - innerScale: The scale factor for the inner cursor when it is hovered over an interactive element (Recommended: 0.5 - 3)
        - outerScale: The scale factor for the outer cursor when it is hovered over an interactive element (Recommended: 1 - 10)
      */}
      <AnimatedCursor
        innerSize={12}        // Significantly increased inner cursor size (Recommended: 4 - 40)
        outerSize={28}        // Significantly increased outer cursor size (Recommended: 4 - 80)
        color="0, 0, 0"       // RGB values for color black
        outerAlpha={0.2}      // Appropriate outer cursor transparency (Recommended: 0.1 - 1)
        innerScale={0.6}      // Increased inner cursor scale on hover (Recommended: 0.5 - 3)
        outerScale={1.4}      // Increased outer cursor scale on hover (Recommended: 1 - 10)
      />
    </>
  );
};

// Export the AnimateCursor component as the default export from this module
export default AnimateCursor;
