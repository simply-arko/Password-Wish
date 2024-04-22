import React from "react";
import { Slider } from "@/components/ui/slider";

interface sliderProps {
    count: number;
}

const LengthSlider: React.FC<sliderProps> = ({ count }) => {
    return (
        <div className="border border-solid border-slate-600 rounded-md p-4 mt-4">
            <div className="flex flex-row justify-between mb-3">
                <h3 className="font-semibold">Length</h3>
                <h3>{count}</h3>
            </div>
            <Slider defaultValue={[33]} max={100} step={1} />
        </div>
    );
};

export default LengthSlider;
