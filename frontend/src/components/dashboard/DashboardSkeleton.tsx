import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardSkeleton() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Skeleton
                    key={idx}
                    className="h-40 rounded-2xl"
                />
            ))}
        </div>
    );
}
