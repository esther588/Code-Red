const messages = {};
messages[0] = "One small positive thought can change your whole day.";
messages[1] = "Believe that life is worth living and your belief will help create the fact.";
messages[2] = "Don’t focus on negative things; focus on the positive, and you will flourish.";
messages[3] = "Virtually nothing is impossible in this world if you just put your mind to it and maintain a positive attitude.";
messages[4] = "It’s most important that you surround yourself with positivity always, and have it in your mind at all times.";
messages[5] = "I will succeed today.";
messages[6] = "I deserve to feel joy.";
messages[7] = "I'm worthy of love.";
messages[8] = "I’m calm, happy, and content.";
messages[9] = "I’m allowed to take time to heal.";
messages[10] = "I choose not to criticize myself or others around me.";
messages[11] = "I’m in charge of my life and no one will dictate my path besides me.";
messages[12] = "I am enough.";
messages[13] = "I can do anything I put my mind to.";
messages[14] = "My contributions to the world are valuable.";
messages[15] = "My body is perfect in the way it’s intended to be.";
messages[16] = "Negative thoughts only have the power I allow them.";
messages[17] = "My needs and wants are important.";
messages[18] = "I am powerful and  can do anything I put my mind to.";
messages[19] = "Remember to live in gratitude for another day to rise.";
messages[20] = "I am not alone.";

var min = 0;
var max = 20;
var randIndex = Math.floor(Math.random() * (max - min + 1)) + min;

document.getElementById("message").innerHTML = messages[randIndex];