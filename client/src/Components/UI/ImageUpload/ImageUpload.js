import React, { useRef, useState, useEffect } from "react";
import "./ImageUpload.css";
import { Button, Spinner } from "reactstrap";
import { validateImage } from "./validateImage";
import AsyncButton from "../AsyncButton/AsyncButton";

const ImageUpload = (props) => {
  const imageRef = useRef();
  const [imageurl, setImageUrl] = useState(
    props.defaultImage ? props.defaultImage : require("./default-image.png")
  );
  const [error, setError] = useState("");
  const [validty, setValidity] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const drop = document.querySelectorAll(".imagePreview");
    drop.forEach((el) => {
      if (props.editable === false) {
        el.style.cursor = "no-drop";
      } else {
        el.addEventListener("dragover", (e) => {
          e.preventDefault();
          el.classList.add("dotted");
        });
        ["dragleave", "dragend"].forEach((type) =>
          el.addEventListener(type, (e) => {
            el.classList.remove("dotted");
          })
        );

        el.addEventListener("drop", (e) => {
          e.preventDefault();
          if (e.dataTransfer.files.length) {
            imageChange({ target: e.dataTransfer });
            el.classList.remove("dotted");
          }
        });
      }
    });
  }, []);

  useEffect(() => {
    props.onChange(imageurl, validty, error);
  }, [imageurl, validty, error]);

  const imageChange = (e) => {
    if (props.editable !== false) {
      if (e.target.files[0] !== undefined) {
        setLoading(true);
        setValidity(validateImage(e.target.files[0].name));
        if (!validateImage(e.target.files[0].name)) {
          setError("Choose only .jpeg / .jpg / .png / .jfif / .webp");
          setLoading(false);
          return setValidity(false);
        } else if (props.sizeLimit) {
          if (e.target.files[0].size > parseInt(props.sizeLimit) * 10000) {
            if (props.compress) {
              const reRender = (image) => {
                setImageUrl(image);
                setLoading(false);
              };
              return compressImage(
                [e.target.files[0]],
                { size: props.sizeLimit ? parseInt(props.sizeLimit) : 1 },
                reRender
              );
            } else {
              setError("Size should be within " + props.sizeLimit + " MB");
              setLoading(false);
              setValidity(false);
              return;
            }
          }
        }
        // if (e.target.files[0] !== undefined) {
        console.log("after compress");
        let image = e.target.files[0];
        var fd = new FileReader();
        fd.readAsDataURL(image);
        fd.onload = (e) => {
          setImageUrl(e.target.result);
          setLoading(false);
        };
      } else {
        setValidity(false);
        setError("No file Choosen");
        setImageUrl(
          props.defaultImage
            ? props.defaultImage
            : require("./default-image.png")
        );
      }
    }
  };

  const handleClick = () => {
    imageRef.current.click();
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
      }}
    >
      {props.needPreview ? (
        <div className="imagePreview">
          {loading ? (
            props.defaultImage ? (
              props.defaultImage
            ) : (
              <img
                src={
                  props.defaultImage
                    ? props.defaultImage
                    : require("./default-image.png")
                }
                alt="preview"
                className={"image " + props.className + " skeleton-loading"}
                style={{
                  width: "50px",
                  height: "50px",
                  ...props.style,
                }}
              />
            )
          ) : (
            <img
              src={
                props.image === null
                  ? props.defaultImage
                    ? props.defaultImage
                    : require("./default-image.png")
                  : props.image
              }
              alt="preview"
              className={"image " + props.className}
              style={{
                width: "50px",
                height: "50px",
                ...props.style,
              }}
            />
          )}
        </div>
      ) : null}
      <br />
      <input
        type="file"
        ref={imageRef}
        style={{ display: "none" }}
        onChange={(event) => imageChange(event)}
      />
      {props.editable !== false ? (
        <AsyncButton
          loading={loading}
          color="success"
          type="button"
          onClick={handleClick}
        >
          <p style={{ color: "white", margin: 0 }}>Upload Image</p>
        </AsyncButton>
      ) : null}
      <br />
    </div>
  );
};

export default ImageUpload;

// size limit in MB

// Compress Image

const Compress = require("compress.js");
const compress = new Compress();

export const compressImage = async (files, options, callBack) => {
  compress
    .compress(files, {
      size: options.size ? options.size : 2, // the max size in MB, defaults to 2MB
      quality: options.quality ? options.quality : 0.75, // the quality of the image, max is 1,
      maxWidth: 1920, // the max width of the output image, defaults to 1920px
      maxHeight: 1920, // the max height of the output image, defaults to 1920px
      resize: options.resize !== undefined ? options.resize : false, // defaults to true, set false if you do not want to resize the image width and height
    })
    .then((data) => {
      // console.log(data[0].prefix + data[0].data);
      callBack(data[0].prefix + data[0].data);
      // callBack([...data]);
      //   return [...data];
    });
};
