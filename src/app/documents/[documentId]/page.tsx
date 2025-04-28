import Editor from "./editor";

function Document() {
  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <div className="pt-[114px] print:pt-0">
        <Editor />
      </div>
    </div>
  );
}

export default Document;
