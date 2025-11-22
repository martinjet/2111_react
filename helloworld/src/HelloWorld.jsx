// function HelloWorld(props) {
function HelloWorld({text, name}) {

    //const text = props.text;
    //const name = props.name;
    
    //const {text, name} = props;

    return <h1>{text} světe! {name}</h1>
}

export default HelloWorld;