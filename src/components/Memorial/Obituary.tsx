import { useEffect, useRef, useState } from "react";
import { useObituary } from "../../hook/useObituary";
import type {
  ObituaryType,
  UpdateObituaryPayload,
} from "../../@types/obituary.type";
import { InputAndSwitch } from "../../shared/InputAndSwitch";
import { Editor } from "@tinymce/tinymce-react";
import type { Editor as TinyMCEEditor } from "tinymce";
import { TINYMCE_KEY } from "../../constant/TinyMCE";

export const Obituary = () => {
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { getObituary, updateObituary } = useObituary();

  const [obituaryData, setObituaryData] = useState<ObituaryType>(
    {} as ObituaryType,
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await getObituary();
      setObituaryData(data);
    };
    fetchData();
  }, []);

  const handleEditorChange = () => {
    if (!editorRef.current) return;

    const content = editorRef.current.getContent();

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      const payload: UpdateObituaryPayload = {
        message: content,
      };

      updateObituary(payload);
    }, 800);
  };

  return (
    <div>
      <InputAndSwitch<ObituaryType, UpdateObituaryPayload>
        data={obituaryData}
        setData={setObituaryData}
        updateSection={updateObituary}
      />

      {obituaryData.isActive && (
        <Editor
          apiKey={TINYMCE_KEY}
          initialValue={obituaryData.message}
          onInit={(_evt, editor) => (editorRef.current = editor)}
          onEditorChange={handleEditorChange}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "preview",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      )}
    </div>
  );
};
