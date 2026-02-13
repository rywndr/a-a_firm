type FooterProps = {
    variant?: "light" | "dark" | "transparent";
    className?: string;
};

export default function Footer({
    variant = "dark",
    className = "",
}: FooterProps) {
    const currentYear = new Date().getFullYear();

    const baseStyles = "text-xs";
    const variantStyles = {
        light: "text-gray-500",
        dark: "text-white/50",
        transparent: "text-white/50",
    };

    return (
        <p className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
            © {currentYear} A&A Counsellors at Law. All rights reserved.
        </p>
    );
}
