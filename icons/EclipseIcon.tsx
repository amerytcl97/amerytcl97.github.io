type EclipseIconProps = {
    className: string;
}

const EclipseIcon = (props: EclipseIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
            viewBox="0 0 512 512"
        >
            <title>Ellipse</title>
            <circle
                cx="256"
                cy="256"
                r="192"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
            />
        </svg>
    );
};

export default EclipseIcon;