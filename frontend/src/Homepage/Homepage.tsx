import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropdownButton} from "react-bootstrap";

type Title = {
    title: string;
    list: string[];
};

function Homepage_Dropdown(props: Title) {

    let a = -1;

    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title={props.title} variant="primary">
                <ul>
                    {
                        props.list.map(() => <Dropdown.Item key={a=a+1}>{props.list[a+1]}</Dropdown.Item>)
                    }
                </ul>
            </DropdownButton>
        </div>
    )
}

export default Homepage_Dropdown