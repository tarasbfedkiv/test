import { useState } from 'react';

/**
 * Custom hook to manage a modal state
 */
export const useModal = () => {
  // Define the initial state of the modal (closed by default)
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Function to toggle the modal state
  const toggle = () => setIsOpen(!isOpen);

  // Return the modal state and the toggle function
  return { isOpen, toggle };
};
