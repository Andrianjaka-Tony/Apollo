import React, { useEffect, useState } from "react";
import LogoBig from "../../../assets/icons/LogoBig";
import RowInput from "../RowInput/RowInput";
import UseHandleForm from "./UseHandleForm";
import { AnimatePresence } from "framer-motion";
import Select from "../../Select/Select";
import { alaivoGet, alaivoPost } from "../../../utils/Alaivo";
import { resizeFile } from "../../../utils/Files";
import { useMyNotifs } from "../../Notif/useNotifs";
import "./FormSignUp.sass";
import useIdentity from "../../../hooks/useIdentity";
import Modal from "../../Modal";
import PreferenceForm from "../PreferenceForm";

const FormSignUp = ({ go = () => {} }) => {
  const { profiles } = useGetData();
  const { addNotifs, notifs } = useMyNotifs();
  const [loading, setLoading] = useState(false);
  const { signUp } = useIdentity(addNotifs);
  const [showPref, setShowPref] = useState(false);
  const stepCount = 4;
  const handleSubmit = async (formData) => {
    let data = { ...formData };
    data.pdp = await resizeFile(data.pdp);
    setLoading(true);
    let res = await signUp(data, "/");
    if (res) {
      //
      addNotifs("ok", "Account created successfully");
      setShowPref(true);
    }
  };
  const { backStep, formData, nextStep, moveStep, handleForm, handleInputForm, step } = UseHandleForm(stepCount, [null, null, null, handleSubmit]);
  const [genders] = useState([
    { label: "Homme", value: 0 },
    { label: "Femme", value: 1 },
  ]);

  return (
    <div className="sign_up_form">
      <AnimatePresence>
        {showPref && (
          <Modal>
            <PreferenceForm />
          </Modal>
        )}
      </AnimatePresence>
      {notifs.map((map) => map)}
      <div className="logo">
        <LogoBig />
      </div>

      <div className="title">Sign up</div>
      <div className="subtitle">Come with us in this incredible journey.</div>
      <div className="slider">
        {[...Array(stepCount).keys()].map((ind) => (
          <div
            key={ind}
            className={`slide ${step === ind + 1 ? "slide_on" : ""}`}
            onClick={() => {
              moveStep(ind + 1);
            }}
          ></div>
        ))}
      </div>
      <form action="" method="post" onSubmit={handleForm}>
        {step === 1 ? (
          <>
            <RowInput title="Your email" type="email" value={formData.email} id="email" name="email" fullWidth onChange={handleInputForm} />
            <RowInput title="Your password" type="password" required value={formData.password} id="password" name="password" fullWidth onChange={handleInputForm} />
            <div className="button">
              <button>Next</button>
            </div>
          </>
        ) : (
          ""
        )}
        {step === 2 ? (
          <>
            <RowInput title="Name" type="text" value={formData.name} id="name" name="name" fullWidth onChange={handleInputForm} />
            <RowInput title="Address" type="text" value={formData.address} id="address" name="address" fullWidth onChange={handleInputForm} />
            <RowInput title="Date of birth" type="date" value={formData.dtn} id="dtn" name="dtn" fullWidth onChange={handleInputForm} />
            <RowInput title="Tel" type="tel" value={formData.telephone} id="telephone" name="telephone" fullWidth onChange={handleInputForm} />
            <div className="button">
              <button>Next</button>
            </div>
          </>
        ) : (
          ""
        )}
        {step === 3 ? (
          <>
            <Select title="Profil" optionsType={profiles} id="profil" name="profil" fullWidth onChange={handleInputForm} />
            <Select title="Gender" optionsType={genders} id="gender" name="gender" fullWidth onChange={handleInputForm} />

            <div className="button">
              <button>Next</button>
            </div>
          </>
        ) : (
          ""
        )}
        {step === 4 ? (
          <>
            <RowInput title="Picture" type="file" value={formData.pdp && formData.pdp.length > 0 ? formData.pdp[0] : undefined} id="pdp" name="pdp" fullWidth onChange={handleInputForm} />
            <div className="button">
              <button>Register</button>
            </div>
          </>
        ) : (
          ""
        )}

        <div className="sign_up_link">
          <div className="text">Already have an account ?</div>
          <div className="link" onClick={go}>
            Sign in.
          </div>
        </div>
      </form>
    </div>
  );
};

const useGetData = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProfiles();
  }, []);

  const getProfiles = async () => {
    setLoading(true);
    let res = await alaivoGet("apollo/art/profiles", null, false);
    res = res.data.map((row) => {
      return { label: row.nom, value: row };
    });
    setLoading(false);
    setProfiles(res);
  };

  return { profiles, loading, getProfiles, setProfiles };
};

export default FormSignUp;
