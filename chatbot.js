document.addEventListener('DOMContentLoaded', function() {
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSendButton = document.getElementById('chatbot-send-button');
    const chatbotToggleButton = document.getElementById('chatbot-toggle-button');
  
    // Function to add a message to the chat
    function addMessage(text, sender) {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('chatbot-message', sender);
      messageDiv.textContent = text;
      chatbotMessages.appendChild(messageDiv);
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Scroll to the latest message
    }
  
    // Basic bot response logic (you can expand this)
    function getBotResponse(message) {
      message = message.toLowerCase();
      if (message.includes('hello') || message.includes('hi')) {
        return "Hello there!";
      } else if (message.includes('how are you')) {
        return "I'm doing well, thank you!";
      } else if (message.includes('bye') || message.includes('goodbye')) {
        return "Goodbye! Have a great day!";
      } 
      // e nhi chl rha h shi se
      else if(message.includes('Explain SRMU') || message.includes('What is SRMU')) {
        return " Shri Ramswaroop Memorial University (SRMU) is a private university located in Lucknow, Uttar Pradesh, India. ";
      }
      else {
        return "I'm not sure how to respond to that. Can you ask something else?";
      }
    }
  
    // Handle sending a message
    chatbotSendButton.addEventListener('click', function() {
      const userMessage = chatbotInput.value.trim();
      if (userMessage) {
        addMessage(userMessage, 'user');
        chatbotInput.value = ''; // Clear the input
  
        // Simulate bot response (you'd replace this with actual logic)
        setTimeout(function() {
          const botResponse = getBotResponse(userMessage);
          addMessage(botResponse, 'bot');
        }, 500); // Add a slight delay for effect
      }
    });
  
    // Handle pressing Enter in the input field
    chatbotInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        chatbotSendButton.click();
      }
    });
  
    // Toggle chatbot visibility
    chatbotToggleButton.addEventListener('click', function() {
      chatbotContainer.style.display = chatbotContainer.style.display === 'none' ? 'flex' : 'none';
      chatbotToggleButton.style.display = 'none'; // Hide toggle when chat is open
      if (chatbotContainer.style.display === 'none') {
        chatbotToggleButton.style.display = 'block'; // Show toggle when chat is closed
      }
    });
  
    // Initially hide the chatbot container
    chatbotContainer.style.display = 'none';
  });