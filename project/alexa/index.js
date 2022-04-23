let recognition = new webkitSpeechRecognition();
let record_text = document.getElementById("record_text");
recognition.onresult = e => {
    var text = e.results[0][0].transcript;
    record_text.innerText = text;
    getRecordVoice(text);
};

const getRecordVoice = (text) => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;

    if (text == "Hi") {
        speech.text = "Hello!";
    } else if (text == "Hay") {
        speech.text = "Hello!";
    } else if (text == "hello") {
        speech.text = "Hi!";
    } else if (text == "how are you") {
        speech.text = "I'm fine! Thanks. How about you?"
    } else if (text == "hey how are you") {
        speech.text = "I'm fine! Thanks.  How about you?"
    } else if (text == "hey what's your name") {
        speech.text = "My name is Harry!"
    } else if (text == "what your name") {
        speech.text = "what's are you doing now"
    } else if (text == "what's your name") {
        speech.text = "My name is Harry!"
    } else if (text == "may I ask you a question") {
        speech.text = "Of course you can. I am ready to answer your question."
    } else if (text == "who made you") {
        speech.text = "I was made by Asadullah Hill Ghalib"
    } else if (text == "Please can you tell me about Asadullah Hil Ghalib") {
        speech.text = "Asadullah Hil Galib is a student. He is studying in Nilphamari technical school and college at class ten! he is a mern stack web application developer!"
    }
    else if (text == "Please can you tell me about Asadullah") {
        speech.text = "Asadullah Hil Galib is a student. He is studying in Nilphamari technical school and college at class ten! he is a mern stack web application developer!"
    }
    else if (text == "Please can you tell me about Asadullah Hil") {
        speech.text = "Asadullah Hil Galib is a student. He is studying in Nilphamari technical school and college at class ten! he is a mern stack web application developer!"
    }
    else if (text == "can you tell me about Asadullah Hil Ghalib") {
        speech.text = "Asadullah Hil Galib is a student. He is studying in Nilphamari technical school and college at class ten! he is a mern stack web application developer!"
    }
    else if (text == "can you tell me about Asadullah") {
        speech.text = "Asadullah Hil Galib is a student. He is studying in Nilphamari technical school and college at class ten! he is a mern stack web application developer!"
    }
    else if (text == "can you tell me about Asadullah Hil") {
        speech.text = "Asadullah Hil Galib is a student. He is studying in Nilphamari technical school and college at class ten! he is a mern stack web application developer!"
    } else if (text == "can you tell me about your creator") {
        speech.text = "My Creator name Is Asadullah Hil Galib. Asadullah Hil Galib is a student. He is studying in Nilphamari technical school and college at class ten! he is a mern stack web application developer!"
    } else if (text == "ok thank you") {
        speech.text = "Thank you so much! Thank you for talking to me"
    } else if (text == "thank you") {
        speech.text = "Thank you so much! Thank you for talking to me"
    } else if (text == "Ok thank's you") {
        speech.text = "Thank you so much! Thank you for talking to me"
    } else if (text == "who is your creator") {
        speech.text = "I was made by Asadullah Hill Ghalib"
    } else if (text == "May I ask you some question") {
        speech.text = "Yea's you can!"
    } else if (text == "can I ask you some question") {
        speech.text = "Yea's you can!"
    }
    else if (text == "May I ask you some questions") {
        speech.text = "Yea's you can!"
    } else if (text == "can I ask you some questions") {
        speech.text = "Yea's you can!"
    } else if (text == "please tell me about the world") {
        speech.text = "world is an ellipsoid with a circumference of about 40,000 km. It is the densest planet in the Solar System. Of the four rocky planets, it is the largest."
    } else if (text == "Please Tell me about the Earth") {
        speech.text = "Earth is an ellipsoid with a circumference of about 40,000 km. It is the densest planet in the Solar System. Of the four rocky planets, it is the largest."
    } else if (text == "Tell me about the world") {
        speech.text = "world is an ellipsoid with a circumference of about 40,000 km. It is the densest planet in the Solar System. Of the four rocky planets, it is the largest."
    } else if (text == "Tell me about the Earth") {
        speech.text = "Earth is an ellipsoid with a circumference of about 40,000 km. It is the densest planet in the Solar System. Of the four rocky planets, it is the largest."
    } else if (text == " Tell me about the world") {
        speech.text = "world is an ellipsoid with a circumference of about 40,000 km. It is the densest planet in the Solar System. Of the four rocky planets, it is the largest."
    } else if (text == "are you know about the world") {
        speech.text = "Yeah. I know!"
    } else if (text == " Tell me about the Earth") {
        speech.text = "Earth is an ellipsoid with a circumference of about 40,000 km. It is the densest planet in the Solar System. Of the four rocky planets, it is the largest."
    } else if (text == "Tell me about the world") {
        speech.text = "world is an ellipsoid with a circumference of about 40,000 km. It is the densest planet in the Solar System. Of the four rocky planets, it is the largest."
    } else if (text == "Tell me about the Earth") {
        speech.text = "Earth is an ellipsoid with a circumference of about 40,000 km. It is the densest planet in the Solar System. Of the four rocky planets, it is the largest."
    } else if (text == "how many country in the world") {
        speech.text = "There are 195 countries in the world today. This total comprises 193 countries that are member states of the United Nations and 2 countries that are non-member observer states: the Holy See and the State of Palestine."
    } else if (text == "please tell me how many country in the world") {
        speech.text = "There are 195 countries in the world today. This total comprises 193 countries that are member states of the United Nations and 2 countries that are non-member observer states: the Holy See and the State of Palestine."
    } else if (text == "please tell me about the World Bank") {
        speech.text = "World Bank, in full World Bank Group, international organization affiliated with the United Nations (UN) and designed to finance projects that enhance the economic development of member states."
    } else if (text == "are you know about Bangladesh") {
        speech.text = "Yeah i know. Bangladesh is a unitary parliamentary constitutional republic based on the Westminster system. "
    } else if (text == "are you know about bangladesh") {
        speech.text = "Bangladesh is a unitary parliamentary constitutional republic based on the Westminster system. "
    } else if (text == "good morning") {
        speech.text = "Good Morning!";
    } else if (text == "goog evening") {
        speech.text = "Good Evening";
    } else if (text == "what are you doing now") {
        speech.text = "Still now i'm talking to you";
    } else if (text == "good afternoon") {
        speech.text = "good afternoon!"
    } else {
        speech.text = "Sorry! I don't understand."
    }
    window.speechSynthesis.speak(speech);
}