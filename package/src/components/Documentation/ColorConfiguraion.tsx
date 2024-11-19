export const ColorConfiguration = () => {
    return (
        <>
            <h3 className=" text-xl font-semibold mt-8 text-white" >Colors</h3>
            <div className="p-6 rounded-md border mt-4 border-border dark:border-dark_border">
                <p className="text-base font-medium text-muted text-opacity-60" ><span className="font-semibold text-lg text-white">1. Override Colors</span> <br />
                    For any change in colors : tailwind.config.ts</p>
                <div className="py-4 px-5 rounded-md bg-black mt-8">
                    <p className="text-sm text-gray-400 flex flex-col gap-2">
                      <span>primary: "#2CDD9B",</span>
                      <span>darkprimary: "#26d594",</span>
                      <span>secondary: "#1DC8CD",</span>
                      <span>midnight_text: "#263238",</span>
                      <span>muted: "#8D97B7",</span>
                      <span>error: "#FF4D7E",</span>
                      <span>warning: "#FF6A5B",</span>
                      <span>light_grey: "#E9ECEF",</span>
                      <span>grey: "#F5F7FA",</span>
                      <span>border: "#E1E1E1",</span>
                      <span>success: "#3cd278",</span>
                      <span>darkmode: "#081738",</span>
                      <span>darklight: "#000f30",</span>
                      <span>dark_border: "#3a3a3a",</span>
                      <span>dark:"#121212",</span>
                    </p>
                </div>
            </div>
            <div className="p-6 rounded-md border mt-4 border-border dark:border-dark_border">
                <p className="text-base font-medium text-muted text-opacity-60" ><span className="font-semibold text-lg text-white">2. Override Theme Colors</span> <br />
                    For change , go to : tailwind.config.ts</p>
                <div className="py-4 px-5 rounded-md bg-black mt-8">
                    <p className="text-sm text-gray-400 flex flex-col gap-2">
                    <span>primary: "#2CDD9B",</span>
                    <span>secondary: "#1DC8CD",</span>
                    </p>
                </div>
            </div>
        </>
    )
}