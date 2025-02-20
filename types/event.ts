export interface Address {
    postalCode: string;
    latitude: number;
    longitude: number;
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
}

export interface Location {
    address: Address;
    name: string;
}

export interface Event {
    id: string;
    title: string;
    description: string;
    startTime: string;
    endTime: string;
    location: Location;
    eventType: 'party' | 'cantus' | string;
    eventVisibility: 'public' | 'society';
    organizerName: string;
    societyOrganizerIds: string[];
    price: number;
    maxParticipants: number;
    ticketUrl?: string | null;
    contactEmail?: string | null;
    formId?: string | null;
    signOutAllowed: boolean;
}