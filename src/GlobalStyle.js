import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  scrollbar-width: thin;
  padding:0;
  margin:0;
}
/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 7px;
}
*::-webkit-scrollbar-thumb {
  background-color: #c5baba ;
  border-radius: 20px;
}

    body{
        font-family: 'Roboto', sans-serif;
}



`