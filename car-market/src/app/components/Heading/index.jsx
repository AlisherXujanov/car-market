import "./style.scss";


function Heading(props) {
    // props  =>  properties  =>  это объект
    // props === { title: 'About page' }

    return (
        <h1 id="main-heading" style={{ color: props.color }}>
            { props.children }
        </h1>
    );
}

export default Heading;


