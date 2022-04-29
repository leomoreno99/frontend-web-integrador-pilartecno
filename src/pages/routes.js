import {Form} from "./form/Form";

import { Routes, Route } from 'react-router-dom';
import {List} from "./list/List";
import { styled } from "@mui/material";
import { Box } from "@mui/system";

const ContainerStyles =  styled(Box)`
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 150px;
`

const Routess = () => {
  return(
    <ContainerStyles>
      <Routes>
        <Route path={"/addPlace"} element={<Form />} />
        <Route path={"/editPlace"} element={<Form />} />
        <Route exact path={"/"} element={<List />} />
      </Routes>
    </ContainerStyles>
  )

}

export default Routess;