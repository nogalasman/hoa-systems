import { useState } from "react";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import FilterMessages from "../../components/FilterMessage/FilterMessages";
import MessageCard from "../../components/MessageCard.js/MessageCard";
import ActiveUserContext from "../../shared/ActiveUserContext";
import './MessagePage.css';

function MessagesPage(props) {
    const activeUser = useContext(ActiveUserContext);
    const { messages, users, comments, addComment } = props;
    const [filter, setFilter] = useState("");
    const [filterPriority, setFilterPriority] = useState("");
    const [sortBy, setSortBy] = useState("date");

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
                <FilterMessages filterBy={name => filterBy(name)} filterByPriority={priority => filterByPriority(priority) } updSortBy={val => updSortBy(val)}></FilterMessages>
                <dl className="accordion">
                    {messagesView()}
                </dl>
            </div>
        )
    }

}

export default MessagesPage;