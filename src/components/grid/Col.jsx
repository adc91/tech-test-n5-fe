const Col = (props) => (
    <div className={props.cols} {...props}>
        {props.children}
    </div>
);

export default Col;
