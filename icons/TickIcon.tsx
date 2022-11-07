type TickIconProps = {
    className: string;
}

const TickIcon = (props: TickIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
            viewBox="0 0 512 512"
        >
            <title>Checkmark</title>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M416 128L192 384l-96-96"
            />
        </svg>
    );
};

export default TickIcon;