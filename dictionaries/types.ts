export type Partner = {
    id: string;
    name: string;
    title: string;
    bio: string[];
    education?: string[];
    membership?: string[];
    languages?: string[];
    projects?: {
        [category: string]: string[];
    };
};

export type Dictionary = {
    navigation: {
        home: string;
        about: string;
        partners: string;
        practices: string;
        contact: string;
    };
    home: {
        title: string;
        description: string;
    };
    about: {
        title: string;
        subtitle: string;
        description1: string;
        description2: string;
    };
    partners: {
        title: string;
        subtitle: string;
        readProfile: string;
        backLabel: string;
        educationLabel: string;
        membershipLabel: string;
        languagesLabel: string;
        list: Partner[];
    };
    practices: {
        title: string;
        subtitle: string;
        description: string;
        areasTitle: string;
        areas: string[];
        sectorsTitle: string;
        sectors: string[];
    };
    contact: {
        title: string;
        subtitle: string;
        description: string;
        address: string;
        addressLabel: string;
        phone: string;
        phoneLabel: string;
        email: string;
        emailLabel: string;
        hours: string;
        hoursLabel: string;
        formTitle: string;
        formName: string;
        formEmail: string;
        formPhone: string;
        formSubject: string;
        formMessage: string;
        formSubmit: string;
        mapTitle: string;
    };
};
