import { users } from '../data/users';

export function Header() {
    const allUsers = users.length;

    const admins = users.filter(user => {
        if (user.isAdmin) return user;
    }).length;

    const students = users.filter(user => {
        if (!user.isAdmin) return user;
    }).length;

    return (
        <header>
            <ul>
                {users.map((u, i) => (
                    <li key={i}>{u.name}</li>
                ))}
            </ul>
            <h5>Всего на потоке людей: {allUsers}</h5>
            <h5>Всего на потоке учителей: {admins}</h5>
            <h5>Всего на потоке учеников: {students}</h5>
        </header>
    );
}
