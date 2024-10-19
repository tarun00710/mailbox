export interface Email {
    id: string;
    from: {
        email: string;
        name: string;
    };
    date: number;
    subject: string;
    short_description: string;
    isRead:boolean,
    isFavourite:boolean
}[]

export type FilterType = "ALL" | "UNREAD" | "READ" | "FAVORITES" 

export type EmailListType = Email[];