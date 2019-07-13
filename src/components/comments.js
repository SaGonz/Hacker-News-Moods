import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Comments() {
  return (
    <Router>
        <Link to="/comments">{this.props.number} comments</Link>
        <hr />
        <Route path="/comments" component={CommentPage} />
    </Router>
  );
}

function CommentPage({ match }) {
  return (
    <div>
        <h3>
            <ul>
                <li>
                    <ul>
                        <li>Username</li>
                        <li>Comment's age</li>
                    </ul>
                    <p>Comment</p>
                    <ul>
                        <li><a href="">Reply</a></li>
                        <li><a href="">Upvote</a></li>
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>Username</li>
                        <li>Comment's age</li>
                    </ul>
                </li>
            </ul>
          
      </h3>
      <div>
          <p>Comment body</p>
      </div>
    </div>
  );
}

export default Comments;