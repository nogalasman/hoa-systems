import { useContext } from "react";
import { Redirect } from "react-router-dom";
import ActiveUserContext from "../../shared/ActiveUserContext";

function MessagesPage(props) {
    const activeUser = useContext(ActiveUserContext);
    const { messages } = props;

    if (!activeUser) {
        return <Redirect to="/login"/>
    } else {
        return (
            <div className="p-messages">
                MessagesPage
            </div>
            )
    }

}

export default MessagesPage;