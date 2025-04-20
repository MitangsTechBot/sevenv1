import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  location: string;
  services: string[];
  message: string;
}

export const useGoogleSheets = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // This function would normally connect to a Google Sheets API
  // For demo purposes, we're simulating the process
  const submitToGoogleSheets = async (data: FormData): Promise<void> => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);
    
    try {
      // In a real implementation, you would:
      // 1. Set up a server endpoint that uses the Google Sheets API
      // 2. Call that endpoint with your form data
      // 3. Handle the response
      
      // For demo purposes, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form data that would be sent to Google Sheets:', data);
      setSuccess(true);
    } catch (err) {
      console.error('Error submitting to Google Sheets:', err);
      setError('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitToGoogleSheets,
    isSubmitting,
    error,
    success
  };
};