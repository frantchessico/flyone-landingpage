const GradientWrapper = ({ children, ...props }) => (
    <div
        {...props}
        className={`relative ${props.className || ""}`}>
        <div className={`absolute m-auto blur-[160px] ${props.wrapperClassName || ""}`}
            style={{
                background:
                    "linear-gradient(180deg, #0a301b 0%, rgba(10, 48, 27, 0.98) 0.01%, rgba(10, 48, 27, 0.2) 100%)",
            }}>
        </div>
        <div className="relative">
            {children}
        </div>
    </div>
);

export default GradientWrapper;
