import { useState } from "react";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import FilterMessages from "../../components/FilterMessage/FilterMessages";
import MessageCard from "../../components/MessageCard/MessageCard";
import ActiveUserContext from "../../shared/ActiveUserContext";
import './MessagePage.css';
import PostAddIcon from '@material-ui/icons/PostAdd';
import NewMessageModal from "../../components/NewMessageModal/NewMessageModal";

function MessagesPage(props) {
    const activeUser = useContext(ActiveUserContext);
    const { messages, users, comments, addComment, addMessage } = props;
    const [filter, setFilter] = useState("");
    const [filterPriority, setFilterPriority] = useState("");
    const [sortBy, setSortBy] = useState("date");
    const [showModal, setShowModal] = useState(false);

    function filterBy(txt) {
        setFilter(txt);
    }

    function filterByPriority(priority) {
        setFilterPriority(priority);
    }

    function updSortBy(val){
        setSortBy(val);
    }

    function sortByDate(a, b) {
        return new Date(b.date) - new Date(a.date);
    }

    function sortByPriority(a, b) {
        return a.priority - b.priority;
    }

    const messagesView = () => {

        let data = messages.filter(function (msg) {
            const full = (msg.title + " " + msg.details).toLowerCase();
            return full.includes(filter.toLowerCase());
        });

        if (filterPriority !== ""){
            data = data.filter(msg => msg.priority === parseInt(filterPriority));
        }

        if (sortBy === "date") {
            data.sort(sortByDate);
        } else if (sortBy === "priority") {
            data.sort(sortByPriority);
        }
        const dataView = data.map(message =>
            <MessageCard key={message.id} message={message} users={users} addComment={addComment} comments={comments.filter(comment => comment.messageId === message.id)}></MessageCard>);
        return dataView;
    }

    if (!activeUser) {
        return <Redirect to="/login" />
    } else {
        return (
            <div className="p-messages">
                <div className="messages-container">
                    <FilterMessages filterBy={name => filterBy(name)} filterByPriority={priority => filterByPriority(priority) } updSortBy={val => updSortBy(val)}></FilterMessages>
                    <PostAddIcon className="add-msg-img" onClick={() => setShowModal(true)}/>
                </div>
                <dl className="accordion">
                    {messagesView()}
                </dl>
                <NewMessageModal show={showModal} handleClose={() => setShowModal(false)} addMessage={addMessage}/>
            </div>
        )
    }

}

export default MessagesPage;