export const ColorConfiguration = () => {
  return (
    <>
      <h3 className=" text-xl font-semibold mt-8 text-white">Colors</h3>
      <div className="p-6 rounded-md border mt-4 border-dark_border border-opacity-60">
        <p className="text-base font-medium text-muted text-opacity-60">
          <span className="font-semibold text-lg text-white">
            1. Override Colors
          </span>{" "}
          <br />
          For any change in colors : tailwind.config.ts
        </p>
        <div className="py-4 px-5 rounded-md bg-dark_grey mt-8">
          <p className="text-sm text-gray-400 flex flex-col gap-2">
            <span>primary: "#99E39E",</span>
            <span>secondary: "#1DC8CD",</span>
            <span>midnight_text: "#263238",</span>
            <span>muted: "#D8DBDB",</span>
            <span>error: "#CF3127",</span>
            <span>warning: "#F7931A",</span>
            <span>light_grey: "#505050",</span>
            <span>grey: "#F5F7FA",</span>
            <span>dark_grey: "#1E2229",</span>
            <span>border: "#E1E1E1",</span>
            <span>success: "#3CD278",</span>
            <span>section: "#737373",</span>
            <span>darkmode: "#000510",</span>
            <span>darklight: "#0C372A",</span>
            <span>dark_border: "#959595",</span>
            <span>tealGreen: "#477E70",</span>
            <span>charcoalGray: "#666C78",</span>
            <span>deepSlate: "#282C36",</span>
            <span>slateGray: "#2F3543",</span>
          </p>
        </div>
      </div>
      <div className="p-6 rounded-md border mt-4 border-dark_border border-opacity-60">
        <p className="text-base font-medium text-muted text-opacity-60">
          <span className="font-semibold text-lg text-white">
            2. Override Theme Colors
          </span>{" "}
          <br />
          For change , go to : tailwind.config.ts
        </p>
        <div className="py-4 px-5 rounded-md bg-dark_grey mt-8">
          <p className="text-sm text-gray-400 flex flex-col gap-2">
            <span>primary: "#2CDD9B",</span>
            <span>secondary: "#1DC8CD",</span>
          </p>
        </div>
      </div>
    </>
  );
};
