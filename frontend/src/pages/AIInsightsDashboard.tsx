import { useEffect, useState } from "react";

import axios from "axios";

const AIInsightsDashboard = () => {
    const [recommendations,
        setRecommendations]
        = useState<string[]>([]);

    const [skillData, setSkillData]
        = useState<any>(null);

    const [engagementScore,
        setEngagementScore]
        = useState<number>(0);

    const fetchSkillAnalysis = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8080/api/ai/skills/1/BACKEND_DEVELOPER"
            );

            console.log(response.data);

            setSkillData(response.data);

        } catch(error) {

            console.log(error);
        }
    };
    const fetchRecommendations = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8080/api/ai/recommendations",
                {
                    params: {
                        skills:
                        skillData?.missingSkills
                    }
                }
            );

            setRecommendations(response.data);

        } catch(error) {

            console.log(error);
        }
    };

    const fetchEngagementScore = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8080/api/ai/engagement/score",
                {
                    params: {
                        attendance: 90,
                        performance: 80,
                        feedback: 70,
                        taskCompletion: 85
                    }
                }
            );

            console.log(response.data);

            setEngagementScore(response.data);

        } catch(error) {

            console.log(error);
        }
    };

    useEffect(() => {

        fetchSkillAnalysis();

        fetchEngagementScore();

    }, []);
    useEffect(() => {

        if(skillData) {

            fetchRecommendations();
        }

    }, [skillData]);

    const getLevel = (score: number) => {

        if(score >= 85)
            return "HIGH";

        if(score >= 60)
            return "MEDIUM";

        return "LOW";
    };

    if(!skillData) {

        return <h1>Loading AI Insights...</h1>;
    }

    return (


        <div className="p-10 bg-gray-100 min-h-screen">

            <h1 className="text-4xl font-bold mb-8">

                AI Insights Dashboard

            </h1>

            <div
                className="
                bg-white
                rounded-xl
                shadow-md
                p-6
                w-[500px]
                "
            >

                <h2 className="text-2xl font-semibold">

                    Skill Match:
                    {skillData.skillMatchPercentage}%

                </h2>

                <h3 className="mt-6 text-xl font-semibold">

                    Missing Skills

                </h3>

                <ul className="mt-4 space-y-2">

                    {skillData.missingSkills.map(
                        (skill: string) => (

                            <li
                                key={skill}

                                className="
                                bg-red-100
                                text-red-700
                                px-4
                                py-2
                                rounded-lg
                                "
                            >
                                {skill}
                            </li>
                        )
                    )}

                </ul>

                <h2 className="text-2xl font-semibold mt-6">

                    Engagement Score:
                    {engagementScore}

                </h2>

                <h2 className="text-xl mt-4">

                    Engagement Level:
                    {getLevel(engagementScore)}

                </h2>
                <h3 className="mt-6 text-xl font-semibold">

                    Recommendations

                </h3>

                <ul className="mt-4 space-y-2">

                    {recommendations.map((item) => (

                        <li
                            key={item}

                            className="
            bg-blue-100
            text-blue-700
            px-4
            py-2
            rounded-lg
            "
                        >
                            {item}
                        </li>
                    ))}

                </ul>

            </div>

        </div>
    );
};

export default AIInsightsDashboard;