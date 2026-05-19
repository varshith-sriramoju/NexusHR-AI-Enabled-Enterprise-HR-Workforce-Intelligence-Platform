import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface Props {
    title: string;
    value: string;
    change: string;
    icon: any;
    trend: string;
    color: string;
}

export default function StatCard({
                                     title,
                                     value,
                                     change,
                                     icon: Icon,
                                     trend,
                                     color,
                                 }: Props) {
    return (
        <Card className="border-0 bg-white shadow-lg">
            <CardContent className="p-6">
                <div className="flex justify-between">
                    <div>
                        <p className="text-sm text-gray-500">{title}</p>

                        <h2 className="mt-3 text-3xl font-bold">
                            {value}
                        </h2>

                        <div className="mt-2 flex items-center gap-1">
                            {trend === "up" ? (
                                <TrendingUp className="h-4 w-4 text-green-500" />
                            ) : (
                                <TrendingDown className="h-4 w-4 text-red-500" />
                            )}

                            <span className="text-sm font-medium">
                {change}
              </span>
                        </div>
                    </div>

                    <div
                        className={`h-14 w-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white`}
                    >
                        <Icon className="h-6 w-6" />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}