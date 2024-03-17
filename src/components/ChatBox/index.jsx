import React, { useEffect, useRef, useState } from "react";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import Logo from "../../assets/icons/Logo";
import { AnimatePresence, motion } from "framer-motion";
import { RiSendPlaneFill } from "react-icons/ri";
import { TbPhoto } from "react-icons/tb";
import useForm from "../../hooks/useForm";
import { resizeFile } from "../../utils/Files";
import { URL, alaivoGet, alaivoPost } from "../../utils/Alaivo";
import { RxCross1 } from "react-icons/rx";
import Loader from "./Loader/Loader";
import LogoBig from "../../assets/icons/LogoBig";
import "./style.sass";

const ChatBox = () => {
  const { formData, handleInputForm, setFormData } = useForm();
  const [showChat, setShowChat] = useState(false);
  const [fullWidth, setFullWidth] = useState(false);
  const { messages, getMessages, loading, setLoading, setMessages } = useGetData();
  const container = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let data = { ...formData };
    let res = null;
    if (data.photo) {
      data.photo = await resizeFile(data.photo);
      res = await alaivoPost("apollo/art/chats", JSON.stringify(data), null, false);
    } else {
      data.photo = null;
      res = await alaivoPost("apollo/art/chats", JSON.stringify(data), null, false);
    }
    res = res.data.map((row) => {
      return { ...row };
    });
    console.log(res);
    setLoading(false);
    setTimeout(() => {
      setMessages(res);
    }, 500);
  };
  useEffect(() => {
    if (showChat) getMessages();
  }, [showChat]);

  useEffect(() => {
    if (container.current != null && container) {
      let lastChidlren = container.current.lastElementChild;
      let offsetTop = lastChidlren.offsetTop;
      container.current.scrollTop = offsetTop;
    }
  }, [loading, messages]);

  const handleFullWidth = (e) => {
    setFullWidth(!fullWidth);
  };
  const handleInputFileForm = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
  };
  return (
    <>
      <AnimatePresence>
        {showChat && (
          <motion.div
            className="boxChat_container"
            initial={{ y: "20%", opacity: 0, x: 0 }}
            animate={{
              y: 0,
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            exit={{ x: "100%", opacity: 0 }}
          >
            <div className="header">
              <div className="label">
                <div className="icon">
                  <Logo />
                </div>
                <div className="name">Apollo</div>
              </div>
              <div className="closer">
                <RxCross1
                  className="cross_icon"
                  onClick={() => {
                    setShowChat(false);
                  }}
                />
              </div>
            </div>
            <div className="scroll_content" data-lenis-prevent-wheel ref={container}>
              <div className="chat_bot_profile">
                <div className="picture">
                  <LogoBig />
                </div>
                <div className="title">🤖 Appolo Chatbot 🤖</div>
              </div>
              {messages.map((d, index) => (
                <div className="row" key={index}>
                  <div className={`content_block right`}>
                    {d.photo && (
                      <div className="pic">
                        <img src={URL + d.photo} alt="" />
                      </div>
                    )}
                    <p className={`block_message right`}>{d.question}</p>
                  </div>
                  <div className={`content_block left`}>
                    <p className={`block_message left`}>{d.reponse}</p>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="row">
                  <div className={`content_block right`}>
                    <div className={`block_message right`}>
                      <Loader white size="1.6rem" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <form className="footer" onSubmit={handleSubmit}>
              <input type="text" name="question" className={fullWidth ? "full" : ""} onFocus={handleFullWidth} onBlur={handleFullWidth} onChange={handleInputForm} />
              <label className={`button ${formData.photo ? "on" : ""} ${fullWidth ? "hide" : ""}`} htmlFor="photo">
                <TbPhoto />
                <input type="file" name="photo" id="photo" style={{ display: "none" }} onChange={handleInputFileForm} />
              </label>
              <div className={`button  ${fullWidth ? "hide" : ""}`} onClick={handleSubmit}>
                <RiSendPlaneFill />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="chat_btn"
        onClick={() => {
          setShowChat(true);
        }}
      >
        <div className="iconChat">
          <MdOutlineChatBubbleOutline className="icon" />
        </div>
      </div>
    </>
  );
};

const useGetData = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMessages = async () => {
    setLoading(true);
    let res = await alaivoGet("apollo/art/chats", null, false);
    res = res.data.map((row) => {
      return { ...row };
    });
    setLoading(false);
    setMessages(res);
  };

  return { messages, getMessages, loading, setLoading, setMessages };
};

export default ChatBox;
