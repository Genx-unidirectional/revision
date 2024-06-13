import { useEffect, useState } from "react";
import { ImageSchemaType, imageSchema } from "@/types/react";
import cn from "@/lib/utils";
function ImageSlider() {
  const [error, setError] = useState(false);
  const [image, setImage] = useState("0");
  const [data, setData] = useState<ImageSchemaType>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    const fetchImage = async () => {
      const result = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=4",
        { signal: controller.signal }
      );
      if (!result.ok) {
        setError(true);
        setLoading(false);
      }
      const info = await result.json();
      imageSchema.parse(info);
      setData(info);
    };
    fetchImage();
    setLoading(false);
    return () => {
      controller.abort;
    };
  }, []);
  return (
    <div className="w-[300px] relative h-[250px] border border-white rounded-lg overflow-hidden ">
      {data.map((item) => {
        if (item.id !== image) {
          return;
        }
        return (
          <img
            className="h-full w-full"
            src={item.download_url}
            alt={item.author}
          />
        );
      })}
      <div className="flex absolute bottom-2 w-full  gap-2 justify-evenly items-center z-10">
        {data.map((data) => {
          return (
            <button
              onClick={() => setImage(data.id)}
              className={cn(" rounded-full h-4 w-4 bg-slate-400 ", {
                "bg-white": data.id === image,
              })}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
export default ImageSlider;
