document.addEventListener("DOMContentLoaded", function () {
  // Function to simulate the bot's greeting with typing animation
  function botGreeting() {
    var chatBox = document.getElementById("chatBox");
    var botName = "Rising";
    var greeting =
      "Hello! I'm " +
      botName +
      "'s Bot , Allow me to bring joy in Rising's absence with swift, flirtatious responses.";

    displayWithTypingAnimation(chatBox, botName, greeting);
  }

  // Function to simulate typing animation
  function displayWithTypingAnimation(element, name, text) {
    var speed = 50;
    element.innerHTML +=
      '<div class="bot-message"><strong>' + name + ":</strong> ";

    var i = 0;
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }

    type();
    element.innerHTML += "</div>";
    scrollToBottom(element);
  }

  // Function to handle user messages
  function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    var chatBox = document.getElementById("chatBox");

    if (userInput.trim() !== "") {
      chatBox.innerHTML +=
        '<div class="user-message"><strong>Rapunzel:</strong> ' +
        userInput +
        "</div>";

      var botName = "Rising";
      var randomResponses = [
        "I'm a simple chatbot.",
        "Hello there!",
        "How can I help you today?",
        "That's interesting!",
        "Tell me more.",
        "rapunzel So, aside from taking my breath away, what do you do for a living?",
        " If I could rearrange the alphabet, I’d put U and I together.",
        "Hi rapunzel , I’m writing a phonebook. Can I have your number?",
        "rapunzel I ought to complain to Spotify for you not being named this week’s hottest single.",
        "rapunzel Did it hurt when you fell from heaven?",
        "rapunzel You know what you would look really beautiful in? My arms.",
        "rapunzel Do you know what my shirt is made of? Boyfriend material.",
        "rapunzel I’m really glad I just bought life insurance, because when I saw you, my heart stopped.",
        "Do you have a name, or can I just call you ‘mine?’",
        "If I were to ask you out on a date, would your answer be the same as the answer to this question?",
        " Are you wi-fi? Cause I’m totally feeling a connection.",
        "You must be jelly, cause jam don’t shake like that.",
        "Have you been covered in bees recently? I just assumed, because you look sweeter than honey.",
        "Have you been covered in bees recently? I just assumed, because you look sweeter than honey.",
        "I’m glad I remembered to bring my library card. ‘Cause I am totally checking you out!",
        "If you and I were socks, we’d make a great pair!",
        "Are your parents bakers? Because you’re a cutie pie!",
        "Are you a long structure used to restrict the flow of water across rivers and underwater streams? Because daaaaaaaaam! –",
        "Hey, my name’s Microsoft. Can I crash at your place?",
        "Hey, my name’s Microsoft. Can I crash at your place?",
        " Did your license get suspended for driving all these guys crazy?",
        "Life without you is like a broken pencil… pointless.",
        " If nothing lasts forever, will you be my nothing?",
        "You spend so much time in my mind, I should charge you rent.",
        " Can I give you a hug to show you how soft my sweater is?",
        "Are you a volcano? Coz I lava you!",
        "I must be in a museum because you truly are a work of art.",
        "Is your daddy a drug dealer? Because I think you look dope.",
        "You must be a broom, ‘cause you just swept me off my feet.",
        "Are you from Tennessee? Because you’re the only 10 I see!",
        "Hey. I’m doing my thesis on the finer things in life. Can I interview you?",
        "Drake would call you and me God’s Plan.",
        "Is your body from McDonald’s? Cause I’m lovin’ it!",
        "If you were a fruit, you’d be a fineapple",
        " Wouldn’t we look cute on a wedding cake together?",
        "Dinner first, or can we go straight for dessert?",
        "Are you a camera? Because every time I look at you, I smile.",
        "Are you an exam? Because I have been studying you like crazy.",
        " Do you want to pet puppies together one day?",
        "Are you the sun? I’m about to get a sunburn looking at you.",
        "I can’t sleep anymore. Thanks to you, my reality is finally better than my dreams.",
        "I’m going for a walk. Would you hold this for me?",
        " I want to live in your socks, so I can be with you every step of the way. ",
        " If you were a steak, you’d be rare AND well done. ",
        "Do you like raisins? How do you feel about a date? ",
        " I know what you’re thinking: “Sure, he looks nice. But can he ride a unicycle?” ",
        "Would you help me find my puppy? I think he went into that coffee shop.",
        "Do you have a map? I just looked at you and forgot where I was. ",
        "I’d like to start a book club, and with you in it, I know more people would join.",
        "You look like one of my favorite TV characters. Have you seen rapunzel ?",
        ""
      ];

      var randomIndex = Math.floor(Math.random() * randomResponses.length);
      var botResponse = randomResponses[randomIndex];

      displayWithTypingAnimation(chatBox, botName, botResponse);

      document.getElementById("userInput").value = "";
      scrollToBottom(chatBox);
    }
  }

  // Function to scroll to the bottom of the chat box
  function scrollToBottom(element) {
    element.scrollTop = element.scrollHeight;
  }

  // Add an event listener to the "Send" button
  document.getElementById("sendButton").addEventListener("click", sendMessage);

  // Call the botGreeting function when the page loads
  botGreeting();
});
