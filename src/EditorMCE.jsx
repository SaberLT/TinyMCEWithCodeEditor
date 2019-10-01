import React, { Component } from 'react';
import { Editor } from '@tinymce/tinymce-react';

class EditorMCE extends Component {
    handleEditorChange = e => {
        console.log("Content was updated:", e.target.getContent());
    }

    render() {
        return (
            <Editor 
                initialValue="<p>This is the initial content of the editor</p>"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount',
                        'codesample'
                    ],
                    toolbar: 
                        'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alighjustify | bullist numlist outdent indent | removeformat | codesample |help'
                }}
                onChange={this.handleEditorChange}
                apiKey='pgfo1uj8l2n408hgd7qyt5byjzmsd5olrss3xsaxg0324gte'
            />
        )
    }
}

export default EditorMCE;