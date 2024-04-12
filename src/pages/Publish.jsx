import { Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Publish = ({ userToken }) => {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [state, setState] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", state);
      formData.append("city", place);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);
      const response = await axios.post(
        "http://localhost:3000/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return userToken ? (
    <form>
      <input
        type="file"
        onChange={(event) => {
          setPicture(event.target.files[0]);
        }}
      />
      <input
        value={title}
        type="text"
        placeholder="titre"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <textarea
        value={description}
        placeholder="description"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      ></textarea>
      <input
        value={brand}
        type="text"
        placeholder="marque"
        onChange={(event) => {
          setBrand(event.target.value);
        }}
      />
      <input
        value={size}
        type="text"
        placeholder="taille"
        onChange={(event) => {
          setSize(event.target.value);
        }}
      />
      <input
        value={color}
        type="text"
        placeholder="couleur"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <input
        value={state}
        type="text"
        placeholder="Etat"
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <input
        value={place}
        type="text"
        placeholder="lieu"
        onChange={(event) => {
          setPlace(event.target.value);
        }}
      />
      <input
        value={price}
        type="number"
        placeholder="prix"
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      />
      <button onClick={handleSubmit}>Ajouter</button>
    </form>
  ) : (
    <Navigate to="/login" />
  );
};
export default Publish;
