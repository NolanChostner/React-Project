import React, { Component } from 'react';
import NotesService from '../Api/Notes/NotesService';

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {

            notes:
                [
                    { title: "Learn React", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
                    { title: "Why?", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
                    { title: "Learn CSS", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
                    { title: "I don't want to", content: "Lorem ipsum dolor sit amet consectetur adipisicing." },
                ]
        }
    }
    componentWillMount = async () => {
        this.setState({
            notes: await NotesService.executeNotesService()        })
    }
    render() {
        return (
            <div>
                <h1>Notes for {this.props.match.params.name}</h1>
                <table className="table" >
                    <thead className="thead-dark">
                        <tr>
                            <th>Title</th>
                            <th>Content</th>
                        </tr>
                    </thead>
                    <tbody>


                        {this.state.notes.map(
                            (note, i) =>
                                <tr key={i}>
                                    <td>{note.title}</td>
                                    <td>{note.content}</td>
                                </tr>
                        )
                        }

                    </tbody>
                </table>
            </div>
        );

    }
}


export default Notes; 