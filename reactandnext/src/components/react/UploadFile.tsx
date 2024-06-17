import { useState } from "react";

function UploadFile() {
  const [src, setSrc] = useState<string>("");
  return (
    <div className="w-[500px] relative h-[400px] flex justify-center items-center bg-white">
      <label className="bg-black text-white p-2 rounded-lg" htmlFor="imgfile">
        Upload
      </label>
      <input
        className="invisible"
        type="file"
        name="imagefile"
        id="imgfile"
        onChange={(e) => setSrc(URL.createObjectURL(e.target.files?.[0]!))}
      />
      {src.length > 0 && (
        <>
          <img
            src={src}
            alt="image"
            className="w-full absolute z-10 h-full object-cover"
          />
          <button
            onClick={() => setSrc("")}
            className="absolute top-0 right-2 text-white font-bold text-3xl bg-transparent z-20"
          >
            X
          </button>
        </>
      )}
    </div>
  );
}
export default UploadFile;
