/// <reference types="react-scripts" />

interface AppState {
    robots: Robot[];
    input: string;
}

interface CardListProps {
    robots: Robot[];
}

interface CardProps {
    robot: Robot;
}

interface SearchBoxProps {
    setInput: (event: Event<HTMLInputElement>) => void;
}
interface Robot {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

interface Geo {
    lat: string;
    lng: string;
}

interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}
