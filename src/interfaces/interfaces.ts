// Il seguente file contiene tutte le interfacce utilizzate dall'applicativo.

import { StackNavigationProp } from "@react-navigation/stack";

export type BaseScreenProps = {
    navigation: StackNavigationProp<any>;
};

export interface User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    iban: string;
    agentId: number;
}

export interface Agent {
    id: number;
    name: string;
    imgUrl: string;
}

export interface Customer {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface Attachment {
    id: number;
    userId: number;
    name: string;
    filename: string;
}

export interface Ota {
    id: number,
    name: string,
    imgUrl: string
}

export interface Structure {
    id: number;
    imageUrl: string;
    name: string;
    address: string;
}

export interface StructuresDataResponse {
    structures: Structure[],
    user: User
}

export interface Booking {
    id: number;
    structureId: number;
    structure: Structure;

    otaId: number;
    ota: Ota;

    customerId: number;
    customer: Customer;

    from: Date;
    to: Date;
    amount: number;
    guests: number;
}

export interface Structure {
    id: number;
    userId: number;
    imageUrl: string;
    name: string;
    address: string;
    fromDate: Date;
}


export interface Attachment {
    id: number;
    name: string;
    filename: string;
}

export interface Agent {
    imgUrl: string;
    name: string;
}

export interface ProfileData {
    user: {
        firstName: string;
        lastName: string;
        email: string;
        iban: string;
    };
    attachments: Attachment[];
    agent?: Agent;
}


export interface BalanceItem {
    id: number;
    month: string;
    totalAmount: number;
    commission: number;
    netAmount: number;
}

export interface HomeData {
    occupancyRate: number,
    monthlyRevenue: number,
    yearlyRevenue: number,
    futureBookingsRevenue: number
}
