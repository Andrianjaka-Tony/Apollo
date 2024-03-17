import React, { useEffect, useState } from "react";
import Input from "../../Input/Input";
import useForm from "../../../hooks/useForm";
import Select from "../../Select/Select";
import { alaivoGet, alaivoPost } from "../../../utils/Alaivo";
import { resizeFile } from "../../../utils/Files";
import { IoCheckmark } from "react-icons/io5";
import { useMyNotifs } from "../../Notif/useNotifs";
import { RxCross1 } from "react-icons/rx";
import "./style.sass";

const FormAddArtwork = ({ closer = () => {} }) => {
  const { formData, handleInputForm } = useForm();
  const { addNotifs, notifs } = useMyNotifs();
  const { categories, origins, genres, types, auteurs } = useGetData();
  let years = [];
  for (let i = 1900; i < new Date().getFullYear() + 1; i++) {
    years.push({
      label: i,
      value: i,
    });
  }
  const [yearsData] = useState(years);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = { ...formData };
    let pictures = [];
    for (let i = 0; i < data.photo.length; i++) {
      pictures.push(await resizeFile(data.photo[i]));
    }
    data.photo = pictures;
    let res = await alaivoPost("apollo/art/oeuvres", JSON.stringify(data), null, false);
    console.log(res);
    addNotifs(res.status.status, res.status.details, 1500);
    if (res.status.status === "ok") {
      closer();
    }
  };

  return (
    <div className="form_add_artwork" data-lenis-prevent-wheel>
      {notifs.map((notif) => notif)}
      <RxCross1 className="cross_icon" onClick={closer} />
      <div className="title"> New Artwork 🪄 </div>
      <div className="subtitle"></div>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div className="row">
          <Input title="Title" name="titre" defaultValue={formData.titre} onChange={handleInputForm} fullWidth type="text" />
          <Input title="Description" name="description" defaultValue={formData.description} onChange={handleInputForm} fullWidth type="text" />
        </div>
        <div className="row">
          <Select title={"Date of creation"} fullWidth optionsType={yearsData} onChange={handleInputForm} name={"datecreation"} />
        </div>

        <div className="row">
          <Input title="Width" name="largeur" defaultValue={formData.width} onChange={handleInputForm} fullWidth type="number" />
          <Input title="Length" name="longueur" defaultValue={formData.length} onChange={handleInputForm} fullWidth type="number" />
        </div>
        <div className="row">
          <Input title="Picture" fullWidth name="photo" type="file" onChange={handleInputForm} defaultValue={formData.photo && formData.photo.length > 0 ? formData.photo[0] : undefined} />
        </div>
        <div className="row">
          <Select title={"Origin"} fullWidth optionsType={origins} onChange={handleInputForm} name={"provenance"} />
          <Select title={"Category"} fullWidth optionsType={categories} onChange={handleInputForm} name={"categorie"} />
        </div>
        <div className="row">
          <Select title={"Type"} fullWidth optionsType={types} onChange={handleInputForm} name={"type"} />
          <Select title={"Gender"} fullWidth optionsType={genres} onChange={handleInputForm} name={"genre"} />
        </div>
        <div className="row">
          <Select title={"Author"} fullWidth optionsType={auteurs} onChange={handleInputForm} name={"auteur"} />
        </div>
        <button className="button__">
          <div className="text">Register</div>
          <div className="icon">
            <IoCheckmark />
          </div>
        </button>
      </form>
    </div>
  );
};

const useGetData = () => {
  const [categories, setcategories] = useState([]);
  const [origins, setorigins] = useState([]);
  const [genres, setgenres] = useState([]);
  const [types, settypes] = useState([]);
  const [auteurs, setauteurs] = useState([]);

  useEffect(() => {
    getcategoriess();
    getorigins();
    getgenres();
    gettypes();
    getauteurs();
  }, []);

  const getcategoriess = async () => {
    let res = await alaivoGet("apollo/art/categories", null, true);
    res = res.data.map((row) => {
      return {
        value: row,
        label: row.nom,
      };
    });
    setcategories(res);
  };
  const getorigins = async () => {
    let res = await alaivoGet("apollo/art/provenances", null, true);
    res = res.data.map((row) => {
      return {
        value: row,
        label: row.nom,
      };
    });

    setorigins(res);
  };

  const getgenres = async () => {
    let res = await alaivoGet("apollo/art/genres", null, true);
    res = res.data.map((row) => {
      return {
        value: row,
        label: row.nom,
      };
    });

    setgenres(res);
  };
  const gettypes = async () => {
    let res = await alaivoGet("apollo/art/types", null, true);
    res = res.data.map((row) => {
      return {
        value: row,
        label: row.nom,
      };
    });

    settypes(res);
  };
  const getauteurs = async () => {
    let res = await alaivoGet("apollo/art/auteurs", null, true);
    res = res.data.map((row) => {
      return {
        value: row,
        label: row.nom,
      };
    });

    setauteurs(res);
  };

  return { categories, origins, types, genres, auteurs };
};

export default FormAddArtwork;
