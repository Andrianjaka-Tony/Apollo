import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { SiGooglelens } from "react-icons/si";
import useForm from "../../../hooks/useForm";
import { motion } from "framer-motion";
import LensBorderIcon from "../../../assets/icons/LensBorderIcon";
import { alaivoGet, alaivoPost } from "../../../utils/Alaivo";
import { resizeFile } from "../../../utils/Files";
import "./style.sass";

const SearchBar = ({ setData = (data) => {}, setLoading }) => {
  const { formData, handleInputForm, setFormData } = useForm();
  const [imgSearch, setImgSearch] = useState(undefined);

  const handleInputFileForm = async (e) => {
    if (e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
      // tode tadiavina
      setImgSearch(URL.createObjectURL(e.target.files[0]));
      let base64 = await resizeFile(e.target.files[0]);

      setLoading(true);
      let res = await alaivoPost("apollo/art/oeuvre/search", base64, null, false);
      setLoading(false);
      setData(res);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setLoading(true);
    let res = await alaivoGet("apollo/art/oeuvre/theme?theme=" + formData.search, null, false);
    console.log(res);
    setLoading(false);
    setData(res.data);
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
      {formData.img && (
        <div className="photo_lens">
          <LensBorderIcon />
          <label className="picture_lens" htmlFor="img">
            <img src={imgSearch} alt="" />
          </label>
        </div>
      )}
    </motion.div>
  );
};

export default SearchBar;
