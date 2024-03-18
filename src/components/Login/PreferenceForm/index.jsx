import React, { useEffect, useState } from "react";
import { alaivoGet, alaivoPost } from "../../../utils/Alaivo";
import { useNavigate } from "react-router-dom";
import "./style.sass";

const PreferenceForm = () => {
  const [formData, setFormData] = useState({});
  const nav = useNavigate();
  const { genres, categories, palettes, types } = useGetData();
  const [activeStep, setActiveStep] = useState(0);
  const stepCount = 4;

  const submit = async () => {
    let user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      formData.idUser = user.id;
      console.log(formData);
      let res = await alaivoPost("validation/add", JSON.stringify(formData), null, false);
      console.log(res);
      nav("/");
    } else alert("no user found");
  };

  const handleGender = (value) => {
    setFormData({ ...formData, idGenre: value });
  };
  const handleCategory = (value) => {
    setFormData({ ...formData, idCategorie: value });
  };
  const handlePalette = (value) => {
    setFormData({ ...formData, palette: value });
  };
  const handleType = (value) => {
    setFormData({ ...formData, idType: value });
  };

  return (
    <div className="pref_form">
      <div className="title"> Welcome to Apollo</div>
      <div className="subtitle">We want to know more about what do you know</div>
      <div className="step_list">
        {[...Array(stepCount).keys()].map((step, index) => {
          return <div className={`step ${step === activeStep ? "active" : ""}`} key={step}></div>;
        })}
      </div>
      <div className="list">
        {activeStep == 0 &&
          genres.map((genre, index) => (
            <div
              className="block"
              key={index}
              onClick={() => {
                handleGender(genre.value);
                setActiveStep((i) => i + 1);
              }}
            >
              {genre.label}{" "}
            </div>
          ))}
        {activeStep == 1 &&
          categories.map((genre, index) => (
            <div
              className="block"
              key={index}
              onClick={() => {
                handleCategory(genre.value);
                setActiveStep((i) => i + 1);
              }}
            >
              {genre.label}{" "}
            </div>
          ))}
        {activeStep == 2 &&
          palettes.map((genre, index) => (
            <div
              className="block"
              key={index}
              onClick={() => {
                handlePalette(genre.value);
                setActiveStep((i) => i + 1);
              }}
            >
              {genre.label}{" "}
            </div>
          ))}
        {activeStep == 3 &&
          types.map((genre, index) => (
            <div
              className="block"
              key={index}
              onClick={() => {
                handleType(genre.value);
                submit();
              }}
            >
              {genre.label}
            </div>
          ))}
      </div>
      <div
        className="skip"
        onClick={() => {
          if (activeStep + 1 === stepCount) submit();
          else setActiveStep((i) => i + 1);
        }}
      >
        {activeStep + 1 === stepCount ? "Finish" : "Skip"}
      </div>
    </div>
  );
};

const useGetData = () => {
  const [genres, setGenres] = useState([]);
  const [types, setTypes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [palettes, setPalettes] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getGenres();
    getTypes();
    getCategories();
    getPalettes();
  }, []);

  const getGenres = async () => {
    setLoading(true);
    let res = await alaivoGet("apollo/art/genres", null, false);
    res = res.data.map((row) => {
      return { label: row.nom, value: row.id };
    });
    console.log(res);
    setLoading(false);
    setGenres(res);
  };
  const getTypes = async () => {
    setLoading(true);
    let res = await alaivoGet("apollo/art/types", null, false);
    res = res.data.map((row) => {
      return { label: row.nom, value: row.id };
    });
    setLoading(false);
    setTypes(res);
  };

  const getCategories = async () => {
    setLoading(true);
    let res = await alaivoGet("apollo/art/categories", null, false);
    res = res.data.map((row) => {
      return { label: row.nom, value: row.id };
    });
    setLoading(false);
    setCategories(res);
  };

  const getPalettes = async () => {
    setLoading(true);
    let res = await alaivoGet("apollo/art/palettes", null, false);
    res = res.data.map((row) => {
      return { label: row.nom, value: row.id };
    });
    setLoading(false);
    setPalettes(res);
  };

  return { genres, types, categories, palettes };
};

export default PreferenceForm;
