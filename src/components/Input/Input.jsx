import React, { useEffect, useState } from "react";
import Checkbox from "./Checkbox/Checkbox";
import "./Input.sass";

/**
 * Represents an input configuration object.
 * @typedef {Object} InputConfig
 * @property {"text"|"password"|"email"|"number"|"tel"|"date"|"time"|"datetime-local"|"search"|"url"|"month"|"time"} [type="text"] - The type of input (e.g., "text", "input").
 * @property {string} [placeholder=""] - Placeholder text for the input field.
 * @property {string} [defaultValue=""] - Default value for the input field.
 * @property {string} [title=""] - Title attribute for the input field.
 * @property {string} [name=""] - Name attribute for the input field.
 * @property {Function} [onChange=(e) => {}] - Function to handle onChange event.
 * @property {boolean} [disabled=false] - Whether the input field is disabled.
 * @property {RegExp | null} [pattern=null] - Regular expression pattern for input validation.
 * @property {boolean} [required=false] - Whether the input field is required.
 * @property {boolean} [fullWidth=false] - Whether the input field should span the full width.
 * @property {string} [splitterTextArea="\\n"] - Splitter for text areas.
 * @property {number} [rows=10] - Number of rows for text areas.
 * @property {Function} [constraint=(val) => { return true; }] - Function to validate input.
 */
/**
 *
 * @param {InputConfig} props
 * @returns
 */
function Input(props) {
  const {
    type = "text",
    placeholder = "",
    defaultValue = "",
    title = "",
    name = "",
    onChange = (e) => {},
    disabled = false,
    pattern = null,
    required = false,
    fullWidth = false,
    splitterTextArea = "\\n",
    rows = 10,
    constraint = (val) => true,
  } = props;

  const [value, setValue] = useState(defaultValue);
  const [fileLoaded, setFileLoaded] = useState(false);
  const [filePreview, setFilePreview] = useState("");
  const handleValue = (e) => {
    setValue(e.target.value);
    onChange(e);
  };

  const handleValueFile = (e) => {
    setFileLoaded(true);
    if (e.target.files.length > 0) {
      let pathFileLoaded = URL.createObjectURL(e.target.files[0]);
      setFilePreview(pathFileLoaded);
    }
    onChange({
      target: {
        value: e.target.files,
        name: e.target.name,
        type: "file",
      },
    });
  };

  const DefaultvalueFile = () => {
    if (type === "file" && defaultValue !== "" && defaultValue) {
      let pathFileLoaded = URL.createObjectURL(defaultValue);
      setFilePreview(pathFileLoaded);
    } else setFileLoaded(false);
  };

  useEffect(() => {
    setValue(defaultValue);
    if (type === "file") DefaultvalueFile();
    else onChange({ target: { value: defaultValue, name: name } });
  }, [defaultValue]);

  const handleNumeric = (e) => {
    if (isNaN(+e.target.value)) return "";
    if (constraint(+e.target.value)) {
      setValue(e.target.value);
      onChange(e);
    }
  };

  const handleTextArea = (e) => {
    let rows = e.target.value.split("\n");
    let newText = "";
    rows.forEach((row) => (newText += row + splitterTextArea));
    // use this for the default split .replace(/\\n/g, "\n")
    return { target: { value: newText, name: e.target.name } };
  };

  const isDateOn = () => {
    if (type === "date" || type === "month" || type === "datetime-local" || type === "time") return true;
    else return false;
  };
  const formateDateValue = (value) => {
    if (type === "date") return value.split("T")[0];
    else if (type === "datetime-local") return value.replace(":00.000+00:00", "");
    else return value;
  };
  return (
    <>
      {type === "file" ? (
        <div className={`input_ ${fullWidth ? "fullwidth" : ""}`}>
          <label htmlFor={name}>{title}</label>
          <label htmlFor={name} className="label_file_container">
            {!fileLoaded ? (
              <>
                <div className="icon">
                  <PictureIcon />
                </div>
                <div className="span"> Choose a file... </div>{" "}
              </>
            ) : (
              <>
                <div className="add_file">
                  <PictureIcon />
                </div>
                <img src={filePreview} alt="" id={title + "_" + name} />
              </>
            )}
          </label>
          <input
            style={{ display: "none" }}
            autoComplete="true"
            type={type}
            multiple
            accept="image/*"
            name={name}
            id={name}
            onChange={handleValueFile}
            placeholder={placeholder}
            // files={null}
            disabled={disabled}
          />
        </div>
      ) : type === "textarea" ? (
        <>
          <div className={`input_ ${fullWidth ? "fullwidth" : ""}`}>
            <label htmlFor={name}>{title}</label>
            <textarea
              name={name}
              autoComplete="true"
              id={name}
              placeholder={placeholder}
              rows={rows}
              onChange={(e) => {
                onChange(handleTextArea(e));
              }}
              disabled={disabled}
              defaultValue={value}
            ></textarea>
          </div>
        </>
      ) : type === "checkbox" ? (
        <>
          <Checkbox name={name} onChange={onChange} fullWidth={fullWidth} title={title} disabled={disabled} required={required} constraint={constraint} defaultValue={defaultValue} />
        </>
      ) : (
        <div className={`input_ ${fullWidth ? "fullwidth" : ""}`}>
          <label htmlFor={name}>{title}</label>
          {isDateOn() && (
            <label htmlFor={name} className="icon_calendar">
              <CalendarIcon />
            </label>
          )}

          <input
            autoComplete="true"
            type={type}
            name={name}
            required={required}
            id={name}
            pattern={pattern ? pattern : undefined}
            onChange={type === "number" ? handleNumeric : handleValue}
            placeholder={placeholder}
            value={isDateOn ? formateDateValue(value) : value}
            disabled={disabled}
            style={{ paddingRight: type === "date" ? "0.9rem" : "auto" }}
          />
        </div>
      )}
    </>
  );
}

const CalendarIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21.086" height="18.547" viewBox="0 0 21.086 18.547">
      <g id="calendar" transform="translate(0.5 -30.17)">
        <path
          id="Tracé_326"
          data-name="Tracé 326"
          d="M20.586,31.79V48.346a.664.664,0,0,1-.371.35q-8.319.041-16.638,0a.555.555,0,0,1-.35-.35q-.031-1.05-.021-2.1-1.668.01-3.336-.021a.664.664,0,0,1-.371-.35v-.494a10.836,10.836,0,0,0,2.739-4.242,15.687,15.687,0,0,0,.906-4.283q.051-2.579.124-5.148a.637.637,0,0,1,.309-.268q1.688-.031,3.377-.021-.01-.433.021-.865a.667.667,0,0,1,.927-.309.455.455,0,0,1,.227.227,3.9,3.9,0,0,1,.062.947h3.089q-.01-.433.021-.865a.667.667,0,0,1,.927-.309.455.455,0,0,1,.227.227,3.9,3.9,0,0,1,.062.947h3.13q-.01-.433.021-.865a.667.667,0,0,1,.927-.309.455.455,0,0,1,.227.227,3.9,3.9,0,0,1,.062.947q1.668-.01,3.336.021A.664.664,0,0,1,20.586,31.79Zm-16.144.865H6.954q-.01.433.021.865a.667.667,0,0,0,.927.309.455.455,0,0,0,.227-.227,3.9,3.9,0,0,0,.062-.947h3.089q-.01.433.021.865a.667.667,0,0,0,.927.309.455.455,0,0,0,.227-.227,3.9,3.9,0,0,0,.062-.947h3.13q-.01.433.021.865a.667.667,0,0,0,.927.309.455.455,0,0,0,.227-.227,3.9,3.9,0,0,0,.062-.947h2.471v2.471H4.442Zm0,3.707H19.31a13.712,13.712,0,0,1-2.615,7.866l-.68.762q-7.228.041-14.456,0a13.938,13.938,0,0,0,2.615-6.034A16.645,16.645,0,0,0,4.442,36.361ZM19.31,42.251q.062,2.6.041,5.23H4.442V46.245q6.034.01,12.067-.021a6.158,6.158,0,0,0,1.421-1.5A12.084,12.084,0,0,0,19.31,42.251Z"
          transform="translate(0 0)"
          fill="#5D5C5C"
          fillRule="evenodd"
          opacity="0.991"
        />
      </g>
    </svg>
  );
};

const PictureIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="83.943" height="77.066" viewBox="0 0 83.943 77.066">
      <defs>
        <linearGradient id="linear-gradient" y1="0.042" x2="0.812" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" />
          <stop offset="0" stopColor="#f72222" />
          <stop offset="1" stopColor="#2f79e8" />
        </linearGradient>
      </defs>
      <g id="image-gallery" transform="translate(0.5 -41.446)">
        <g id="Groupe_188" data-name="Groupe 188" transform="translate(13.436 41.446)">
          <path
            id="Tracé_323"
            data-name="Tracé 323"
            d="M154.507,47.029V92.115a7.614,7.614,0,0,1-5.41,5.328q-29.85.244-59.678-.164a6.926,6.926,0,0,1-4.837-5.492q-.164-22.215,0-44.431A7.2,7.2,0,0,1,89.746,41.7q29.34-.407,58.694-.164A7.068,7.068,0,0,1,154.507,47.029ZM91.55,45.061q28.036-.041,56.071.082a3.335,3.335,0,0,1,3.2,2.705q.164,16.149,0,32.3Q143,70.934,135,61.866a5.772,5.772,0,0,0-7.46,1.066Q120.915,71.011,114.175,79q-2.832-2.791-5.738-5.492a6.489,6.489,0,0,0-5.246-.328,8.552,8.552,0,0,0-1.64,1.148L88.189,87.689q-.164-19.838,0-39.676A3.8,3.8,0,0,1,91.55,45.061Zm39.84,19.51a2.211,2.211,0,0,1,2.213,1.148l17.215,20.166a44.659,44.659,0,0,1,0,5.41,3.714,3.714,0,0,1-2.541,2.541q-28.773.164-57.547,0a4.816,4.816,0,0,1-1.967-1.312Q96.8,84.4,104.994,76.458a2.05,2.05,0,0,1,1.476.164l6.722,6.722a2.432,2.432,0,0,0,2.131,0q7.589-8.908,15-17.953A4.331,4.331,0,0,1,131.39,64.572Z"
            transform="translate(-84.5 -41.446)"
            fillRule="evenodd"
            opacity="0.959"
            fill="url(#linear-gradient)"
          />
        </g>
        <g id="Groupe_189" data-name="Groupe 189" transform="translate(23.974 51.943)">
          <path
            id="Tracé_324"
            data-name="Tracé 324"
            d="M154.963,105.479q6.272-.161,7.788,5.9.561,6.321-5.492,8.116-6.674.78-8.443-5.656Q148.3,106.981,154.963,105.479Zm-.164,3.771a4.857,4.857,0,0,0-1.885,1.476,3.455,3.455,0,0,0,1.23,4.837q4.2,1.383,5.082-2.951Q158.609,108.839,154.8,109.25Z"
            transform="translate(-148.779 -105.475)"
            fillRule="evenodd"
            opacity="0.949"
            fill="url(#linear-gradient)"
          />
        </g>
        <g id="Groupe_190" data-name="Groupe 190" transform="translate(-0.5 68.373)">
          <path
            id="Tracé_325"
            data-name="Tracé 325"
            d="M62.129,255.826H59.014q-27.5-7.483-55.088-14.838A7.27,7.27,0,0,1-.5,235.824v-2.951q3.559-13.086,7.132-26.232,1.718-1.985,3.279.164a4.14,4.14,0,0,1,0,1.64L3.189,233.528a3.472,3.472,0,0,0,1.23,3.525,26.3,26.3,0,0,0,4.427,1.476q25.8,6.961,51.645,13.69a3.573,3.573,0,0,0,2.869-1.476q1.787-5.608,3.279-11.313a1.842,1.842,0,0,1,3.443,1.312q-1.481,5.6-3.115,11.149A7.56,7.56,0,0,1,62.129,255.826Z"
            transform="translate(0.5 -205.687)"
            fillRule="evenodd"
            opacity="0.948"
            fill="url(#linear-gradient)"
          />
        </g>
      </g>
    </svg>
  );
};

export default Input;
