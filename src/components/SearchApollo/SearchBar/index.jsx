import React from "react";
import { GoSearch } from "react-icons/go";
import { SiGooglelens } from "react-icons/si";
import useForm from "../../../hooks/useForm";
import { motion } from "framer-motion";
import "./style.sass";

const SearchBar = ({}) => {
  const { formData, handleInputForm, setFormData } = useForm();

  const handleInputFileForm = (e) => {
    if (e.target.files.length > 0) setFormData((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
    // tode tadiavina
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <motion.div
      className="search_bar_container"
      initial={{ y: "30%", opacity: 0 }}
      animate={{
        y: "0%",
        opacity: 1,
        transition: {
          delay: 1,
          duration: [1, 0.18, 0.2, 0.79],
          ease: "easeInOut",
        },
      }}
    >
      <form className="search_bar" action="/" onSubmit={handleSubmit}>
        <div className="search_icon" onClick={handleSubmit}>
          <GoSearch />
        </div>
        <input type="text" name="search" placeholder="What kind of artwork are you interested in?" onChange={handleInputForm} />
        <label className="lens_icon" htmlFor="img">
          <SiGooglelens />
          <input type="file" name="img" id="img" style={{ display: "none" }} onChange={handleInputFileForm} />
        </label>
      </form>
    </motion.div>
  );
};

export default SearchBar;
