export const Container = ({ className, children }) => (
    <div className={`container ${className ? className : ""}`}>{children}</div>
);

export const ContainerFluid = ({ className, children }) => (
    <div className={`container-fluid ${className ? className : ""}`}>
        {children}
    </div>
);
