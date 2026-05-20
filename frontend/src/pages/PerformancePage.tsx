import { useEffect, useState } from "react";
import { getPerformanceReviews } from "@/services/performanceService";

const PerformancePage = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        loadReviews();
    }, []);

    const loadReviews = async () => {
        try {
            const data = await getPerformanceReviews();
            setReviews(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>

            <h1 className="text-2xl font-bold mb-5">
                Performance Reviews
            </h1>

            <div className="space-y-4">

                {reviews.map((review: any) => (

                    <div
                        key={review.id}
                        className="bg-white p-5 rounded-xl shadow"
                    >
                        <h2>{review.employeeName}</h2>
                        <p>Rating: {review.rating}</p>
                        <p>{review.feedback}</p>
                    </div>

                ))}

            </div>

        </div>
    );
};

export default PerformancePage;