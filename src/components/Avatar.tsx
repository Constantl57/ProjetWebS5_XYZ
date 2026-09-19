type AvatarProps = {
    name: string;
};

function Avatar({ name }: AvatarProps) {
    const initials = name
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase();

    return (
        <span className="avatar" aria-label={`Avatar de ${name}`}>
            {initials}
        </span>
    );
}

export default Avatar;
