import Editor from "./editor";
import { Ruler } from "./ruler";
import { Toolbar } from "./toolbar";

function Document() {
  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <Ruler />
      <div className="fixed inset-x-0 top-0 z-10 flex flex-col gap-y-2 bg-[#FAFBFD] px-4 pt-2 print:hidden">
        <Toolbar />
      </div>
      <div className="pt-[114px] print:pt-0">
        <Editor />
      </div>
    </div>
  );
}

export default Document;
