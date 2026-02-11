export type Partner = {
    id: string;
    name: string;
    title: string;
    bio: string[];
    education?: string[];
    membership?: string[];
    languages?: string[];
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
        sectionLabel: string;
        firmName: string;
        firmNameShort: string;
        paragraphs: {
            text: string;
            hasFirmName: boolean;
            hasFirmNameInText?: boolean;
        }[];
        tagline: string;
        taglineSubtext: string;
    };
    partners: {
        title: string;
        subtitle: string;
        readProfile: string;
        backLabel: string;
        educationLabel: string;
        membershipLabel: string;
        languagesLabel: string;
        sectionTitle: string;
        list: Partner[];
    };
    practices: {
        title: string;
        subtitle: string;
        headerText: string;
        sectors: {
            label: string;
            title: string;
            description: string;
            list: {
                name: string;
                image: string;
            }[];
        };
        litigation: {
            title: string;
            areas: {
                name: string;
                description: string;
            }[];
        };
        corporate: {
            title: string;
            areas: {
                name: string;
                description: string;
            }[];
        };
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
    cta: {
        title: string;
        description: string;
        button: string;
    };
};
