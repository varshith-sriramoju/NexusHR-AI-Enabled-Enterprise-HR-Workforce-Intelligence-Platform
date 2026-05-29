import { useState } from "react";
import { predictAttritionRisk } from "../api/aiService";

const AttritionPrediction = () => {

    const [result, setResult] = useState("");

    const handlePrediction = async () => {

        const payload = {
            employeeName: "Rahul",
            attendancePercentage: 58,
            leaveCount: 14,
            performanceScore: 2.1,
            overtimeHours: 72,
            department: "Engineering"
        };

        try {

            const response =
                await predictAttritionRisk(payload);

            setResult(response);

        } catch (error) {

            console.error(error);

            setResult("AI prediction failed");
        }
    };

    return (

        <div>

            <h2>AI Attrition Prediction</h2>

            <button onClick={handlePrediction}>
                Predict Risk
            </button>

            <pre>{result}</pre>

        </div>
    );
};

export default AttritionPrediction;