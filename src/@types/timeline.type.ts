export type TimelineType = {
    _id: string;
    memorialId: string;
    createdAt: string;
    updatedAt: string;
    heading: string;
    isActive: boolean;
    timeline: TimelineArray[];
};

export type TimelineArray = {
    _id: string;
    headline: string;
    description: string;
    year: string;
    day: string;
    month: string;
};

export type TimelinePayload = {
    heading?: string;
    isActive?: boolean;
    headline?: string;
    description?: string;
    year: string;
    day?: string;
    month?: string;
}