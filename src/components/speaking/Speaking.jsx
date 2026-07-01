import { useEffect, useRef, useState } from "react";
import css from "./Speaking.module.css";

const Speaking = () => {
  const recognitionRef = useRef(null);
  const [words, setWords] = useState("");
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition();

    // recognition.lang = "en-US";
    // recognition.lang = "uk-UA";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.onerror = (event) => {
      console.error(event.error);
      setIsListening(false);
    };
    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
    recognition.onresult = (event) => {
      const spoken = event.results[0][0].transcript;

      console.log(spoken);
      console.log(spoken.confidence);
      setWords(spoken);
        // if (spoken.toLowerCase().includes("cat")) {
        //   alert("Correct!");
        // } else {
        //   alert("Try again");
        // }
    };

    recognitionRef.current = recognition;
  }, []);

  const startListening = () => {
    recognitionRef.current?.start();
  };

  return (
    <div>
      <select
        onChange={(e) => {
          recognitionRef.current.lang = e.target.value;
        }}
      >
        <option value="en-US">English</option>
        <option value="fr-FR">French</option>
        <option value="uk-UA">Ukrainian</option>
      </select>
      <button onClick={startListening}>
        {isListening ? "Listening" : "Speak"}
      </button>
      <p>You said: {words}</p>
    </div>
  );
};

export default Speaking;
