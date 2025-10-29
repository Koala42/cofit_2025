import type { Company, User } from "../types";

const companies: Company[] = [
    { id: 1, name: 'TechNova', description: 'Innovative software solutions' },
    { id: 2, name: 'GreenWorld', description: 'Sustainable products and services' },
    { id: 3, name: 'Healthify', description: 'Digital health and wellness tools' },
    { id: 4, name: 'FinEdge', description: 'Financial consulting and analytics' },
    { id: 5, name: 'AutoNext', description: 'Smart automotive technologies' },
    { id: 6, name: 'EduSphere', description: 'E-learning platform for students' },
    { id: 7, name: 'CloudNet', description: 'Cloud infrastructure and networking' },
    { id: 8, name: 'ByteForge', description: 'Custom software development' },
    { id: 9, name: 'AquaPure', description: 'Water purification systems' },
    { id: 10, name: 'UrbanBuild', description: 'Modern urban construction projects' },
];

const firstNames = [
    'John',
    'Emma',
    'Liam',
    'Olivia',
    'Noah',
    'Ava',
    'Elijah',
    'Sophia',
    'James',
    'Isabella',
    'Lucas',
    'Mia',
    'Henry',
    'Charlotte',
    'Alexander',
    'Amelia',
    'Ethan',
    'Harper',
    'Michael',
    'Evelyn',
];

const lastNames = [
    'Smith',
    'Johnson',
    'Brown',
    'Taylor',
    'Anderson',
    'Thomas',
    'Jackson',
    'White',
    'Harris',
    'Martin',
    'Thompson',
    'Garcia',
    'Martinez',
    'Robinson',
    'Clark',
    'Rodriguez',
    'Lewis',
    'Lee',
    'Walker',
    'Hall',
];

const genders = ['male', 'female', 'non-binary'];

export const users: User[] = Array.from({ length: 10_000 }, (_, i) => {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const gender = genders[Math.floor(Math.random() * genders.length)];
    const company = Math.random() > 0.4 ? companies[Math.floor(Math.random() * companies.length)] : null;
    // Random birth date between 1970 and 2005
    const birthTimestamp = new Date(
        1970 + Math.floor(Math.random() * 35),
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28),
    ).getTime();

    return {
        id: i + 1,
        firstName,
        lastName,
        birthTimestamp,
        gender,
        company,
    };
});
