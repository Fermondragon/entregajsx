import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import CardProduct from "../../components/CardProduct/CardProduct";

const DetailPage = () => {
  const [char, setChar] = useState({});
  let { id } = useParams();

  // console.log(char);

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then((json) =>
      setChar(json.data)
    );
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {char.id ? <CardProduct char={char} /> : null}
    </div>
  );
};

export default DetailPage;