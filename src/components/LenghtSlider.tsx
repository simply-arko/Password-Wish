import React from "react";
import { SetStateAction } from "react";
import { Slider } from "@/components/ui/slider";

interface sliderProps {
    length: number;
    setlength: React.Dispatch<SetStateAction<number>>;
}

const LengthSlider: React.FC<sliderProps> = ({ length, setlength }) => {
    return (
        <div className="border border-solid border-slate-600 rounded-md p-4 mt-4">
            <div className="flex flex-row justify-between mb-3">
                <h3 className="font-semibold">Length</h3>
                <h3>{length}</h3>
            </div>
            <Slider
                defaultValue={[length]}
                min={8}
                max={30}
                step={1}
                onValueChange={(e) => setlength(e[0])}
            />
        </div>
    );
};

export default LengthSlider;
