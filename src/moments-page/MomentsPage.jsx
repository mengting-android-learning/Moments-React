import React,{useEffect, useState} from "react";
import { getTweets } from "./services/getTweets";
import { getUser } from "./services/getUser";
import TweetItem from "./components/TweetItem";
import "./MomentsPage.style.scss"

const Moments = () =>{

    const [tweets,setTweets] = useState([]);
    const [user,setUser] = useState();

    useEffect(() => {
        getTweets().then(tweets => {
            setTweets(tweets);
        });
        getUser().then(user => {
            setUser(user);

        });
      }, []);


    return <div className="moments-page">
                <div className="user-info">
                    <img src={user?.profileImage} className="user-profile"/>
                    <div className="user-avatar-nick">
                        <div>{user?.nick}</div> 
                        <img src={user?.avatar} className="user-avatar"/>  
                    </div>
                </div>
                <div className="tweets">
                    {
                        tweets?.map((tweet)=>(
                            TweetItem(tweet)
                        ))
                    }
                </div>
        </div>
};

export default Moments;