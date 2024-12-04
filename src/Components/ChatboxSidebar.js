import { useNavigate, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

const ChatboxSidebar = ({ toggleProductsWidth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const [shouldPathCalled,setShouldPathCalled]=useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    toggleProductsWidth(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const systemResponses = {
    cart: "Here's your shopping cart. Take a look at what you've picked!",
    login: "Welcome back! Please log into your account to continue.",
    register: "Let's get you registered for a wonderful shopping experience.",
    detail: "Here it is - your Black T-shirt!",
    products: "Check out all these amazing products!",
    history: "Here's your order history!",
    status: "Check the status here!",
    payment: "Almost there! Make your payment here to complete the purchase.",
    red: "Here's your stunning Red T-shirt!",
    gray: "Here's your Gray T-shirt",
    jeans: "Here's your jeans",
    shoes:"Checkout these amazing shoes!",
    basket:"A multipurpose basket is a good choice to have",
    watch:"Check this amazing watch!",
    bag:"Here's your versatile bag – perfect for any occasion!",
    default: "How can I assist you further?",
  };

  const commands = [
    { command: "cart", action: "cart" },
    { command: "login", action: "login" },
    { command: "register", action: "register" },
    { command: "black", action: "detail" },
    { command: "products", action: "products" },
    { command: "history", action: "history" },
    { command: "status", action: "status" },
    { command: "payment", action: "payment" },
    { command: "red", action: "red" },
    { command: "gray", action: "gray" },
    { command: "jeans", action: "item/jeans" },
    { command: "watch", action: "item/watch" },
    { command: "shoes", action: "item/shoes" },
    { command: "bag", action: "item/bag" },
  ];

  const parseUserInput = (input) => {
    const normalizedInput = input.trim().toLowerCase();
    const command = commands.find((cmd) =>
      normalizedInput.includes(cmd.command)
    );
    return command ? command.action : null;
  };

  // Map command action to response key for systemResponses
const getResponseKey = (command) => {
  switch (command) {
    case "item/jeans":
      return "jeans";
    case "item/watch":
      return "watch";
    case "item/shoes":
      return "shoes";
    case "item/bag":
      return "bag";
    // Add other specific mappings here if needed
    default:
      return command;
  }
};

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage = { text: input, sender: "user" };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput("");

      const command = parseUserInput(input);
      if (command) {
        navigate(`/${command}`);
      }

      const responseKey = getResponseKey(command);

      const responseText =
        systemResponses[responseKey] || systemResponses["default"];
      const systemResponse = { text: responseText, sender: "system" };

      setMessages((prevMessages) => [...prevMessages, systemResponse]);
      setShouldPathCalled(false);
    }
  };

  const handleInitialMessage = () => {
    if (isFirstOpen) {
      const initialMessage = {
        text: systemResponses["default"],
        sender: "system",
      };
      setMessages([initialMessage]);
      setIsFirstOpen(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      handleInitialMessage();
    }
  }, [isOpen]);

  useEffect(() => {
    if(shouldPathCalled) {
      let text=location.pathname.substring(1);
      if (location.pathname.startsWith('/item/')) {
        text = location.pathname.split('/').pop();
      }
    // console.log(text);
    const responseText =
        systemResponses[text] || systemResponses["default"];
        const systemResponse = { text: responseText, sender: "system" };

      setMessages((prevMessages) => [...prevMessages, systemResponse]);
    }else {
      setShouldPathCalled(true);
    }
  }, [location.pathname]);

  useEffect(()=> {
    toggleSidebar();
  },[]);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`fixed ${
          isOpen ? "top-2" : "bottom-5"
        } right-2 bg-red-500 hover:bg-red-600 text-white py-2 px-2 rounded-md shadow-lg focus:outline-none z-[100]`}
      >
        {isOpen ? (
          <XCircleIcon className="h-6 w-6 text-white text-bold" aria-hidden="true" />
        ) : (
          "Open Assistant"
        )}
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">AI Ecommerce</h2>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`py-2 px-4 rounded-lg ${
                    message.sender === "user"
                      ? "bg-blue-100 text-right"
                      : "bg-gray-100 text-left"
                  }`}
                >
                  {message.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>
          <div className="p-4 border-t">
            <form onSubmit={handleSendMessage} className="flex">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="p-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-r-md focus:outline-none"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatboxSidebar;
