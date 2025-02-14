document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript loaded");

  const chatbox = document.getElementById("chatbox");
  const chatbotBtn = document.getElementById("chatbot-btn");
  const closeChatbot = document.getElementById("close-chatbot");
  const chatlogs = document.getElementById("chatlogs");
  const userInput = document.getElementById("userInput");
  const sendButton = document.getElementById("send-button");

  // Predefined chatbot responses
  const responses = {
    "hi": "Hello! How can I assist you?",
    "how are you": "I'm doing great! How about you?",
    "bye": "Goodbye! Have a nice day!",
    "info": "Visit our <a href='contact.html' class='text-blue-600'>Contact Us</a> page.",
    "default": "For more information, check our <a href='about.html' class='text-blue-600'>About Us</a> page."
  };

  function getResponse(message) {
    return responses[message.toLowerCase()] || responses["default"];
  }

  function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Display user message
    chatlogs.innerHTML += `<div class="chat-message user bg-gray-200 p-2 rounded-lg mb-2 text-right">${message}</div>`;
    userInput.value = "";

    // Scroll to bottom
    chatlogs.scrollTop = chatlogs.scrollHeight;

    // Simulate bot response
    setTimeout(() => {
      const botReply = getResponse(message);
      chatlogs.innerHTML += `<div class="chat-message bot bg-blue-100 p-2 rounded-lg mb-2 text-left">${botReply}</div>`;
      chatlogs.scrollTop = chatlogs.scrollHeight;
    }, 1000);
  }

  // Button Click Event
  sendButton.addEventListener("click", sendMessage);

  // Enter Key Event
  userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  // Open Chatbox
  chatbotBtn.addEventListener("click", function () {
    chatbox.classList.toggle("hidden");
  });

  // Close Chatbox
  closeChatbot.addEventListener("click", function () {
    chatbox.classList.add("hidden");
  });
});
