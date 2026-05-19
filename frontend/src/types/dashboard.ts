export interface Stat {
    label: string;
    value: string;
    change: string;
    trend: string;
}

export interface Department {
    name: string;
    employees: number;
    growth: string;
}

export interface Activity {
    user: string;
    action: string;
    time: string;
}

export interface Alert {
    title: string;
    desc: string;
    type: string;
}