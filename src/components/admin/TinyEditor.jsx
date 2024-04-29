// import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TinyEditor({onChangeFunc, initialContent}){
  // const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };
  return (
    <>
      <Editor
        id="mceEditor"
        // onInit={(evt, editor) => editorRef.current = editor}
        value={initialContent}
        apiKey='hoqqlw7npahowq30xo8l0q8roke6bq76ks977co0xi4qg7bs'
        onEditorChange={onChangeFunc}
        init={{
          height: 500,
          menubar: false,
          plugins: "advlist anchor autolink autoresize autosave  charmap code codesample directionality emoticons fullscreen help image importcss insertdatetime link linkchecker lists media nonbreaking pagebreak preview quickbars save searchreplace table template tinydrive visualblocks visualchars wordcount",
          // toolbar1: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | indent outdent | wordcount',
          toolbar2: 'table tablecellprops tablecopyrow tablecutrow tabledelete tabledeletecol tabledeleterow tableinsertdialog tableinsertcolafter tableinsertcolbefore tableinsertrowafter tableinsertrowbefore tablemergecells tablepasterowafter tablepasterowbefore tableprops tablerowprops tablesplitcells tableclass tablecellclass tablecellvalign tablecellborderwidth tablecellborderstyle tablecaption tablecellbackgroundcolor tablecellbordercolor tablerowheader tablecolheader',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          // setup: (editor) => {
          //   // editor.on('change', () => {
          //   //   // console.log(editor.getContent())
          //   //   // const newContent = editor.getContent();
          //   //   // let newObj = currentData
          //   //   // newObj[dataFieldName] = newContent
          //   //   // console.log(currentData)
          //   //   // setCurrentData(newObj);
          //   // });
          //   // editor.on('change', ()=>{
          //   //   const content = editor.getContent();
          //   //   onChangeFunc(content)
          //   // });
          // },
        }}
      />
    </>
  );
};
