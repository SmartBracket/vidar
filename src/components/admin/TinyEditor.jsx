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
          plugins: "a11ychecker advcode advlist advtable anchor autocorrect autolink autoresize autosave casechange charmap checklist code codesample directionality editimage emoticons export footnotes formatpainter fullscreen help image importcss inlinecss insertdatetime link linkchecker lists media mediaembed mentions mergetags nonbreaking pagebreak pageembed permanentpen powerpaste preview quickbars save searchreplace table tableofcontents template tinydrive tinymcespellchecker typography visualblocks visualchars wordcount",
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
