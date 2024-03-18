import React from "react";
import { motion } from "framer-motion";
import { URL } from "../../../utils/Alaivo";
import { itemVariants } from "../anime";
import "./style.sass";

const CardSearch = ({
  id = -1,
  titre = "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  type = { nom: "Ancienne" },
  auteur = { nom: "Pppp" },
  datecreation = "XXXX",
  icon = <></>,
  photo = undefined,
  params = "",
  loading = false,
  onClick = () => {},
}) => {
  return (
    <motion.div className="card_container_artwork" variants={itemVariants}>
      {loading ? (
        <div className="loader_card skeleton"></div>
      ) : (
        <>
          <div className="picture">
            <img src={photo ? URL + photo : "/images/1.jpg"} alt="card_artwork" />
          </div>
          <div className="hider_picture"></div>
          <div className="top">
            <div className="title_">{titre}</div>
          </div>
          <div className="bottom">
            <div className="about">
              <div className="category"> {type.nom} </div>
              <div className="date">
                {" "}
                {datecreation} - {auteur.nom}{" "}
              </div>
            </div>
            <div
              className="go_to"
              onClick={() => {
                onClick();
              }}
            >
              {icon}
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default CardSearch;
