import axios from 'axios';
import React from 'react';



class NotesService extends React.Component {
    static executeNotesService() {
        return axios.get("http://localhost:8080/api/notes").then(async function (result){
        return result.data
        
      })
    }
}
    export default NotesService